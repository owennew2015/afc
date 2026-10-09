import { ASSETS, ingredientImage } from '../assets';
import type { Product } from '../types';

const img = (file: string, name: string) => ingredientImage('hikari', file, name, 'AFC-SRC-42');

export const hikari: Product = {
  slug: 'hikari',
  name: 'Hikari',
  nameJa: 'ひかり',
  nameMeaning: 'Hikari (ひかり) dalam bahasa Jepang berarti “cahaya”.',
  edition: null,
  tagline: 'Tiga peptida nabati, satu cahaya.',
  shortDescription:
    'Minuman serbuk dengan Triple Vegan Peptides — marigold, spearmint, dan mango leaf — serta ekstrak buah beri.',
  whatIs: [
    'Hikari adalah minuman serbuk buatan Jepang dalam kemasan sachet.',
    'Intinya adalah Triple Vegan Peptides — marigold, spearmint, dan mango leaf peptide — berukuran nano 400 Dalton menurut AFC.',
    'Peptida tersebut dipadukan dengan ekstrak acerola, blueberry, cherry, blackcurrant, lingonberry, dan strawberry, serta inulin dan L-cysteine.',
  ],
  positioning: 'Produk peptida nabati AFC, dengan ekstrak buah beri dan buah merah.',
  positioningPoints: [
    'Triple Vegan Peptides',
    'Ukuran nano 400 Dalton',
    'Ekstrak buah beri dan buah merah',
    'Made in Japan',
  ],
  format: 'Minuman serbuk · kemasan sachet',
  contents: null,
  bpom: 'BPOM RI ML 866631003482',
  composition:
    'Diformulasikan dengan lutein, vitamin C, vitamin B6, L-cysteine, L-carnitine, inulin, serta campuran ekstrak botani dan bubuk buah beri, termasuk bilberry dan ekstrak mangga.',
  packaging: [
    { label: 'Jenis produk', value: 'Minuman serbuk', kind: 'documented', source: 'AFC-SRC-38' },
    { label: 'Asal', value: 'Made in Japan | 日本製', kind: 'documented', source: 'AFC-SRC-38' },
    { label: 'Diimpor oleh', value: 'PT H&E Dermatech Indonesia, Tangerang', kind: 'documented', source: 'AFC-SRC-38' },
  ],
  price: 'Rp 1.800.000',
  usage: null,
  heroAsset: ASSETS.products.hikariPack,
  keyVisual: ASSETS.products.hikariKeyVisual,
  theme: { deep: '#4a2d33', mid: '#e3b4b0', accent: '#b8875c', soft: '#fbf2ef', dark: false },
  category: 'otak',
  highlightIngredients: ['Marigold Peptide', 'Spearmint Peptide', 'Mango Leaf Peptide'],
  ingredientGroups: [
    {
      title: 'Triple Vegan Peptides',
      summary: 'Tiga peptida nabati berukuran nano 400 Dalton.',
      items: [
        { name: 'Marigold Peptide', image: img('marigold-peptide', 'Marigold Peptide') },
        { name: 'Spearmint Peptide', image: img('spearmint-peptide', 'Spearmint Peptide') },
        { name: 'Mango Leaf Peptide', image: img('mango-leaf-peptide', 'Mango Leaf Peptide') },
      ],
    },
    {
      title: 'Ekstrak buah',
      items: [
        { name: 'Acerola Extract', image: img('acerola-extract', 'Acerola Extract') },
        { name: 'Blueberry Extract', image: img('blueberry-extract', 'Blueberry Extract') },
        { name: 'Cherry Extract', image: img('cherry-extract', 'Cherry Extract') },
        { name: 'Blackcurrant Extract', image: img('blackcurrant-extract', 'Blackcurrant Extract') },
        { name: 'Lingonberry Extract', image: img('lingonberry-extract', 'Lingonberry Extract') },
        { name: 'Strawberry Extract', image: img('strawberry-extract', 'Strawberry Extract') },
      ],
    },
    {
      title: 'Bahan lain',
      items: [
        { name: 'Lutein' },
        { name: 'Vitamin C' },
        { name: 'Vitamin B6' },
        { name: 'L-Carnitine' },
        { name: 'Bilberry' },
        { name: 'Inulin', image: img('inulin', 'Inulin') },
        { name: 'L-Cysteine', image: img('l-cysteine', 'L-Cysteine') },
      ],
    },
  ],
  technology: [
    {
      title: 'Triple Vegan Peptides',
      body: 'Tiga peptida nabati — marigold, spearmint, dan mango leaf — menjadi inti Hikari.',
      kind: 'company',
      source: 'AFC-SRC-41',
    },
    {
      title: 'Nano sized 400 Dalton',
      body: 'AFC menyebut peptida Hikari berukuran nano 400 Dalton. Dalton adalah satuan massa molekul.',
      kind: 'company',
      source: 'AFC-SRC-41',
    },
  ],
  patents: [
    { number: 'US20130231297A1' },
    { number: 'US9226940B2' },
    { number: 'EP2498765A1' },
    { number: 'US10537604' },
    { number: 'EP3538085B1' },
  ],
  supportingMaterial: [
    { title: 'Triple Vegan Peptides', caption: 'Materi asli AFC tentang tiga peptida nabati.', asset: ASSETS.products.hikariPeptides },
    { title: 'Ringkasan bahan', caption: 'Materi asli AFC: peptida dan ekstrak buah Hikari.', asset: ASSETS.products.hikariIngredients },
  ],
  awards: [],
  quality: [
    'Tercantum sebagai “AFC – Hikari” pada lampiran Sertifikat Halal No. ID00410020764430724.',
    'Diproduksi di Jepang (Made in Japan).',
  ],
  seo: {
    title: 'Hikari — Triple Vegan Peptides dari Jepang',
    description:
      'Hikari: minuman serbuk buatan Jepang dengan Triple Vegan Peptides (marigold, spearmint, mango leaf) dan ekstrak buah beri.',
  },
};
