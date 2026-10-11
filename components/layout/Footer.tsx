import Link from 'next/link';
import { SOCIAL_LINKS, WHATSAPP_MESSAGES } from '@/config/site';
import { FOOTER_LINKS } from '@/data/navigation';
import { getWhatsAppUrl } from '@/lib/whatsapp';
import { FacebookIcon, InstagramIcon } from '../ui/Icons';
import { AFCLogo } from './AFCLogo';

export function Footer() {
  return (
    <footer className="footer" data-hide-floating>
      <div className="container footer__inner">
        <div className="footer__brand">
          <AFCLogo className="footer__logo" />
          <p className="muted">Wellness dari Jepang, sejak 1969.</p>
          <ul className="footer__social" aria-label="Media sosial">
            {SOCIAL_LINKS.map((s) => (
              <li key={s.id}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" className="footer__social-link">
                  {s.id === 'instagram' ? <InstagramIcon /> : <FacebookIcon />}
                  <span>{s.id === 'instagram' ? s.handle : s.label}</span>
                </a>
              </li>
            ))}
          </ul>
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
          Informasi produk bersumber dari materi AFC; sebagian merupakan pernyataan perusahaan yang belum tentu
          diverifikasi pihak independen, dan testimoni adalah pengalaman pribadi. Produk-produk ini bukan obat dan tidak
          dimaksudkan untuk mendiagnosis, mengobati, atau menyembuhkan penyakit. Konsultasikan kondisi kesehatan dengan
          tenaga medis.
        </p>
        <p>Copyright © {new Date().getFullYear()} AFC Lifescience</p>
      </div>
    </footer>
  );
}
