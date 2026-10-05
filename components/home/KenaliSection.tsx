import Link from 'next/link';
import { ASSETS } from '@/data/assets';
import { TIMELINE } from '@/data/company';
import { SafeImage } from '../ui/SafeImage';
import { Reveal } from '../ui/Reveal';
import { Timeline } from '../sections/Timeline';

export function KenaliSection() {
  return (
    <section id="kenali" className="section kenali" aria-labelledby="kenali-title">
      <div className="container">
        <div className="kenali__intro">
          <Reveal className="kenali__copy">
            <p className="eyebrow">
              <span className="section-head__index">01</span> AFC
            </p>
            <h2 id="kenali-title">Kenali AFC</h2>
            <p className="kenali__year serif" aria-hidden="true">
              1969
            </p>
            <div className="prose">
              <p>
                AFC berawal di Shizuoka, Jepang, pada 1969 sebagai perusahaan farmasi. Kini induknya, AFC-HD AMS Life
                Science, tercatat di Tokyo Stock Exchange.
              </p>
              <p>Sejak 2018, AFC hadir di Indonesia — membawa produk yang dibuat di Jepang.</p>
            </div>
          </Reveal>
          <Reveal className="kenali__media" variant="mask">
            <SafeImage asset={ASSETS.company.building} sizes="(min-width: 1024px) 640px, 100vw" />
            <p className="source-ref">Gedung AFC di Jepang · {ASSETS.company.building.source}</p>
          </Reveal>
        </div>

        <Timeline entries={TIMELINE.filter((e) => e.year !== 'GMP')} compact />

        <Reveal className="kenali__more">
          <Link href="/about" className="link-arrow">
            Dibalik AFC <span aria-hidden="true">→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
