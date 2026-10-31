/** Sharing utilities for LO2TAA products */
import { Product } from './types';

/** Determine if a deal is genuine based on price history */
export function getDealVerdict(product: Product): {
  type: 'genuine' | 'fake' | 'neutral';
  label: string;
  labelShort: string;
  color: string;
  bgColor: string;
  borderColor: string;
} {
  const history = product.price_history;
  if (!history || history.length < 3) {
    return {
      type: 'neutral',
      label: 'لا يوجد بيانات كافية للتحقق',
      labelShort: 'قيد التتبع',
      color: '#94a3b8',
      bgColor: 'rgba(148,163,184,0.1)',
      borderColor: 'rgba(148,163,184,0.3)',
    };
  }

  // Calculate average of middle price points (exclude first and last)
  const middlePrices = history.slice(1, -1).map((p) => p.price);
  const avg = middlePrices.reduce((a, b) => a + b, 0) / middlePrices.length;

  // Check if current price is genuinely below average (real deal)
  const currentPrice = product.price;
  const percentBelowAvg = ((avg - currentPrice) / avg) * 100;

  // Check if previous_price was artificially inflated (fake deal pattern)
  // A fake deal is when previous_price is much higher than the historical average
  const prevInflation = ((product.previous_price - avg) / avg) * 100;

  if (percentBelowAvg >= 10) {
    return {
      type: 'genuine',
      label: `لقطة حقيقية! أقل من متوسط سعره بـ ${Math.round(percentBelowAvg)}%`,
      labelShort: 'لقطة حقيقية ✅',
      color: '#00ff9d',
      bgColor: 'rgba(0,255,157,0.1)',
      borderColor: 'rgba(0,255,157,0.3)',
    };
  }

  if (prevInflation >= 20 && percentBelowAvg < 5) {
    return {
      type: 'fake',
      label: 'تنبيه: السعر القديم كان مرفوع قبل الخصم',
      labelShort: 'خصم وهمي ⚠️',
      color: '#ff4444',
      bgColor: 'rgba(255,68,68,0.1)',
      borderColor: 'rgba(255,68,68,0.3)',
    };
  }

  return {
    type: 'genuine',
    label: 'سعر مقبول ومتوافق مع التاريخ',
    labelShort: 'سعر جيد',
    color: '#00f0ff',
    bgColor: 'rgba(0,240,255,0.1)',
    borderColor: 'rgba(0,240,255,0.3)',
  };
}

/** Generate a WhatsApp share message for a product */
export function getWhatsAppShareUrl(product: Product): string {
  const savings = product.savings > 0 ? `\n📉 وفر: ${product.savings.toLocaleString('ar-EG')} ج.م` : '';
  const recordLow = product.is_record_low ? '\n⚡ أقل سعر مسجل في مصر!' : '';

  const text = `🔥 لقطة جيمنج من LO2TAA!

🎮 ${product.display_title}
💰 السعر: ${product.price.toLocaleString('ar-EG')} ج.م${savings}${recordLow}

🔗 شوف سجل السعر الكامل:
https://loo2taa.vercel.app/products/${product.asin || product.id}`;

  return `https://wa.me/?text=${encodeURIComponent(text)}`;
}

/** Generate a ready-to-copy Telegram post for a product */
export function getTelegramPost(product: Product): string {
  const verdict = getDealVerdict(product);
  const verdictEmoji = verdict.type === 'genuine' ? '✅' : verdict.type === 'fake' ? '⚠️' : '🔍';
  const savings = product.savings > 0
    ? `📉 كان: ${product.previous_price.toLocaleString('ar-EG')} ج.م (وفر ${product.savings.toLocaleString('ar-EG')} ج.م)`
    : '';
  const discount = product.discount_percent > 0
    ? `${verdictEmoji} خصم ${product.discount_percent}% — ${verdict.labelShort}`
    : '';
  const recordLow = product.is_record_low ? '⚡ أقل سعر مسجل في مصر!\n' : '';

  return `🔥 لقطة اليوم من LO2TAA!

🎮 ${product.display_title}
💰 السعر الآن: ${product.price.toLocaleString('ar-EG')} ج.م
${savings}
${discount}
${recordLow}
🛒 اشتري دلوقتي:
${product.url}

📊 سجل السعر والتفاصيل:
https://loo2taa.vercel.app/products/${product.asin || product.id}

@lo2taa | رادار صفقات الجيمنج 🎯`.trim();
}
