import type { Metadata } from 'next';
import { ProductCard } from '@/components/product/ProductCard';
import { ComparisonView } from '@/components/sections/ComparisonView';
import { PageIntro } from '@/components/sections/PageIntro';
import { WhatsAppCTA } from '@/components/sections/WhatsAppCTA';
import { Reveal } from '@/components/ui/Reveal';
import { PRODUCTS } from '@/data/products';

export const metadata: Metadata = {
  title: 'Produk',
  description: 'Utsukushhii, SOP Subarashi, dan Hikari — tiga produk AFC buatan Jepang. Kenali bahan, format, dan karakternya.',
  alternates: { canonical: '/products' },
};

export default function ProductsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Produk"
        title="Tiga Produk. Tiga Karakter."
        lede="Semua dibuat di Jepang. Masing-masing dengan bahan dan dunianya sendiri."
      />
      <section className="section section--tight">
        <div className="container product-grid">
          {PRODUCTS.map((p, i) => (
            <Reveal key={p.slug} delay={i * 110}>
              <ProductCard product={p} headingLevel="h2" />
            </Reveal>
          ))}
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
