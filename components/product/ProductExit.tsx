import Link from 'next/link';
import { WHATSAPP_MESSAGES } from '@/config/site';
import { otherProducts } from '@/data/products';
import type { Product } from '@/data/types';
import { getWhatsAppUrl } from '@/lib/whatsapp';
import { WhatsAppIcon } from '../ui/Icons';
import { SafeImage } from '../ui/SafeImage';
import { worldStyle } from './worldStyle';

/** End of a product world: never a dead end. */
export function ProductExit({ product }: { product: Product }) {
  return (
    <section className="exit" data-hide-floating aria-labelledby="exit-title">
      <div className="container">
        <h2 id="exit-title" className="exit__title">
          Lanjutkan penjelajahan
        </h2>
        <div className="exit__grid">
          <a
            className="exit__primary"
            href={getWhatsAppUrl(WHATSAPP_MESSAGES.product(product.name))}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon />
            <span>
              <strong>Hubungi Konsultan</strong>
              <span>Tanyakan tentang {product.name} lewat WhatsApp</span>
            </span>
          </a>
          <Link className="exit__link" href="/discover#bandingkan">
            Bandingkan produk <span aria-hidden="true">→</span>
          </Link>
          <Link className="exit__link" href="/discover">
            Temukan produk sesuai kebutuhanmu <span aria-hidden="true">→</span>
          </Link>
        </div>
        <p className="exit__label">Jelajahi produk lain</p>
        <div className="exit__others">
          {otherProducts(product.slug).map((p) => (
            <Link key={p.slug} href={`/products/${p.slug}`} className="exit__other" style={worldStyle(p)}>
              <span className="exit__other-img">
                <SafeImage asset={p.heroAsset} sizes="140px" />
              </span>
              <span>
                <strong>{p.name}</strong>
                <span>{p.tagline}</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
