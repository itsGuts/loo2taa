/**
 * LO2TAA (لقطة) - Deal Math & Price History Intelligence Engine
 * 
 * Computes:
 * - 90-day statistical median ("Reference Price" - السعر المرجعي) to defeat artificial markups
 * - 30-day and 90-day moving averages
 * - Lowest ever (أقل سعر تاريخي) & Highest ever (أعلى سعر)
 * - Real discount percentage against reference baseline
 * - Algorithmic Deal Verdict: real_deal | good_price | fake_discount | normal
 */

export interface PriceHistoryEntry {
  price: number;
  list_price?: number;
  date?: string;
  captured_at?: string;
}

export type VerdictType = 'real_deal' | 'good_price' | 'fake_discount' | 'normal';

export interface DealVerdict {
  type: VerdictType;
  label: string;
  labelShort: string;
  color: string;
  bgColor: string;
  borderColor: string;
}

export interface ComputedProductMetrics {
  current_price: number;
  lowest_ever: number;
  highest_ever: number;
  avg_30d: number;
  avg_90d: number;
  reference_price: number; // 90-day median
  savings_vs_reference: number;
  real_discount_percent: number;
  is_record_low: boolean;
  price_change_direction: 'down' | 'up' | 'same';
  drop_level: 'record_low' | 'steep' | 'medium' | 'slight' | 'none';
  points_count: number;
  verdict: DealVerdict;
}

/**
 * Calculates statistical median of an array of numbers
 */
export function calculateMedian(numbers: number[]): number {
  if (!numbers || numbers.length === 0) return 0;
  const sorted = [...numbers].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  if (sorted.length % 2 !== 0) {
    return sorted[mid];
  }
  return Math.round((sorted[mid - 1] + sorted[mid]) / 2);
}

/**
 * Calculates moving average of an array of numbers
 */
export function calculateAverage(numbers: number[]): number {
  if (!numbers || numbers.length === 0) return 0;
  const sum = numbers.reduce((acc, val) => acc + val, 0);
  return Math.round(sum / numbers.length);
}

/**
 * Computes all deal metrics for a given product and its historical price points.
 */
