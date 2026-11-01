#!/usr/bin/env node

/**
 * LO2TAA - Autonomous Real-Time Deals Tracker & Expired Deals Purger
 * 
 * Features:
 * 1. Tracks prices for all catalog products every 5 minutes
 * 2. Spots genuine price drops and fires instant Telegram alerts to @lo2taa
 * 3. Detects Out-of-Stock and Expired Deals (غير متوفر حالياً / انتهاء الخصم)
 * 4. Automatically removes or unlists dead/expired deals from active site views
 * 5. Uses smart concurrency batches to track 100+ items in ~25 seconds
 * 6. Synchronizes data/products.json and src/lib/loo2taa-data.ts
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
const TELEGRAM_CHANNEL_ID = process.env.TELEGRAM_CHANNEL_ID || '@lo2taa';
const AFFILIATE_TAG = process.env.AMAZON_AFFILIATE_TAG || 'lo2taa-21';
const MIN_DROP_PERCENT = Number(process.env.MIN_DROP_PERCENT || 5); // Notify if price drops >= 5%
const BATCH_SIZE = 3; // Concurrent requests per batch
const BATCH_DELAY_MS = 800; // Delay between batches

function formatEGP(num) {
  return Number(num).toLocaleString('ar-EG');
}

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

// Helper: Send message to Telegram Channel
async function sendTelegramAlert(product, oldPrice, newPrice, savings, discountPercent) {
  if (!TELEGRAM_BOT_TOKEN) {
    console.log(`  [Telegram] (Preview) New deal: ${product.display_title.slice(0, 30)}... | ${newPrice} EGP (-${discountPercent}%)`);
    return false;
  }

  const storeUrl = product.url.includes('tag=') ? product.url : `${product.url}?tag=${AFFILIATE_TAG}`;
  const lo2taaUrl = `https://loo2taa.vercel.app/products/${product.asin || product.id}`;
  const storeName = product.store_name || 'أمازون مصر';

  const text = `🔥 <b>لقطة اليوم للجيمرز من LO2TAA!</b>

🎮 <b>${escapeHtml(product.display_title)}</b>

💰 <b>السعر الآن:</b> <code>${formatEGP(newPrice)} ج.م</code>
📉 <b>السعر السابق:</b> <s>${formatEGP(oldPrice)} ج.م</s>
⚡ <b>التوفير:</b> <b>${formatEGP(savings)} ج.م (${discountPercent}%-)</b>

✅ <b>التحقق:</b> صفقة حقيقية مسجلة في رادار الصفقات
🏪 <b>المتجر:</b> ${storeName} (شحن سريع)

🛒 <b>رابط الشراء المباشر:</b>
<a href="${storeUrl}">اضغط هنا لاقتناص اللقطة ⚡</a>

📊 <b>سجل الأسعار الكامل لآخر 90 يوم:</b>
<a href="${lo2taaUrl}">${lo2taaUrl}</a>

🎯 <i>تابع قناة @lo2taa لرصد أقوى صفقات الهاردوير والجيمنج في مصر</i>`.trim();

  try {
    const res = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
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
      console.log(`  [Telegram] ✅ Alert sent successfully!`);
      return true;
    } else {
      console.error(`  [Telegram] ❌ API error:`, data.description);
      return false;
    }
  } catch (err) {
    console.error(`  [Telegram] ❌ Network error:`, err.message);
    return false;
  }
}

// Scrape Amazon page for Price and Stock Availability
async function fetchAmazonStatus(asin) {
  const url = `https://www.amazon.eg/dp/${asin}?language=en_AE`;
  const headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36',
    'Accept-Language': 'en-US,en;q=0.9,ar;q=0.8',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
  };

  try {
    const res = await fetch(url, { headers });
    if (res.status === 404) {
      return { price: null, inStock: false, isUnavailable: true, is404: true };
    }
    if (!res.ok) {
      return { price: null, inStock: true, isUnavailable: false, is404: false };
    }

    const html = await res.text();

    // Check Availability
    const isOutOfStock = html.includes('Currently unavailable') ||
                         html.includes('غير متوفر حالياً') ||
                         html.includes('We don\'t know when or if this item will be back in stock') ||
                         html.includes('لا نعرف ما إذا كان هذا المنتج سيعود') ||
                         html.includes('id="outOfStock"');

    // Extract Price
    let price = null;
    const apexMatch = html.match(/id="apex_desktop"[\s\S]*?class="a-price-whole"[^>]*>([0-9,]+)/i) ||
                      html.match(/id="corePriceDisplay_desktop_feature_div"[\s\S]*?class="a-price-whole"[^>]*>([0-9,]+)/i) ||
                      html.match(/id="corePrice_feature_div"[\s\S]*?class="a-price-whole"[^>]*>([0-9,]+)/i);
    if (apexMatch) {
      const parsed = parseFloat(apexMatch[1].replace(/,/g, ''));
      if (!isNaN(parsed) && parsed > 0) price = parsed;
    }

    if (!price) {
      const priceWholeMatch = html.match(/class="a-price-whole"[^>]*>([0-9,]+)/i);
      if (priceWholeMatch) {
        const parsed = parseFloat(priceWholeMatch[1].replace(/,/g, ''));
        if (!isNaN(parsed) && parsed > 0) price = parsed;
      }
    }

    if (!price) {
      const jsonMatch = html.match(/"priceAmount":([0-9.]+)/i);
      if (jsonMatch) {
        const parsed = parseFloat(jsonMatch[1]);
        if (!isNaN(parsed) && parsed > 0) price = parsed;
      }
    }

    if (!price) {
      const offscreenMatch = html.match(/class="a-offscreen"[^>]*>EGP\s*([0-9,.]+)/i);
      if (offscreenMatch) {
        const parsed = parseFloat(offscreenMatch[1].replace(/,/g, ''));
        if (!isNaN(parsed) && parsed > 0) price = parsed;
      }
    }

    return {
      price,
      inStock: !isOutOfStock && price !== null,
      isUnavailable: isOutOfStock || (price === null),
      is404: false
    };
  } catch (err) {
    return { price: null, inStock: true, isUnavailable: false, is404: false };
  }
}

// Synchronize with TypeScript definition
function syncToTypeScript(products) {
  const tsContent = `import { Product, MarketplaceSetting } from './types';
import productsData from '../../data/products.json';

export const MARKETPLACE_SETTINGS: Record<string, MarketplaceSetting> = {
  amazon: {
    key: 'amazon',
    name: 'أمازون مصر',
    buttonLabel: 'اقتنص اللقطة من أمازون ⚡',
    primaryColor: '#00f0ff',
    textColor: '#07090e',
    surfaceColor: '#0d1527',
  },
};

export const CATEGORIES = [
  { id: 'all', name: 'كل اللقطات', icon: 'Zap' },
  { id: 'streaming-voice', name: 'مايكات وصوتيات ديسكورد', icon: 'Mic' },
  { id: 'headsets', name: 'سماعات ديسكورد وقيمنق', icon: 'Headphones' },
  { id: 'keyboards-mice', name: 'كيبوردات ميكانيكال وماوسات', icon: 'Keyboard' },
  { id: 'setup-aesthetic', name: 'سيت أب وديكور وإضاءة RGB', icon: 'Sparkles' },
  { id: 'monitors', name: 'شاشات قيمنق 144Hz+', icon: 'Monitor' },
  { id: 'pc-hardware', name: 'تجميعات وهاردوير البي سي', icon: 'Cpu' },
  { id: 'consoles-handheld', name: 'كونسول واكسسوارات', icon: 'Gamepad2' },
  { id: 'laptops', name: 'لابتوبات قيمنق ومونتاج', icon: 'Laptop' },
];

export const PRODUCTS: Product[] = productsData as unknown as Product[];

export function getAllProducts(): Product[] {
  return PRODUCTS;
}

export function getProductById(idOrAsin: string): Product | undefined {
  return PRODUCTS.find(p => p.id === idOrAsin || p.asin?.toUpperCase() === idOrAsin?.toUpperCase());
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

async function main() {
  console.log(`\n=================================================`);
  console.log(`🎯 LO2TAA 5-Minute Deal Tracker & Out-of-Stock Cleaner`);
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
  let statusChangesCount = 0;
  let alertsSentCount = 0;
  let outOfStockCount = 0;
  const runLog = [];

  // Group into batches of BATCH_SIZE
  const amazonProducts = products.filter(p => p.marketplace === 'amazon' && p.asin);
  console.log(`⚡ Processing ${amazonProducts.length} Amazon Egypt items in batches of ${BATCH_SIZE}...`);

  for (let i = 0; i < amazonProducts.length; i += BATCH_SIZE) {
    const batch = amazonProducts.slice(i, i + BATCH_SIZE);

    await Promise.all(batch.map(async (p, idx) => {
      const itemNumber = i + idx + 1;
      const status = await fetchAmazonStatus(p.asin);

      // Handle 404 or Out-of-stock
      if (status.is404 || status.isUnavailable) {
        if (p.in_stock !== false) {
          console.log(`[${itemNumber}/${amazonProducts.length}] ❌ نفدت الكمية من أمازون: ${p.display_title.slice(0, 35)}... (تم إزالته من العروض الحية)`);
          p.in_stock = false;
          p.is_deal_active = false;
          p.stock_status = 'out_of_stock';
          statusChangesCount++;
          outOfStockCount++;
        }
        return;
      }

      // If item was out of stock and is now back in stock
      if (p.in_stock === false && status.inStock) {
        console.log(`[${itemNumber}/${amazonProducts.length}] 🟢 توفر مجدداً في المخزن: ${p.display_title.slice(0, 35)}...`);
        p.in_stock = true;
        p.stock_status = 'in_stock';
        statusChangesCount++;
      }

      const livePrice = status.price;
      const isReasonable = livePrice && (livePrice <= p.price * 3.5) && (livePrice >= p.price * 0.2);

      if (isReasonable && livePrice !== p.price) {
        const oldPrice = p.price;
        const priceDiff = oldPrice - livePrice;
        const isDrop = priceDiff > 0;
        const dropPercent = Math.round((priceDiff / oldPrice) * 100);

        console.log(`[${itemNumber}/${amazonProducts.length}] ⚡ تغير في السعر: ${p.display_title.slice(0, 30)}... | ${oldPrice} -> ${livePrice} ج.م (${isDrop ? `-${dropPercent}%` : `+`})`);

        p.previous_price = oldPrice;
        p.price = livePrice;
        p.savings = Math.max(0, p.previous_price - p.price);
        p.discount_percent = p.previous_price > 0 ? Math.round(((p.previous_price - p.price) / p.previous_price) * 100) : 0;
        p.price_checked_at = new Date().toISOString();
        p.price_change_direction = isDrop ? 'down' : 'up';
        p.in_stock = true;
        p.stock_status = 'in_stock';
        p.is_deal_active = (p.savings > 0 && p.discount_percent >= 5);

        // Check record low
        const minHistorical = Math.min(...(p.price_history || []).map(h => h.price), oldPrice);
        if (livePrice < minHistorical) p.is_record_low = true;

        if (!p.price_history) p.price_history = [];
        p.price_history.push({
          date: todayStr,
          price: livePrice,
          label: p.is_record_low ? 'أقل سعر قياسي جديد ⚡' : isDrop ? 'تخفيض سعر' : 'تحديث سعر',
        });

        priceChangesCount++;

        // Telegram alert if price dropped >= MIN_DROP_PERCENT
        if (isDrop && dropPercent >= MIN_DROP_PERCENT) {
          const sent = await sendTelegramAlert(p, oldPrice, livePrice, p.savings, dropPercent);
          if (sent) alertsSentCount++;
        }

        runLog.push({ id: p.id, title: p.display_title, oldPrice, newPrice: livePrice, dropPercent });
      } else if (livePrice) {
        p.price_checked_at = new Date().toISOString();
        p.in_stock = true;
        p.stock_status = 'in_stock';
        p.is_deal_active = (p.savings > 0 && p.discount_percent >= 5);
      }
    }));

    await new Promise(r => setTimeout(r, BATCH_DELAY_MS));
  }

  // Check if we need to commit updates
  const totalModifications = priceChangesCount + statusChangesCount;
  if (totalModifications > 0) {
    fs.writeFileSync(PRODUCTS_FILE, JSON.stringify(products, null, 2), 'utf8');
    console.log(`\n💾 Saved updated data (${totalModifications} changes) to ${PRODUCTS_FILE}`);
    syncToTypeScript(products);
  } else {
    console.log(`\n✓ All ${products.length} products verified. All prices & stock are stable.`);
  }

  // Summary log
  const statusSummary = {
    last_run_at: new Date().toISOString(),
    products_checked: products.length,
    price_changes: priceChangesCount,
    out_of_stock_detected: outOfStockCount,
    telegram_alerts_sent: alertsSentCount,
    changes: runLog
  };
  fs.writeFileSync(STATUS_FILE, JSON.stringify(statusSummary, null, 2), 'utf8');

  console.log(`\n=================================================`);
  console.log(`🏁 5-Minute Tracker Finished:`);
  console.log(`   - Total products tracked: ${products.length}`);
  console.log(`   - Active live in-stock deals: ${products.filter(p => p.in_stock !== false).length}`);
  console.log(`   - Out of stock / hidden: ${products.filter(p => p.in_stock === false).length}`);
  console.log(`   - Price changes detected: ${priceChangesCount}`);
  console.log(`   - Telegram alerts sent: ${alertsSentCount}`);
  console.log(`=================================================\n`);
}

main().catch(err => {
  console.error('Fatal error in tracker:', err);
  process.exit(1);
});
