import { MetadataRoute } from 'next';
import { PRODUCTS } from '@/lib/loo2taa-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://loo2taa.vercel.app';
  const now = new Date();

  // Core Static Routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${siteUrl}`,
      lastModified: now,
      changeFrequency: 'hourly',
      priority: 1.0,
    },
    {
      url: `${siteUrl}/catalog`,
      lastModified: now,
      changeFrequency: 'hourly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/inspect`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/about`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${siteUrl}/favorites`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.5,
    },
  ];

  // Dynamic Product Pages (/p/[asin])
  const productRoutes: MetadataRoute.Sitemap = PRODUCTS.map((p) => ({
    url: `${siteUrl}/p/${p.asin || p.id}`,
    lastModified: p.price_checked_at ? new Date(p.price_checked_at) : now,
    changeFrequency: 'hourly',
    priority: 0.85,
  }));

  return [...staticRoutes, ...productRoutes];
}
