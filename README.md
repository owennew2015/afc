# AFC Life Science — Website

A mobile-first product-discovery site for AFC Life Science Indonesia (Next.js 14, App Router, TypeScript, plain CSS). All user-facing copy is Indonesian.

## Running locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
```

Deploys to Vercel as-is (static pages plus Next image optimisation).

## Configuration

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Consultant number in international format without `+`, e.g. `6281234567890`. |
| `NEXT_PUBLIC_SITE_URL` | Production URL, used for canonical URLs, Open Graph, and the sitemap. |

The WhatsApp number lives in one place, `config/site.ts`, and every "Hubungi Konsultan" button builds its link with `getWhatsAppUrl()` in `lib/whatsapp.ts`. Until a number is set, buttons open WhatsApp with the prefilled message and no recipient.

## Structure

```
app/                 routes: /, /products, /products/[slug], /discover, /quality,
                     /stories, /about, /opportunity, /contact, sitemap, robots
components/
  layout/            header, full-screen menu, AFC Explorer, loader, floating CTA, footer
  home/              homepage sections
  product/           product world: hero, chapters, ingredients, Deep Dive, exit
  sections/          shared blocks: timeline, certificates, recommender, comparison, …
  ui/                SafeImage (no broken images), Reveal, icons, claim labels
data/                all content — products/, company, quality, stories, opportunity
styles/              tokens.css (colours, type, spacing, motion, dark mode) + layered CSS
public/assets/afc/   web assets extracted from the asset pack
scripts/             extract-assets.sh
```

Content is data-driven: change product text in `data/products/*.ts`, not in components. Every fact has a `source` field holding its `AFC-SRC-xx` reference.

## Assets

All imagery comes from `AFC_Website_Asset_Pack_Optimized.pdf`. To regenerate, run:

```bash
scripts/extract-assets.sh path/to/AFC_Website_Asset_Pack_Optimized.pdf
```

Requirements: poppler-utils and ImageMagick. The script crops and masks the source slides. Packaging is isolated from its background but otherwise left unchanged.

| Section | Source pages |
| --- | --- |
| Logo, favicon | SRC-01 |
| SOP Subarashi pack, Hexa Peptide, ingredients, Fruitflow/EFSA, Monde Selection | SRC-09–14 |
| Utsukushhii pack, ingredients | SRC-25–27 |
| Expert material (Dr. Kuhnke) | SRC-30 |
| Hikari pack, peptides, ingredients | SRC-38, 41–42 |
| Safety, certificates, halal, registrations | SRC-51–55 |
| AFC Japan, AFC-HD group, Saikaya, TSE, Indonesia, locations, AFC Care | SRC-56–62 |
| Health centers, NTT water project | SRC-63–65 |
| Awards, MURI | SRC-66–72 |
| Opportunity structure (rebuilt as HTML, not images) | SRC-75–79 |

### Deliberately not published

To follow the content policy in the build brief (no disease or cure claims, testimonials are not proof), the following source material is **not** used:

- **SRC-16–23, 31–37, 44–47:** before/after photos of wounds, tumours, and named conditions (cancer, leukaemia, ADHD, eye injuries), including children. These are disease-outcome claims and identifiable patient images.
- **SRC-24:** COVID-19 vaccine misinformation.
- **SRC-15:** "6-month therapy" organ-regeneration claims.
- **SRC-39–40:** the Hikari list of conditions (ADHD, autism, Alzheimer's, …) and "anak berkebutuhan khusus".
- **SRC-29, SRC-12 patent titles:** titles such as "Anti Tumor Agent" are treatment claims. Patent *numbers* are shown, with a note that patents are not clinical proof.
- **SRC-73–74, 80:** salary and economic-crisis pressure slides, and the rank-celebration artwork.
- **Maximum-income figures (SRC-79):** pairing rates and daily limits are shown. The Rp 660 jt/45 jt "potensi penghasilan" ceilings are not.

`data/stories.ts → TESTIMONIALS` is empty on purpose. Add consented, non-medical testimonials there and they render as cards labelled "Testimoni pengguna".

### Content still needed

Optional fields that are empty are not rendered. That means no placeholders appear, but these sections stay hidden until the content is filled in:

- Product prices (`price`). Until set, the summary button reads "Tanya harga & pesan".
- Usage instructions (`usage`)
- Hikari contents and BPOM number (`contents`, `bpom`), which aren't legible in the source
- Testimonials (`data/stories.ts`)
- The real WhatsApp number
- Legal and company details for the footer

The BPOM numbers for SOP Subarashi and Utsukushhii were read from the pack photos. Check them against the physical packaging before launch.
