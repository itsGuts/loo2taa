// scripts/test-unescape.mjs
import fs from 'node:fs';

const html = fs.readFileSync('scripts/yestahil_product.html', 'utf8');

// Match the rsc push with initial
const rscMatch = html.match(/\\.rsc\\.push\\(\"(3:.*?)\"\\)/s) || html.match(/"initial":/);
console.log('Direct match:', !!rscMatch);

// Let's find script containing "display_title"
const scripts = [...html.matchAll(/<script(?![^>]*src)[^>]*>([\s\S]*?)<\/script>/gi)].map(m => m[1]);
const targetScript = scripts.find(s => s.includes('display_title'));

if (targetScript) {
  console.log('Target script found! Length:', targetScript.length);
  // Extract JSON object
  const startIdx = targetScript.indexOf('{"id":');
  if (startIdx !== -1) {
    // Find matching bracket or end of object
    const endIdx = targetScript.indexOf(',"productSummary"');
    let jsonStr = targetScript.slice(startIdx, endIdx);
    // Unescape if needed
    jsonStr = jsonStr.replace(/\\"/g, '"').replace(/\\\\/g, '\\');
    try {
      const data = JSON.parse(jsonStr);
      console.log('Successfully parsed initial data:');
      console.log(' - ASIN:', data.asin);
      console.log(' - Arabic Title:', data.display_title);
      console.log(' - English Title:', data.title);
      console.log(' - Price in EGP:', data.price / 100);
      console.log(' - Brand:', data.brand);
      console.log(' - Category:', data.category);
    } catch (e) {
      console.log('JSON parse error:', e.message);
      fs.writeFileSync('scripts/debug_json.txt', jsonStr, 'utf8');
    }
  }
}
