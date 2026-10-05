import type { Award } from '@/data/quality';
import { SafeImage } from '../ui/SafeImage';

export function AwardCard({ award }: { award: Award }) {
  return (
    <figure className="award">
      {award.asset && (
        <div className="award__media">
          <SafeImage asset={award.asset} sizes="(min-width: 1024px) 380px, (min-width: 720px) 50vw, 100vw" fill />
        </div>
      )}
      <figcaption>
        <span className="award__year serif">{award.year}</span>
        <strong>{award.title}</strong>
        <span>{award.body}</span>
      </figcaption>
    </figure>
  );
}
