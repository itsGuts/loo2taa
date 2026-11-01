import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { computeProductMetrics } from '../deal-math';
import { DbProduct, DbPriceHistory, DbAlert, DbCronLog, FullProductWithMetrics } from './types';

// In-memory fallbacks (seeded with the pre-verified products)
const memoryProducts: Map<string, DbProduct> = new Map();
const memoryHistory: Map<string, DbPriceHistory[]> = new Map();
const memoryAlerts: DbAlert[] = [];
const memoryCronLogs: DbCronLog[] = [];

// Initialize seed data from data/products.json
function initializeSeedData() {
  if (memoryProducts.size > 0) return;

  let rawList: any[] = [];
  try {
    const dataPath = path.resolve(process.cwd(), 'data', 'products.json');
    if (fs.existsSync(dataPath)) {
      rawList = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
    }
  } catch (err) {
    console.warn('[DB] Could not load data/products.json directly, using memory:', err);
  }

  for (const p of rawList) {
    const dbProd: DbProduct = {
      id: p.id || `p-${p.asin || Math.random()}`,
      asin: p.asin || p.id,
      title: p.title || 'منتج',
      display_title: p.display_title || p.title || 'منتج',
      brand: p.brand || 'ماركة معتمدة',
      category: p.category || 'pc-hardware',
      category_ar: p.category_ar || 'قطع وهاردوير البي سي',
      image_url: p.image || '',
      url: p.url || '',
      seller: p.seller || 'أمازون مصر',
      in_stock: p.in_stock !== false,
      price: Number(p.price) || 0,
      list_price: Number(p.previous_price) || Number(p.price) || 0,
      is_pinned: false,
      created_at: new Date(Date.now() - 90 * 24 * 60 * 60 * 1000).toISOString(),
      updated_at: p.price_checked_at || new Date().toISOString(),
    };

    memoryProducts.set(dbProd.id, dbProd);
    memoryProducts.set(dbProd.asin, dbProd);

    // Seed price history
    const histPoints: DbPriceHistory[] = (p.price_history || []).map((h: any, i: number) => ({
      id: `${dbProd.id}-${i}`,
      product_id: dbProd.id,
      asin: dbProd.asin,
      price: Number(h.price),
      list_price: Number(p.previous_price) || Number(h.price),
      seller: p.seller || 'أمازون مصر',
      captured_at: h.date || new Date(Date.now() - (90 - i * 6) * 24 * 60 * 60 * 1000).toISOString(),
    }));

    // Ensure at least one current point
    if (histPoints.length === 0) {
      histPoints.push({
        id: `${dbProd.id}-curr`,
        product_id: dbProd.id,
        asin: dbProd.asin,
        price: dbProd.price,
        list_price: dbProd.list_price,
        seller: dbProd.seller,
        captured_at: dbProd.updated_at || new Date().toISOString(),
      });
    }

    memoryHistory.set(dbProd.id, histPoints);
    memoryHistory.set(dbProd.asin, histPoints);
  }
}

initializeSeedData();

// Supabase REST Helper (active if SUPABASE_URL & keys exist)
const supabaseUrl = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const isSupabaseConfigured = Boolean(supabaseUrl && supabaseKey);

async function supabaseFetch<T>(endpoint: string, options: RequestInit = {}): Promise<T | null> {
  if (!isSupabaseConfigured) return null;
  try {
    const url = `${supabaseUrl}/rest/v1/${endpoint}`;
    const headers = {
      'apikey': supabaseKey!,
      'Authorization': `Bearer ${supabaseKey!}`,
      'Content-Type': 'application/json',
      'Prefer': 'return=representation',
      ...(options.headers || {}),
    };
    const res = await fetch(url, { ...options, headers });
    if (!res.ok) {
      const err = await res.text();
      console.warn(`[DB/Supabase] ${options.method || 'GET'} ${endpoint} error:`, err);
      return null;
    }
    return (await res.json()) as T;
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    console.warn(`[DB/Supabase] Connection error:`, msg);
    return null;
  }
}