export function computeProductMetrics(
  currentPrice: number,
  listPrice: number = 0,
  history: PriceHistoryEntry[] = []
): ComputedProductMetrics {
  const safeCurrent = Math.max(0, Number(currentPrice) || 0);
  const safeList = Math.max(0, Number(listPrice) || 0);

  // Extract all valid numeric prices
  const validHistoryPrices: number[] = history
    .map(h => Number(h.price))
    .filter(p => !isNaN(p) && p > 0);

  // If no history, baseline against current price
  const allPrices = validHistoryPrices.length > 0 ? [...validHistoryPrices, safeCurrent] : [safeCurrent];

  const lowestEver = Math.min(...allPrices);
  const highestEver = Math.max(...allPrices);
  const pointsCount = allPrices.length;

  // Filter prices by 30 and 90 day windows if dates are present
  const now = Date.now();
  const prices30d: number[] = [];
  const prices90d: number[] = [];

  for (const item of history) {
    const rawDate = item.date || item.captured_at;
    if (rawDate) {
      const itemTime = new Date(rawDate).getTime();
      const ageDays = (now - itemTime) / (1000 * 60 * 60 * 24);
      if (ageDays <= 30) prices30d.push(Number(item.price));
      if (ageDays <= 90) prices90d.push(Number(item.price));
    }
  }

  // Fallbacks if historical date tagging is partial
  const finalPrices30d = prices30d.length > 0 ? prices30d : allPrices.slice(-Math.min(10, allPrices.length));
  const finalPrices90d = prices90d.length > 0 ? prices90d : allPrices;

  const avg30d = calculateAverage(finalPrices30d);
  const avg90d = calculateAverage(finalPrices90d);

  // Reference Price: 90-day Median
  let referencePrice = calculateMedian(finalPrices90d);
  if (referencePrice <= 0) referencePrice = safeList > safeCurrent ? safeList : safeCurrent;

  // Savings vs Reference Price
  const savingsVsRef = Math.max(0, referencePrice - safeCurrent);
  const realDiscountPercent = referencePrice > 0 && safeCurrent < referencePrice
    ? Math.round(((referencePrice - safeCurrent) / referencePrice) * 100)
    : 0;

  // Previous recorded price (for direction)
  const prevPrice = validHistoryPrices.length > 0
    ? validHistoryPrices[validHistoryPrices.length - 1]
    : safeCurrent;

  const priceChangeDirection: 'down' | 'up' | 'same' =
    safeCurrent < prevPrice ? 'down' : safeCurrent > prevPrice ? 'up' : 'same';

  // Record low status: Current price is at or below historical lowest
  // (allowing 0.5% margin for rounding)
  const isRecordLow = safeCurrent <= (lowestEver * 1.005);

  // Drop Level categorization (Yestahil formula)
  let dropLevel: 'record_low' | 'steep' | 'medium' | 'slight' | 'none' = 'none';
  if (isRecordLow && realDiscountPercent > 0) {
    dropLevel = 'record_low';
  } else if (realDiscountPercent >= 20) {
    dropLevel = 'steep';
  } else if (realDiscountPercent >= 10) {
    dropLevel = 'medium';
  } else if (realDiscountPercent > 0) {
    dropLevel = 'slight';
  }

  // Algorithmic Verdict Determination
  const isListPriceInflated = safeList > (referencePrice * 1.18);
  const isActuallyCheap = safeCurrent < (referencePrice * 0.95);

  let verdict: DealVerdict;

  if (isListPriceInflated && !isActuallyCheap) {
    verdict = {
      type: 'fake_discount',
      label: 'خصم وهمي: تم رفع السعر الأساسي الصوري للإيهام بنسبة تخفيض كبيرة، بينما السعر الحالي هو السعر المعتاد في السوق.',
      labelShort: 'خصم وهمي ⚠️',
      color: '#f87171',
      bgColor: 'rgba(239, 68, 68, 0.1)',
      borderColor: 'rgba(239, 68, 68, 0.3)',
    };
  } else if (isRecordLow && realDiscountPercent >= 5) {
    verdict = {
      type: 'real_deal',
      label: `صفقة استثنائية (أقل سعر مسجل): المنتج يباع الآن بسعر قياسي لم يصل إليه منذ 90 يوماً بتوفير ${savingsVsRef.toLocaleString('ar-EG')} ج.م عن السعر المرجعي.`,
      labelShort: 'لقطة حقيقية ⚡',
      color: '#00ff9d',
      bgColor: 'rgba(0, 255, 157, 0.1)',
      borderColor: 'rgba(0, 255, 157, 0.3)',
    };
  } else if (realDiscountPercent >= 15) {
    verdict = {
      type: 'real_deal',
      label: `خصم حقيقي ممتاز: هبوط بنسبة ${realDiscountPercent}% عن متوسط السوق (السعر المرجعي: ${referencePrice.toLocaleString('ar-EG')} ج.م).`,
      labelShort: 'لقطة ممتازة 🔥',
      color: '#00ff9d',
      bgColor: 'rgba(0, 255, 157, 0.1)',
      borderColor: 'rgba(0, 255, 157, 0.3)',
    };
  } else if (realDiscountPercent >= 7) {
    verdict = {
      type: 'good_price',
      label: `سعر جيد جداً: أقل بنسبة ${realDiscountPercent}% مقارنة بالمتوسط التاريخي للمنتج في السوق.`,
      labelShort: 'سعر جيد 🏷️',
      color: '#38bdf8',
      bgColor: 'rgba(56, 189, 248, 0.1)',
      borderColor: 'rgba(56, 189, 248, 0.3)',
    };
  } else {
    verdict = {
      type: 'normal',
      label: 'سعر عادي: السعر الحالي يطابق النطاق الطبيعي للمنتج عبر آخر 90 يوماً دون تخفيض استثنائي.',
      labelShort: 'سعر السوق الطبيعي',
      color: '#94a3b8',
      bgColor: 'rgba(148, 163, 184, 0.1)',
      borderColor: 'rgba(148, 163, 184, 0.2)',
    };
  }

  return {
    current_price: safeCurrent,
    lowest_ever: lowestEver,
    highest_ever: highestEver,
    avg_30d: avg30d,
    avg_90d: avg90d,
    reference_price: referencePrice,
    savings_vs_reference: savingsVsRef,
    real_discount_percent: realDiscountPercent,
    is_record_low: isRecordLow,
    price_change_direction: priceChangeDirection,
    drop_level: dropLevel,
    points_count: pointsCount,
    verdict,
  };
}

/**
 * Enriches any product object with dynamic deal math metrics
 */
export function enrichProductWithMetrics<T extends { price: number; previous_price?: number; price_history?: any[] }>(product: T): T & {
  reference_price: number;
  lowest_ever: number;
  highest_ever: number;
  avg_30d: number;
  avg_90d: number;
  savings: number;
  discount_percent: number;
  is_record_low: boolean;
  drop_level?: 'record_low' | 'steep' | 'medium' | 'slight';
  points_count: number;
  price_change_direction: 'down' | 'up' | 'same';
  deal_verdict: DealVerdict;
} {
  const history = (product.price_history || []).map((h: any) => ({
    price: Number(h.price),
    list_price: Number(product.previous_price || h.price),
    date: h.date || h.captured_at,
  }));
  const metrics = computeProductMetrics(product.price, product.previous_price || product.price, history);

  return {
    ...product,
    reference_price: metrics.reference_price,
    lowest_ever: metrics.lowest_ever,
    highest_ever: metrics.highest_ever,
    avg_30d: metrics.avg_30d,
    avg_90d: metrics.avg_90d,
    savings: metrics.savings_vs_reference,
    discount_percent: metrics.real_discount_percent,
    is_record_low: metrics.is_record_low,
    drop_level: metrics.drop_level === 'none' ? undefined : metrics.drop_level,
    points_count: metrics.points_count,
    price_change_direction: metrics.price_change_direction,
    deal_verdict: metrics.verdict,
  };
}
