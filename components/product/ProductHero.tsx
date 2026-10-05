import type { Product } from '@/data/types';
import { cx } from '@/lib/cx';
import { getWhatsAppUrl } from '@/lib/whatsapp';
import { WHATSAPP_MESSAGES } from '@/config/site';
import { SafeImage } from '../ui/SafeImage';
import { WhatsAppIcon } from '../ui/Icons';

export function ProductHero({ product }: { product: Product }) {
  return (
    <section
      className={cx('p-hero', product.theme.dark ? 'p-hero--dark' : 'p-hero--light')}
      data-hero-tone={product.theme.dark ? 'dark' : 'light'}
      data-product-name={product.name}
      aria-labelledby="product-title"
    >
      <span className="p-hero__curtain" aria-hidden="true" />
      <div className="p-hero__atmos" aria-hidden="true">
        <span className="p-hero__glow" />
        <span className="p-hero__ring" />
      </div>
      <div className="container p-hero__grid">
        <div className="p-hero__visual">
          <SafeImage asset={product.heroAsset} sizes="(min-width: 1024px) 560px, 88vw" priority />
          <span className="p-hero__shadow" aria-hidden="true" />
        </div>
        <div className="p-hero__copy">
          <p className="p-hero__eyebrow">AFC · Made in Japan{product.edition ? ` · ${product.edition}` : ''}</p>
          <h1 id="product-title" className="p-hero__title">
            {product.name}
            {product.nameJa && (
              <span className="p-hero__ja" lang="ja">
                {product.nameJa}
              </span>
            )}
          </h1>
          <p className="p-hero__tagline">{product.tagline}</p>
          <p className="p-hero__lede">{product.shortDescription}</p>
          <div className="btn-row">
            <a
              href={getWhatsAppUrl(WHATSAPP_MESSAGES.product(product.name))}
              className={cx('btn', product.theme.dark && 'btn--light')}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon />
              Hubungi Konsultan
            </a>
            <a href="#ringkasan" className={cx('btn', product.theme.dark ? 'btn--light-ghost' : 'btn--ghost')}>
              Lihat harga & isi
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
