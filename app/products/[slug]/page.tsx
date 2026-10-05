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
import { worldStyle } from '@/components/product/worldStyle';
import { ExpertCard } from '@/components/sections/ExpertCard';
import { TestimonialArchive } from '@/components/sections/TestimonialArchive';
import { ClaimLabel } from '@/components/ui/ClaimLabel';
import { Reveal } from '@/components/ui/Reveal';
import { SafeImage } from '@/components/ui/SafeImage';
import { SourceMaterial } from '@/components/ui/SourceMaterial';
import { WHATSAPP_MESSAGES } from '@/config/site';
import { getProduct, PRODUCT_SLUGS } from '@/data/products';
import { EXPERT_MATERIAL } from '@/data/stories';
import { cx } from '@/lib/cx';
import { getWhatsAppUrl } from '@/lib/whatsapp';

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

      <nav className="layer-switch" aria-label="Tingkat informasi">
        <div className="container layer-switch__inner">
          <a href="#apa-ini" className="layer-switch__item">
            <span className="layer-switch__k">Esensial</span>
            <span className="layer-switch__d">Yang perlu kamu tahu</span>
          </a>
          <a href="#deep-dive" className="layer-switch__item">
            <span className="layer-switch__k">Deep Dive</span>
            <span className="layer-switch__d">Teknologi, paten, materi asli</span>
          </a>
        </div>
      </nav>

      <div id="esensial">
        <ProductChapter id="apa-ini" number={2} kicker="Esensial" title={`Apa itu ${product.name}?`}>
          <div className="split">
            <Reveal className="prose">
              {product.whatIs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </Reveal>
            <Reveal className="split__aside" delay={120}>
              <p className="name-meaning serif">{product.nameMeaning}</p>
            </Reveal>
          </div>
        </ProductChapter>

        <ProductChapter id="informasi" number={3} title="Informasi kunci" tone="soft">
          <KeyFacts facts={product.packaging} />
        </ProductChapter>

        <ProductChapter id="positioning" number={4} title="Fokus produk">
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

        <ProductChapter id="bahan" number={5} title="Bahan di dalamnya" tone="deep">
          <IngredientExplorer groups={product.ingredientGroups} />
        </ProductChapter>

        <ProductChapter id="cara-konsumsi" number={6} title="Cara konsumsi">
          <Reveal className="placeholder usage">
            {product.usage ?? (
              <>
                <strong>[Informasi cara konsumsi akan ditambahkan]</strong>
                <span>Sementara itu, ikuti petunjuk pada kemasan atau tanyakan langsung kepada konsultan.</span>
              </>
            )}
          </Reveal>
        </ProductChapter>
      </div>

      <DeepDiveSection chapters={['Teknologi', 'Materi pendukung', 'Cerita', 'Kualitas']}>
        <ProductChapter id="teknologi" number={7} kicker="Deep Dive" title="Teknologi & paten">
          <div className="tech-grid">
            {product.technology.map((t) => (
              <Reveal key={t.title} className="tech">
                <h3 className="tech__title">{t.title}</h3>
                <p>{t.body}</p>
                <p className="tech__meta">
                  <ClaimLabel kind={t.kind} />
                  <span className="source-ref">{t.source}</span>
                </p>
              </Reveal>
            ))}
          </div>
          <PatentList patents={product.patents} note={product.patentNote} />
        </ProductChapter>

        <ProductChapter id="materi" number={8} kicker="Deep Dive" title="Materi pendukung" tone="soft">
          <Reveal className="key-visual">
            <SafeImage asset={product.keyVisual} sizes="(min-width: 1024px) 1100px, 100vw" />
            <p className="source-ref">Key visual asli · {product.keyVisual.source}</p>
          </Reveal>
          {product.awards.length > 0 && (
            <ul className="point-list point-list--awards">
              {product.awards.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          )}
          <SourceMaterial items={product.supportingMaterial} />
          {EXPERT_MATERIAL.product === product.slug && <ExpertCard expert={EXPERT_MATERIAL} />}
        </ProductChapter>

        <ProductChapter id="cerita" number={9} kicker="Deep Dive" title="Cerita dari mereka">
          <TestimonialArchive product={product.slug} />
        </ProductChapter>

        <ProductChapter id="kualitas" number={10} kicker="Deep Dive" title="Kualitas" tone="soft">
          <ul className="point-list">
            {product.quality.map((q) => (
              <li key={q}>{q}</li>
            ))}
          </ul>
          <Link href="/quality" className="link-arrow">
            Lihat sertifikat & dokumen kualitas <span aria-hidden="true">→</span>
          </Link>
        </ProductChapter>
      </DeepDiveSection>

      <ProductChapter id="harga" number={11} title="Harga">
        <Reveal className="price">
          <p className="price__value serif">{product.price ?? 'Harga akan ditambahkan'}</p>
          <p className="muted">Untuk informasi harga dan ketersediaan terbaru, hubungi konsultan AFC.</p>
          <a
            className="btn"
            href={getWhatsAppUrl(WHATSAPP_MESSAGES.product(product.name))}
            target="_blank"
            rel="noopener noreferrer"
          >
            Tanyakan harga {product.name}
          </a>
        </Reveal>
      </ProductChapter>

      <ProductExit product={product} />
    </div>
  );
}
