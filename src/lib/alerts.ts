/**
 * LO2TAA (لقطة) - Price Alerts Notification Dispatcher
 * Dispatches price drop notifications via Resend (Email) and Telegram Bot
 */

export interface PriceAlertPayload {
  email?: string | null;
  telegramChatId?: string | null;
  productTitle: string;
  asin: string;
  targetPrice: number;
  currentPrice: number;
  previousPrice: number;
  productUrl: string;
  imageUrl?: string;
  unsubscribeToken: string;
}

export async function sendPriceAlertNotification(payload: PriceAlertPayload): Promise<boolean> {
  const {
    email,
    telegramChatId,
    productTitle,
    asin,
    targetPrice,
    currentPrice,
    previousPrice,
    productUrl,
    imageUrl,
    unsubscribeToken,
  } = payload;

  const siteOrigin = process.env.NEXT_PUBLIC_SITE_URL || 'https://loo2taa.vercel.app';
  const unsubscribeUrl = `${siteOrigin}/api/alerts/unsubscribe?token=${unsubscribeToken}`;
  const savings = Math.max(0, previousPrice - currentPrice);

  let success = false;

  // 1. Send via Resend (Email) if configured
  const resendApiKey = process.env.RESEND_API_KEY;
  if (email && resendApiKey) {
    try {
      const emailHtml = `
        <div dir="rtl" style="font-family: Arial, sans-serif; background-color: #070a12; color: #ffffff; padding: 24px; border-radius: 16px; max-width: 600px; margin: auto; border: 1px solid rgba(0,240,255,0.2);">
          <div style="text-align: center; margin-bottom: 20px;">
            <h1 style="color: #00f0ff; margin: 0; font-size: 24px;">⚡ لقطة! هبط سعر المنتج الذي تتابعه</h1>
            <p style="color: #94a3b8; font-size: 13px;">تنبيه هبوط الأسعار التلقائي من رادار لقطة - مصر</p>
          </div>

          <div style="background-color: #0c1322; border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; padding: 16px; margin-bottom: 20px;">
            ${imageUrl ? `<div style="text-align: center; margin-bottom: 12px;"><img src="${imageUrl}" alt="${productTitle}" style="max-height: 180px; max-width: 100%; border-radius: 8px; object-contain;" /></div>` : ''}
            <h2 style="font-size: 16px; margin: 0 0 10px 0; color: #ffffff;">${productTitle}</h2>
            
            <div style="margin-bottom: 12px;">
              <span style="font-size: 26px; font-weight: bold; color: #00ff9d;">${currentPrice.toLocaleString('ar-EG')} ج.م</span>
              ${previousPrice > currentPrice ? `<span style="text-decoration: line-through; color: #94a3b8; margin-right: 8px; font-size: 14px;">السابق: ${previousPrice.toLocaleString('ar-EG')} ج.م</span>` : ''}
            </div>

            <div style="background: rgba(0,255,157,0.1); border: 1px solid rgba(0,255,157,0.3); padding: 8px 12px; border-radius: 8px; font-size: 13px; color: #00ff9d; margin-bottom: 15px;">
              🎯 وصل السعر إلى هدفك المحدد (${targetPrice.toLocaleString('ar-EG')} ج.م) بتوفير صافي ${savings.toLocaleString('ar-EG')} ج.م!
            </div>

            <a href="${productUrl}" target="_blank" style="display: block; text-align: center; background-color: #00f0ff; color: #05070c; font-weight: bold; padding: 12px 20px; border-radius: 10px; text-decoration: none; font-size: 14px;">
              اقتنص اللقطة الآن قبل نفاذ الكمية ↗
            </a>
          </div>

          <div style="text-align: center; font-size: 11px; color: #64748b; border-top: 1px solid rgba(255,255,255,0.05); padding-top: 15px;">
            <span>أنت تتلقى هذا الإشعار لأنك اشتركت في تنبيه هذا المنتج على لقطة.</span><br />
            <a href="${unsubscribeUrl}" style="color: #f87171; text-decoration: underline; margin-top: 5px; display: inline-block;">
              إلغاء الاشتراك في هذا التنبيه بنقرة واحدة
            </a>
          </div>
        </div>
      `;

      const fromEmail = process.env.ALERT_FROM_EMAIL || 'alerts@lo2taa.com';
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: `LO2TAA Radar <${fromEmail}>`,
          to: [email],
          subject: `⚡ هبوط سعر: ${productTitle.slice(0, 45)}... أصبح ${currentPrice} ج.م`,
          html: emailHtml,
        }),
      });

      if (res.ok) success = true;
    } catch (err) {
      console.error('[Alerts] Failed to send Resend email:', err);
    }
  }

  // 2. Send via Telegram Bot if configured
  const telegramBotToken = process.env.TELEGRAM_BOT_TOKEN;
  if (telegramChatId && telegramBotToken) {
    try {
      const tgText = `⚡ *لقطة! هبوط سعر منتج تتابعه* ⚡\n\n` +
        `📦 *${productTitle.slice(0, 70)}*\n` +
        `💵 *السعر الحالي:* ${currentPrice.toLocaleString('ar-EG')} ج.م\n` +
        `🎯 *هدفك المحدد:* ${targetPrice.toLocaleString('ar-EG')} ج.م\n` +
        `🏷️ *التوفير:* ${savings.toLocaleString('ar-EG')} ج.م\n\n` +
        `🛒 [اقتنص اللقطة من المتجر الآن](${productUrl})\n` +
        `🔕 [إلغاء التنبيه](${unsubscribeUrl})`;

      const res = await fetch(`https://api.telegram.org/bot${telegramBotToken}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: telegramChatId,
          text: tgText,
          parse_mode: 'Markdown',
        }),
      });

      if (res.ok) success = true;
    } catch (err) {
      console.error('[Alerts] Failed to send Telegram message:', err);
    }
  }

  // Log in server console for local testing
  console.log(`[Alerts Dispatch] Notification sent for ${asin} to ${email || telegramChatId}: current price ${currentPrice} <= target ${targetPrice}`);
  return success;
}
