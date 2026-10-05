import type { SourceMaterial as SourceMaterialItem } from '@/data/types';
import { PlusIcon } from './Icons';
import { SafeImage } from './SafeImage';

/** Original AFC slides, tucked behind a disclosure so the page stays clean. */
export function SourceMaterial({ items, label = 'Lihat materi asli' }: { items: SourceMaterialItem[]; label?: string }) {
  if (items.length === 0) return null;
  return (
    <details className="source-material">
      <summary>
        <span>{label}</span>
        <span className="source-material__count">{items.length} materi</span>
        <PlusIcon className="source-material__icon" />
      </summary>
      <div className="source-material__grid">
        {items.map((item) => (
          <figure key={item.asset.src} className="source-material__item">
            <div className="source-material__frame">
              <SafeImage asset={item.asset} sizes="(min-width: 1024px) 560px, 100vw" fill />
            </div>
            <figcaption>
              <strong>{item.title}</strong>
              <span>{item.caption}</span>
              <span className="source-ref">Sumber: {item.asset.source}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </details>
  );
}
