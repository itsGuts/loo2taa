// scripts/inspect-sample.mjs
import fs from 'node:fs';

const html = fs.readFileSync('scripts/yestahil_sample.html', 'utf8');

// Look for product card elements or links
const productLinks = [...html.matchAll(/<a[^>]*href=["'](\/p\/[^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi)];
console.log(`Found ${productLinks.length} product links matching /p/...`);

if (productLinks.length > 0) {
  console.log('\n--- FIRST PRODUCT CARD SNIPPET ---');
  console.log(productLinks[0][0].slice(0, 1500));
} else {
  // Check any links
  const allLinks = [...html.matchAll(/<a[^>]*href=["']([^"']+)["'][^>]*>/gi)].map(m => m[1]);
  console.log('Sample links found on page:', allLinks.slice(0, 30));
}

// Check for JSON or script payloads inside the HTML
const scriptBodies = [...html.matchAll(/<script(?![^>]*src)[^>]*>([\s\S]*?)<\/script>/gi)].map(m => m[1]);
console.log(`\nFound ${scriptBodies.length} inline scripts.`);
scriptBodies.forEach((body, idx) => {
  console.log(`Script ${idx} length: ${body.length}`);
  if (body.length < 500) {
    console.log(body);
  } else {
    console.log(body.slice(0, 300) + '...');
  }
});
