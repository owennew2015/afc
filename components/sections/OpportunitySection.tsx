import { DIRECT_SPONSOR, HOW_IT_WORKS, PAIRING, PASS_UP_STEPS, TIERS } from '@/data/opportunity';
import { Reveal } from '../ui/Reveal';

export function OpportunitySection() {
  return (
    <>
      <section className="section section--tight" aria-labelledby="how-title">
        <div className="container">
          <h2 id="how-title" className="block-title">
            Bagaimana cara kerjanya
          </h2>
          <ol className="how">
            {HOW_IT_WORKS.map((s, i) => (
              <Reveal as="li" key={s.title} className="how__step" delay={i * 80}>
                <span className="how__num serif">{String(i + 1).padStart(2, '0')}</span>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--sunken" aria-labelledby="tier-title">
        <div className="container">
          <h2 id="tier-title" className="block-title">
            Tiga tingkat keanggotaan
          </h2>
          <p className="prose opp-intro">
            Setiap tingkat dimulai dengan pembelian paket produk. Angka berikut sesuai materi rencana pemasaran AFC.
          </p>
          <div className="tiers">
            {TIERS.map((t, i) => (
              <Reveal key={t.id} className={`tier tier--${t.id}`} delay={i * 90}>
                <p className="tier__name serif">{t.name}</p>
                <dl>
                  <div>
                    <dt>Modal</dt>
                    <dd>{t.capital}</dd>
                  </div>
                  <div>
                    <dt>Paket produk</dt>
                    <dd>
                      {t.packageLength} · {t.boxes}
                    </dd>
                  </div>
                </dl>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="bonus-title">
        <div className="container">
          <h2 id="bonus-title" className="block-title">
            Struktur bonus
          </h2>
          <p className="prose opp-intro">
            Ringkasan dari materi AFC. Bonus dihitung dari aktivitas penjualan dan sponsor; tidak ada penghasilan yang
            dijamin.
          </p>

          <div className="bonus">
            <Reveal className="bonus__block">
              <h3 className="bonus__title">Bonus sponsor langsung</h3>
              <p className="bonus__desc">Diterima saat kamu mensponsori anggota baru. Nilainya bergantung pada tingkatmu dan tingkat anggota baru.</p>
              <div className="bonus__cards">
                {TIERS.slice()
                  .reverse()
                  .map((t) => (
                    <div key={t.id} className="bonus__card">
                      <p className="bonus__who">Jika kamu {t.name}</p>
                      <ul>
                        {TIERS.slice()
                          .reverse()
                          .map((s) => (
                            <li key={s.id}>
                              <span>Mensponsori {s.name}</span>
                              <strong>{DIRECT_SPONSOR[t.id][s.id]}</strong>
                            </li>
                          ))}
                      </ul>
                    </div>
                  ))}
              </div>
            </Reveal>

            <Reveal className="bonus__block">
              <h3 className="bonus__title">Bonus pass up</h3>
              <p className="bonus__desc">Selisih bonus sponsor diteruskan ke sponsor berpaket lebih tinggi. Contohnya:</p>
              <ol className="passup">
                {PASS_UP_STEPS.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ol>
            </Reveal>

            <Reveal className="bonus__block">
              <h3 className="bonus__title">Bonus pairing</h3>
              <p className="bonus__desc">Dihitung per pasangan paket di jaringan, dengan batas harian per tingkat.</p>
              <ul className="pairing">
                {TIERS.slice()
                  .reverse()
                  .map((t) => (
                    <li key={t.id}>
                      <span className="pairing__tier">{t.name}</span>
                      <span>{PAIRING[t.id].perPackage}</span>
                      <span className="muted">Maks. {PAIRING[t.id].maxPairs}</span>
                    </li>
                  ))}
              </ul>
            </Reveal>
          </div>

          <Reveal className="opp-disclaimer">
            <h3>Yang perlu kamu ketahui</h3>
            <ul>
              <li>Penghasilan bergantung pada aktivitas penjualan dan jaringan masing-masing. Tidak ada penghasilan yang dijamin.</li>
              <li>Batas pairing adalah batas maksimum, bukan perkiraan penghasilan.</li>
              <li>Rencana pemasaran dapat berubah. Minta dokumen resmi terbaru beserta syarat dan ketentuannya dari konsultan.</li>
            </ul>
          </Reveal>
        </div>
      </section>
    </>
  );
}
