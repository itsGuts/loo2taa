import { Product, MarketplaceSetting } from './types';
import productsData from '../../data/products.json';

export const MARKETPLACE_SETTINGS: Record<string, MarketplaceSetting> = {
  amazon: {
    key: 'amazon',
    name: 'Amazon Egypt',
    buttonLabel: 'اقتنص اللقطة من أمازون ⚡',
    primaryColor: '#00f0ff',
    textColor: '#07090e',
    surfaceColor: '#0d1527',
  },
};

export const CATEGORIES = [
  { id: 'all', name: 'All Deals', nameAr: 'كل الصفقات', icon: 'Zap' },
  { id: 'pc-hardware', name: 'PC Hardware', nameAr: 'قطع وهاردوير البي سي', icon: 'Cpu' },
  { id: 'monitors', name: 'Monitors', nameAr: 'شاشات الكمبيوتر والألعاب', icon: 'Monitor' },
  { id: 'laptops', name: 'Laptops', nameAr: 'أجهزة اللابتوب والقيمنق', icon: 'Laptop' },
  { id: 'keyboards-mice', name: 'Keyboards & Mice', nameAr: 'كيبوردات ميكانيكال وماوسات', icon: 'Keyboard' },
  { id: 'headsets', name: 'Headsets & Audio', nameAr: 'سماعات الألعاب والصوتيات', icon: 'Headphones' },
  { id: 'streaming-voice', name: 'Streaming & Mics', nameAr: 'مايكات ومعدات البث', icon: 'Mic' },
  { id: 'consoles-handheld', name: 'Consoles', nameAr: 'أجهزة ألعاب وكونسول', icon: 'Gamepad2' },
  { id: 'setup-aesthetic', name: 'Setup & Desk', nameAr: 'إكسسوارات السيت أب والمكتب', icon: 'Sparkles' },
];

export const CATEGORY_NAMES_EN: Record<string, string> = {
  'all': 'All Deals',
  'pc-hardware': 'PC Hardware',
  'monitors': 'Monitors',
  'laptops': 'Laptops',
  'keyboards-mice': 'Keyboards & Mice',
  'headsets': 'Headsets & Audio',
  'streaming-voice': 'Streaming & Mics',
  'consoles-handheld': 'Consoles',
  'setup-aesthetic': 'Setup & Desk',
};

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
