import type { ReactNode } from 'react';
import { cx } from '@/lib/cx';
import { Reveal } from './Reveal';

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  lede?: ReactNode;
  center?: boolean;
  as?: 'h1' | 'h2';
  id?: string;
}

export function SectionHeading({ eyebrow, title, lede, center, as: Tag = 'h2', id }: SectionHeadingProps) {
  return (
    <Reveal className={cx('section-head', center && 'section-head--center')}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <Tag id={id}>{title}</Tag>
      {lede && <p className="lede">{lede}</p>}
    </Reveal>
  );
}
