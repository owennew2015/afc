'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';
import { WHATSAPP_MESSAGES } from '@/config/site';
import { MENU_LINKS } from '@/data/navigation';
import { cx } from '@/lib/cx';
import { getWhatsAppUrl } from '@/lib/whatsapp';
import { CloseIcon, WhatsAppIcon } from '../ui/Icons';
import { ThemeToggle } from './ThemeToggle';

interface AFCMenuProps {
  open: boolean;
  onClose: () => void;
}

export function AFCMenu({ open, onClose }: AFCMenuProps) {
  const pathname = usePathname();
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (panelRef.current) panelRef.current.inert = !open;
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    document.body.classList.add('is-locked');
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }
      if (e.key !== 'Tab' || !panelRef.current) return;
      const focusables = panelRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled])');
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.classList.remove('is-locked');
      document.removeEventListener('keydown', onKey);
      previouslyFocused?.focus();
    };
  }, [open, onClose]);

  return (
    <div
      id="afc-menu"
      className={cx('menu', open && 'menu--open')}
      role="dialog"
      aria-modal="true"
      aria-label="Menu utama"
      aria-hidden={!open}
      ref={panelRef}
    >
      <div className="menu__top">
        <span className="menu__title">AFC Life Science</span>
        <button ref={closeRef} type="button" className="menu__close" onClick={onClose}>
          <span>Tutup</span>
          <CloseIcon />
        </button>
      </div>
      <nav className="menu__nav" aria-label="Navigasi utama">
        <ol>
          {MENU_LINKS.map((link, i) => (
            <li key={link.href} style={{ '--i': i } as React.CSSProperties}>
              <Link
                href={link.href}
                className={cx('menu__link', pathname === link.href && 'is-current')}
                aria-current={pathname === link.href ? 'page' : undefined}
                onClick={onClose}
              >
                <span className="menu__num">{String(i + 1).padStart(2, '0')}</span>
                <span>{link.label}</span>
              </Link>
            </li>
          ))}
        </ol>
      </nav>
      <div className="menu__foot">
        <a className="btn btn--block" href={getWhatsAppUrl(WHATSAPP_MESSAGES.general)} target="_blank" rel="noopener noreferrer">
          <WhatsAppIcon />
          Hubungi Konsultan
        </a>
        <ThemeToggle />
      </div>
    </div>
  );
}
