import type { ReactNode } from 'react';
import { WHATSAPP_MESSAGES } from '@/config/site';
import { getWhatsAppUrl } from '@/lib/whatsapp';
import { Reveal } from '../ui/Reveal';
import { WhatsAppIcon } from '../ui/Icons';

interface WhatsAppCTAProps {
  title?: ReactNode;
  body?: ReactNode;
  message?: string;
  eyebrow?: string;
  context?: 'general' | 'opportunity' | 'product';
}

export function WhatsAppCTA({
  title = 'Hubungi Konsultan',
  body = 'Punya pertanyaan tentang produk AFC? Konsultan kami siap menjelaskan melalui WhatsApp.',
  message = WHATSAPP_MESSAGES.general,
  eyebrow = 'Langkah berikutnya',
  context = 'general',
}: WhatsAppCTAProps) {
  return (
    <section className="cta" data-hide-floating data-whatsapp-context={context} aria-labelledby="cta-title">
      <div className="container">
        <Reveal className="cta__inner" variant="blur">
          <p className="eyebrow eyebrow--plain">{eyebrow}</p>
          <h2 id="cta-title">{title}</h2>
          <p className="cta__body">{body}</p>
          <a className="btn btn--light" href={getWhatsAppUrl(message)} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon />
            Hubungi Konsultan
          </a>
          <p className="cta__note">Membuka WhatsApp. Tanpa formulir.</p>
        </Reveal>
      </div>
    </section>
  );
}
