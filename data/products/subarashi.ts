import { ASSETS, ingredientImage } from '../assets';
import type { Product } from '../types';

const img = (file: string, name: string) => ingredientImage('subarashi', file, name, 'AFC-SRC-11');

export const subarashi: Product = {
  slug: 'subarashi',
  name: 'SOP Subarashi',
  nameJa: '素晴らしい',
  nameMeaning: 'Subarashii (素晴らしい) dalam bahasa Jepang berarti “luar biasa”.',
  edition: null,
  tagline: 'Enam peptida dalam satu produk.',
  shortDescription:
    'Minuman serbuk sereal rasa yoghurt dari Jepang dengan Hexa Peptide — enam peptida dalam satu produk.',
  whatIs: [
    'SOP Subarashi adalah minuman serbuk sereal rasa yoghurt buatan Jepang, dikemas dalam 28 sachet @ 3,5 g.',
    'Intinya adalah Hexa Peptide — enam peptida dalam satu produk — dilengkapi hyaluronic acid, chondroitin, nucleic acid, elastin, L-glutathione, dan asam amino.',
  ],
  positioning: 'Produk peptida AFC: Hexa Peptide dari sumber laut dan nabati, dalam satu sachet.',
  positioningPoints: [
    'Hexa Peptide — 6 peptida dalam 1 produk',
    'Peptida dari salmon, tuna, sardin, dan Fruitflow (vegan)',
    'Made in Japan',
    'Monde Selection 2021 — Bronze Quality Award',
  ],
  format: 'Minuman serbuk sereal rasa yoghurt · 28 sachet',
  contents: '98 g (28 sachet @ 3,5 g)',
  bpom: 'BPOM RI ML 243135000300302',
  packaging: [
    { label: 'Jenis produk', value: 'Minuman serbuk sereal rasa yoghurt', kind: 'documented', source: 'AFC-SRC-09' },
    { label: 'Berat bersih', value: '98 g (28 sachet @ 3,5 g)', kind: 'documented', source: 'AFC-SRC-09' },
    { label: 'Asal', value: 'Made in Japan | 日本製', kind: 'documented', source: 'AFC-SRC-09' },
    { label: 'Diimpor oleh', value: 'PT H&E Dermatech Indonesia, Tangerang', kind: 'documented', source: 'AFC-SRC-09' },
    {
      label: 'Didistribusikan (penjualan langsung) oleh',
      value: 'PT Asayama Famili Cahaya Indonesia, Jakarta',
      kind: 'documented',
      source: 'AFC-SRC-09',
    },
  ],
  price: null,
  usage: null,
  heroAsset: ASSETS.products.subarashiPack,
  keyVisual: ASSETS.products.subarashiKeyVisual,
  theme: { deep: '#0b1638', mid: '#23317a', accent: '#c9a65a', soft: '#e7ebf5', dark: true },
  category: 'nutrisi',
  highlightIngredients: ['Hexa Peptide', 'Hyaluronic Acid', 'Nucleic Acid'],
  ingredientGroups: [
    {
      title: 'Hexa Peptide',
      summary: 'Enam peptida dalam satu produk.',
      items: [
        { name: 'Salmon Caviar Peptide', image: img('salmon-caviar-peptide', 'Salmon Caviar Peptide') },
        { name: 'Tuna Heart Peptide', image: img('tuna-heart-peptide', 'Tuna Heart Peptide') },
        { name: 'Salmon Anserine Peptide', image: img('salmon-anserine-peptide', 'Salmon Anserine Peptide') },
        { name: 'Salmon Ovary Peptide', image: img('salmon-ovary-peptide', 'Salmon Ovary Peptide') },
        { name: 'Sardine Peptide', image: img('sardine-peptide', 'Sardine Peptide') },
        {
          name: 'Fruitflow Vegan Peptide',
          image: img('fruitflow-vegan-peptide', 'Fruitflow Vegan Peptide'),
          note: 'Menurut AFC, klaim Fruitflow telah diotorisasi di Uni Eropa dan diakui oleh European Food Safety Authority (EFSA).',
        },
      ],
    },
    {
      title: 'Bahan pendukung',
      summary: 'Bahan lain yang tercantum bersama Hexa Peptide.',
      items: [
        { name: 'Hyaluronic Acid', image: img('hyaluronic-acid', 'Hyaluronic Acid') },
        { name: 'Chondroitin', image: img('chondroitin', 'Chondroitin') },
        { name: 'Nucleic Acid', image: img('nucleic-acid', 'Nucleic Acid') },
        { name: 'Elastin', image: img('elastin', 'Elastin') },
        { name: 'L-Glutathione', image: img('l-glutathione', 'L-Glutathione') },
        { name: 'Amino Acid', image: img('amino-acid', 'Amino Acid') },
      ],
    },
  ],
  technology: [
    {
      title: 'Hexa Peptide',
      body: '“6 peptides on 1 product”: lima peptida dari sumber laut (salmon, tuna, sardin) dan satu peptida vegan dari Fruitflow.',
      kind: 'company',
      source: 'AFC-SRC-10',
    },
    {
      title: 'Fruitflow & EFSA',
      body: 'Menurut AFC, klaim Fruitflow telah diotorisasi di Uni Eropa dan keamanannya diakui European Food Safety Authority. Ini berlaku untuk bahan Fruitflow, bukan untuk produk secara keseluruhan.',
      kind: 'company',
      source: 'AFC-SRC-13',
    },
  ],
  patents: [
    { number: 'JP-3946238' },
    { number: 'JP-3946239' },
    { number: 'JPWO2003055901A1' },
    { number: 'JP2009538895A' },
    { number: 'JP5641734B2' },
    { number: 'JP3899116' },
    { number: 'JP4247444B2' },
    { number: 'CN108559764B' },
  ],
  supportingMaterial: [
    { title: 'Hexa Peptide', caption: 'Materi asli AFC tentang enam peptida.', asset: ASSETS.products.subarashiHexa },
    { title: 'Ringkasan bahan', caption: 'Materi asli AFC: peptida dan bahan pendukung.', asset: ASSETS.products.subarashiIngredients },
    { title: 'Fruitflow & EFSA', caption: 'Materi asli AFC tentang bahan Fruitflow.', asset: ASSETS.ingredientDocs.fruitflowEfsa },
    { title: 'Monde Selection 2021', caption: 'Bronze Quality Award untuk Subarashi.', asset: ASSETS.awards.mondeSubarashi },
  ],
  awards: [
    'Monde Selection 2021 — Bronze Quality Award, oleh juri 57th World Selection 2021 of Diet and Health Products.',
  ],
  quality: [
    'Tercantum sebagai “AFC – SOP Subarashi” pada lampiran Sertifikat Halal No. ID00410020764430724.',
    'Diproduksi di Jepang (Made in Japan).',
  ],
  seo: {
    title: 'SOP Subarashi — Hexa Peptide dari Jepang',
    description:
      'SOP Subarashi: minuman serbuk sereal rasa yoghurt buatan Jepang dengan Hexa Peptide, hyaluronic acid, chondroitin, nucleic acid, dan elastin.',
  },
};
