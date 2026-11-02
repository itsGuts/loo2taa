// scripts/analyze-yestahil.mjs
import fs from 'node:fs';

async function analyze() {
  console.log('Fetching https://yestahil.cc/?sort=record-low ...');
  const res = await fetch('https://yestahil.cc/?sort=record-low', {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
    }
  });

  const html = await res.text();
  fs.writeFileSync('scripts/yestahil_sample.html', html, 'utf8');
  console.log(`Saved sample HTML (${html.length} bytes) to scripts/yestahil_sample.html`);

  // Extract script tags
  const scriptRegex = /<script[^>]*src=["']([^"']+)["'][^>]*>/gi;
  const scripts = [];
  let m;
  while ((m = scriptRegex.exec(html)) !== null) {
    scripts.push(m[1]);
  }
  console.log('\n--- SCRIPT TAGS (' + scripts.length + ') ---');
  scripts.forEach(s => console.log('Script:', s));

  // Extract store logos
  const storeLogoRegex = /\/store-logos\/([a-zA-Z0-9_\-\.]+)/gi;
  const stores = new Set();
  while ((m = storeLogoRegex.exec(html)) !== null) {
    stores.add(m[1]);
  }
  console.log('\n--- STORES DETECTED (' + stores.size + ') ---');
  stores.forEach(s => console.log('Store:', s));

  // Check categories in the HTML
  const categoryRegex = /href=["']\/\?category=([a-zA-Z0-9_\-]+)["']/gi;
  const categories = new Set();
  while ((m = categoryRegex.exec(html)) !== null) {
    categories.add(m[1]);
  }
  console.log('\n--- CATEGORIES DETECTED (' + categories.size + ') ---');
  categories.forEach(c => console.log('Category:', c));

  // Check sort options
  const sortRegex = /href=["']\/\?[^"']*sort=([a-zA-Z0-9_\-]+)["']/gi;
  const sorts = new Set();
  while ((m = sortRegex.exec(html)) !== null) {
    sorts.add(m[1]);
  }
  console.log('\n--- SORTS DETECTED (' + sorts.size + ') ---');
  sorts.forEach(s => console.log('Sort:', s));

  // Check for Next.js RSC Flight data or JSON blobs
  const rscRegex = /self\.__next_f\.push\(\[1,\s*"([\s\S]*?)"\]\)/g;
  let rscChunks = 0;
  let rscTotal = '';
  while ((m = rscRegex.exec(html)) !== null) {
    rscChunks++;
    rscTotal += m[1];
  }
  console.log(`\n--- NEXT.JS RSC FLIGHT PAYLOAD: ${rscChunks} chunks ---`);

  // Search inside HTML or RSC for keywords: "drops", "price", "record", "store", "product"
  // Let's sample a product JSON structure if found in RSC
  const productMatches = [...rscTotal.matchAll(/"title":\s*"([^"]+)"/g)].map(x => x[1]);
  console.log('Sample product titles in RSC payload (' + productMatches.length + '):');
  productMatches.slice(0, 10).forEach(t => console.log(' - ', t));
}

analyze().catch(console.error);
