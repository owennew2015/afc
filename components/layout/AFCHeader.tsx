'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { cx } from '@/lib/cx';
import { AFCLogo } from './AFCLogo';
import { AFCMenu } from './AFCMenu';

export function AFCHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [onDark, setOnDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Pages whose first screen is dark mark it with data-hero-tone="dark".
  useEffect(() => {
    setOnDark(Boolean(document.querySelector('[data-hero-tone="dark"]')));
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header className={cx('header', scrolled && 'header--scrolled', onDark && !scrolled && 'header--on-dark')}>
        <div className="header__inner">
          <Link href="/" className="header__logo" aria-label="AFC Life Science — beranda">
            <AFCLogo />
          </Link>
          <button
            type="button"
            className="header__menu-btn"
            aria-expanded={menuOpen}
            aria-controls="afc-menu"
            onClick={() => setMenuOpen(true)}
          >
            <span className="header__menu-label">Menu</span>
            <span className="header__burger" aria-hidden="true">
              <span />
              <span />
            </span>
          </button>
        </div>
      </header>
      <AFCMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
