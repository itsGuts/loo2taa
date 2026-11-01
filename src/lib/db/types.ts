import { ComputedProductMetrics } from '../deal-math';

export interface DbProduct {
  id: string;
  asin: string;
  title: string;
  display_title: string;
  brand: string;
  category: string;
  category_ar: string;
  image_url: string;
  url: string;
  seller: string;
  in_stock: boolean;
  price: number;
  list_price: number;
  is_pinned?: boolean;
  created_at?: string;
  updated_at?: string;
}

export interface DbPriceHistory {
  id?: string | number;
  product_id: string;
  asin: string;
  price: number;
  list_price: number;
  seller: string;
  captured_at: string;
}

export interface DbAlert {
  id?: string | number;
  product_id: string;
  asin: string;
  email?: string | null;
  telegram_chat_id?: string | null;
  target_price: number;
  active: boolean;
  unsubscribe_token: string;
  last_notified_at?: string | null;
  created_at?: string;
}

export interface DbCronLog {
  id?: string | number;
  job_name: string;
  status: 'success' | 'partial' | 'error';
  products_checked: number;
  prices_updated: number;
  alerts_triggered: number;
  duration_ms: number;
  error_message?: string | null;
  created_at?: string;
}

export interface FullProductWithMetrics extends DbProduct {
  metrics: ComputedProductMetrics;
  history: DbPriceHistory[];
}
