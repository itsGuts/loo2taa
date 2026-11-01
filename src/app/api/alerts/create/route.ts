import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

export const dynamic = 'force-dynamic';

// Basic in-memory rate limiting: max 5 alerts per IP/hour
const ipRateMap: Map<string, { count: number; expiresAt: number }> = new Map();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = ipRateMap.get(ip);
  if (!entry || entry.expiresAt < now) {
    ipRateMap.set(ip, { count: 1, expiresAt: now + 60 * 60 * 1000 });
    return false;
  }
  if (entry.count >= 5) {
    return true;
  }
  entry.count++;
  return false;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0] || '127.0.0.1';
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'لقد تجاوزت الحد المسموح به من التنبيهات (٥ تنبيهات في الساعة). يرجى المحاولة لاحقاً.' },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { asin, productId, targetPrice, email, telegramChatId } = body;

    if (!asin && !productId) {
      return NextResponse.json({ error: 'كود المنتج غير محدد' }, { status: 400 });
    }

    const numericTarget = Number(targetPrice);
    if (isNaN(numericTarget) || numericTarget <= 0) {
      return NextResponse.json({ error: 'يرجى تحديد سعر مستهدف صحيح' }, { status: 400 });
    }

    if (!email && !telegramChatId) {
      return NextResponse.json(
        { error: 'يرجى إدخال بريد إلكتروني أو معرف تليجرام لاستلام التنبيه' },
        { status: 400 }
      );
    }

    if (email && !EMAIL_REGEX.test(email)) {
      return NextResponse.json({ error: 'صيغة البريد الإلكتروني غير صحيحة' }, { status: 400 });
    }

    // Verify product exists in DB
    const product = await db.getProductByAsin(asin || productId);
    if (!product) {
      return NextResponse.json({ error: 'المنتج غير موجود في قاعدة بيانات لقطة' }, { status: 404 });
    }

    // Create the alert
    const alert = await db.createAlert(
      product.id,
      product.asin,
      numericTarget,
      email || null,
      telegramChatId || null
    );

    return NextResponse.json({
      success: true,
      alertId: alert.id,
      message: `تم تفعيل التنبيه بنجاح! سنقوم بإرسال إشعار فور هبوط السعر إلى ${numericTarget.toLocaleString('ar-EG')} ج.م أو أقل.`,
    });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error('[API/Alerts/Create] Error:', msg);
    return NextResponse.json(
      { error: 'حدث خطأ أثناء حفظ التنبيه، يرجى المحاولة مرة أخرى.' },
      { status: 500 }
    );
  }
}
