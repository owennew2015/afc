import type { Product, ProductSlug } from '../types';
import { hikari } from './hikari';
import { subarashi } from './subarashi';
import { utsukushii } from './utsukushii';

/** Display order across the site. */
export const PRODUCTS: Product[] = [utsukushii, subarashi, hikari];

export const PRODUCT_SLUGS: ProductSlug[] = PRODUCTS.map((p) => p.slug);

export function getProduct(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function otherProducts(slug: ProductSlug): Product[] {
  return PRODUCTS.filter((p) => p.slug !== slug);
}
