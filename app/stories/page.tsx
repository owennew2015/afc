import type { Metadata } from 'next';
import { CommunityCard } from '@/components/sections/CommunityCard';
import { ExpertCard } from '@/components/sections/ExpertCard';
import { PageIntro } from '@/components/sections/PageIntro';
import { TestimonialArchive } from '@/components/sections/TestimonialArchive';
import { WhatsAppCTA } from '@/components/sections/WhatsAppCTA';
import { Reveal } from '@/components/ui/Reveal';
import { SafeImage } from '@/components/ui/SafeImage';
import { ASSETS } from '@/data/assets';
import { COMMUNITY_STORIES, EXPERT_MATERIAL, TESTIMONIALS } from '@/data/stories';

export const metadata: Metadata = {
  title: 'Cerita',
  description: 'Cerita AFC Care — health center di Lombok dan Poso, sumber air di NTT — serta materi pendukung produk AFC.',
  alternates: { canonical: '/stories' },
};

export default function StoriesPage() {
  return (
    <>
      <PageIntro eyebrow="Cerita" title="Cerita dari mereka" lede="Dari komunitas yang dibangun AFC Care, hingga orang-orang yang mengenal produk AFC." />

      <section className="section section--tight" aria-labelledby="care-title">
        <div className="container">
          <div className="care-banner">
            <Reveal className="care-banner__media" variant="mask">
              <SafeImage asset={ASSETS.company.afcCare} sizes="(min-width: 1024px) 1100px, 100vw" />
            </Reveal>
            <Reveal className="care-banner__copy">
              <h2 id="care-title" className="block-title">
                AFC Care
              </h2>
              <p className="lede">
                <span lang="ja">私たちは家族です</span> — “kami adalah keluarga”. Program sosial AFC di Indonesia.
              </p>
            </Reveal>
          </div>
          <div className="community-grid">
            {COMMUNITY_STORIES.map((s, i) => (
              <Reveal key={s.title} delay={i * 100}>
                <CommunityCard story={s} />
                <ul className="community-card__details">
                  {s.details.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--sunken" aria-labelledby="expert-title">
        <div className="container">
          <h2 id="expert-title" className="block-title">
            Materi pendukung
          </h2>
          <ExpertCard expert={EXPERT_MATERIAL} />
        </div>
      </section>

      {TESTIMONIALS.length > 0 && (
      <section className="section" aria-labelledby="testi-title">
        <div className="container">
          <h2 id="testi-title" className="block-title">
            Testimoni pengguna
          </h2>
          <p className="prose testi-intro">
            Testimoni yang disampaikan oleh pengguna adalah pengalaman pribadi, bukan bukti ilmiah dan bukan jaminan
            hasil.
          </p>
          <TestimonialArchive />
        </div>
      </section>
      )}

      <WhatsAppCTA />
    </>
  );
}
