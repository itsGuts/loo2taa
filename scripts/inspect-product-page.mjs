// scripts/inspect-product-page.mjs
import fs from 'node:fs';

async function fetchProduct() {
  const asin = 'B0DPSNLBB3';
  const url = `https://yestahil.cc/products/${asin}`;
  console.log(`Fetching ${url} ...`);

  const res = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    }
  });

  const html = await res.text();
  fs.writeFileSync('scripts/yestahil_product.html', html, 'utf8');
  console.log(`Saved product HTML (${html.length} bytes)`);

  // Extract JSON-LD or RSC
  const ldJson = [...html.matchAll(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)].map(m => m[1]);
  console.log(`Found ${ldJson.length} JSON-LD blocks.`);
  ldJson.forEach((j, i) => console.log(`JSON-LD ${i}:`, j.slice(0, 300)));

  // Extract Price History if embedded in HTML/RSC
  // Look for dates or array of prices: [date, price] or {"price": ..., "date": ...}
  const dateRegex = /\b202[4-6]-[01][0-9]-[0-3][0-9]\b/g;
  const dates = [...new Set([...html.matchAll(dateRegex)].map(m => m[0]))];
  console.log(`Found ${dates.length} date occurrences in page:`, dates.slice(0, 10));

  // Look for stores or price drop stats
  const dropInfo = [...html.matchAll(/(?:أقل سعر|أعلى سعر|متوسط السعر|تاريخ|السعر الحالي|خصم|تخفيض)[^<]{1,100}/g)].map(m => m[0]);
  console.log('Arabic price stats found on product page:', dropInfo.slice(0, 10));
}

fetchProduct().catch(console.error);
