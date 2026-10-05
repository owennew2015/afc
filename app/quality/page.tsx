import type { Metadata } from 'next';
import { AwardCard } from '@/components/sections/AwardCard';
import { CertificateCard } from '@/components/sections/CertificateCard';
import { PageIntro } from '@/components/sections/PageIntro';
import { TrustSequence } from '@/components/sections/TrustSequence';
import { WhatsAppCTA } from '@/components/sections/WhatsAppCTA';
import { Reveal } from '@/components/ui/Reveal';
import { SafeImage } from '@/components/ui/SafeImage';
import { SourceMaterial } from '@/components/ui/SourceMaterial';
import { ASSETS } from '@/data/assets';
import { PRODUCTS } from '@/data/products';
import { AWARDS, CERTIFICATES, SAFETY_NATURAL, SAFETY_STATEMENT, SAFETY_TESTED, TRUST_STEPS } from '@/data/quality';

export const metadata: Metadata = {
  title: 'Kualitas & Sertifikasi',
  description:
    'Sertifikat halal, organik JAS, Certificate of Free Sale, uji radiasi, nomor BPOM, dan penghargaan AFC — langsung dari dokumen sumber.',
  alternates: { canonical: '/quality' },
};

export default function QualityPage() {
  return (
    <>
      <PageIntro
        eyebrow="Kualitas"
        title="Kenali apa yang ada di balik produk."
        lede="Dokumen dan sertifikat sebagaimana dibagikan AFC — dengan penjelasan singkat tentang isinya."
      />

      <section className="section section--sunken" aria-labelledby="journey-title">
        <div className="container">
          <h2 id="journey-title" className="block-title">
            Dari Jepang ke produk
          </h2>
          <TrustSequence steps={TRUST_STEPS} />
        </div>
      </section>

      <section className="section" aria-labelledby="safety-title">
        <div className="container">
          <h2 id="safety-title" className="block-title">
            Keamanan
          </h2>
          <div className="safety">
            <Reveal className="safety__marks">
              <SafeImage asset={ASSETS.quality.safetyMarks} sizes="(min-width: 1024px) 1000px, 100vw" />
            </Reveal>
            <div className="safety__lists">
              <Reveal>
                <h3 className="safety__h">Lab tested</h3>
                <ul className="point-list">{SAFETY_TESTED.map((s) => <li key={s}>{s}</li>)}</ul>
              </Reveal>
              <Reveal delay={100}>
                <h3 className="safety__h">Natural</h3>
                <ul className="point-list">{SAFETY_NATURAL.map((s) => <li key={s}>{s}</li>)}</ul>
              </Reveal>
              <Reveal delay={200} className="safety__statement">
                <p>“{SAFETY_STATEMENT}”</p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--sunken" aria-labelledby="cert-title">
        <div className="container">
          <h2 id="cert-title" className="block-title">
            Sertifikat
          </h2>
          <div className="cert-grid">
            {CERTIFICATES.map((c, i) => (
              <Reveal key={c.asset.src} delay={(i % 3) * 90}>
                <CertificateCard certificate={c} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="bpom-title">
        <div className="container split">
          <Reveal>
            <h2 id="bpom-title" className="block-title">
              Izin edar BPOM
            </h2>
            <p className="prose">
              Nomor izin edar sebagaimana tercetak pada kemasan. Kamu bisa memeriksanya sendiri di{' '}
              <a href="https://cekbpom.pom.go.id/" target="_blank" rel="noopener noreferrer">
                cekbpom.pom.go.id
              </a>
              .
            </p>
          </Reveal>
          <Reveal as="ul" className="bpom-list" delay={120}>
            {PRODUCTS.filter((p) => p.bpom).map((p) => (
              <li key={p.slug}>
                <span className="bpom-list__product">{p.name}</span>
                {p.bpom}
              </li>
            ))}
          </Reveal>
        </div>
        <div className="container">
          <SourceMaterial
            label="Lihat materi asli registrasi & keamanan"
            items={[
              { title: 'Safety', caption: 'Materi asli AFC tentang keamanan dan izin edar.', asset: ASSETS.quality.safetyOverview },
              {
                title: 'Our Products Registered on',
                caption: 'Materi AFC yang menampilkan logo Badan POM, MIMS, FDA, Ministry of Health, Labour and Welfare, dan Nippon Asia Halal Association. Ditampilkan sebagaimana adanya sebagai klaim perusahaan.',
                asset: ASSETS.quality.registeredOn,
              },
              { title: 'Fruitflow & EFSA', caption: 'Materi AFC tentang bahan Fruitflow dalam SOP Subarashi.', asset: ASSETS.ingredientDocs.fruitflowEfsa },
            ]}
          />
        </div>
      </section>

      <section className="section section--sunken" aria-labelledby="award-title">
        <div className="container">
          <h2 id="award-title" className="block-title">
            Penghargaan
          </h2>
          <p className="prose awards-intro">
            Penghargaan produk dan perusahaan sebagaimana ditampilkan dalam materi AFC.
          </p>
          <div className="award-grid">
            {AWARDS.map((a, i) => (
              <Reveal key={`${a.title}-${a.year}`} delay={(i % 3) * 90}>
                <AwardCard award={a} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <WhatsAppCTA />
    </>
  );
}
