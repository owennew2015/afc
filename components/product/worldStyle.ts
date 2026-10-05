import type { CSSProperties } from 'react';
import type { Product } from '@/data/types';

/** Exposes a product's world palette as CSS custom properties. */
export function worldStyle(product: Product): CSSProperties {
  const { deep, mid, accent, soft } = product.theme;
  return { '--w-deep': deep, '--w-mid': mid, '--w-accent': accent, '--w-soft': soft } as CSSProperties;
}
