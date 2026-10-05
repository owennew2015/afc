'use client';

import { useEffect, useRef } from 'react';
import { PRODUCTS } from '@/data/products';
import { SafeImage } from '../ui/SafeImage';

const ORDER = ['utsukushii', 'subarashi', 'hikari'] as const;

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);

  // Gentle scroll parallax + pointer depth. Disabled for reduced motion.
  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const y = Math.min(window.scrollY, window.innerHeight);
        el.style.setProperty('--scroll', String(y));
      });
    };
    const fine = window.matchMedia('(pointer: fine)').matches;
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty('--px', ((e.clientX - r.left) / r.width - 0.5).toFixed(3));
      el.style.setProperty('--py', ((e.clientY - r.top) / r.height - 0.5).toFixed(3));
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    if (fine) el.addEventListener('pointermove', onMove);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      el.removeEventListener('pointermove', onMove);
    };
  }, []);

  const products = ORDER.map((slug) => PRODUCTS.find((p) => p.slug === slug)!);

  return (
    <section ref={ref} className="hero" aria-labelledby="hero-title">
      <div className="hero__atmos" aria-hidden="true">
        <span className="hero__glow" />
        <span className="hero__ring hero__ring--a" />
        <span className="hero__ring hero__ring--b" />
      </div>

      <div className="container hero__grid">
        <div className="hero__stage">
          {products.map((p, i) => (
            <figure key={p.slug} className={`hero__pack hero__pack--${i}`} style={{ '--world': p.theme.mid } as React.CSSProperties}>
              <div className="hero__pack-img">
                <SafeImage
                  asset={p.heroAsset}
                  sizes={i === 1 ? '(min-width: 1024px) 420px, 52vw' : '(min-width: 1024px) 330px, 38vw'}
                  priority
                />
              </div>
              <span className="hero__pack-shadow" aria-hidden="true" />
              <figcaption className="hero__pack-name">{p.name}</figcaption>
            </figure>
          ))}
        </div>

        <div className="hero__copy">
          <p className="eyebrow hero__in" style={{ '--d': 0 } as React.CSSProperties}>
            AFC Japan · sejak 1969
          </p>
          <h1 id="hero-title" className="hero__title hero__in" style={{ '--d': 1 } as React.CSSProperties}>
            Wellness dari Jepang, <em>dirancang dengan ketelitian.</em>
          </h1>
          <p className="hero__lede hero__in" style={{ '--d': 2 } as React.CSSProperties}>
            Utsukushhii, SOP Subarashi, dan Hikari — tiga produk AFC, dibuat di Jepang.
          </p>
          <div className="btn-row hero__in" style={{ '--d': 3 } as React.CSSProperties}>
            <a className="btn" href="#temukan">
              Temukan produk sesuai kebutuhanmu
            </a>
            <a className="btn btn--ghost" href="#kenali">
              Mulai Menjelajah
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
