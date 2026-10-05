import type { Metadata } from 'next';
import { ComparisonView } from '@/components/sections/ComparisonView';
import { PageIntro } from '@/components/sections/PageIntro';
import { ProductRecommender } from '@/components/sections/ProductRecommender';
import { WhatsAppCTA } from '@/components/sections/WhatsAppCTA';

export const metadata: Metadata = {
  title: 'Temukan Produk',
  description: 'Temukan produk AFC yang mungkin ingin kamu pelajari lebih lanjut, lalu bandingkan ketiganya.',
  alternates: { canonical: '/discover' },
};

export default function DiscoverPage() {
  return (
    <>
      <PageIntro
        eyebrow="Temukan"
        title="Temukan produk sesuai kebutuhanmu"
        lede="Pilih minatmu. Ini alat bantu penjelajahan — bukan diagnosis."
      />
      <section className="section section--tight">
        <div className="container">
          <ProductRecommender />
        </div>
      </section>
      <section className="section section--sunken" id="bandingkan" aria-labelledby="cmp-title">
        <div className="container">
          <h2 id="cmp-title" className="block-title">
            Bandingkan produk
          </h2>
          <ComparisonView />
        </div>
      </section>
      <WhatsAppCTA />
    </>
  );
}
