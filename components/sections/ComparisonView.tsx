'use client';

import Link from 'next/link';
import { useState } from 'react';
import { PRODUCTS } from '@/data/products';
import type { Product } from '@/data/types';
import { cx } from '@/lib/cx';
import { SafeImage } from '../ui/SafeImage';
import { worldStyle } from '../product/worldStyle';

const CATEGORIES: { id: string; label: string; value: (p: Product) => string }[] = [
  { id: 'positioning', label: 'Positioning', value: (p) => p.positioning },
  { id: 'ingredients', label: 'Bahan utama', value: (p) => p.highlightIngredients.join(', ') },
  { id: 'format', label: 'Format', value: (p) => p.format },
  { id: 'price', label: 'Harga', value: (p) => p.price ?? 'Tanyakan via WhatsApp' },
  {
    id: 'key',
    label: 'Informasi kunci',
    value: (p) => ['Made in Japan', 'Halal', p.bpom].filter(Boolean).join(' · '),
  },
];

/**
 * Desktop: a three-column comparison. Mobile: one category at a time, with
 * each product clearly named, so nothing turns into an unreadable table.
 */
export function ComparisonView() {
  const [active, setActive] = useState(CATEGORIES[0].id);

  return (
    <div className="compare">
      <div className="compare__tabs" role="tablist" aria-label="Kategori perbandingan">
        {CATEGORIES.map((c) => (
          <button
            key={c.id}
            type="button"
            role="tab"
            id={`cmp-tab-${c.id}`}
            aria-selected={active === c.id}
            aria-controls="cmp-panel"
            className={cx('compare__tab', active === c.id && 'is-active')}
            onClick={() => setActive(c.id)}
          >
            {c.label}
          </button>
        ))}
      </div>

      <div className="compare__grid" id="cmp-panel" role="tabpanel" aria-labelledby={`cmp-tab-${active}`}>
        {PRODUCTS.map((p) => (
          <article key={p.slug} className="compare__col" style={worldStyle(p)}>
            <header className="compare__head">
              <div className="compare__img">
                <SafeImage asset={p.heroAsset} sizes="120px" />
              </div>
              <h4 className="compare__name">{p.name}</h4>
            </header>
            <dl className="compare__rows">
              {CATEGORIES.map((c) => (
                <div key={c.id} className={cx('compare__row', active === c.id && 'is-active')}>
                  <dt>{c.label}</dt>
                  <dd>{c.value(p)}</dd>
                </div>
              ))}
            </dl>
            <Link href={`/products/${p.slug}`} className="link-arrow compare__link">
              Lihat detail <span aria-hidden="true">→</span>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
