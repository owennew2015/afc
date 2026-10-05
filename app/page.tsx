import { AFCExplorer } from '@/components/layout/AFCExplorer';
import { HeroSection } from '@/components/home/HeroSection';
import { KenaliSection } from '@/components/home/KenaliSection';
import { OpportunityPreview } from '@/components/home/OpportunityPreview';
import { ProductDiscovery } from '@/components/home/ProductDiscovery';
import { ProductStory } from '@/components/home/ProductStory';
import { QualityPreview } from '@/components/home/QualityPreview';
import { StoriesPreview } from '@/components/home/StoriesPreview';
import { TemukanSection } from '@/components/home/TemukanSection';
import { WhatsAppCTA } from '@/components/sections/WhatsAppCTA';
import { PRODUCTS } from '@/data/products';

export default function HomePage() {
  return (
    <>
      <AFCExplorer />
      <HeroSection />
      <KenaliSection />
      <section id="produk" className="section produk" aria-label="Produk AFC">
        <ProductDiscovery />
        <div className="story-bands">
          {PRODUCTS.map((p, i) => (
            <ProductStory key={p.slug} product={p} index={i} />
          ))}
        </div>
      </section>
      <QualityPreview />
      <StoriesPreview />
      <TemukanSection />
      <OpportunityPreview />
      <WhatsAppCTA
        title="Ingin tahu lebih banyak?"
        body="Konsultan AFC siap menjawab pertanyaanmu tentang produk melalui WhatsApp."
      />
    </>
  );
}
