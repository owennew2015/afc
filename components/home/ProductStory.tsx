import Link from 'next/link';
import type { Product } from '@/data/types';
import { cx } from '@/lib/cx';
import { SafeImage } from '../ui/SafeImage';
import { Reveal } from '../ui/Reveal';
import { worldStyle } from '../product/worldStyle';

/** One editorial "world" band per product on the homepage. */
export function ProductStory({ product, index }: { product: Product; index: number }) {
  return (
    <article
      className={cx('story-band', product.theme.dark ? 'story-band--dark' : 'story-band--light', index % 2 === 1 && 'story-band--flip')}
      style={worldStyle(product)}
      aria-labelledby={`story-${product.slug}`}
    >
      <div className="container story-band__grid">
        <Reveal className="story-band__visual" variant="blur">
          <span className="story-band__halo" aria-hidden="true" />
          <SafeImage asset={product.heroAsset} sizes="(min-width: 1024px) 520px, 86vw" />
        </Reveal>
        <Reveal className="story-band__copy" delay={120}>
          <p className="story-band__index">
            {product.format.split(' · ')[0]}
          </p>
          <h3 id={`story-${product.slug}`} className="story-band__name">
            {product.name}
            {product.nameJa && <span className="story-band__ja" lang="ja">{product.nameJa}</span>}
          </h3>
          <p className="story-band__tagline">{product.tagline}</p>
          <p className="story-band__body">{product.shortDescription}</p>
          <ul className="chip-list" aria-label="Bahan unggulan">
            {product.highlightIngredients.map((h) => (
              <li key={h} className="chip">
                {h}
              </li>
            ))}
          </ul>
          <Link href={`/products/${product.slug}`} className="btn btn--world">
            Jelajahi {product.name}
          </Link>
        </Reveal>
      </div>
    </article>
  );
}
