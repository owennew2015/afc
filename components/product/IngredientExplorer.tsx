import type { IngredientGroup } from '@/data/types';
import { Reveal } from '../ui/Reveal';
import { IngredientCard } from './IngredientCard';

export function IngredientExplorer({ groups }: { groups: IngredientGroup[] }) {
  return (
    <div className="ingredients">
      {groups.map((g, gi) => (
        <Reveal key={g.title} className="ingredients__group" delay={gi * 80}>
          <div className="ingredients__head">
            <h3 className="ingredients__title">{g.title}</h3>
            <span className="ingredients__count">{g.items.length} bahan</span>
          </div>
          {g.summary && <p className="ingredients__summary">{g.summary}</p>}
          <ul className="ingredients__list">
            {g.items.map((item) => (
              <IngredientCard key={item.name} ingredient={item} />
            ))}
          </ul>
        </Reveal>
      ))}
      <p className="ingredients__disclaimer">
        Daftar bahan sesuai materi AFC. Informasi komposisi lengkap dan takaran tercantum pada kemasan.
      </p>
    </div>
  );
}
