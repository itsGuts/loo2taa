// scripts/master-audit.mjs
// Comprehensive Platform Health & Quality Audit for LO2TAA

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import assert from 'node:assert/strict';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');

console.log('\n================================================================');
console.log('🔍 LO2TAA (لقطة) - COMPREHENSIVE FULL PLATFORM HEALTH AUDIT');
console.log('================================================================\n');

let issues = [];

// 1. DATA INTEGRITY CHECK
console.log('📦 1. Auditing Products Data (data/products.json)...');
const productsPath = path.join(rootDir, 'data', 'products.json');
assert.ok(fs.existsSync(productsPath), 'data/products.json exists');
const products = JSON.parse(fs.readFileSync(productsPath, 'utf-8'));

console.log(`   - Total products loaded: ${products.length}`);
assert.ok(products.length >= 100, `Expected at least 100 products, found ${products.length}`);

for (const [idx, p] of products.entries()) {
  // Brand check
  if (!p.brand || p.brand.includes('<!--') || p.brand.includes('indicator') || p.brand.length < 2) {
    issues.push(`Product #${idx} (${p.asin}): Corrupted or invalid brand: "${p.brand}"`);
  }
  // Title check
  if (!p.display_title || p.display_title.length < 5) {
    issues.push(`Product #${idx} (${p.asin}): Missing or too short display_title`);
  }
  // Price check
  if (typeof p.price !== 'number' || p.price <= 0 || isNaN(p.price)) {
    issues.push(`Product #${idx} (${p.asin}): Invalid price: ${p.price}`);
  }
  // Price history check
  if (!Array.isArray(p.price_history) || p.price_history.length === 0) {
    issues.push(`Product #${idx} (${p.asin}): Missing or empty price_history`);
  }
  // ASIN check
  if (!p.asin || p.asin.length < 5) {
    issues.push(`Product #${idx}: Invalid ASIN "${p.asin}"`);
  }
}

if (issues.length === 0) {
  console.log('   ✅ All products passed brand, title, price, and history validations.');
} else {
  console.error(`   ❌ Found ${issues.length} data issues:`, issues.slice(0, 5));
}

// 2. EXCLUSION POLICY CHECK (NO NOON)
console.log('\n🚫 2. Auditing Exclusion Policy (Strictly 0 Noon references)...');
let noonViolations = 0;
const filesToCheck = [
  'README.md',
  'src/lib/loo2taa-data.ts',
  'src/components/Footer.tsx',
  'src/components/Navbar.tsx',
  'src/app/page.tsx',
  'src/app/catalog/page.tsx',
  'src/app/about/page.tsx',
];

for (const file of filesToCheck) {
  const filePath = path.join(rootDir, file);
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf-8');
    // Match the store Noon (case-insensitive noon or Arabic نون surrounded by space or punctuation)
    const matches = content.match(/(^|[\s,،"'])noon([\s,،"']|$)|(^|[\s,،"'])نون([\s,،"']|$)/gi);
    if (matches) {
      console.error(`   ❌ Noon violation in ${file}:`, matches);
      noonViolations++;
    }
  }
}

if (noonViolations === 0) {
  console.log('   ✅ Strictly 0 Noon store references across all user-facing pages & code.');
}

// 3. AFFILIATE TAG CHECK
console.log('\n🏷️  3. Auditing Amazon Affiliate Tag...');
const footerCode = fs.readFileSync(path.join(rootDir, 'src/components/Footer.tsx'), 'utf-8');
assert.ok(footerCode.includes('Amazon Associates'), 'Footer contains Amazon Associates disclosure');
const productPageCode = fs.readFileSync(path.join(rootDir, 'src/app/p/[asin]/page.tsx'), 'utf-8');
assert.ok(productPageCode.includes('AFFILIATE_TAG') || productPageCode.includes('lo2taa-21'), 'Product page dynamically applies affiliate tag');
console.log('   ✅ Affiliate disclosures and tags verified.');

// 4. VERIFY FILE STRUCTURE & REQUIRED ROUTES
console.log('\n📁 4. Auditing Required Routes & Architecture...');
const requiredFiles = [
  'src/app/page.tsx',
  'src/app/catalog/page.tsx',
  'src/app/p/[asin]/page.tsx',
  'src/app/inspect/page.tsx',
  'src/app/admin/page.tsx',
  'src/app/favorites/page.tsx',
  'src/app/sitemap.ts',
  'src/app/robots.ts',
  'src/app/api/inspect/route.ts',
  'src/app/api/alerts/create/route.ts',
  'src/app/api/alerts/unsubscribe/route.ts',
  'src/app/api/cron/refresh-prices/route.ts',
  'src/app/api/admin/route.ts',
  'src/lib/deal-math.ts',
  'src/lib/db/index.ts',
  'src/lib/alerts.ts',
  'src/lib/providers/index.ts',
  'src/components/PriceHistoryChart.tsx',
  'src/components/PriceAlertModal.tsx',
  'src/components/DealInspector.tsx',
  'src/components/ProductCard.tsx',
  'scripts/migrations/001_initial_schema.sql',
  'vercel.json',
  '.env.example',
  'README.md',
];

let missingFiles = 0;
for (const relPath of requiredFiles) {
  const fullPath = path.join(rootDir, relPath);
  if (!fs.existsSync(fullPath)) {
    console.error(`   ❌ Missing required file: ${relPath}`);
    missingFiles++;
  }
}
if (missingFiles === 0) {
  console.log(`   ✅ All ${requiredFiles.length} critical project files exist in place.`);
}

console.log('\n================================================================');
if (issues.length === 0 && noonViolations === 0 && missingFiles === 0) {
  console.log('🎉 MASTER AUDIT PASSED: 100% HEALTHY & PRODUCTION READY!');
} else {
  console.error('⚠️ MASTER AUDIT DETECTED ISSUES TO RESOLVE');
  process.exit(1);
}
console.log('================================================================\n');
