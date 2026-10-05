import { ASSETS } from './assets';
import type { Asset, ClaimKind } from './types';

export interface TimelineEntry {
  year: string;
  title: string;
  body: string;
  kind: ClaimKind;
  source: string;
  image?: Asset;
}

/** Only events stated in the source. Entries without a stated year say so. */
export const TIMELINE: TimelineEntry[] = [
  {
    year: '1969',
    title: 'AFC Japan berdiri',
    body: 'AFC Japan berdiri sejak 1969 di Shizuoka sebagai perusahaan farmasi — menurut AFC, salah satu yang tertua dan terbesar di Jepang.',
    kind: 'company',
    source: 'AFC-SRC-56',
    image: ASSETS.company.building,
  },
  {
    year: 'GMP',
    title: 'Standar produksi',
    body: 'Menurut AFC, pabrik farmasi Jepang pertama yang mendapatkan sertifikat GMP.',
    kind: 'company',
    source: 'AFC-SRC-56',
  },
  {
    year: 'TSE 2927',
    title: 'Tercatat di Tokyo Stock Exchange',
    body: 'AFC-HD AMS Life Science Co., Ltd. tercatat di Tokyo Stock Exchange dengan kode 2927.',
    kind: 'company',
    source: 'AFC-SRC-59',
  },
  {
    year: 'AFC-HD',
    title: 'Satu grup, beberapa bidang',
    body: 'Grup AFC-HD mencakup AMS (bioteknologi pangan), NYK (riset dan pengembangan), Honzo (obat herbal, sejak 1831), Kenko TV (kanal kesehatan), dan apotek AFC (sejak 1941).',
    kind: 'company',
    source: 'AFC-SRC-57',
    image: ASSETS.company.group,
  },
  {
    year: '2018',
    title: 'Masuk Indonesia',
    body: 'AFC hadir di Indonesia pada 2018, dengan visi menjadi perusahaan direct selling terbesar dan terpercaya di Indonesia.',
    kind: 'company',
    source: 'AFC-SRC-60',
    image: ASSETS.company.indonesia,
  },
  {
    year: 'Kini',
    title: 'AFC Indonesia hari ini',
    body: 'Kantor di Jakarta, Surabaya, Medan, dan Bali, serta program AFC Care yang membangun health center dan sumber air bersih.',
    kind: 'company',
    source: 'AFC-SRC-61',
  },
];

export const VISION =
  'Menjadi Perusahaan Direct selling terbesar dan Terpercaya di Indonesia, dengan menyediakan produk-produk inovasi baru yang terbaik dan teruji disertai dengan Sistem Bonus terbaik.';
export const MISSION = 'Menjadi wadah transformasi yang berintegritas dengan potensi tak terbatas.';

export const GROUP = [
  { name: 'AMS', body: 'Leading food bio-technology conglomerate' },
  { name: 'NYK', body: 'Divisi riset dan pengembangan grup AFC' },
  { name: 'Honzo', body: 'Obat herbal, sejak 1831' },
  { name: 'Kenko TV', body: 'Stasiun TV dengan kanal kesehatan' },
  { name: 'AFC', body: 'Apotek premium, sejak 1941' },
];

export interface Location {
  city: string;
  country: string;
  role: string;
  address: string[];
  image?: Asset;
}

export const LOCATIONS: Location[] = [
  {
    city: 'Shizuoka',
    country: 'Jepang',
    role: 'Kantor pusat AFC Japan',
    address: ['3-6-36 Toyoda, Suruga-ku', 'Shizuoka 422-8006, Japan'],
    image: ASSETS.company.shizuoka,
  },
  {
    city: 'Jakarta',
    country: 'Indonesia',
    role: 'Kantor',
    address: ['Lippo St. Moritz Office Tower, Lt. 19 Unit 1905', 'Kembangan Selatan, DKI Jakarta 11610'],
    image: ASSETS.company.jakarta,
  },
  {
    city: 'Surabaya',
    country: 'Indonesia',
    role: 'Kantor',
    address: ['Graha Bukopin, Ground Floor', 'Kota Surabaya, Jawa Timur 60271'],
    image: ASSETS.company.surabaya,
  },
  {
    city: 'Medan',
    country: 'Indonesia',
    role: 'Kantor',
    address: ['B&G Tower, Jl. Putri Hijau No. 8, Kesawan', 'Kota Medan, Sumatera Utara 20111'],
    image: ASSETS.company.medan,
  },
  {
    city: 'Bali',
    country: 'Indonesia',
    role: 'Kantor',
    address: ['SGCC, Harris Hotel Sunset Road', 'Jl. Pura Mertasari, Jl. Sunset Road, Pemogan', 'Denpasar Selatan, Bali 80361'],
    image: ASSETS.company.bali,
  },
  {
    city: 'Lombok',
    country: 'Indonesia',
    role: 'AFC Health Center',
    address: ['Jl. Mawardi, Sekotong Timur, Lembar', 'Kabupaten Lombok Barat, NTB 83364'],
    image: ASSETS.stories.lombok,
  },
];

export const ENTITIES = [
  { name: 'AFC-HD AMS Life Science Co., Ltd.', role: 'Perusahaan induk di Jepang (TSE: 2927)' },
  { name: 'PT H&E Dermatech Indonesia', role: 'Importir produk, Tangerang' },
  { name: 'PT Asayama Famili Cahaya Indonesia', role: 'Distributor penjualan langsung, Jakarta' },
];
