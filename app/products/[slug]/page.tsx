import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { DeepDiveSection } from '@/components/product/DeepDiveSection';
import { IngredientExplorer } from '@/components/product/IngredientExplorer';
import { KeyFacts } from '@/components/product/KeyFacts';
import { PatentList } from '@/components/product/PatentList';
import { ProductChapter } from '@/components/product/ProductChapter';
import { ProductExit } from '@/components/product/ProductExit';
import { ProductHero } from '@/components/product/ProductHero';
import { ProductSummary } from '@/components/product/ProductSummary';
import { worldStyle } from '@/components/product/worldStyle';
import { ExpertCard } from '@/components/sections/ExpertCard';
import { TestimonialCard } from '@/components/sections/TestimonialCard';
import { Reveal } from '@/components/ui/Reveal';
import { SafeImage } from '@/components/ui/SafeImage';
import { SourceMaterial } from '@/components/ui/SourceMaterial';
import { ASSETS } from '@/data/assets';
import { getProduct, PRODUCT_SLUGS } from '@/data/products';
import { EXPERT_MATERIAL, TESTIMONIALS } from '@/data/stories';
import { cx } from '@/lib/cx';

export function generateStaticParams() {
  return PRODUCT_SLUGS.map((slug) => ({ slug }));
}

export const dynamicParams = false;

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const product = getProduct(params.slug);
  if (!product) return {};
  return {
    title: product.seo.title,
    description: product.seo.description,
    alternates: { canonical: `/products/${product.slug}` },
    openGraph: {
      title: `${product.seo.title} | AFC Life Science`,
      description: product.seo.description,
      images: [{ url: product.keyVisual.src, width: product.keyVisual.width, height: product.keyVisual.height, alt: product.keyVisual.alt }],
    },
  };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProduct(params.slug);
  if (!product) notFound();

  const testimonials = TESTIMONIALS.filter((t) => t.product === product.slug);
  const expert = EXPERT_MATERIAL.product === product.slug ? EXPERT_MATERIAL : null;

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.shortDescription,
    brand: { '@type': 'Brand', name: 'AFC' },
    image: product.heroAsset.src,
    countryOfOrigin: 'JP',
  };

  return (
    <div className={cx('world', product.theme.dark ? 'world--dark' : 'world--light')} style={worldStyle(product)}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />
      <ProductHero product={product} />

      {/* Esensial: what it is, what it costs, how to get it */}
      <ProductSummary product={product} />

      <ProductChapter id="kenapa" title={`Kenapa ${product.name}`}>
        <div className="split">
          <Reveal>
            <p className="statement serif">{product.positioning}</p>
          </Reveal>
          <Reveal as="ul" className="point-list" delay={120}>
            {product.positioningPoints.map((pt) => (
              <li key={pt}>{pt}</li>
            ))}
          </Reveal>
        </div>
      </ProductChapter>

      <ProductChapter id="bahan" title="Bahan di dalamnya" tone="deep">
        <IngredientExplorer groups={product.ingredientGroups} />
      </ProductChapter>

      <ProductChapter id="kualitas" title="Kualitas" tone="soft">
        <div className="quality-brief">
          <Reveal as="ul" className="point-list">
            {product.bpom && <li>Terdaftar di BPOM: {product.bpom}</li>}
            {product.quality.map((q) => (
              <li key={q}>{q}</li>
            ))}
          </Reveal>
          <Reveal className="quality-brief__doc" delay={120}>
            <SafeImage asset={ASSETS.quality.certHalalAttachment} sizes="(min-width: 1024px) 240px, 45vw" />
          </Reveal>
        </div>
        <Link href="/quality" className="link-arrow">
          Lihat semua sertifikat <span aria-hidden="true">→</span>
        </Link>
      </ProductChapter>

      {testimonials.length > 0 && (
        <ProductChapter id="cerita" title="Cerita dari mereka">
          <div className="testimonial-grid">
            {testimonials.map((t) => (
              <TestimonialCard key={`${t.name}-${t.quote.slice(0, 16)}`} testimonial={t} />
            ))}
          </div>
        </ProductChapter>
      )}

      <DeepDiveSection chapters={['Tentang produk', 'Teknologi', 'Paten', 'Materi asli', 'Detail kemasan']}>
        <ProductChapter id="tentang" kicker="Deep Dive" title={`Tentang ${product.name}`}>
          <div className="split">
            <div className="prose">
              {product.whatIs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <p className="name-meaning serif">{product.nameMeaning}</p>
          </div>
        </ProductChapter>

        <ProductChapter id="teknologi" kicker="Deep Dive" title="Teknologi" tone="soft">
          <div className="tech-grid">
            {product.technology.map((t) => (
              <div key={t.title} className="tech">
                <h3 className="tech__title">{t.title}</h3>
                <p>{t.body}</p>
              </div>
            ))}
          </div>
          <PatentList patents={product.patents} />
        </ProductChapter>

        <ProductChapter id="materi" kicker="Deep Dive" title="Materi pendukung">
          <div className="key-visual">
            <SafeImage asset={product.keyVisual} sizes="(min-width: 1024px) 1100px, 100vw" />
          </div>
          {product.awards.length > 0 && (
            <ul className="point-list point-list--awards">
              {product.awards.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          )}
          <SourceMaterial items={product.supportingMaterial} />
          {expert && <ExpertCard expert={expert} />}
        </ProductChapter>

        <ProductChapter id="kemasan" kicker="Deep Dive" title="Detail kemasan" tone="soft">
          <KeyFacts facts={product.packaging} />
        </ProductChapter>
      </DeepDiveSection>

      <ProductExit product={product} />
    </div>
  );
}
