import { ASSETS } from './assets';
import type { Asset, ClaimKind } from './types';

export interface Certificate {
  category: string;
  title: string;
  body: string;
  asset: Asset;
}

/** Certificates shown in the source. Wording describes only what is visible. */
export const CERTIFICATES: Certificate[] = [
  {
    category: 'Halal',
    title: 'Sertifikat Halal Indonesia',
    body: 'No. ID00410020764430724, diterbitkan di Jakarta 19 November 2024 oleh Badan Penyelenggara Jaminan Produk Halal untuk AFC-HD AMS Life Science Co., Ltd.',
    asset: ASSETS.quality.certHalal,
  },
  {
    category: 'Halal',
    title: 'Lampiran: daftar produk',
    body: 'Lampiran sertifikat mencantumkan AFC – SOP Subarashi, AFC – Utsukushhii Gold, dan AFC – Hikari.',
    asset: ASSETS.quality.certHalalAttachment,
  },
  {
    category: 'Organik',
    title: 'Sertifikat organik (JAS)',
    body: 'Sertifikat 認定証 dengan tanda JAS atas nama AFC-HD AMS Life Science.',
    asset: ASSETS.quality.certOrganic,
  },
  {
    category: 'Free Sale',
    title: 'Certificate of Free Sale',
    body: 'Diterbitkan oleh Ministry of Health, Labour and Welfare, Japan, dengan AFC-HD AMS Life Science Co., Ltd. sebagai produsen.',
    asset: ASSETS.quality.certFreeSale,
  },
  {
    category: 'Bebas hormon',
    title: 'Sertifikat bebas hormon',
    body: 'Disertakan AFC dalam materi “Safety Certificate”.',
    asset: ASSETS.quality.certHormoneFree,
  },
  {
    category: 'Radiasi',
    title: 'Test report radiasi nuklir',
    body: 'Laporan uji dari Japan Preventive Medical Laboratory untuk PT H&E Dermatech Indonesia.',
    asset: ASSETS.quality.certRadiation,
  },
];

export const SAFETY_TESTED = ['No heavy metal', 'No harmful chemical', 'No pig DNA', 'Non GMO'];
export const SAFETY_NATURAL = ['No preservatives', 'No artificial flavor', 'No artificial coloring', 'No sugar', 'Low calories'];

export const SAFETY_STATEMENT =
  'Setiap produk dari AFC mendapatkan sertifikat bebas antibiotik, pestisida, logam berat, kimia berbahaya, hormon, dan bebas dari pencemaran radiasi nuklir (dokumen tersedia).';

/** BPOM numbers exactly as listed in the source, which does not map them to products. */
export const BPOM_NUMBERS = [
  'BPOM RI ML 830531001482',
  'BPOM RI ML 867031004482',
  'BPOM RI ML 830531010482',
  'BPOM RI NA 2220200005',
];

export interface Award {
  year: string;
  title: string;
  body: string;
  asset?: Asset;
}

export const AWARDS: Award[] = [
  {
    year: '2021',
    title: 'Monde Selection — Bronze Quality Award',
    body: 'Untuk Subarashi, oleh juri 57th World Selection 2021 of Diet and Health Products.',
    asset: ASSETS.awards.mondeSubarashi,
  },
  {
    year: '2022',
    title: 'Monde Selection — Grand Gold Quality Award',
    body: 'Untuk Sensei Suru, oleh juri 58th World Selection 2022 of Cosmetics and Toiletries.',
    asset: ASSETS.awards.mondeSenseiSuru,
  },
  {
    year: '2021',
    title: 'No. 1 Top Sales Worldwide',
    body: 'Certificate of Achievement dari AFC Co., Ltd. untuk PT H&E Dermatech Indonesia.',
    asset: ASSETS.awards.topSales2021,
  },
  {
    year: '2020',
    title: 'Best Selling Product 2020',
    body: 'Helmy Attamimi Award; materi AFC menyebut “#1 dari 87 perusahaan MLM yang terdaftar di AP2LI”.',
    asset: ASSETS.awards.bestSelling2020,
  },
  {
    year: '2022',
    title: 'Helmy Attamimi Award',
    body: 'Member Growth of The Year dan Product of The Year.',
    asset: ASSETS.awards.helmy2022,
  },
  {
    year: '2024',
    title: 'Helmy Attamimi Award',
    body: 'CEO of The Year, MLM of The Year, Member Growth of The Year, dan Best Selling Product of The Year.',
    asset: ASSETS.awards.helmy2024,
  },
  {
    year: '2020',
    title: 'AFC Singapore — No. 1 Brand in Unity',
    body: 'Untuk 10 tahun berturut-turut, Unity Popular Choice Awards 2020.',
    asset: ASSETS.awards.singapore,
  },
  {
    year: 'MURI',
    title: 'Rekor MURI',
    body: 'Lima rekor MURI terkait acara peluncuran dan kegiatan penjualan langsung AFC.',
    asset: ASSETS.awards.muri,
  },
];

export interface TrustStep {
  label: string;
  title: string;
  body: string;
  kind: ClaimKind;
  href: string;
}

export const TRUST_STEPS: TrustStep[] = [
  {
    label: 'AFC Japan',
    title: 'Sejak 1969',
    body: 'Perusahaan farmasi asal Shizuoka. Induknya, AFC-HD AMS Life Science, tercatat di Tokyo Stock Exchange.',
    kind: 'company',
    href: '/about',
  },
  {
    label: 'Pengembangan',
    title: 'Made in Japan',
    body: 'Ketiga produk diproduksi di Jepang. Materi AFC merujuk paten terkait bahan untuk setiap produk.',
    kind: 'documented',
    href: '/products',
  },
  {
    label: 'Bahan',
    title: 'Tercantum terbuka',
    body: 'Peptida, bakteri asam laktat, fucoidan, dan ekstrak buah — setiap bahan dicantumkan per produk.',
    kind: 'documented',
    href: '/products',
  },
  {
    label: 'Kualitas',
    title: 'Diuji laboratorium',
    body: 'Materi AFC menyebut pengujian logam berat, bahan kimia berbahaya, DNA babi, dan non-GMO.',
    kind: 'company',
    href: '/quality',
  },
  {
    label: 'Sertifikasi',
    title: 'Halal, organik, free sale',
    body: 'Sertifikat Halal Indonesia untuk ketiga produk, sertifikat organik JAS, dan Certificate of Free Sale dari Jepang.',
    kind: 'documented',
    href: '/quality',
  },
];
