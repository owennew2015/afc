import Link from 'next/link';
import { COMMUNITY_STORIES } from '@/data/stories';
import { CommunityCard } from '../sections/CommunityCard';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';

export function StoriesPreview() {
  return (
    <section id="cerita" className="section" aria-labelledby="cerita-title">
      <div className="container">
        <SectionHeading
          id="cerita-title"
          index="04"
          eyebrow="Cerita"
          title="Cerita dari mereka"
          lede="Lewat AFC Care, AFC membangun health center dan sumber air bersih bersama masyarakat."
        />
        <div className="community-grid">
          {COMMUNITY_STORIES.map((s, i) => (
            <Reveal key={s.title} delay={i * 100}>
              <CommunityCard story={s} />
            </Reveal>
          ))}
        </div>
        <Reveal className="section-foot">
          <Link href="/stories" className="btn btn--ghost">
            Semua cerita
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
