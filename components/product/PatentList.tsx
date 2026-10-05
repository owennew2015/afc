import type { Patent } from '@/data/types';
import { PlusIcon } from '../ui/Icons';

export function PatentList({ patents }: { patents: Patent[] }) {
  if (patents.length === 0) return null;
  return (
    <details className="source-material patents">
      <summary>
        <span>{patents.length} paten terkait bahan</span>
        <PlusIcon className="source-material__icon" />
      </summary>
      <p className="patents__note">
        Nomor paten sebagaimana dirujuk AFC. Paten melindungi komposisi atau metode tertentu — bukan izin edar dan bukan
        bukti klinis manfaat produk.
      </p>
      <ul className="patents__list">
        {patents.map((p) => (
          <li key={p.number}>
            <span className="patents__number">{p.number}</span>
          </li>
        ))}
      </ul>
    </details>
  );
}
