export type MarketplaceKey = 'amazon';

export interface PricePoint {
  date: string;
  price: number;
  label: string;
}

export interface ReviewSource {
  name: string;
  verified: boolean;
  date: string;
}

export interface AiReview {
  pros: string[];
  cons: string[];
  brand_summary: string;
  user_sentiment: string;
  sources: ReviewSource[];
}

export interface Product {
  id: string;
  asin: string;
  display_title: string;
  title: string;
  brand: string;
  category: string;
  category_ar: string;
  marketplace: MarketplaceKey;
  store_name: string;
  store_button_label: string;
  seller: string;
  url: string;
  image: string;
  price: number;
  previous_price: number;
  savings: number;
  discount_percent: number;
  is_record_low: boolean;
  price_change_direction: 'down' | 'up';
  price_checked_at: string;
  rating: number;
  review_count: number;
  in_stock?: boolean;
  is_deal_active?: boolean;
  stock_status?: 'in_stock' | 'out_of_stock' | 'deal_expired';
  price_history: PricePoint[];
  ai_review: AiReview;
}

export interface MarketplaceSetting {
  key: MarketplaceKey;
  name: string;
  buttonLabel: string;
  logoUrl?: string;
  primaryColor: string;
  textColor: string;
  surfaceColor: string;
}

export interface FilterOptions {
  query?: string;
  category?: string;
  brand?: string;
  marketplace?: string;
  sort?: string;
  minPrice?: number;
  maxPrice?: number;
  minDiscount?: number;
}
