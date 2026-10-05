import { ComparisonView } from '../sections/ComparisonView';
import { ProductRecommender } from '../sections/ProductRecommender';
import { SectionHeading } from '../ui/SectionHeading';

export function TemukanSection() {
  return (
    <section id="temukan" className="section temukan" aria-labelledby="temukan-title">
      <div className="container">
        <SectionHeading
          id="temukan-title"
          index="05"
          eyebrow="Temukan"
          title="Temukan produk sesuai kebutuhanmu"
          lede="Pilih minatmu. Kami tunjukkan produk yang mungkin ingin kamu pelajari lebih lanjut."
        />
        <ProductRecommender />
        <div className="temukan__compare" id="bandingkan">
          <h3 className="temukan__compare-title">Bandingkan produk</h3>
          <ComparisonView />
        </div>
      </div>
    </section>
  );
}
