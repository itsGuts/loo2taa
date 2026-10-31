#!/usr/bin/env node

/**
 * LO2TAA - Autonomous Amazon Egypt Deals Tracker & Telegram Auto-Poster
 * 
 * Features:
 * 1. Checks Amazon.eg prices for all products in data/products.json
 * 2. Spots genuine price drops and records historical price trends
 * 3. Formats and sends instant deal alerts to your Telegram channel
 * 4. Updates data/products.json and logs run status to data/last-check.json
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = path.resolve(__dirname, '..');
const PRODUCTS_FILE = path.join(ROOT_DIR, 'data', 'products.json');
const STATUS_FILE = path.join(ROOT_DIR, 'data', 'last-check.json');

// Config from environment
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || '';
const TELEGRAM_CHANNEL_ID = process.env.TELEGRAM_CHANNEL_ID || '@lo2taa'; // e.g. @lo2taa or channel ID -100xxxx
const AFFILIATE_TAG = process.env.AMAZON_AFFILIATE_TAG || 'lo2taa-21';
const MIN_DROP_PERCENT = Number(process.env.MIN_DROP_PERCENT || 5); // Notify if price drops >= 5%

// Helper: Format price in Egyptian Pounds
function formatEGP(num) {
  return Number(num).toLocaleString('ar-EG');
}

// Helper: Send message to Telegram Channel via Telegram Bot API
async function sendTelegramAlert(product, oldPrice, newPrice, savings, discountPercent) {
  if (!TELEGRAM_BOT_TOKEN) {
    console.log(`[Telegram] Skipped (TELEGRAM_BOT_TOKEN not set). Post preview:`);
    console.log(formatTelegramPost(product, oldPrice, newPrice, savings, discountPercent));
    return false;
  }

  const text = formatTelegramPost(product, oldPrice, newPrice, savings, discountPercent);
  const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHANNEL_ID,
        text,
        parse_mode: 'HTML',
        disable_web_page_preview: false,
      }),
    });

    const data = await res.json();
    if (data.ok) {
      console.log(`[Telegram] ✅ Alert sent successfully for: ${product.display_title.slice(0, 30)}...`);
      return true;
    } else {
      console.error(`[Telegram] ❌ API error:`, data.description);
      return false;
    }
  } catch (err) {
    console.error(`[Telegram] ❌ Network error:`, err.message);
    return false;
  }
}

// Helper: Generate structured Telegram Post HTML
function formatTelegramPost(product, oldPrice, newPrice, savings, discountPercent) {
  const storeUrl = product.url.includes('tag=') ? product.url : `${product.url}?tag=${AFFILIATE_TAG}`;
  const lo2taaUrl = `https://loo2taa.vercel.app/products/${product.asin || product.id}`;

  const storeName = product.store_name || (product.marketplace === 'amazon' ? 'Amazon أمازون' : 'نون Noon');
  return `🔥 <b>لقطة اليوم للجيمرز من LO2TAA!</b>

🎮 <b>${escapeHtml(product.display_title)}</b>

💰 <b>السعر الآن:</b> <code>${formatEGP(newPrice)} ج.م</code>
📉 <b>السعر السابق:</b> <s>${formatEGP(oldPrice)} ج.م</s>
⚡ <b>التوفير:</b> <b>${formatEGP(savings)} ج.م (${discountPercent}%-)</b>

✅ <b>التحقق:</b> صفقة حقيقية مسجلة في رادار الصفقات
🏪 <b>المتجر:</b> ${storeName} (شحن سريع)

🛒 <b>رابط الشراء المباشر من أمازون:</b>
<a href="${storeUrl}">اضغط هنا لاقتناص اللقطة ⚡</a>

📊 <b>سجل الأسعار الكامل لآخر 90 يوم:</b>
<a href="${lo2taaUrl}">${lo2taaUrl}</a>

🎯 <i>تابع قناة @lo2taa لرصد أقوى صفقات الهاردوير في مصر</i>`.trim();
}

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

// Helper: Extract price from Amazon HTML (robust fallback scraper)
async function fetchAmazonPrice(asin) {
  const url = `https://www.amazon.eg/dp/${asin}?language=en_AE`;
  const headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36',
    'Accept-Language': 'en-US,en;q=0.9,ar;q=0.8',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
  };

  try {
    const res = await fetch(url, { headers });
    if (!res.ok) {
      return null;
    }

    const html = await res.text();

    // 1. Look for apexPriceToPay or corePrice_feature_div
    const priceWholeMatch = html.match(/class="a-price-whole"[^>]*>([0-9,]+)/i);
    if (priceWholeMatch) {
      const clean = priceWholeMatch[1].replace(/,/g, '');
      const parsed = parseFloat(clean);
      if (!isNaN(parsed) && parsed > 0) return parsed;
    }

    // 2. Look for priceToPay json blob
    const jsonMatch = html.match(/"priceAmount":([0-9.]+)/i);
    if (jsonMatch) {
      const parsed = parseFloat(jsonMatch[1]);
      if (!isNaN(parsed) && parsed > 0) return parsed;
    }

    // 3. Look for a-offscreen with EGP
    const offscreenMatch = html.match(/class="a-offscreen"[^>]*>EGP\s*([0-9,.]+)/i);
    if (offscreenMatch) {
      const clean = offscreenMatch[1].replace(/,/g, '');
      const parsed = parseFloat(clean);
      if (!isNaN(parsed) && parsed > 0) return parsed;
    }

    return null;
  } catch (err) {
    return null;
  }
}

// Main execution flow
async function main() {
  console.log(`\n=================================================`);
  console.log(`🎯 LO2TAA Deals Tracker & Auto-Poster Starting...`);
  console.log(`⏰ Time: ${new Date().toISOString()}`);
  console.log(`=================================================\n`);

  if (!fs.existsSync(PRODUCTS_FILE)) {
    console.error(`❌ Products file not found at: ${PRODUCTS_FILE}`);
    process.exit(1);
  }

  const products = JSON.parse(fs.readFileSync(PRODUCTS_FILE, 'utf8'));
  console.log(`📦 Loaded ${products.length} products to track.`);

  const todayStr = new Date().toISOString().split('T')[0];
  let priceChangesCount = 0;
  let alertsSentCount = 0;
  const runLog = [];

  for (let i = 0; i < products.length; i++) {
    const p = products[i];
    if (p.marketplace !== 'amazon' || !p.asin) {
      continue;
    }

    console.log(`[${i + 1}/${products.length}] Checking ${p.brand} - ${p.display_title.slice(0, 35)}...`);

    // Fetch live price
    const livePrice = await fetchAmazonPrice(p.asin);

    if (livePrice && livePrice !== p.price) {
      const oldPrice = p.price;
      const priceDiff = oldPrice - livePrice;
      const isDrop = priceDiff > 0;
      const dropPercent = Math.round((priceDiff / oldPrice) * 100);

      console.log(`  ⚡ Price Change Detected! Old: ${oldPrice} EGP -> New: ${livePrice} EGP (${isDrop ? `-${dropPercent}%` : `+`})`);

      // Update product record
      p.previous_price = oldPrice;
      p.price = livePrice;
      p.savings = Math.max(0, p.previous_price - p.price);
      p.discount_percent = p.previous_price > 0 ? Math.round(((p.previous_price - p.price) / p.previous_price) * 100) : 0;
      p.price_checked_at = new Date().toISOString();
      p.price_change_direction = isDrop ? 'down' : 'up';

      // Check if new record low
      const minHistorical = Math.min(...(p.price_history || []).map(h => h.price), oldPrice);
      if (livePrice < minHistorical) {
        p.is_record_low = true;
      }

      // Add to price history
      if (!p.price_history) p.price_history = [];
      p.price_history.push({
        date: todayStr,
        price: livePrice,
        label: p.is_record_low ? 'أقل سعر قياسي جديد ⚡' : isDrop ? 'تخفيض سعر' : 'تحديث سعر',
      });

      priceChangesCount++;

      // Trigger Telegram Alert if it's a qualifying deal drop
      if (isDrop && dropPercent >= MIN_DROP_PERCENT) {
        console.log(`  📢 Triggering Telegram Alert (drop of ${dropPercent}% >= threshold ${MIN_DROP_PERCENT}%)...`);
        const sent = await sendTelegramAlert(p, oldPrice, livePrice, p.savings, dropPercent);
        if (sent) alertsSentCount++;
      }

      runLog.push({
        id: p.id,
        title: p.display_title,
        oldPrice,
        newPrice: livePrice,
        dropPercent,
        alertSent: isDrop && dropPercent >= MIN_DROP_PERCENT,
      });
    } else if (livePrice) {
      console.log(`  ✓ Price stable at ${livePrice} EGP.`);
      p.price_checked_at = new Date().toISOString();
    } else {
      console.log(`  ⚠️ Could not fetch live price (rate-limited or temporarily unavailable). Kept current.`);
    }

    // Polite delay between product requests
    await new Promise(r => setTimeout(r, 2000));
  }

  // Save updated products file
  fs.writeFileSync(PRODUCTS_FILE, JSON.stringify(products, null, 2), 'utf8');
  console.log(`\n💾 Saved updated data to ${PRODUCTS_FILE}`);

  // Write summary status file
  const status = {
    last_run_at: new Date().toISOString(),
    products_checked: products.length,
    price_changes_detected: priceChangesCount,
    telegram_alerts_sent: alertsSentCount,
    changes: runLog,
  };
  fs.writeFileSync(STATUS_FILE, JSON.stringify(status, null, 2), 'utf8');

  console.log(`\n=================================================`);
  console.log(`🏁 Tracker Completed:`);
  console.log(`   - Price changes: ${priceChangesCount}`);
  console.log(`   - Telegram alerts sent: ${alertsSentCount}`);
  console.log(`=================================================\n`);
}

main().catch(err => {
  console.error('Fatal error in tracker:', err);
  process.exit(1);
});
