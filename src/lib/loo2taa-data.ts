import { Product, MarketplaceSetting } from './types';
import productsData from '../../data/products.json';

export const MARKETPLACE_SETTINGS: Record<string, MarketplaceSetting> = {
  amazon: {
    key: 'amazon',
    name: 'أمازون مصر',
    buttonLabel: 'اقتنص اللقطة من أمازون ⚡',
    primaryColor: '#00f0ff',
    textColor: '#07090e',
    surfaceColor: '#0d1527',
  },
};

export const CATEGORIES = [
  { id: 'all', name: 'كل اللقطات', icon: 'Zap' },
  { id: 'streaming-voice', name: 'مايكات وصوتيات ديسكورد', icon: 'Mic' },
  { id: 'headsets', name: 'سماعات ديسكورد وقيمنق', icon: 'Headphones' },
  { id: 'keyboards-mice', name: 'كيبوردات ميكانيكال وماوسات', icon: 'Keyboard' },
  { id: 'setup-aesthetic', name: 'سيت أب وديكور وإضاءة RGB', icon: 'Sparkles' },
  { id: 'monitors', name: 'شاشات قيمنق 144Hz+', icon: 'Monitor' },
  { id: 'pc-hardware', name: 'تجميعات وهاردوير البي سي', icon: 'Cpu' },
  { id: 'consoles-handheld', name: 'كونسول واكسسوارات', icon: 'Gamepad2' },
  { id: 'laptops', name: 'لابتوبات قيمنق ومونتاج', icon: 'Laptop' },
];

export const PRODUCTS: Product[] = productsData as unknown as Product[];

export function getAllProducts(): Product[] {
  return PRODUCTS;
}

export function getProductById(idOrAsin: string): Product | undefined {
  return PRODUCTS.find(p => p.id === idOrAsin || p.asin?.toUpperCase() === idOrAsin?.toUpperCase());
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  return PRODUCTS.filter(p => p.id !== product.id && (p.category === product.category || p.brand === product.brand)).slice(0, limit);
}

export function getUniqueBrands(): string[] {
  return Array.from(new Set(PRODUCTS.map(p => p.brand))).sort();
}
