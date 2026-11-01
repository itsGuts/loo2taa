export interface FetchedProduct {
  asin: string;
  title: string;
  displayTitle?: string;
  brand: string;
  category: string;
  categoryAr: string;
  price: number;
  listPrice: number;
  seller: string;
  inStock: boolean;
  imageUrl: string;
  url: string;
  currency: string;
  fetchedAt: string;
}

export interface PriceProvider {
  readonly name: string;
  readonly isAvailable: boolean;
  fetchProduct(asin: string): Promise<FetchedProduct | null>;
  fetchBatch?(asins: string[]): Promise<Map<string, FetchedProduct>>;
}
