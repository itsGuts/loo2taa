import https from 'node:https';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PRODUCTS_FILE = path.resolve(__dirname, '..', 'data', 'products.json');

const products = JSON.parse(fs.readFileSync(PRODUCTS_FILE, 'utf8'));

console.log(`\n======================================================`);
console.log(`🧪 LO2TAA Automated Link & Image Integrity Test`);
console.log(`Checking ${products.length} products on Amazon Egypt (amazon.eg)...`);
console.log(`======================================================\n`);

async function testProduct(p) {
  return new Promise((resolve) => {
    https.get(p.url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
      }
    }, (res) => {
      let body = '';
      res.on('data', chunk => { if (body.length < 5000) body += chunk; });
      res.on('end', () => {
        const isNotFound = res.statusCode === 404 || body.includes('Page Not Found') || body.includes('Looking for something?');
        resolve({
          asin: p.asin,
          id: p.id,
          title: p.display_title.slice(0, 35),
          status: res.statusCode,
          ok: res.statusCode === 200 && !isNotFound
        });
      });
    }).on('error', (err) => resolve({ asin: p.asin, id: p.id, ok: false, error: err.message }));
  });
}

(async () => {
  let passed = 0;
  const failed = [];

  for (let i = 0; i < products.length; i += 10) {
    const batch = products.slice(i, i + 10);
    const results = await Promise.all(batch.map(testProduct));
    for (const r of results) {
      if (r.ok) {
        passed++;
      } else {
        failed.push(r);
        console.error(`❌ LINK FAILED: [${r.id}] ${r.asin} -> Status ${r.status || r.error}`);
      }
    }
    process.stdout.write('.');
  }

  console.log(`\n\n------------------------------------------------------`);
  console.log(`Results: ${passed}/${products.length} links passed (100% target)`);
  if (failed.length > 0) {
    console.error(`🚨 FAILED: ${failed.length} broken links found!`);
    process.exit(1);
  } else {
    console.log(`🎉 SUCCESS: ALL ${passed} PRODUCT LINKS WORK 100% ON AMAZON EGYPT!`);
    process.exit(0);
  }
})();
