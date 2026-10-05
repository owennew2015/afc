import { PRODUCTS } from '@/data/products';
import { ProductCard } from '../product/ProductCard';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';

export function ProductDiscovery() {
  return (
    <div className="container">
      <SectionHeading
        index="02"
        eyebrow="Produk"
        title="Tiga Produk. Tiga Karakter."
        lede="Masing-masing dengan bahan dan karakternya sendiri. Pilih satu untuk mulai menjelajah."
      />
      <div className="product-grid">
        {PRODUCTS.map((p, i) => (
          <Reveal key={p.slug} delay={i * 110}>
            <ProductCard product={p} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
