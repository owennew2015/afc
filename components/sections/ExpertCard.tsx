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
        <p className="claim claim--company">Materi pendukung AFC</p>
        <blockquote className="expert__quote serif">“{expert.quote}”</blockquote>
        <figcaption>
          <strong>{expert.name}</strong>
          <span>{expert.statedRole}</span>
          <span>
            {expert.context} {expert.quoteAttribution}
          </span>
          <span className="expert__note">
            Kutipan ini berasal dari materi promosi, bukan hasil penelitian yang dipublikasikan atau konsensus ilmiah.
          </span>
        </figcaption>
      </div>
    </figure>
  );
}
