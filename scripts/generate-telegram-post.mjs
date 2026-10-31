#!/usr/bin/env node

/**
 * LO2TAA - Telegram Deal Post Generator
 * 
 * Usage:
 *   node scripts/generate-telegram-post.mjs [productId or asin]
 *   node scripts/generate-telegram-post.mjs --list
 *   node scripts/generate-telegram-post.mjs --best
 *   node scripts/generate-telegram-post.mjs --send [productId] (sends to channel)
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = path.resolve(__dirname, '..');
const PRODUCTS_FILE = path.join(ROOT_DIR, 'data', 'products.json');

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || '';
const TELEGRAM_CHANNEL_ID = process.env.TELEGRAM_CHANNEL_ID || '@lo2taa';
const AFFILIATE_TAG = 'lo2taa-21';

function formatEGP(num) {
  return Number(num).toLocaleString('ar-EG');
}

function buildTelegramPost(p) {
  const storeName = p.store_name || (p.marketplace === 'amazon' ? 'Amazon أمازون' : 'نون Noon');
  const storeUrl = p.url.includes('tag=') ? p.url : `${p.url}?tag=${AFFILIATE_TAG}`;
  const lo2taaUrl = `https://loo2taa.vercel.app/products/${p.asin || p.id}`;
  const recordBadge = p.is_record_low ? '⚡ <b>أقل سعر مسجل في تاريخ المنتج!</b>\n' : '';

  return `🔥 <b>لقطة اليوم للجيمرز في مصر!</b> 🎮

🕹️ <b>${p.display_title}</b>

💰 <b>السعر الآن:</b> <code>${formatEGP(p.price)} ج.م</code>
${p.previous_price > p.price ? `📉 <b>كان بسعر:</b> <s>${formatEGP(p.previous_price)} ج.م</s>\n` : ''}${p.savings > 0 ? `💸 <b>التوفير الصافي:</b> <b>${formatEGP(p.savings)} ج.م (${p.discount_percent}% خصم)</b>\n` : ''}${recordBadge}
✅ <b>التحقق:</b> صفقة موثقة برادار الأسعار لآخر 90 يوم
🏪 <b>المتجر:</b> ${storeName} | بائع موثوق (${p.seller})

🛒 <b>رابط الشراء المباشر من أمازون:</b>
👇 اضغط هنا لاقتناص اللقطة:
${storeUrl}

📊 <b>شوف سجل الأسعار وتحليل الذكاء الاصطناعي:</b>
${lo2taaUrl}

━━━━━━━━━━━━━━━
🎯 <i>انضم لقناتنا لرصد لقطات الجيمنج اليومية في مصر</i>
📢 @lo2taa`.trim();
}

async function main() {
  if (!fs.existsSync(PRODUCTS_FILE)) {
    console.error(`❌ Products file not found.`);
    process.exit(1);
  }

  const products = JSON.parse(fs.readFileSync(PRODUCTS_FILE, 'utf8'));
  const args = process.argv.slice(2);

  if (args.includes('--list')) {
    console.log(`\n📋 Available Products in LO2TAA:`);
    products.forEach((p, idx) => {
      console.log(`[${idx + 1}] ID: ${p.id.padEnd(25)} | ASIN: ${p.asin} | ${p.price} EGP | ${p.display_title.slice(0, 45)}...`);
    });
    return;
  }

  let selected = null;
  const shouldSend = args.includes('--send');
  const cleanArgs = args.filter(a => !a.startsWith('--'));

  if (cleanArgs.length > 0) {
    const query = cleanArgs[0].toLowerCase();
    selected = products.find(p => p.id.toLowerCase() === query || (p.asin && p.asin.toLowerCase() === query));
  }

  if (!selected || args.includes('--best')) {
    // Select the highest saving or record-low deal
    const sorted = [...products].sort((a, b) => b.savings - a.savings);
    selected = sorted[0];
  }

  const postText = buildTelegramPost(selected);

  console.log(`\n======================================================`);
  console.log(`📢 GENERATED TELEGRAM POST FOR: [${selected.id}]`);
  console.log(`======================================================\n`);
  console.log(postText);
  console.log(`\n======================================================\n`);

  if (shouldSend) {
    if (!TELEGRAM_BOT_TOKEN) {
      console.error(`❌ Error: TELEGRAM_BOT_TOKEN environment variable is not set.`);
      console.log(`To set it: $env:TELEGRAM_BOT_TOKEN="your_token"`);
      return;
    }

    console.log(`🚀 Sending directly to ${TELEGRAM_CHANNEL_ID}...`);
    const res = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHANNEL_ID,
        text: postText,
        parse_mode: 'HTML',
      }),
    });

    const result = await res.json();
    if (result.ok) {
      console.log(`✅ Message posted successfully to ${TELEGRAM_CHANNEL_ID}!`);
    } else {
      console.error(`❌ Failed:`, result.description);
    }
  } else {
    console.log(`💡 Tip: You can copy the text above directly into Telegram!`);
    console.log(`   To send automatically via Bot: add --send`);
  }
}

main();
