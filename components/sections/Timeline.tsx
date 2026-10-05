import type { TimelineEntry } from '@/data/company';
import { cx } from '@/lib/cx';
import { Reveal } from '../ui/Reveal';
import { SafeImage } from '../ui/SafeImage';

/** Editorial timeline: large year, short explanation, optional image. */
export function Timeline({ entries, compact }: { entries: TimelineEntry[]; compact?: boolean }) {
  return (
    <ol className={cx('timeline', compact && 'timeline--compact')}>
      {entries.map((e, i) => (
        <Reveal as="li" key={e.title} className="timeline__item" delay={compact ? i * 80 : 0}>
          <p className="timeline__year serif">{e.year}</p>
          <div className="timeline__body">
            <h3 className="timeline__title">{e.title}</h3>
            <p>{e.body}</p>
          </div>
          {!compact && e.image && (
            <div className="timeline__media">
              <SafeImage asset={e.image} sizes="(min-width: 1024px) 480px, 100vw" />
            </div>
          )}
        </Reveal>
      ))}
    </ol>
  );
}
