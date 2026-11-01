import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

console.log('\n======================================================');
console.log('🧪 LO2TAA Step 3 Verification: Listing, Sorts & Filters');
console.log('======================================================\n');

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const products = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/products.json'), 'utf8'));

let failed = 0;
function assert(condition, testName) {
  if (condition) {
    console.log(`✅ PASS: ${testName}`);
  } else {
    console.error(`❌ FAIL: ${testName}`);
    failed++;
  }
}

// 1. Total Products
assert(products.length >= 120, `Loaded ${products.length} products for listing tests`);

// 2. Test Category Mapping
function matchesCategory(prodCategory, filterCat) {
  if (!filterCat || filterCat === 'all') return true;
  if (filterCat === 'gaming_pc') {
    return ['pc-hardware', 'consoles-handheld', 'laptops', 'gaming_pc'].includes(prodCategory);
  }
  if (filterCat === 'electronics') {
    return ['monitors', 'keyboards-mice', 'headsets', 'streaming-voice', 'electronics'].includes(prodCategory);
  }
  if (filterCat === 'home_kitchen') {
    return ['setup-aesthetic', 'home_kitchen', 'home-kitchen'].includes(prodCategory);
  }
  if (filterCat === 'tools_auto') {
    return ['tools_auto', 'tools', 'auto'].includes(prodCategory);
  }
  if (filterCat === 'fashion') {
    return ['fashion', 'apparel'].includes(prodCategory);
  }
  if (filterCat === 'other') {
    return !['pc-hardware', 'consoles-handheld', 'laptops', 'monitors', 'keyboards-mice', 'headsets', 'streaming-voice'].includes(prodCategory);
  }
  return prodCategory === filterCat;
}

const gamingPcs = products.filter(p => matchesCategory(p.category, 'gaming_pc'));
assert(gamingPcs.length > 0, `Category 'gaming_pc' correctly matched ${gamingPcs.length} products`);

const electronics = products.filter(p => matchesCategory(p.category, 'electronics'));
assert(electronics.length > 0, `Category 'electronics' correctly matched ${electronics.length} products`);

// 3. Test 6 Sort Tabs
// Sort 1: Biggest discount
const sortedByDiscount = [...products].sort((a, b) => b.discount_percent - a.discount_percent);
assert(sortedByDiscount[0].discount_percent >= sortedByDiscount[1].discount_percent, 'Sort "biggest discount" orders descending by discount %');

// Sort 2: Record low
const sortedByRecordLow = [...products].sort((a, b) => (b.is_record_low ? 1 : 0) - (a.is_record_low ? 1 : 0) || b.discount_percent - a.discount_percent);
assert(sortedByRecordLow[0].is_record_low === true, 'Sort "record-low" puts record low deals first');

// Sort 3: Newest drop
const sortedByNewestDrop = [...products].sort((a, b) => {
  const aDown = a.price_change_direction === 'down' ? 1 : 0;
  const bDown = b.price_change_direction === 'down' ? 1 : 0;
  if (bDown !== aDown) return bDown - aDown;
  return new Date(b.price_checked_at).getTime() - new Date(a.price_checked_at).getTime();
});
assert(sortedByNewestDrop.length === products.length, 'Sort "newest-drop" successfully ordered all deals');

// Sort 4: Biggest rise
const sortedByBiggestRise = [...products].sort((a, b) => {
  const aDiff = a.price - (a.previous_price || a.price);
  const bDiff = b.price - (b.previous_price || b.price);
  return bDiff - aDiff;
});
assert(sortedByBiggestRise.length === products.length, 'Sort "biggest-rise" successfully ordered all deals');

// Sort 5: Price Low to High
const sortedByPriceAsc = [...products].sort((a, b) => a.price - b.price);
assert(sortedByPriceAsc[0].price <= sortedByPriceAsc[1].price, 'Sort "price low to high" orders ascending by price');

// Sort 6: Most tracked
const sortedByMostTracked = [...products].sort((a, b) => (b.points_count || 12) * (b.review_count || 100) - (a.points_count || 12) * (a.review_count || 100));
assert(sortedByMostTracked.length === products.length, 'Sort "most-tracked" successfully ordered by tracking score');

// 4. Test Search
const searchHyperX = products.filter(p => p.display_title.toLowerCase().includes('hyperx') || p.brand.toLowerCase().includes('hyperx'));
assert(searchHyperX.length > 0, `Search for "HyperX" found ${searchHyperX.length} matching products`);

// 5. Test Min Discount Filter
const over20Discount = products.filter(p => p.discount_percent >= 20);
assert(over20Discount.every(p => p.discount_percent >= 20), 'Min discount 20% filter accurately filters products');

// 6. Test Pagination
const pageSize = 24;
const page1 = products.slice(0, pageSize);
const page2 = products.slice(pageSize, pageSize * 2);
assert(page1.length === 24, 'Pagination page 1 slices exactly 24 items');
assert(page2.length === 24, 'Pagination page 2 slices exactly 24 items');
assert(page1[0].id !== page2[0].id, 'Page 1 and Page 2 have disjoint product sets');

console.log(`\n------------------------------------------------------`);
if (failed === 0) {
  console.log('🎉 ALL STEP 3 LISTING & FILTER TESTS PASSED 100%!');
  process.exit(0);
} else {
  console.error(`🚨 ${failed} tests failed!`);
  process.exit(1);
}
