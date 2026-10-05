import Link from 'next/link';
import { ProductRecommender } from '../sections/ProductRecommender';
import { SectionHeading } from '../ui/SectionHeading';

export function TemukanSection() {
  return (
    <section id="temukan" className="section temukan" aria-labelledby="temukan-title">
      <div className="container">
        <SectionHeading
          id="temukan-title"
          eyebrow="Temukan"
          title="Temukan produk sesuai kebutuhanmu"
          lede="Pilih minatmu. Kami tunjukkan produk yang mungkin ingin kamu pelajari lebih lanjut."
        />
        <ProductRecommender />
        <p className="temukan__more">
          <Link href="/products#bandingkan" className="link-arrow">
            Atau bandingkan ketiga produk <span aria-hidden="true">→</span>
          </Link>
        </p>
      </div>
    </section>
  );
}
