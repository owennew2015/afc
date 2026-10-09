import Link from 'next/link';
import type { Product } from '@/data/types';
import { getWhatsAppUrl } from '@/lib/whatsapp';
import { WhatsAppIcon } from '../ui/Icons';

const CEK_BPOM_URL = 'https://cekbpom.pom.go.id/';

/**
 * The buying decision in one block, right under the hero: price, contents,
 * how to take it, registration, and the WhatsApp action. Empty fields are
 * simply not rendered.
 */
export function ProductSummary({ product }: { product: Product }) {
  const rows: { label: string; value: React.ReactNode }[] = [];
  if (product.contents) rows.push({ label: 'Isi', value: product.contents });
  rows.push({ label: 'Format', value: product.format.split(' · ')[0] });
  if (product.composition) rows.push({ label: 'Komposisi', value: product.composition });
  if (product.usage) rows.push({ label: 'Cara konsumsi', value: product.usage });
  if (product.bpom)
    rows.push({
      label: 'Izin edar',
      value: (
        <>
          {product.bpom}{' '}
          <a className="summary__verify" href={CEK_BPOM_URL} target="_blank" rel="noopener noreferrer">
            Cek di BPOM ↗
          </a>
        </>
      ),
    });
  rows.push({ label: 'Sertifikasi', value: 'Halal Indonesia · Made in Japan' });

  const whatsapp = getWhatsAppUrl(
    product.price
      ? `Halo, saya ingin memesan ${product.name}.`
      : `Halo, saya ingin mengetahui harga dan cara memesan ${product.name}.`,
  );

  return (
    <section id="ringkasan" className="summary" data-hide-floating aria-label={`Ringkasan ${product.name}`}>
      <div className="container">
        <div className="summary__card">
          <div className="summary__main">
            {product.price && <p className="summary__price">{product.price}</p>}
            <dl className="summary__facts">
              {rows.map((r) => (
                <div key={r.label}>
                  <dt>{r.label}</dt>
                  <dd>{r.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="summary__actions">
            <a className="btn btn--block" href={whatsapp} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon />
              {product.price ? 'Pesan via WhatsApp' : 'Tanya harga & pesan'}
            </a>
            <Link className="link-arrow" href="/products#bandingkan">
              Bandingkan dengan produk lain <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
