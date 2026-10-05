'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { WHATSAPP_MESSAGES } from '@/config/site';
import { cx } from '@/lib/cx';
import { getWhatsAppUrl } from '@/lib/whatsapp';
import { contextualWhatsAppMessage } from '@/lib/whatsappContext';
import { WhatsAppIcon } from '../ui/Icons';

/**
 * The one global contact action: a slim bar at the thumb on phones, a pill
 * on larger screens. It appears after the first screen, carries the current
 * product in its message, and steps aside whenever a full contact section is
 * on screen.
 */
export function FloatingContact() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState<string>(WHATSAPP_MESSAGES.general);

  useEffect(() => {
    setMessage(contextualWhatsAppMessage());

    const blockers = new Set<Element>();
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => (e.isIntersecting ? blockers.add(e.target) : blockers.delete(e.target)));
      update();
    });
    document.querySelectorAll('[data-hide-floating]').forEach((el) => io.observe(el));

    function update() {
      setVisible(window.scrollY > window.innerHeight * 0.7 && blockers.size === 0);
    }
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => {
      io.disconnect();
      window.removeEventListener('scroll', update);
    };
  }, [pathname]);

  return (
    <a
      className={cx('floating-contact', visible && 'floating-contact--visible')}
      href={getWhatsAppUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
    >
      <WhatsAppIcon />
      <span>Hubungi Konsultan</span>
    </a>
  );
}
