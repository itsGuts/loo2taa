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
  // Electronics & Tech
  { id: 'mobile-phones', name: 'Mobiles & Tablets', nameAr: 'الموبايلات والتابلت', icon: 'Smartphone' },
  { id: 'pc-hardware', name: 'PC Hardware', nameAr: 'قطع وهاردوير البي سي', icon: 'Cpu' },
  { id: 'laptops', name: 'Laptops', nameAr: 'أجهزة اللابتوب والكمبيوتر', icon: 'Laptop' },
  { id: 'monitors', name: 'Monitors', nameAr: 'شاشات الكمبيوتر والألعاب', icon: 'Monitor' },
  { id: 'keyboards-mice', name: 'Keyboards & Mice', nameAr: 'كيبوردات وماوسات', icon: 'Keyboard' },
  { id: 'headsets', name: 'Headsets & Audio', nameAr: 'سماعات وصوتيات', icon: 'Headphones' },
  { id: 'smart-tv', name: 'Smart TVs', nameAr: 'تلفزيونات وشاشات ذكية', icon: 'Tv' },
  { id: 'phone-accessories', name: 'Mobile Acc', nameAr: 'شواحن واكسسوارات', icon: 'BatteryCharging' },
  { id: 'streaming-voice', name: 'Streaming & Mics', nameAr: 'مايكات ومعدات بث', icon: 'Mic' },
  { id: 'consoles-handheld', name: 'Consoles', nameAr: 'أجهزة ألعاب وكونسول', icon: 'Gamepad2' },
  { id: 'electronics', name: 'Electronics', nameAr: 'أجهزة إلكترونية عامة', icon: 'Radio' },
  // Megastore Categories
  { id: 'home-kitchen', name: 'Home & Kitchen', nameAr: 'أجهزة منزلية وأدوات مطبخ', icon: 'Coffee' },
  { id: 'beauty-health', name: 'Beauty & Perfumes', nameAr: 'عطور وعناية شخصية', icon: 'Sparkles' },
  { id: 'watches', name: 'Watches', nameAr: 'ساعات وإكسسوارات', icon: 'Watch' },
  { id: 'tools-automotive', name: 'Tools & Hardware', nameAr: 'عدد وأدوات سيارات', icon: 'Wrench' },
  { id: 'sports-outdoors', name: 'Sports & Fitness', nameAr: 'رياضة ولياقة', icon: 'Dumbbell' },
  { id: 'fashion', name: 'Fashion', nameAr: 'ملابس وأزياء', icon: 'Shirt' },
  { id: 'setup-aesthetic', name: 'Setup & Desk', nameAr: 'إكسسوارات السيت أب', icon: 'Sparkles' },
];

export const CATEGORY_NAMES_EN: Record<string, string> = {
  'all': 'All Deals',
  'mobile-phones': 'Mobiles & Tablets',
  'pc-hardware': 'PC Hardware',
  'laptops': 'Laptops',
  'monitors': 'Monitors',
  'keyboards-mice': 'Keyboards & Mice',
  'headsets': 'Headsets & Audio',
  'smart-tv': 'Smart TVs',
  'phone-accessories': 'Mobile Acc',
  'streaming-voice': 'Streaming & Mics',
  'consoles-handheld': 'Consoles',
  'electronics': 'Electronics',
  'home-kitchen': 'Home & Kitchen',
  'beauty-health': 'Beauty & Perfumes',
  'watches': 'Watches',
  'tools-automotive': 'Tools & Hardware',
  'sports-outdoors': 'Sports & Fitness',
  'fashion': 'Fashion',
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
