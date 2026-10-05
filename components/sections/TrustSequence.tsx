import Link from 'next/link';
import type { TrustStep } from '@/data/quality';
import { Reveal } from '../ui/Reveal';

export function TrustSequence({ steps }: { steps: TrustStep[] }) {
  return (
    <ol className="trust">
      {steps.map((s, i) => (
        <Reveal as="li" key={s.label} className="trust__step" delay={i * 80}>
          <span className="trust__dot" aria-hidden="true" />
          <p className="trust__label">{s.label}</p>
          <h3 className="trust__title">{s.title}</h3>
          <p className="trust__body">{s.body}</p>
          <Link href={s.href} className="link-arrow trust__link">
            Selengkapnya <span aria-hidden="true">→</span>
          </Link>
        </Reveal>
      ))}
    </ol>
  );
}
