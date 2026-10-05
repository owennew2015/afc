'use client';

import Link from 'next/link';
import { useId, useState } from 'react';
import { PRODUCTS } from '@/data/products';
import { RECOMMENDER_OPTIONS } from '@/data/recommender';
import { cx } from '@/lib/cx';
import { SafeImage } from '../ui/SafeImage';
import { worldStyle } from '../product/worldStyle';

/** A discovery aid, not a diagnostic tool. */
export function ProductRecommender() {
  const [choice, setChoice] = useState<string | null>(null);
  const groupId = useId();
  const option = RECOMMENDER_OPTIONS.find((o) => o.id === choice);
  const results = option ? PRODUCTS.filter((p) => option.products.includes(p.slug)) : [];

  return (
    <div className="recommender">
      <fieldset className="recommender__options">
        <legend className="recommender__legend">Apa yang ingin kamu ketahui?</legend>
        {RECOMMENDER_OPTIONS.map((o) => (
          <label key={o.id} className={cx('recommender__option', choice === o.id && 'is-selected')}>
            <input
              type="radio"
              name={groupId}
              value={o.id}
              checked={choice === o.id}
              onChange={() => setChoice(o.id)}
              className="sr-only"
            />
            <span className="recommender__label">{o.label}</span>
            <span className="recommender__hint">{o.hint}</span>
          </label>
        ))}
      </fieldset>

      <div className="recommender__result" aria-live="polite">
        {option ? (
          <>
            <p className="recommender__result-title">Produk yang mungkin ingin kamu pelajari lebih lanjut</p>
            <ul className={cx('recommender__list', results.length > 1 && 'recommender__list--multi')}>
              {results.map((p) => (
                <li key={p.slug} className="recommender__card" style={worldStyle(p)}>
                  <div className="recommender__img">
                    <SafeImage asset={p.heroAsset} sizes="160px" />
                  </div>
                  <div>
                    <p className="recommender__name">{p.name}</p>
                    <p className="recommender__desc">{p.shortDescription}</p>
                    <Link className="link-arrow" href={`/products/${p.slug}`}>
                      Pelajari lebih lanjut <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <p className="recommender__empty">Pilih salah satu minat di atas.</p>
        )}
        <p className="recommender__note">
          Alat bantu penjelajahan, bukan diagnosis medis. Untuk kondisi kesehatan tertentu, konsultasikan dengan tenaga
          medis.
        </p>
      </div>
    </div>
  );
}
