// scripts/parse-rsc.mjs
import fs from 'node:fs';

const html = fs.readFileSync('scripts/yestahil_sample.html', 'utf8');

// Look for Script 29
const scriptBodies = [...html.matchAll(/<script(?![^>]*src)[^>]*>([\s\S]*?)<\/script>/gi)].map(m => m[1]);
const longScript = scriptBodies.find(s => s.length > 20000);

if (longScript) {
  fs.writeFileSync('scripts/yestahil_rsc.txt', longScript, 'utf8');
  console.log(`Saved long script (${longScript.length} bytes) to scripts/yestahil_rsc.txt`);

  // Let's search for product attributes like title, price, store, discount, url
  // Match ASINs: B0[0-9A-Z]{8}
  const asins = [...new Set([...longScript.matchAll(/B0[0-9A-Z]{8}/g)].map(m => m[0]))];
  console.log(`Found ${asins.length} ASINs:`, asins);

  // Match prices in EGP / LE
  const prices = [...longScript.matchAll(/([0-9,]+(?:\.[0-9]+)?)\s*(?:ج\.م|EGP|LE)/g)].map(m => m[1]);
  console.log('Sample prices:', prices.slice(0, 10));

  // Match affiliate tags or domains
  const urls = [...new Set([...longScript.matchAll(/https?:\/\/[^\s\\\"\'<>]+/g)].map(m => m[0]))];
  console.log('Sample URLs:', urls.slice(0, 10));

  // Let's search for categories and navigation items
  const categories = [...new Set([...longScript.matchAll(/\/categories\/([a-zA-Z0-9_\-]+)/g)].map(m => m[1]))];
  console.log('Categories found in RSC:', categories);

  // Search for brands
  const brands = [...new Set([...longScript.matchAll(/\/brands\/([a-zA-Z0-9_\-]+)/g)].map(m => m[1]))];
  console.log('Brands found in RSC:', brands);
} else {
  console.log('Long script not found.');
}
