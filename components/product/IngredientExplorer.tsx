import type { IngredientGroup } from '@/data/types';
import { Reveal } from '../ui/Reveal';
import { IngredientCard } from './IngredientCard';

/**
 * The lead group is shown with its visuals; supporting groups are plain
 * chips, which keeps the section light on mobile data.
 */
export function IngredientExplorer({ groups }: { groups: IngredientGroup[] }) {
  const [lead, ...rest] = groups;
  if (!lead) return null;
  return (
    <div className="ingredients">
      <Reveal className="ingredients__group">
        <div className="ingredients__head">
          <h3 className="ingredients__title">{lead.title}</h3>
          <span className="ingredients__count">{lead.items.length} bahan</span>
        </div>
        {lead.summary && <p className="ingredients__summary">{lead.summary}</p>}
        <ul className="ingredients__list">
          {lead.items.map((item) => (
            <IngredientCard key={item.name} ingredient={item} />
          ))}
        </ul>
      </Reveal>
      {rest.map((g) => (
        <Reveal key={g.title} className="ingredients__group ingredients__group--chips">
          <h3 className="ingredients__subtitle">{g.title}</h3>
          <ul className="chip-list">
            {g.items.map((item) => (
              <li key={item.name} className="chip">
                {item.name}
              </li>
            ))}
          </ul>
        </Reveal>
      ))}
      <p className="ingredients__disclaimer">Komposisi lengkap dan takaran tercantum pada kemasan.</p>
    </div>
  );
}
