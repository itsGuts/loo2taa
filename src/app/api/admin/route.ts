import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { getPriceProvider } from '@/lib/providers';

export const dynamic = 'force-dynamic';

function extractAsinFromUrl(input: string): string | null {
  if (!input) return null;
  const trimmed = input.trim();
  if (/^B[A-Z0-9]{9}$/i.test(trimmed)) {
    return trimmed.toUpperCase();
  }
  const match =
    trimmed.match(/(?:dp|gp\/product)\/([A-Z0-9]{10})/i) ||
    trimmed.match(/([B][A-Z0-9]{9})/i);
  return match ? match[1].toUpperCase() : null;
}

function isAuthorized(request: NextRequest, bodyPassword?: string): boolean {
  const adminSecret = process.env.ADMIN_PASSWORD || 'lo2taa-admin-secret-2026';
  const authHeader = request.headers.get('authorization');

  if (authHeader && authHeader.startsWith('Bearer ')) {
    const token = authHeader.replace('Bearer ', '').trim();
    if (token === adminSecret) return true;
  }

  if (bodyPassword && bodyPassword.trim() === adminSecret) {
    return true;
  }

  return false;
}

export async function GET(request: NextRequest) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: 'غير مصرح بالدخول (Unauthorized)' }, { status: 401 });
  }

  try {
    const products = await db.getAllProducts();
    const alertsCount = await db.getActiveAlertsCount();
    const cronLogs = await db.getCronLogs(15);

    const stats = {
      totalProducts: products.length,
      realDealsCount: products.filter((p) => p.metrics.verdict.type === 'real_deal').length,
      recordLowCount: products.filter((p) => p.metrics.is_record_low).length,
      activeAlertsCount: alertsCount,
      lastRefresh: cronLogs[0]?.created_at || null,
    };

    return NextResponse.json({
      ok: true,
      stats,
      cronLogs,
      products: products.map((p) => ({
        id: p.id,
        asin: p.asin,
        title: p.display_title || p.title,
        brand: p.brand,
        category: p.category_ar,
        price: p.price,
        reference_price: p.metrics.reference_price,
        discount_percent: p.metrics.real_discount_percent,
        verdict: p.metrics.verdict.labelShort,
        is_pinned: p.is_pinned,
        image_url: p.image_url,
        updated_at: p.updated_at,
      })),
    });
  } catch (err: any) {
    console.error('[Admin API] GET error:', err);
    return NextResponse.json({ error: err.message || 'Server error' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  let body: any = {};
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  const { action, password } = body;

  // Simple password verification endpoint
  if (action === 'verify_password') {
    const adminSecret = process.env.ADMIN_PASSWORD || 'lo2taa-admin-secret-2026';
    if (password && password.trim() === adminSecret) {
      return NextResponse.json({ ok: true });
    }
    return NextResponse.json({ ok: false, error: 'كلمة المرور غير صحيحة' }, { status: 401 });
  }

  if (!isAuthorized(request, password)) {
    return NextResponse.json({ error: 'غير مصرح بالدخول (Unauthorized)' }, { status: 401 });
  }

  try {
    if (action === 'toggle_pin') {
      const { productId } = body;
      if (!productId) return NextResponse.json({ error: 'productId is required' }, { status: 400 });
      const isPinned = await db.togglePinProduct(productId);
      return NextResponse.json({ ok: true, is_pinned: isPinned });
    }

    if (action === 'delete_product') {
      const { productId } = body;
      if (!productId) return NextResponse.json({ error: 'productId is required' }, { status: 400 });
      await db.deleteProduct(productId);
      return NextResponse.json({ ok: true });
    }

    if (action === 'add_product') {
      const { urlOrAsin } = body;
      if (!urlOrAsin) return NextResponse.json({ error: 'urlOrAsin is required' }, { status: 400 });

      const asin = extractAsinFromUrl(urlOrAsin);
      if (!asin) {
        return NextResponse.json({ error: 'تعذر استخراج كود ASIN صالح من الرابط' }, { status: 400 });
      }

      const provider = getPriceProvider();
      const freshData = await provider.fetchProduct(asin);

      if (!freshData) {
        return NextResponse.json({ error: 'تعذر جلب بيانات المنتج من المتجر حالياً، يرجى المحاولة لاحقاً' }, { status: 404 });
      }

      const saved = await db.upsertProduct({
        asin: freshData.asin,
        title: freshData.title,
        display_title: freshData.displayTitle || freshData.title,
        brand: freshData.brand,
        price: freshData.price,
        list_price: freshData.listPrice,
        image_url: freshData.imageUrl,
        url: freshData.url,
        seller: freshData.seller,
        in_stock: freshData.inStock,
      });

      await db.addPricePoint(
        saved.id,
        saved.asin,
        saved.price,
        saved.list_price,
        saved.seller
      );

      return NextResponse.json({ ok: true, product: saved });
    }

    if (action === 'trigger_refresh') {
      // Internal call to refresh-prices cron route
      const cronSecret = process.env.CRON_SECRET;
      const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
      const cronRes = await fetch(`${siteUrl}/api/cron/refresh-prices`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${cronSecret}`,
        },
      });

      if (!cronRes.ok) {
        const errorText = await cronRes.text();
        return NextResponse.json({ error: `فشل تشغيل التحديث: ${errorText}` }, { status: 500 });
      }

      const cronData = await cronRes.json();
      return NextResponse.json({ ok: true, result: cronData });
    }

    return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
  } catch (err: any) {
    console.error('[Admin API] POST error:', err);
    return NextResponse.json({ error: err.message || 'Server error' }, { status: 500 });
  }
}
