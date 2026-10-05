import Link from 'next/link';
import { WHATSAPP_MESSAGES } from '@/config/site';
import { FOOTER_LINKS } from '@/data/navigation';
import { getWhatsAppUrl } from '@/lib/whatsapp';
import { AFCLogo } from './AFCLogo';

export function Footer() {
  return (
    <footer className="footer" data-hide-floating>
      <div className="container footer__inner">
        <div className="footer__brand">
          <AFCLogo className="footer__logo" />
          <p className="muted">Wellness dari Jepang, sejak 1969.</p>
        </div>
        <nav aria-label="Tautan footer">
          <ul className="footer__links">
            {FOOTER_LINKS.map((l) =>
              l.href === '/contact' ? (
                <li key={l.href}>
                  <a href={getWhatsAppUrl(WHATSAPP_MESSAGES.general)} target="_blank" rel="noopener noreferrer">
                    {l.label}
                  </a>
                </li>
              ) : (
                <li key={l.href}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ),
            )}
          </ul>
        </nav>
      </div>
      <div className="container footer__legal">
        <p>
          Informasi produk bersumber dari materi AFC. Produk-produk ini bukan obat dan tidak dimaksudkan untuk
          mendiagnosis, mengobati, atau menyembuhkan penyakit. Konsultasikan kondisi kesehatan dengan tenaga medis.
        </p>
        <p>Copyright © {new Date().getFullYear()} AFC Lifescience</p>
      </div>
    </footer>
  );
}
