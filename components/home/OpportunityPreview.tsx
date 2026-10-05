import Link from 'next/link';
import { TIERS } from '@/data/opportunity';
import { Reveal } from '../ui/Reveal';

export function OpportunityPreview() {
  return (
    <section id="peluang" className="section opp-preview" aria-labelledby="peluang-title">
      <div className="container opp-preview__grid">
        <Reveal className="opp-preview__copy">
          <p className="eyebrow">
            <span className="section-head__index">06</span> Peluang
          </p>
          <h2 id="peluang-title">Peluang menjadi bagian dari AFC</h2>
          <p className="lede">
            AFC Indonesia menjalankan model penjualan langsung. Bagi yang tertarik, ada tiga tingkat keanggotaan —
            dijelaskan apa adanya, tanpa janji penghasilan.
          </p>
          <Link href="/opportunity" className="btn btn--ghost">
            Pelajari cara kerjanya
          </Link>
        </Reveal>
        <Reveal className="opp-preview__tiers" delay={120}>
          <ol>
            {TIERS.map((t, i) => (
              <li key={t.id}>
                <span className="opp-preview__num">{String(i + 1).padStart(2, '0')}</span>
                <span className="opp-preview__name">{t.name}</span>
                <span className="opp-preview__meta">
                  {t.packageLength} · {t.boxes}
                </span>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
