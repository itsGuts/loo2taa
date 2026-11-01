// Pure JavaScript test mirroring deal-math to test the algorithms
import { calculateMedian, calculateAverage, computeProductMetrics } from '../src/lib/deal-math.ts';

console.log('\n======================================================');
console.log('🧪 LO2TAA Math Verification: 90-day Median & Deal Verdict');
console.log('======================================================\n');

let failed = 0;
function assert(condition, testName) {
  if (condition) {
    console.log(`✅ PASS: ${testName}`);
  } else {
    console.error(`❌ FAIL: ${testName}`);
    failed++;
  }
}

// 1. Test Median Math
const oddArr = [1000, 1500, 1200, 1800, 1100];
assert(calculateMedian(oddArr) === 1200, 'Median of odd array [1000, 1500, 1200, 1800, 1100] == 1200');

const evenArr = [1000, 1200, 1400, 1600];
assert(calculateMedian(evenArr) === 1300, 'Median of even array [1000, 1200, 1400, 1600] == 1300');

// 2. Test Average Math
assert(calculateAverage([10, 20, 30]) === 20, 'Average of [10, 20, 30] == 20');

// 3. Test Deal Verdict: Fake Discount Detection
const fakeHistory = [
  { price: 1000, date: '2026-10-01' },
  { price: 1020, date: '2026-10-10' },
  { price: 990,  date: '2026-10-20' },
];
// Merchant claims list price was 1800 (inflated by > 70%), but is selling at 1000 (normal median)
const fakeMetrics = computeProductMetrics(1000, 1800, fakeHistory);
assert(fakeMetrics.verdict.type === 'fake_discount', 'Correctly detects fake discount when list price was inflated');
assert(fakeMetrics.reference_price === 1000, 'Reference price correctly calculated as 1000 (90-day median)');
assert(fakeMetrics.verdict.labelShort.includes('خصم وهمي'), 'Verdict labelShort contains Arabic fake discount warning');

// 4. Test Deal Verdict: Genuine Record Low
const realHistory = [
  { price: 1500, date: '2026-09-01' },
  { price: 1450, date: '2026-09-15' },
  { price: 1400, date: '2026-10-01' },
  { price: 1350, date: '2026-10-15' },
];
// Selling for 990 (well below any previous price)
const realMetrics = computeProductMetrics(990, 1400, realHistory);
assert(realMetrics.is_record_low === true, 'Correctly marks is_record_low == true');
assert(realMetrics.verdict.type === 'real_deal', 'Correctly classifies genuine record low as real_deal');
assert(realMetrics.drop_level === 'record_low', 'Drop level categorized as record_low');
assert(realMetrics.real_discount_percent > 0, `Real discount vs reference is ${realMetrics.real_discount_percent}%`);

console.log(`\n------------------------------------------------------`);
if (failed === 0) {
  console.log('🎉 ALL MATH & ALGORITHM TESTS PASSED 100%!');
  process.exit(0);
} else {
  console.error(`🚨 ${failed} tests failed!`);
  process.exit(1);
}
