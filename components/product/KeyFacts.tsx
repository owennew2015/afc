import type { Fact } from '@/data/types';

/** Label/value list. Facts without a value are not rendered. */
export function KeyFacts({ facts }: { facts: Fact[] }) {
  const filled = facts.filter((f) => f.value);
  if (filled.length === 0) return null;
  return (
    <dl className="facts">
      {filled.map((f) => (
        <div key={f.label} className="facts__row">
          <dt>{f.label}</dt>
          <dd>{f.value}</dd>
        </div>
      ))}
    </dl>
  );
}
