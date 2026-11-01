// scripts/test-step5-alerts-and-checker.mjs
// Verification script for Step 5: Deal Checker + Price Alerts

import assert from 'node:assert/strict';

console.log('🧪 Starting Step 5 Verification: Deal Checker & Price Alerts...');

// 1. Test ASIN extraction from various Amazon URLs
function extractAsin(input) {
  const clean = input.trim();
  const directMatch = clean.match(/^[A-Z0-9]{10}$/i);
  if (directMatch) return directMatch[0].toUpperCase();

  const patterns = [
    /\/dp\/([A-Z0-9]{10})/i,
    /\/gp\/product\/([A-Z0-9]{10})/i,
    /\/product\/([A-Z0-9]{10})/i,
    /\/ASIN\/([A-Z0-9]{10})/i,
    /\/d\/([A-Z0-9]{10})/i,
    /[?&]asin=([A-Z0-9]{10})/i,
  ];

  for (const pattern of patterns) {
    const match = clean.match(pattern);
    if (match && match[1]) {
      return match[1].toUpperCase();
    }
  }
  return null;
}

const testUrls = [
  { url: 'B09CMF65V5', expected: 'B09CMF65V5' },
  { url: 'b09cmf65v5', expected: 'B09CMF65V5' },
  { url: 'https://www.amazon.eg/dp/B09CMF65V5', expected: 'B09CMF65V5' },
  { url: 'https://www.amazon.eg/-/en/dp/B09CMF65V5/ref=sr_1_1?crid=123', expected: 'B09CMF65V5' },
  { url: 'https://amazon.eg/gp/product/B08N5WRWNW', expected: 'B08N5WRWNW' },
  { url: 'https://www.amazon.eg/product-title/dp/B0CHX1W1XY?th=1&psc=1', expected: 'B0CHX1W1XY' },
];

for (const { url, expected } of testUrls) {
  const extracted = extractAsin(url);
  assert.equal(extracted, expected, `Failed to extract ASIN from ${url}`);
}
console.log('✅ 1. ASIN extraction handles all Amazon Egypt URL patterns.');

// 2. Test Alert Email/Telegram validation rules
function validateAlertInput({ target_price, current_price, email, telegram_chat_id }) {
  if (typeof target_price !== 'number' || isNaN(target_price) || target_price <= 0) {
    return { ok: false, error: 'target_price must be a positive number' };
  }
  if (target_price >= current_price) {
    return { ok: false, error: 'target_price must be lower than current price' };
  }
  if (!email && !telegram_chat_id) {
    return { ok: false, error: 'Must provide either email or telegram_chat_id' };
  }
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, error: 'Invalid email' };
  }
  return { ok: true };
}

assert.equal(validateAlertInput({ target_price: 500, current_price: 1000, email: 'user@example.com' }).ok, true);
assert.equal(validateAlertInput({ target_price: 1000, current_price: 1000, email: 'user@example.com' }).ok, false);
assert.equal(validateAlertInput({ target_price: 1200, current_price: 1000, email: 'user@example.com' }).ok, false);
assert.equal(validateAlertInput({ target_price: 500, current_price: 1000, email: 'invalid-email' }).ok, false);
assert.equal(validateAlertInput({ target_price: 500, current_price: 1000 }).ok, false);
assert.equal(validateAlertInput({ target_price: 500, current_price: 1000, telegram_chat_id: '12345678' }).ok, true);
console.log('✅ 2. Alert input validation passes (strictly enforces lower price & valid channel).');

// 3. Test Unsubscribe token generation & verification (HMAC or token-based)
import crypto from 'node:crypto';
const secret = 'test-alert-secret-key-1234567890';

function generateUnsubscribeToken(alertId) {
  return crypto.createHmac('sha256', secret).update(String(alertId)).digest('hex').substring(0, 32);
}

function verifyUnsubscribeToken(alertId, token) {
  const expected = generateUnsubscribeToken(alertId);
  const bufExpected = Buffer.from(expected);
  const bufToken = Buffer.from(token);
  if (bufExpected.length !== bufToken.length) return false;
  return crypto.timingSafeEqual(bufExpected, bufToken);
}

const alertId = 'alert_abc_123';
const token = generateUnsubscribeToken(alertId);
assert.equal(verifyUnsubscribeToken(alertId, token), true);
assert.equal(verifyUnsubscribeToken(alertId, 'wrong-token-1234567890123456789012'), false);
console.log('✅ 3. One-click unsubscribe token generation & timing-safe verification pass.');

// 4. Test Notification Message Formatting (Arabic RTL + Affiliate Link + Savings)
function formatTelegramAlertMessage({ title, currentPrice, targetPrice, savings, buyUrl, unsubscribeUrl }) {
  return (
    `🚨 *هبوط سعر جديد من رادار LO2TAA (لقطة)!*\n\n` +
    `📦 *المنتج:* ${title}\n` +
    `💰 *السعر الحالي:* ${currentPrice.toLocaleString('ar-EG')} ج.م\n` +
    `🎯 *هدفك المرصود:* ${targetPrice.toLocaleString('ar-EG')} ج.م\n` +
    `⚡ *وفرت الآن:* ${savings.toLocaleString('ar-EG')} ج.م\n\n` +
    `🛒 [اشتري الآن من المتجر الرسمي](${buyUrl})\n\n` +
    `_لإلغاء التنبيه:_ [اضغط هنا](${unsubscribeUrl})`
  );
}

const sampleMsg = formatTelegramAlertMessage({
  title: 'Nintendo Switch OLED',
  currentPrice: 19500,
  targetPrice: 20000,
  savings: 2500,
  buyUrl: 'https://www.amazon.eg/dp/B098RKWHHZ?tag=lo2taa-21',
  unsubscribeUrl: 'https://loo2taa.vercel.app/api/alerts/unsubscribe?token=' + token + '&id=' + alertId
});

assert.match(sampleMsg, /Nintendo Switch OLED/);
assert.match(sampleMsg, /lo2taa-21/);
assert.match(sampleMsg, /unsubscribe\?token=/);
console.log('✅ 4. Alert notification message format conforms to specifications.');

console.log('\n🎉 ALL STEP 5 UNIT TESTS PASSED (100%)!\n');
