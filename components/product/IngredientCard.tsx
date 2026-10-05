import type { Ingredient } from '@/data/types';
import { SafeImage } from '../ui/SafeImage';

export function IngredientCard({ ingredient }: { ingredient: Ingredient }) {
  return (
    <li className="ingredient">
      <div className="ingredient__img">
        {ingredient.image ? (
          <SafeImage asset={ingredient.image} sizes="80px" />
        ) : (
          <span className="ingredient__initial" aria-hidden="true">
            {ingredient.name.charAt(0)}
          </span>
        )}
      </div>
      <div className="ingredient__text">
        <p className="ingredient__name">{ingredient.name}</p>
        {ingredient.note && (
          <details className="ingredient__note">
            <summary>Apa kata sumber</summary>
            <p>{ingredient.note}</p>
          </details>
        )}
      </div>
    </li>
  );
}
