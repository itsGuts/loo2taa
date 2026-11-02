// scripts/extract-product-chart.mjs
import fs from 'node:fs';

const html = fs.readFileSync('scripts/yestahil_product.html', 'utf8');

// Look for chart data or SVG or canvas or recharts
const hasSvg = html.includes('<svg');
const hasCanvas = html.includes('<canvas');
console.log('Has SVG:', hasSvg, '| Has Canvas:', hasCanvas);

// Look for price data array inside script or HTML
const pricesMatch = html.match(/\[\s*\{[^}]*\"price\"[^}]*\}\s*\]/g);
console.log('Prices array matches:', pricesMatch ? pricesMatch.length : 0);

// Let's find all script tags in product page
const scripts = [...html.matchAll(/<script[^>]*src=["']([^"']+)["'][^>]*>/gi)].map(m => m[1]);
console.log('Scripts on product page:', scripts);

// Let's see all inline scripts
const inlineScripts = [...html.matchAll(/<script(?![^>]*src)[^>]*>([\s\S]*?)<\/script>/gi)].map(m => m[1]);
console.log(`Inline scripts: ${inlineScripts.length}`);
inlineScripts.forEach((s, i) => {
  if (s.includes('2026-')) {
    console.log(`Script ${i} contains dates! Length: ${s.length}`);
    fs.writeFileSync(`scripts/chart_script_${i}.txt`, s, 'utf8');
  }
});
