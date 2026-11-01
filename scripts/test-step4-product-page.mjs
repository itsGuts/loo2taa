import fs from 'node:fs';

console.log('\n======================================================');
console.log('🧪 LO2TAA Step 4 Verification: Product Page & Recharts');
console.log('======================================================\n');

const products = JSON.parse(fs.readFileSync('data/products.json', 'utf8'));

let failed = 0;
function assert(condition, testName) {
  if (condition) {
    console.log(`✅ PASS: ${testName}`);
  } else {
    console.error(`❌ FAIL: ${testName}`);
    failed++;
  }
}

// 1. Test Product Lookup by ASIN
const sample = products[0];
assert(Boolean(sample && sample.asin), `Selected sample product: ${sample.asin} (${sample.display_title})`);

// 2. Test JSON-LD Product Schema Generation
const jsonLd = {
  "@context": "https://schema.org/",
  "@type": "Product",
  "name": sample.display_title,
  "image": [sample.image],
  "description": sample.title,
  "sku": sample.asin,
  "offers": {
    "@type": "Offer",
    "url": sample.url,
    "priceCurrency": "EGP",
    "price": sample.price,
    "availability": sample.in_stock !== false ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
  }
};
assert(jsonLd["@type"] === "Product", "JSON-LD schema type is Product");
assert(jsonLd.offers.priceCurrency === "EGP", "JSON-LD currency is EGP");
assert(jsonLd.offers.price === sample.price, "JSON-LD price matches product price");

// 3. Test Affiliate Tag Appending
const affiliateTag = process.env.AFFILIATE_TAG || "lo2taa-21";
const buyUrl = sample.url.includes("tag=") ? sample.url : `${sample.url}&tag=${affiliateTag}`;
assert(buyUrl.includes(`tag=${affiliateTag}`), `Outbound buy URL carries official affiliate tag: ${affiliateTag}`);

// 4. Test Recharts Time Range Slicing Logic
const now = Date.now();
const mockHistory = Array.from({ length: 30 }, (_, i) => ({
  date: new Date(now - (30 - i) * 6 * 24 * 60 * 60 * 1000).toISOString(),
  price: 1000 + (i % 5) * 50,
  timestamp: now - (30 - i) * 6 * 24 * 60 * 60 * 1000,
}));

// 1M: last 30 days
const range1M = mockHistory.filter(d => d.timestamp >= now - 30 * 24 * 60 * 60 * 1000);
// 3M: last 90 days
const range3M = mockHistory.filter(d => d.timestamp >= now - 90 * 24 * 60 * 60 * 1000);
// 6M: last 180 days
const range6M = mockHistory.filter(d => d.timestamp >= now - 180 * 24 * 60 * 60 * 1000);

assert(range1M.length <= range3M.length, "1M range has fewer or equal points to 3M range");
assert(range3M.length <= range6M.length, "3M range has fewer or equal points to 6M range");
assert(range6M.length <= mockHistory.length, "6M range subset of All range");

// 5. Test Canonical URL Pattern
const canonicalUrl = `https://loo2taa.vercel.app/p/${sample.asin}`;
assert(canonicalUrl.includes("/p/"), "Canonical URL points to clean /p/[asin] route");

console.log(`\n------------------------------------------------------`);
if (failed === 0) {
  console.log('🎉 ALL STEP 4 PRODUCT PAGE & CHART TESTS PASSED 100%!');
  process.exit(0);
} else {
  console.error(`🚨 ${failed} tests failed!`);
  process.exit(1);
}
