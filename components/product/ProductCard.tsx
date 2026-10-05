import Link from 'next/link';
import type { Product } from '@/data/types';
import { cx } from '@/lib/cx';
import { SafeImage } from '../ui/SafeImage';
import { worldStyle } from './worldStyle';

export function ProductCard({ product, headingLevel = 'h3' }: { product: Product; headingLevel?: 'h2' | 'h3' }) {
  const Heading = headingLevel;
  return (
    <article className={cx('product-card', product.theme.dark ? 'product-card--dark' : 'product-card--light')} style={worldStyle(product)}>
      <div className="product-card__visual">
        <span className="product-card__halo" aria-hidden="true" />
        <SafeImage asset={product.heroAsset} sizes="(min-width: 1024px) 340px, (min-width: 720px) 45vw, 80vw" />
      </div>
      <div className="product-card__body">
        {product.edition && <p className="product-card__edition">{product.edition}</p>}
        <Heading className="product-card__name">
          <Link href={`/products/${product.slug}`} className="product-card__link">
            {product.name}
          </Link>
        </Heading>
        <p className="product-card__tagline">{product.tagline}</p>
        <p className="product-card__format">{product.format}</p>
        <span className="product-card__cta" aria-hidden="true">
          Jelajahi <span>→</span>
        </span>
      </div>
    </article>
  );
}