export const db = {
  /**
   * Get all products with their computed deal metrics and history
   */
  async getAllProducts(): Promise<FullProductWithMetrics[]> {
    initializeSeedData();

    // Try Supabase if configured
    if (isSupabaseConfigured) {
      const remoteProds = await supabaseFetch<DbProduct[]>('products?select=*&order=updated_at.desc');
      if (remoteProds && remoteProds.length > 0) {
        return Promise.all(
          remoteProds.map(async (prod) => {
            const history = await this.getPriceHistory(prod.id);
            const metrics = computeProductMetrics(prod.price, prod.list_price, history);
            return {
              ...prod,
              history,
              metrics,
            };
          })
        );
      }
    }

    // Default to in-memory / local seed store
    const uniqueProds = Array.from(new Set(Array.from(memoryProducts.values())));
    return uniqueProds.map((prod) => {
      const history = memoryHistory.get(prod.id) || memoryHistory.get(prod.asin) || [];
      const metrics = computeProductMetrics(prod.price, prod.list_price, history);
      return {
        ...prod,
        history,
        metrics,
      };
    });
  },

  /**
   * Get a single product by ASIN or ID
   */
  async getProductByAsin(asinOrId: string): Promise<FullProductWithMetrics | null> {
    initializeSeedData();
    const cleanKey = asinOrId.trim().toUpperCase();

    // Check remote DB
    if (isSupabaseConfigured) {
      const remoteProds = await supabaseFetch<DbProduct[]>(`products?or=(asin.eq.${cleanKey},id.eq.${asinOrId})&limit=1`);
      if (remoteProds && remoteProds.length > 0) {
        const prod = remoteProds[0];
        const history = await this.getPriceHistory(prod.id);
        const metrics = computeProductMetrics(prod.price, prod.list_price, history);
        return {
          ...prod,
          history,
          metrics,
        };
      }
    }

    // Check local store
    const prod = memoryProducts.get(cleanKey) || memoryProducts.get(asinOrId);
    if (!prod) return null;

    const history = memoryHistory.get(prod.id) || memoryHistory.get(prod.asin) || [];
    const metrics = computeProductMetrics(prod.price, prod.list_price, history);

    return {
      ...prod,
      history,
      metrics,
    };
  },

  /**
   * Get price history for a product
   */
  async getPriceHistory(productId: string): Promise<DbPriceHistory[]> {
    initializeSeedData();

    if (isSupabaseConfigured) {
      const remoteHistory = await supabaseFetch<DbPriceHistory[]>(
        `price_history?product_id=eq.${productId}&order=captured_at.asc`
      );
      if (remoteHistory && remoteHistory.length > 0) return remoteHistory;
    }

    return memoryHistory.get(productId) || [];
  },

  /**
   * Add a new price observation point to price_history
   */
  async addPricePoint(
    productId: string,
    asin: string,
    price: number,
    listPrice: number,
    seller: string = 'أمازون مصر'
  ): Promise<DbPriceHistory> {
    initializeSeedData();
    const point: DbPriceHistory = {
      id: `pt-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
      product_id: productId,
      asin,
      price,
      list_price: listPrice,
      seller,
      captured_at: new Date().toISOString(),
    };

    // Save to remote DB
    if (isSupabaseConfigured) {
      await supabaseFetch('price_history', {
        method: 'POST',
        body: JSON.stringify(point),
      });
    }

    // Save to local memory
    const existing = memoryHistory.get(productId) || [];
    existing.push(point);
    memoryHistory.set(productId, existing);
    memoryHistory.set(asin, existing);

    // Update product current price
    const prod = memoryProducts.get(productId) || memoryProducts.get(asin);
    if (prod) {
      prod.price = price;
      prod.list_price = listPrice;
      prod.updated_at = point.captured_at;
    }

    return point;
  },

  /**
   * Upsert a product (e.g. from Deal Checker or Scraper)
   */
  async upsertProduct(prod: Partial<DbProduct> & { asin: string; title: string }): Promise<DbProduct> {
    initializeSeedData();
    const id = prod.id || `p-${prod.asin.toLowerCase()}`;
    const now = new Date().toISOString();

    const fullProduct: DbProduct = {
      id,
      asin: prod.asin.toUpperCase(),
      title: prod.title,
      display_title: prod.display_title || prod.title,
      brand: prod.brand || 'ماركة معتمدة',
      category: prod.category || 'pc-hardware',
      category_ar: prod.category_ar || 'قطع وهاردوير البي سي',
      image_url: prod.image_url || '',
      url: prod.url || `https://www.amazon.eg/dp/${prod.asin}?tag=lo2taa-21`,
      seller: prod.seller || 'أمازون مصر',
      in_stock: prod.in_stock !== false,
      price: prod.price || 0,
      list_price: prod.list_price || prod.price || 0,
      is_pinned: prod.is_pinned || false,
      created_at: prod.created_at || now,
      updated_at: now,
    };

    if (isSupabaseConfigured) {
      await supabaseFetch('products', {
        method: 'POST',
        headers: { 'Prefer': 'resolution=merge-duplicates' },
        body: JSON.stringify(fullProduct),
      });
    }

    memoryProducts.set(id, fullProduct);
    memoryProducts.set(fullProduct.asin, fullProduct);

    return fullProduct;
  },

  /**
   * Create a price alert
   */
  async createAlert(
    productId: string,
    asin: string,
    targetPrice: number,
    email?: string | null,
    telegramChatId?: string | null
  ): Promise<DbAlert> {
    const alert: DbAlert = {
      id: `alt-${Date.now()}`,
      product_id: productId,
      asin,
      email: email || null,
      telegram_chat_id: telegramChatId || null,
      target_price: targetPrice,
      active: true,
      unsubscribe_token: crypto.randomBytes(24).toString('hex'),
      created_at: new Date().toISOString(),
    };

    if (isSupabaseConfigured) {
      await supabaseFetch('alerts', {
        method: 'POST',
        body: JSON.stringify(alert),
      });
    }

    memoryAlerts.push(alert);
    return alert;
  },

  /**
   * Get active alerts for a product that should be triggered
   */
  async getTriggerableAlerts(productId: string, currentPrice: number): Promise<DbAlert[]> {
    if (isSupabaseConfigured) {
      const remote = await supabaseFetch<DbAlert[]>(
        `alerts?product_id=eq.${productId}&active=eq.true&target_price=gte.${currentPrice}`
      );
      if (remote) return remote;
    }

    return memoryAlerts.filter(
      (a) => a.product_id === productId && a.active && currentPrice <= a.target_price
    );
  },

  /**
   * Unsubscribe an alert by token
   */
  async unsubscribeAlert(token: string): Promise<boolean> {
    if (isSupabaseConfigured) {
      await supabaseFetch(`alerts?unsubscribe_token=eq.${token}`, {
        method: 'PATCH',
        body: JSON.stringify({ active: false }),
      });
    }

    const found = memoryAlerts.find((a) => a.unsubscribe_token === token);
    if (found) {
      found.active = false;
      return true;
    }
    return Boolean(isSupabaseConfigured);
  },

  /**
   * Log cron execution
   */
  async logCronJob(log: Omit<DbCronLog, 'id' | 'created_at'>): Promise<DbCronLog> {
    const fullLog: DbCronLog = {
      id: `cron-${Date.now()}`,
      ...log,
      created_at: new Date().toISOString(),
    };

    if (isSupabaseConfigured) {
      await supabaseFetch('cron_logs', {
        method: 'POST',
        body: JSON.stringify(fullLog),
      });
    }

    memoryCronLogs.unshift(fullLog);
    if (memoryCronLogs.length > 50) memoryCronLogs.pop(); // keep last 50

    return fullLog;
  },

  /**
   * Get recent cron logs
   */
  async getCronLogs(limit = 20): Promise<DbCronLog[]> {
    if (isSupabaseConfigured) {
      const remote = await supabaseFetch<DbCronLog[]>(`cron_logs?order=created_at.desc&limit=${limit}`);
      if (remote) return remote;
    }

    return memoryCronLogs.slice(0, limit);
  },
};
