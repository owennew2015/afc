'use client';

import { useEffect, useId, useState, type ReactNode } from 'react';
import { cx } from '@/lib/cx';
import { PlusIcon } from '../ui/Icons';

/**
 * Holds the detailed chapters. Collapsed by default so phone users are not
 * overwhelmed; the content stays in the HTML for search engines.
 */
export function DeepDiveSection({ children, chapters }: { children: ReactNode; chapters: string[] }) {
  const [open, setOpen] = useState(false);
  const contentId = useId();

  useEffect(() => {
    const sync = () => {
      if (window.location.hash === '#deep-dive') setOpen(true);
    };
    sync();
    window.addEventListener('hashchange', sync);
    return () => window.removeEventListener('hashchange', sync);
  }, []);

  return (
    <div id="deep-dive" className={cx('deep-dive', open && 'deep-dive--open')}>
      <div className="container">
        <div className="deep-dive__bar">
          <div>
            <p className="eyebrow">Deep Dive</p>
            <p className="deep-dive__intro">
              Untuk yang ingin tahu lebih dalam: {chapters.join(', ').toLowerCase()}.
            </p>
          </div>
          <button
            type="button"
            className="btn btn--ghost deep-dive__toggle"
            aria-expanded={open}
            aria-controls={contentId}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? 'Tutup Deep Dive' : 'Buka Deep Dive'}
            <PlusIcon className="deep-dive__icon" />
          </button>
        </div>
      </div>
      <div id={contentId} className="deep-dive__content" hidden={!open}>
        {children}
      </div>
    </div>
  );
}
