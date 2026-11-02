// scripts/deep-clean-titles.mjs
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const productsPath = path.resolve(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

let fixedCount = 0;

for (const p of products) {
  let title = p.display_title || p.title || '';

  const original = title;

  title = title
    // Remove buzzwords
    .replace(/\s*الأسطوري(?:ة)?\s*/g, ' ')
    .replace(/\s*الأقوى في العالم\s*/g, ' ')
    .replace(/\s*الأكثر مبيعاً(?: في تاريخ [^)]*)?\s*/g, ' ')
    .replace(/\s*وحش البطارية\s*/g, ' ')
    .replace(/\s*بوزن ريشة\s*/g, ' ')
    .replace(/\s*لرومات الديسكورد والبث\s*/g, ' ')
    .replace(/\s*للديسكورد والستريم\s*/g, ' ')
    .replace(/\s*للديسكورد\s*/g, ' ')
    .replace(/\s*الخارق(?:ة)?\s*/g, ' ')
    .replace(/\s*خارق(?:ة)?\s*/g, ' ')
    .replace(/\s*تكسر أسعار المائيات\s*/g, ' ')
    .replace(/\s*كيسة الأحلام\s*/g, ' ')
    .replace(/\s*أساطير الفالورانت والشوتر\s*/g, ' ')
    .replace(/\s*أفخم صوت كتابة وثبات ألومنيوم\s*/g, ' ')
    .replace(/\s*أفضل استثمار لراحة الظهر\s*/g, ' ')
    .replace(/\s*استثنائي(?:ة)?\s*/g, ' ')
    .replace(/\s*لا يقاوم\s*/g, ' ')
    .replace(/\s*بلا منازع\s*/g, ' ')
    .replace(/\s*بشحنة واحدة فقط\s*/g, ' ')
    .replace(/\s*إطلاقاً\s*/g, ' ')
    .replace(/\s+ة\s+/g, ' ') // Stray isolated 'ة'
    .replace(/\s{2,}/g, ' ')
    .trim();

  // If title ends with stray brackets like "()", clean them
  title = title.replace(/\(\s*\)/g, '').trim();

  if (title !== original) {
    p.display_title = title;
    fixedCount++;
  }
}

fs.writeFileSync(productsPath, JSON.stringify(products, null, 2), 'utf8');
console.log(`Deep title clean finished: updated ${fixedCount} product titles.`);
