import { ASSETS, ingredientImage } from '../assets';
import type { Product } from '../types';

const core = (file: string, name: string) => ingredientImage('utsukushii', file, name, 'AFC-SRC-27');

export const utsukushii: Product = {
  slug: 'utsukushii',
  name: 'Utsukushhii',
  nameJa: null,
  nameMeaning: 'Diambil dari kata Jepang utsukushii (美しい), yang berarti “indah”.',
  edition: '2.0 Gold Version',
  tagline: 'Lima bahan inti, satu racikan Jepang.',
  shortDescription:
    'Minuman serbuk rasa anggur dengan bakteri asam laktat, Takara kombu fucoidan, dan salmon DNA.',
  whatIs: [
    'Utsukushhii 2.0 adalah minuman serbuk rasa anggur buatan Jepang, dikemas dalam 28 sachet.',
    'Lima bahan intinya — Lactococcus lactis, lactic acid bacteria, Bifidobacterium longum, Takara kombu fucoidan, dan salmon DNA — berukuran nano 800 Dalton menurut AFC.',
    'Versi 2.0 Gold Version menambahkan black garlic (kuro ninniku), kiwi seed extract, L-glutathione, resveratrol, vitamin D, pineapple extract, dan fish collagen.',
  ],
  positioning: 'Produk beauty & wellness AFC: bakteri asam laktat, fucoidan dari kombu, dan DNA salmon.',
  positioningPoints: [
    'Lima bahan inti dalam satu produk',
    'Ukuran nano 800 Dalton',
    'Versi 2.0 Gold dengan tujuh bahan tambahan',
    'Made in Japan',
  ],
  format: 'Minuman serbuk rasa anggur · 28 sachet',
  contents: '28 sachet @ 2,5 g',
  bpom: 'BPOM RI ML 867031004482',
  composition: null,
  packaging: [
    { label: 'Jenis produk', value: 'Minuman serbuk rasa anggur (ぶどう風味)', kind: 'documented', source: 'AFC-SRC-25' },
    { label: 'Isi', value: '28 sachet @ 2,5 g', kind: 'documented', source: 'AFC-SRC-25' },
    { label: 'Versi', value: '2.0 Version', kind: 'documented', source: 'AFC-SRC-25' },
    {
      label: 'Diimpor dan didistribusikan oleh',
      value: 'PT H&E Dermatech Indonesia, Tangerang',
      kind: 'documented',
      source: 'AFC-SRC-25',
    },
  ],
  price: 'Rp 1.850.000',
  usage: null,
  heroAsset: ASSETS.products.utsukushiiPack,
  keyVisual: ASSETS.products.utsukushiiKeyVisual,
  theme: { deep: '#2e0f1d', mid: '#6b2943', accent: '#d9b98a', soft: '#f4e9e6', dark: true },
  category: 'beauty',
  highlightIngredients: ['Lactococcus lactis', 'Kombu Fucoidan', 'Salmon DNA'],
  ingredientGroups: [
    {
      title: 'Lima bahan inti',
      summary: '“Powerful Ingredients” Utsukushhii, berukuran nano 800 Dalton.',
      items: [
        { name: 'Lactococcus lactis', image: core('lactococcus-lactis', 'Lactococcus lactis') },
        { name: 'Lactic Acid Bacteria', image: core('lactic-acid-bacteria', 'Lactic Acid Bacteria') },
        { name: 'Bifidobacterium longum', image: core('bifidobacterium-longum', 'Bifidobacterium longum') },
        { name: 'Takara Kombu Fucoidan', image: core('kombu-fucoidan', 'Takara Kombu Fucoidan') },
        { name: 'Salmon DNA', image: core('salmon-dna', 'Salmon DNA') },
      ],
    },
    {
      title: 'Tambahan 2.0 Gold Version',
      summary: 'Bahan tambahan pada versi 2.0 Gold.',
      items: [
        { name: 'Black Garlic (Kuro Ninniku)', image: core('black-garlic', 'Black Garlic') },
        { name: 'Kiwi Seed Extract', image: core('kiwi-seed-extract', 'Kiwi Seed Extract') },
        { name: 'L-Glutathione', image: core('l-glutathione', 'L-Glutathione') },
        { name: 'Resveratrol', image: core('resveratrol', 'Resveratrol') },
        { name: 'Vitamin D', image: core('vitamin-d', 'Vitamin D') },
        { name: 'Pineapple Extract', image: core('pineapple-extract', 'Pineapple Extract') },
        { name: 'Fish Collagen', image: core('fish-collagen', 'Fish Collagen') },
      ],
    },
  ],
  technology: [
    {
      title: 'Lima bahan inti',
      body: 'Tiga bakteri asam laktat — Lactococcus lactis, lactic acid bacteria, dan Bifidobacterium longum — bersama Takara kombu fucoidan dan salmon DNA.',
      kind: 'company',
      source: 'AFC-SRC-26',
    },
    {
      title: 'Nano sized 800 Dalton',
      body: 'AFC menyebut bahan Utsukushhii berukuran nano 800 Dalton. Dalton adalah satuan massa molekul.',
      kind: 'company',
      source: 'AFC-SRC-26',
    },
  ],
  patents: [
    { number: 'JP-3040711B2' },
    { number: 'JP-3272023B2' },
    { number: 'JP-2712000' },
    { number: 'JP-2969017B2' },
    { number: 'JP-5635690B2' },
    { number: 'US-7048953B2' },
    { number: 'JP-5697788B1' },
    { number: 'JP-3040699B2' },
  ],
  supportingMaterial: [
    { title: 'Powerful Ingredients', caption: 'Materi asli AFC tentang lima bahan inti.', asset: ASSETS.products.utsukushiiCore },
    { title: '2.0 Gold Version', caption: 'Materi asli AFC: bahan Utsukushhii 2.0 Gold Version.', asset: ASSETS.products.utsukushiiIngredients },
  ],
  awards: [
    'Tampil dalam materi Best Selling Product 2020 (Helmy Attamimi Award), bersama SOP100+.',
  ],
  quality: [
    'Tercantum sebagai “AFC – Utsukushhii Gold” pada lampiran Sertifikat Halal No. ID00410020764430724.',
    'Diproduksi di Jepang (Made in Japan).',
  ],
  seo: {
    title: 'Utsukushhii 2.0 — Bakteri asam laktat, fucoidan, dan salmon DNA',
    description:
      'Utsukushhii 2.0 Gold Version: minuman serbuk rasa anggur buatan Jepang dengan Lactococcus lactis, Bifidobacterium longum, Takara kombu fucoidan, dan salmon DNA.',
  },
};
