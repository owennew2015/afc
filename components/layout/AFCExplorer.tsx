'use client';

import { useEffect, useState } from 'react';
import { EXPLORER_SECTIONS } from '@/data/navigation';
import { cx } from '@/lib/cx';

/** Quiet progress indicator for the homepage sections. */
export function AFCExplorer() {
  const [active, setActive] = useState<number>(-1);

  useEffect(() => {
    const els = EXPLORER_SECTIONS.map((s) => document.getElementById(s.id)).filter(Boolean) as HTMLElement[];
    if (els.length === 0) return;

    const update = () => {
      const probe = window.innerHeight * 0.4;
      let current = -1;
      els.forEach((el, i) => {
        if (el.getBoundingClientRect().top <= probe) current = i;
      });
      const last = els[els.length - 1].getBoundingClientRect();
      if (last.bottom < probe) current = -1;
      setActive(current);
    };

    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const total = String(EXPLORER_SECTIONS.length).padStart(2, '0');

  return (
    <nav className={cx('explorer', active >= 0 && 'explorer--visible')} aria-label="AFC Explorer">
      <p className="explorer__title">AFC Explorer</p>
      <ol className="explorer__list">
        {EXPLORER_SECTIONS.map((s, i) => (
          <li key={s.id}>
            <a href={`#${s.id}`} className={cx('explorer__item', i === active && 'is-active')} aria-current={i === active ? 'step' : undefined}>
              <span className="explorer__num">{String(i + 1).padStart(2, '0')}</span>
              <span className="explorer__label">{s.label}</span>
            </a>
          </li>
        ))}
      </ol>
      <p className="explorer__compact" aria-hidden="true">
        {active >= 0 && (
          <>
            <span className="explorer__num">{String(active + 1).padStart(2, '0')}</span>
            <span className="explorer__sep">/ {total}</span>
            <span>{EXPLORER_SECTIONS[active].label}</span>
          </>
        )}
      </p>
    </nav>
  );
}
