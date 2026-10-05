import Link from 'next/link';
import type { TrustStep } from '@/data/quality';
import { ClaimLabel } from '../ui/ClaimLabel';
import { Reveal } from '../ui/Reveal';

export function TrustSequence({ steps }: { steps: TrustStep[] }) {
  return (
    <ol className="trust">
      {steps.map((s, i) => (
        <Reveal as="li" key={s.label} className="trust__step" delay={i * 80}>
          <span className="trust__num">{String(i + 1).padStart(2, '0')}</span>
          <p className="trust__label">{s.label}</p>
          <h3 className="trust__title">{s.title}</h3>
          <p className="trust__body">{s.body}</p>
          <div className="trust__foot">
            <ClaimLabel kind={s.kind} />
            <Link href={s.href} className="trust__link" aria-label={`Pelajari ${s.label}`}>
              →
            </Link>
          </div>
        </Reveal>
      ))}
    </ol>
  );
}
