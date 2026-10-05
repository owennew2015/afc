'use client';

import Link from 'next/link';
import { useId, useState } from 'react';
import { WHATSAPP_MESSAGES } from '@/config/site';
import { PRODUCTS } from '@/data/products';
import { RECOMMENDER_OPTIONS } from '@/data/recommender';
import { cx } from '@/lib/cx';
import { getWhatsAppUrl } from '@/lib/whatsapp';
import { WhatsAppIcon } from '../ui/Icons';
import { SafeImage } from '../ui/SafeImage';
import { worldStyle } from '../product/worldStyle';

/**
 * A discovery aid, not a diagnostic tool. Every choice ends in a
 * recommendation and a WhatsApp message that already names the interest.
 */
export function ProductRecommender() {
  const [choice, setChoice] = useState<string | null>(null);
  const groupId = useId();
  const option = RECOMMENDER_OPTIONS.find((o) => o.id === choice);
  const results = option ? PRODUCTS.filter((p) => option.products.includes(p.slug)) : [];
  const single = results.length === 1 ? results[0] : null;

  return (
    <div className="recommender" data-hide-floating>
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

      <div aria-live="polite">
        {single && option && (
          <div className="recommender__result recommender__result--single" style={worldStyle(single)}>
            <div className="recommender__img">
              <SafeImage asset={single.heroAsset} sizes="(min-width: 720px) 220px, 60vw" />
            </div>
            <div className="recommender__body">
              <p className="recommender__result-title">Produk yang mungkin ingin kamu pelajari</p>
              <p className="recommender__name">{single.name}</p>
              <p className="recommender__desc">{single.shortDescription}</p>
              <div className="btn-row">
                <a
                  className="btn"
                  href={getWhatsAppUrl(WHATSAPP_MESSAGES.interest(option.label, single.name))}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsAppIcon />
                  Tanya konsultan
                </a>
                <Link className="btn btn--ghost" href={`/products/${single.slug}`}>
                  Lihat {single.name}
                </Link>
              </div>
            </div>
          </div>
        )}

        {results.length > 1 && (
          <div className="recommender__result">
            <p className="recommender__result-title">Kenali ketiganya</p>
            <ul className="recommender__list">
              {results.map((p) => (
                <li key={p.slug} className="recommender__card" style={worldStyle(p)}>
                  <div className="recommender__img">
                    <SafeImage asset={p.heroAsset} sizes="120px" />
                  </div>
                  <div>
                    <p className="recommender__name">{p.name}</p>
                    <p className="recommender__desc">{p.tagline}</p>
                    <Link className="link-arrow" href={`/products/${p.slug}`}>
                      Lihat produk <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
            <a className="btn" href={getWhatsAppUrl(WHATSAPP_MESSAGES.general)} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon />
              Tanya konsultan
            </a>
          </div>
        )}
      </div>

      <p className="recommender__note">Alat bantu memilih, bukan diagnosis medis.</p>
    </div>
  );
}
