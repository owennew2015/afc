import type { Fact } from '@/data/types';
import { ClaimLabel } from '../ui/ClaimLabel';
import { Reveal } from '../ui/Reveal';

export function KeyFacts({ facts }: { facts: Fact[] }) {
  return (
    <Reveal as="dl" className="facts">
      {facts.map((f) => (
        <div key={f.label} className="facts__row">
          <dt>{f.label}</dt>
          <dd>
            {f.value ?? <span className="muted">[Informasi akan ditambahkan]</span>}
            {f.value && <span className="facts__src">Kemasan · {f.source}</span>}
          </dd>
        </div>
      ))}
      <div className="facts__legend">
        <ClaimLabel kind="documented" />
        <span className="muted">Terbaca pada kemasan produk dalam materi AFC.</span>
      </div>
    </Reveal>
  );
}
