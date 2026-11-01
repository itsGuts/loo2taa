import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { getPriceProvider } from '@/lib/providers';

// Prevent Vercel edge/ISR caching for cron endpoint
export const dynamic = 'force-dynamic';
export const maxDuration = 60; // Max execution time for Vercel Hobby/Pro

export async function GET(request: NextRequest) {
  const startTime = Date.now();
  const { searchParams } = new URL(request.url);

  // 1. Authorization check
  const authHeader = request.headers.get('authorization');
  const cronSecret = process.env.CRON_SECRET;
  const queryKey = searchParams.get('key');

  const isAuthorized =
    !cronSecret || // allowed in local development if CRON_SECRET is not set
    authHeader === `Bearer ${cronSecret}` ||
    queryKey === cronSecret;

  if (!isAuthorized) {
    return NextResponse.json({ error: 'Unauthorized: Invalid CRON_SECRET' }, { status: 401 });
  }

  const provider = getPriceProvider();
  let productsChecked = 0;
  let pricesUpdated = 0;
  let alertsTriggered = 0;
  const errors: string[] = [];

  try {
    const allProducts = await db.getAllProducts();
    const batchSize = Number(searchParams.get('limit')) || 15;

    // Pick products that haven't been checked recently
    const sorted = [...allProducts].sort(
      (a, b) => new Date(a.updated_at || 0).getTime() - new Date(b.updated_at || 0).getTime()
    );
    const targetBatch = sorted.slice(0, batchSize);

    for (const prod of targetBatch) {
      productsChecked++;
      try {
        const fetched = await provider.fetchProduct(prod.asin);
        if (fetched && fetched.price > 0) {
          // Record price history observation point
          await db.addPricePoint(
            prod.id,
            prod.asin,
            fetched.price,
            fetched.listPrice || fetched.price,
            fetched.seller
          );
          pricesUpdated++;

          // Check if any alerts triggered
          const triggered = await db.getTriggerableAlerts(prod.id, fetched.price);
          if (triggered.length > 0) {
            alertsTriggered += triggered.length;
            console.log(`[Cron] Triggered ${triggered.length} alert(s) for ${prod.asin} at ${fetched.price} EGP`);
          }
        }
      } catch (err: unknown) {
        const msg = err instanceof Error ? err.message : String(err);
        errors.push(`${prod.asin}: ${msg}`);
      }
    }

    const durationMs = Date.now() - startTime;
    const status = errors.length === 0 ? 'success' : pricesUpdated > 0 ? 'partial' : 'error';

    // Log cron execution to database
    await db.logCronJob({
      job_name: 'refresh-prices',
      status,
      products_checked: productsChecked,
      prices_updated: pricesUpdated,
      alerts_triggered: alertsTriggered,
      duration_ms: durationMs,
      error_message: errors.length > 0 ? errors.join('; ') : null,
    });

    return NextResponse.json({
      success: true,
      provider: provider.name,
      status,
      products_checked: productsChecked,
      prices_updated: pricesUpdated,
      alerts_triggered: alertsTriggered,
      duration_ms: durationMs,
      errors: errors.length > 0 ? errors : undefined,
    });
  } catch (fatalErr: unknown) {
    const msg = fatalErr instanceof Error ? fatalErr.message : String(fatalErr);
    const durationMs = Date.now() - startTime;

    await db.logCronJob({
      job_name: 'refresh-prices',
      status: 'error',
      products_checked: productsChecked,
      prices_updated: pricesUpdated,
      alerts_triggered: alertsTriggered,
      duration_ms: durationMs,
      error_message: msg,
    });

    return NextResponse.json(
      {
        success: false,
        error: msg,
        duration_ms: durationMs,
      },
      { status: 500 }
    );
  }
}
