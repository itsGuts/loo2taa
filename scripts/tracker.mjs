#!/usr/bin/env node

/**
 * LO2TAA - Autonomous Amazon Egypt Deals Tracker & Telegram Auto-Poster
 * 
 * Features:
 * 1. Checks Amazon.eg prices for all products in data/products.json
 * 2. Spots genuine price drops and records historical price trends
 * 3. Formats and sends instant deal alerts to your Telegram channel
 * 4. Updates data/products.json and syncs to src/lib/loo2taa-data.ts
 * 5. Logs run status to data/last-check.json
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = path.resolve(__dirname, '..');
const PRODUCTS_FILE = path.join(ROOT_DIR, 'data', 'products.json');
const STATUS_FILE = path.join(ROOT_DIR, 'data', 'last-check.json');
const TS_FILE = path.join(ROOT_DIR, 'src', 'lib', 'loo2taa-data.ts');

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

// Helper: Extract price from Amazon HTML (robust multi-pattern scraper)
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

    // 1. Look in apex_desktop or corePriceDisplay
    const apexMatch = html.match(/id="apex_desktop"[\s\S]*?class="a-price-whole"[^>]*>([0-9,]+)/i) ||
                      html.match(/id="corePriceDisplay_desktop_feature_div"[\s\S]*?class="a-price-whole"[^>]*>([0-9,]+)/i) ||
                      html.match(/id="corePrice_feature_div"[\s\S]*?class="a-price-whole"[^>]*>([0-9,]+)/i);
    if (apexMatch) {
      const clean = apexMatch[1].replace(/,/g, '');
      const parsed = parseFloat(clean);
      if (!isNaN(parsed) && parsed > 0) return parsed;
    }

    // 2. Look for priceWholeMatch anywhere
    const priceWholeMatch = html.match(/class="a-price-whole"[^>]*>([0-9,]+)/i);
    if (priceWholeMatch) {
      const clean = priceWholeMatch[1].replace(/,/g, '');
      const parsed = parseFloat(clean);
      if (!isNaN(parsed) && parsed > 0) return parsed;
    }

    // 3. Look for priceToPay json blob
    const jsonMatch = html.match(/"priceAmount":([0-9.]+)/i);
    if (jsonMatch) {
      const parsed = parseFloat(jsonMatch[1]);
      if (!isNaN(parsed) && parsed > 0) return parsed;
    }

    // 4. Look for a-offscreen with EGP
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

// Helper: Synchronize updated products to src/lib/loo2taa-data.ts
function syncToTypeScript(products) {
  const tsContent = `import { Product, MarketplaceSetting } from './types';

export const MARKETPLACE_SETTINGS: Record<string, MarketplaceSetting> = {
  amazon: {
    key: 'amazon',
    name: 'Amazon أمازون',
    buttonLabel: 'اقتنص اللقطة من أمازون ⚡',
    primaryColor: '#00f0ff',
    textColor: '#07090e',
    surfaceColor: '#0d1527',
  },
  noon: {
    key: 'noon',
    name: 'نون Noon',
    buttonLabel: 'اقتنص اللقطة من نون ⚡',
    primaryColor: '#ffd600',
    textColor: '#07090e',
    surfaceColor: '#1f1b0a',
  },
  zoka: {
    key: 'zoka',
    name: 'ZOKA هاردوير',
    buttonLabel: 'عرض في ZOKA ⚡',
    primaryColor: '#ff007f',
    textColor: '#ffffff',
    surfaceColor: '#260515',
  },
};

export const CATEGORIES = [
  { id: 'all', name: 'كل صفقات الجيمرز', icon: 'Gamepad2' },
  { id: 'pc-hardware', name: 'كروت شاشة وهاردوير PC', icon: 'Cpu' },
  { id: 'monitors', name: 'شاشات جيمنج 144Hz+', icon: 'Monitor' },
  { id: 'peripherals', name: 'ماوسات وكيبوردات ميكانيكال', icon: 'Keyboard' },
  { id: 'audio-headsets', name: 'سماعات وهيدست محيطي', icon: 'Headphones' },
  { id: 'consoles', name: 'بلايستيشن وكروت ألعاب', icon: 'Gamepad' },
  { id: 'laptops', name: 'لابتوبات جيمنج', icon: 'Laptop' },
  { id: 'battlestation', name: 'سيت أب وكراسي وإضاءة RGB', icon: 'Sparkles' },
];

export const PRODUCTS: Product[] = ${JSON.stringify(products, null, 2)};

export function getAllProducts(): Product[] {
  return PRODUCTS;
}

export function getProductById(idOrAsin: string): Product | undefined {
  return PRODUCTS.find(p => p.id === idOrAsin || p.asin === idOrAsin);
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  return PRODUCTS.filter(p => p.id !== product.id && (p.category === product.category || p.brand === product.brand)).slice(0, limit);
}

export function getUniqueBrands(): string[] {
  return Array.from(new Set(PRODUCTS.map(p => p.brand))).sort();
}
`;

  fs.writeFileSync(TS_FILE, tsContent, 'utf8');
  console.log(`💾 Synchronized updated data to ${TS_FILE}`);
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

    console.log(`[${i + 1}/${products.length}] Checking ${p.brand} - ${p.display_title.slice(0, 35)}... (ASIN: ${p.asin})`);

    // Fetch live price
    const livePrice = await fetchAmazonPrice(p.asin);

    // Sanity filter: Ignore crazy outliers (>3.5x old price or <0.2x old price)
    const isReasonable = livePrice && (livePrice <= p.price * 3.5) && (livePrice >= p.price * 0.2);

    if (isReasonable && livePrice !== p.price) {
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
      console.log(`  ℹ️ Live price unchanged or temporarily unavailable from seller. Kept at ${p.price} EGP.`);
      p.price_checked_at = new Date().toISOString();
    }

    // Delay between product requests
    await new Promise(r => setTimeout(r, 1200));
  }

  // Save updated products file
  fs.writeFileSync(PRODUCTS_FILE, JSON.stringify(products, null, 2), 'utf8');
  console.log(`\n💾 Saved updated data to ${PRODUCTS_FILE}`);

  // Synchronize with TypeScript file
  syncToTypeScript(products);

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
  console.log(`🏁 Tracker Completed Successfully:`);
  console.log(`   - Products tracked: ${products.length}`);
  console.log(`   - Price changes: ${priceChangesCount}`);
  console.log(`   - Telegram alerts sent: ${alertsSentCount}`);
  console.log(`=================================================\n`);
}

main().catch(err => {
  console.error('Fatal error in tracker:', err);
  process.exit(1);
});
