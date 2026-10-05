import type { Metadata } from 'next';
import { LocationCard } from '@/components/sections/LocationCard';
import { PageIntro } from '@/components/sections/PageIntro';
import { WhatsAppIcon } from '@/components/ui/Icons';
import { Reveal } from '@/components/ui/Reveal';
import { WHATSAPP_MESSAGES } from '@/config/site';
import { LOCATIONS } from '@/data/company';
import { PRODUCTS } from '@/data/products';
import { getWhatsAppUrl } from '@/lib/whatsapp';

export const metadata: Metadata = {
  title: 'Hubungi Konsultan',
  description: 'Hubungi konsultan AFC melalui WhatsApp untuk pertanyaan tentang produk atau peluang menjadi bagian dari AFC.',
  alternates: { canonical: '/contact' },
};

const TOPICS = [
  { label: 'Produk AFC secara umum', message: WHATSAPP_MESSAGES.general },
  ...PRODUCTS.map((p) => ({ label: p.name, message: WHATSAPP_MESSAGES.product(p.name) })),
  { label: 'Peluang menjadi bagian dari AFC', message: WHATSAPP_MESSAGES.opportunity },
];

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Kontak"
        title="Hubungi Konsultan"
        lede="Pilih topik — WhatsApp akan terbuka dengan pesan yang sudah disiapkan. Tanpa formulir."
      />
      <section className="section section--tight" data-hide-floating>
        <div className="container">
          <ul className="topic-list">
            {TOPICS.map((t, i) => (
              <Reveal as="li" key={t.label} delay={i * 60}>
                <a className="topic" href={getWhatsAppUrl(t.message)} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="topic__icon" />
                  <span className="topic__label">{t.label}</span>
                  <span className="topic__go" aria-hidden="true">
                    →
                  </span>
                </a>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
      <section className="section section--sunken" aria-labelledby="office-title">
        <div className="container">
          <h2 id="office-title" className="block-title">
            Kantor AFC
          </h2>
          <div className="location-grid">
            {LOCATIONS.filter((l) => l.role !== 'AFC Health Center').map((l, i) => (
              <Reveal key={l.city} delay={(i % 3) * 90}>
                <LocationCard location={l} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
