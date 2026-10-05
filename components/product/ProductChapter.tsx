import type { ReactNode } from 'react';
import { cx } from '@/lib/cx';
import { Reveal } from '../ui/Reveal';

interface ProductChapterProps {
  id: string;
  number: number;
  title: string;
  kicker?: string;
  children: ReactNode;
  tone?: 'plain' | 'soft' | 'deep';
}

/** One logical chapter: one message, one visual, one action. */
export function ProductChapter({ id, number, title, kicker, children, tone = 'plain' }: ProductChapterProps) {
  return (
    <section id={id} className={cx('chapter', `chapter--${tone}`)} aria-labelledby={`${id}-title`}>
      <div className="container">
        <Reveal className="chapter__head">
          <span className="chapter__num">{String(number).padStart(2, '0')}</span>
          <div>
            {kicker && <p className="chapter__kicker">{kicker}</p>}
            <h2 id={`${id}-title`} className="chapter__title">
              {title}
            </h2>
          </div>
        </Reveal>
        <div className="chapter__content">{children}</div>
      </div>
    </section>
  );
}
