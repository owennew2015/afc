import type { ExpertMaterial } from '@/data/stories';
import { SafeImage } from '../ui/SafeImage';

/** Expert material, attributed exactly as the source states it. */
export function ExpertCard({ expert }: { expert: ExpertMaterial }) {
  return (
    <figure className="expert">
      <div className="expert__media">
        <SafeImage asset={expert.asset} sizes="(min-width: 1024px) 560px, 100vw" />
      </div>
      <div className="expert__body">
        <blockquote className="expert__quote serif">“{expert.quote}”</blockquote>
        <figcaption>
          <strong>{expert.name}</strong>
          <span>{expert.statedRole}</span>
          <span>
            {expert.context} {expert.quoteAttribution}
          </span>
          <span className="expert__note">
            Kutipan dari materi promosi AFC, bukan hasil penelitian yang dipublikasikan.
          </span>
        </figcaption>
      </div>
    </figure>
  );
}
