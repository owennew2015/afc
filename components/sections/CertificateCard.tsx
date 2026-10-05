import type { Certificate } from '@/data/quality';
import { SafeImage } from '../ui/SafeImage';

export function CertificateCard({ certificate }: { certificate: Certificate }) {
  const { asset } = certificate;
  return (
    <figure className="cert-card">
      <div className="cert-card__doc">
        <SafeImage asset={asset} sizes="(min-width: 1024px) 260px, (min-width: 720px) 40vw, 80vw" />
      </div>
      <figcaption>
        <span className="cert-card__cat">{certificate.category}</span>
        <strong className="cert-card__title">{certificate.title}</strong>
        <span className="cert-card__body">{certificate.body}</span>
      </figcaption>
    </figure>
  );
}
