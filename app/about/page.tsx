import type { Metadata } from 'next';
import { AwardCard } from '@/components/sections/AwardCard';
import { LocationCard } from '@/components/sections/LocationCard';
import { PageIntro } from '@/components/sections/PageIntro';
import { Timeline } from '@/components/sections/Timeline';
import { WhatsAppCTA } from '@/components/sections/WhatsAppCTA';
import { ClaimLabel } from '@/components/ui/ClaimLabel';
import { Reveal } from '@/components/ui/Reveal';
import { SafeImage } from '@/components/ui/SafeImage';
import { SourceMaterial } from '@/components/ui/SourceMaterial';
import { ASSETS } from '@/data/assets';
import { ENTITIES, GROUP, LOCATIONS, MISSION, TIMELINE, VISION } from '@/data/company';
import { AWARDS } from '@/data/quality';

export const metadata: Metadata = {
  title: 'Dibalik AFC',
  description:
    'AFC Japan berdiri sejak 1969 di Shizuoka. Kenali sejarah AFC, grup AFC-HD, kehadiran AFC di Indonesia sejak 2018, dan lokasi kantornya.',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="Tentang AFC"
        title="Dibalik AFC"
        lede="Dari perusahaan farmasi di Shizuoka pada 1969, hingga hadir di Indonesia sejak 2018."
      />

      <section className="section section--tight about-hero" aria-label="AFC Japan">
        <div className="container">
          <Reveal className="about-hero__media" variant="mask">
            <SafeImage asset={ASSETS.company.building} sizes="(min-width: 1240px) 1200px, 100vw" priority />
          </Reveal>
          <div className="about-hero__caption">
            <p className="kenali__year serif" aria-hidden="true">
              1969
            </p>
            <Reveal className="prose">
              <p>
                Menurut materi AFC, AFC Japan berdiri sejak 1969 sebagai perusahaan farmasi — salah satu yang tertua dan
                terbesar di Jepang — dan merupakan perusahaan farmasi pertama yang terdaftar di Tokyo Stock Exchange
                serta pabrik farmasi Jepang pertama yang mendapatkan sertifikat GMP.
              </p>
              <ClaimLabel kind="company" />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="journey-title">
        <div className="container">
          <h2 id="journey-title" className="block-title">
            Perjalanan
          </h2>
          <Timeline entries={TIMELINE} />
        </div>
      </section>

      <section className="section section--sunken" aria-labelledby="group-title">
        <div className="container split">
          <Reveal>
            <h2 id="group-title" className="block-title">
              Grup AFC-HD
            </h2>
            <p className="prose">
              AFC-HD AMS Life Science Co., Ltd. tercatat di Tokyo Stock Exchange (kode 2927). Materi AFC juga menyebut
              akuisisi dan kepemilikan saham mayoritas Saikaya Department Store.
            </p>
          </Reveal>
          <Reveal as="dl" className="group-list" delay={120}>
            {GROUP.map((g) => (
              <div key={g.name}>
                <dt>{g.name}</dt>
                <dd>{g.body}</dd>
              </div>
            ))}
          </Reveal>
        </div>
        <div className="container">
          <SourceMaterial
            items={[
              { title: 'Konglomerasi bisnis AFC-HD', caption: 'Materi asli AFC.', asset: ASSETS.company.group },
              { title: 'Tokyo Stock Exchange', caption: 'AFC-HD AMS Life Science Co., Ltd. (2927).', asset: ASSETS.company.tse },
              { title: 'Saikaya Dept. Store', caption: 'Materi AFC tentang akuisisi Saikaya.', asset: ASSETS.company.saikaya },
            ]}
          />
        </div>
      </section>

      <section className="section indonesia" aria-labelledby="id-title">
        <div className="container indonesia__grid">
          <Reveal className="indonesia__media" variant="mask">
            <SafeImage asset={ASSETS.company.indonesia} sizes="(min-width: 1024px) 420px, 100vw" />
          </Reveal>
          <div>
            <Reveal>
              <p className="indonesia__year serif">2018</p>
              <h2 id="id-title" className="block-title">
                Masuk Indonesia
              </h2>
            </Reveal>
            <Reveal className="vm" delay={100}>
              <h3 className="vm__k">Visi</h3>
              <p className="vm__v serif">“{VISION}”</p>
              <h3 className="vm__k">Misi</h3>
              <p className="vm__v serif">“{MISSION}”</p>
            </Reveal>
            <Reveal as="ul" className="entity-list" delay={160}>
              {ENTITIES.map((e) => (
                <li key={e.name}>
                  <strong>{e.name}</strong>
                  <span>{e.role}</span>
                </li>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section--sunken" aria-labelledby="loc-title">
        <div className="container">
          <h2 id="loc-title" className="block-title">
            Lokasi
          </h2>
          <div className="location-grid">
            {LOCATIONS.map((l, i) => (
              <Reveal key={l.city} delay={(i % 3) * 90}>
                <LocationCard location={l} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="award-title">
        <div className="container">
          <h2 id="award-title" className="block-title">
            Penghargaan
          </h2>
          <div className="award-grid">
            {AWARDS.slice(2, 8).map((a, i) => (
              <Reveal key={`${a.title}-${a.year}`} delay={(i % 3) * 90}>
                <AwardCard award={a} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <WhatsAppCTA />
    </>
  );
}
