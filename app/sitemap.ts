import type { MetadataRoute } from 'next';
import { SITE } from '@/config/site';
import { PRODUCT_SLUGS } from '@/data/products';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/products', '/discover', '/quality', '/stories', '/about', '/opportunity', '/contact'];
  return [...routes, ...PRODUCT_SLUGS.map((s) => `/products/${s}`)].map((path) => ({
    url: `${SITE.url}${path}`,
    changeFrequency: 'monthly',
    priority: path === '' ? 1 : path.startsWith('/products/') ? 0.9 : 0.7,
  }));
}
