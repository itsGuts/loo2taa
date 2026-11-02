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
  { id: 'all', name: 'كل الصفقات', icon: 'Zap' },
  { id: 'pc-hardware', name: 'قطع وهاردوير البي سي', icon: 'Cpu' },
  { id: 'monitors', name: 'شاشات الكمبيوتر والألعاب', icon: 'Monitor' },
  { id: 'laptops', name: 'أجهزة اللابتوب والقيمنق', icon: 'Laptop' },
  { id: 'keyboards-mice', name: 'كيبوردات ميكانيكال وماوسات', icon: 'Keyboard' },
  { id: 'headsets', name: 'سماعات الألعاب والصوتيات', icon: 'Headphones' },
  { id: 'streaming-voice', name: 'مايكات ومعدات البث', icon: 'Mic' },
  { id: 'consoles-handheld', name: 'أجهزة ألعاب وكونسول', icon: 'Gamepad2' },
  { id: 'setup-aesthetic', name: 'إكسسوارات السيت أب والمكتب', icon: 'Sparkles' },
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
