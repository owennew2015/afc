import Link from 'next/link';
import { CERTIFICATES, TRUST_STEPS } from '@/data/quality';
import { CertificateCard } from '../sections/CertificateCard';
import { TrustSequence } from '../sections/TrustSequence';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';

export function QualityPreview() {
  return (
    <section id="kualitas" className="section section--sunken" aria-labelledby="kualitas-title">
      <div className="container">
        <SectionHeading
          id="kualitas-title"
          eyebrow="Kualitas"
          title="Kenali apa yang ada di balik produk."
          lede="Dari AFC Japan hingga sertifikat — setiap langkah dengan dokumennya."
        />
        <TrustSequence steps={TRUST_STEPS} />
        <div className="cert-row">
          {CERTIFICATES.slice(0, 4).map((c, i) => (
            <Reveal key={c.asset.src} delay={i * 90}>
              <CertificateCard certificate={c} />
            </Reveal>
          ))}
        </div>
        <Reveal className="section-foot">
          <Link href="/quality" className="btn btn--ghost">
            Lihat semua dokumen kualitas
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
