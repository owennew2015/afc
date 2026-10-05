'use client';

import { createElement, useEffect, useRef, type CSSProperties, type ReactNode } from 'react';
import { cx } from '@/lib/cx';

let observer: IntersectionObserver | null = null;

function getObserver(): IntersectionObserver | null {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return null;
  if (!observer) {
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer?.unobserve(entry.target);
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    );
  }
  return observer;
}

interface RevealProps {
  children: ReactNode;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  variant?: 'rise' | 'blur' | 'mask';
  delay?: number;
  id?: string;
}

/** Fades content in once it scrolls into view. Content is visible without JS. */
export function Reveal({ children, as = 'div', className, variant = 'rise', delay = 0, id }: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    const io = getObserver();
    if (!el) return;
    if (!io) {
      el.classList.add('is-visible');
      return;
    }
    io.observe(el);
    return () => io.unobserve(el);
  }, []);

  return createElement(
    as,
    {
      ref,
      id,
      className: cx('reveal', variant === 'blur' && 'reveal--blur', variant === 'mask' && 'reveal--mask', className),
      style: delay ? ({ '--reveal-delay': `${delay}ms` } as CSSProperties) : undefined,
    },
    children,
  );
}
