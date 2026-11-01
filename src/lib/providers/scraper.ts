import https from 'node:https';
import { FetchedProduct, PriceProvider } from './types';

const USER_AGENTS = [
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36',
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:130.0) Gecko/20100101 Firefox/130.0',
];

function getRandomUserAgent(): string {
  return USER_AGENTS[Math.floor(Math.random() * USER_AGENTS.length)];
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export class AmazonScraperProvider implements PriceProvider {
  public readonly name = 'Amazon Egypt Scraper Provider (HTTP)';
  public readonly isAvailable = true;

  private lastRequestTime = 0;
  private minIntervalMs = 800; // Rate limit: ~1 request per 800ms minimum

  private async enforceRateLimit(): Promise<void> {
    const elapsed = Date.now() - this.lastRequestTime;
    if (elapsed < this.minIntervalMs) {
      await sleep(this.minIntervalMs - elapsed);
    }
    this.lastRequestTime = Date.now();
  }

  private fetchHtml(asin: string, retryCount = 0): Promise<{ status: number; body: string }> {
    return new Promise((resolve) => {
      const url = `https://www.amazon.eg/dp/${asin}?language=ar_AE`;
      const req = https.request(
        url,
        {
          headers: {
            'User-Agent': getRandomUserAgent(),
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
            'Accept-Language': 'ar-EG,ar;q=0.9,en-US;q=0.8,en;q=0.7',
            'Cache-Control': 'no-cache',
            'Pragma': 'no-cache',
          },
        },
        (res) => {
          let body = '';
          res.on('data', (chunk) => {
            if (body.length < 300000) body += chunk;
          });
          res.on('end', () => resolve({ status: res.statusCode || 200, body }));
        }
      );

      req.on('error', async (err) => {
        if (retryCount < 2) {
          const backoff = Math.pow(2, retryCount) * 1000;
          console.warn(`[Scraper] Retrying ${asin} after ${backoff}ms due to: ${err.message}`);
          await sleep(backoff);
          resolve(await this.fetchHtml(asin, retryCount + 1));
        } else {
          resolve({ status: 500, body: '' });
        }
      });

      req.setTimeout(8000, async () => {
        req.destroy();
        if (retryCount < 2) {
          const backoff = Math.pow(2, retryCount) * 1000;
          await sleep(backoff);
          resolve(await this.fetchHtml(asin, retryCount + 1));
        } else {
          resolve({ status: 408, body: '' });
        }
      });

      req.end();
    });
  }

  public async fetchProduct(asin: string): Promise<FetchedProduct | null> {
    await this.enforceRateLimit();

    const { status, body } = await this.fetchHtml(asin);

    if (status !== 200 || !body || body.includes('Page Not Found') || body.includes('Looking for something?')) {
      return null;
    }

    // 1. Title
    const titleMatch = body.match(/<span id="productTitle"[^>]*>([\s\S]*?)<\/span>/);
    const title = titleMatch
      ? titleMatch[1].replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim()
      : `منتج أمازون ${asin}`;

    // 2. High-res Image
    const imgMatch =
      body.match(/data-old-hires="([^"]+)"/) ||
      body.match(/data-a-dynamic-image="\{&quot;([^&]+)&quot;/) ||
      body.match(/id="landingImage"[^>]+src="([^"]+)"/);
    let imageUrl = imgMatch ? (imgMatch[1] || imgMatch[0]).replace(/&quot;/g, '').split('":')[0].trim() : '';
    if (!imageUrl.startsWith('http')) imageUrl = 'https://m.media-amazon.com/images/I/71Y6f-Zq+6L._AC_SL1500_.jpg';

    // 3. Current Price
    const priceWhole = body.match(/<span class="a-price-whole">([0-9,]+)/);
    const currentPrice = priceWhole ? parseInt(priceWhole[1].replace(/,/g, ''), 10) : 0;

    // 4. Strikethrough / List Price
    const strikethroughMatch =
      body.match(/<span class="a-price a-text-price"[^>]*>[\s\S]*?<span class="a-offscreen">([0-9,]+)/) ||
      body.match(/data-a-strike="true">[\s\S]*?([0-9,]+)/);
    let listPrice = strikethroughMatch ? parseInt(strikethroughMatch[1].replace(/,/g, ''), 10) : currentPrice;
    if (listPrice < currentPrice) listPrice = currentPrice;

    // 5. Seller & Merchant
    let seller = 'أمازون مصر';
    if (body.includes('Ships from') || body.includes('يُشحن من قبل')) {
      const sellerMatch =
        body.match(/id="sellerProfileTriggerId"[^>]*>([^<]+)<\/a>/) ||
        body.match(/sold by\s*<a[^>]*>([^<]+)<\/a>/i) ||
        body.match(/يباع من قبل\s*<a[^>]*>([^<]+)<\/a>/);
      if (sellerMatch) seller = sellerMatch[1].trim();
    }

    // 6. Brand
    let brand = 'ماركة معتمدة';
    const brandMatch =
      body.match(/id="bylineInfo"[^>]*>([^<]+)<\/a>/) ||
      body.match(/class="po-brand"[^>]*>[\s\S]*?class="po-break-word">([^<]+)<\/span>/);
    if (brandMatch) {
      const rawBrand = brandMatch[1].replace(/^Brand:\s*|^ماركة:\s*|^Visit the\s*|\s*Store$/gi, '').trim();
      if (rawBrand && !rawBrand.includes('<!--')) brand = rawBrand;
    }

    // 7. Stock status
    const isOutOfStock =
      body.includes('غير متوفر حالياً') ||
      body.includes('Currently unavailable') ||
      body.includes('Out of stock');

    const affiliateTag = process.env.AFFILIATE_TAG || 'lo2taa-21';

    return {
      asin,
      title,
      displayTitle: title.length > 75 ? `${title.slice(0, 75)}...` : title,
      brand,
      category: 'pc-hardware',
      categoryAr: 'قطع وهاردوير البي سي',
      price: currentPrice,
      listPrice,
      seller,
      inStock: !isOutOfStock,
      imageUrl,
      url: `https://www.amazon.eg/dp/${asin}?tag=${affiliateTag}`,
      currency: 'EGP',
      fetchedAt: new Date().toISOString(),
    };
  }

  public async fetchBatch(asins: string[]): Promise<Map<string, FetchedProduct>> {
    const results = new Map<string, FetchedProduct>();
    for (const asin of asins) {
      try {
        const prod = await this.fetchProduct(asin);
        if (prod) results.set(asin, prod);
      } catch (err: unknown) {
        const msg = err instanceof Error ? err.message : String(err);
        console.error(`[Scraper] Failed to fetch ${asin}:`, msg);
      }
    }
    return results;
  }
}
