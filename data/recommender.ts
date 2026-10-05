import type { ProductSlug } from './types';

export interface RecommenderOption {
  id: string;
  label: string;
  hint: string;
  products: ProductSlug[];
}

/** A discovery aid that points to products to read about. It never diagnoses. */
export const RECOMMENDER_OPTIONS: RecommenderOption[] = [
  { id: 'beauty', label: 'Beauty & Wellness', hint: 'Bakteri asam laktat, fucoidan, dan kolagen', products: ['utsukushii'] },
  { id: 'nutrisi', label: 'Nutrisi & Kesehatan', hint: 'Peptida dan bahan pendukung', products: ['subarashi'] },
  { id: 'otak', label: 'Otak & Penglihatan', hint: 'Peptida nabati dan ekstrak buah beri', products: ['hikari'] },
  { id: 'semua', label: 'Saya ingin mengenal semuanya', hint: 'Lihat ketiga produk', products: ['utsukushii', 'subarashi', 'hikari'] },
];
