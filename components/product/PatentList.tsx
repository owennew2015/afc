import type { Patent } from '@/data/types';

export function PatentList({ patents, note }: { patents: Patent[]; note: string }) {
  return (
    <div className="patents">
      <p className="patents__note">{note}</p>
      <ul className="patents__list">
        {patents.map((p) => (
          <li key={p.number}>
            <span className="patents__number">{p.number}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
