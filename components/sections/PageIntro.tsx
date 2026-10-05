import type { ReactNode } from 'react';
import { Reveal } from '../ui/Reveal';

export function PageIntro({ eyebrow, title, lede, children }: { eyebrow: string; title: ReactNode; lede?: ReactNode; children?: ReactNode }) {
  return (
    <header className="page-intro">
      <div className="container">
        <Reveal className="page-intro__inner" variant="blur">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          {lede && <p className="lede">{lede}</p>}
          {children}
        </Reveal>
      </div>
    </header>
  );
}
