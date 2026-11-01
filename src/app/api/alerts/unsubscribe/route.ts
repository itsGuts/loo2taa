import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const token = searchParams.get('token');

  if (!token) {
    return new NextResponse(
      `<!DOCTYPE html>
      <html dir="rtl" lang="ar">
        <head><meta charset="utf-8"><title>رابط غير صالح - LO2TAA</title></head>
        <body style="background:#070a12; color:#fff; font-family:sans-serif; text-align:center; padding:50px;">
          <h2 style="color:#f87171;">رابط إلغاء الاشتراك غير صالح</h2>
          <p><a href="/" style="color:#00f0ff;">العودة للرئيسية</a></p>
        </body>
      </html>`,
      { headers: { 'Content-Type': 'text/html; charset=utf-8' }, status: 400 }
    );
  }

  const unsubscribed = await db.unsubscribeAlert(token);

  return new NextResponse(
    `<!DOCTYPE html>
    <html dir="rtl" lang="ar">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>تم إلغاء التنبيه - LO2TAA</title>
      </head>
      <body style="background-color: #070a12; color: #ffffff; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; display: flex; align-items: center; justify-content: center; min-height: 100vh; margin: 0; padding: 20px;">
        <div style="background-color: #0c1322; border: 1px solid rgba(0, 240, 255, 0.2); border-radius: 20px; padding: 32px; max-width: 450px; text-align: center; box-shadow: 0 20px 40px rgba(0,0,0,0.5);">
          <div style="width: 50px; height: 50px; background: rgba(0, 255, 157, 0.1); border: 1px solid rgba(0, 255, 157, 0.3); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 16px auto; font-size: 24px; color: #00ff9d;">
            ✓
          </div>
          <h1 style="color: #ffffff; font-size: 20px; margin: 0 0 10px 0;">تم إلغاء الاشتراك في التنبيه بنجاح</h1>
          <p style="color: #94a3b8; font-size: 13px; line-height: 1.6; margin-bottom: 24px;">
            تم تعطيل هذا التنبيه ولن تتلقى أي إشعارات بالبريد أو تليجرام بخصوص هذا المنتج مجدداً. يمكنك دائماً تفعيل تنبيهات جديدة في أي وقت.
          </p>
          <a href="/" style="display: inline-block; background-color: #00f0ff; color: #05070c; font-weight: bold; text-decoration: none; padding: 12px 24px; border-radius: 12px; font-size: 13px;">
            العودة لصفقات لقطة
          </a>
        </div>
      </body>
    </html>`,
    { headers: { 'Content-Type': 'text/html; charset=utf-8' }, status: 200 }
  );
}
