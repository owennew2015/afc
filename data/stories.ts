import { ASSETS } from './assets';
import type { Asset, ProductSlug } from './types';

export interface CommunityStory {
  title: string;
  place: string;
  body: string;
  details: string[];
  asset: Asset;
}

export const COMMUNITY_STORIES: CommunityStory[] = [
  {
    title: 'Health Center Lombok',
    place: 'Sekotong Timur, Lombok Barat',
    body: 'AFC Health Center di Puskesmas Pembantu Plus Bakti Nusantara Aik Mual.',
    details: ['Jl. Mawardi, Sekotong Timur, Lembar', 'Kabupaten Lombok Barat, NTB 83364'],
    asset: ASSETS.stories.lombok,
  },
  {
    title: 'Health Center Dongi-Dongi',
    place: 'Poso, Sulawesi Tengah',
    body: 'Peresmian Puskesmas Pembantu Plus Bakti Nusantara Poso — AFC Health Center.',
    details: ['Pustu Plus Dongi-Dongi, Jalan Trans Palu Napu', 'Desa Dongi-Dongi, Kecamatan Lore Utara 94653'],
    asset: ASSETS.stories.poso,
  },
  {
    title: '10 sumber air di NTT',
    place: 'Nusa Tenggara Timur',
    body: 'Peresmian 10 sumber air di NTT oleh Bpk. Ernest Prayuda, mewakili Bpk. Nicolas Rampisela.',
    details: ['Program Yayasan AFC Care'],
    asset: ASSETS.stories.water,
  },
];

export interface ExpertMaterial {
  name: string;
  /** Role exactly as stated in the source caption. */
  statedRole: string;
  context: string;
  quote: string;
  quoteAttribution: string;
  product: ProductSlug;
  asset: Asset;
}

export const EXPERT_MATERIAL: ExpertMaterial = {
  name: 'Dr. med. Olaf W. Kuhnke',
  statedRole: 'Disebut dalam materi AFC sebagai Presiden Asosiasi Internasional ZAEN di Eropa untuk pengobatan naturopati.',
  context: 'Tampil dalam presentasi Utsukushhii.',
  quote: 'Utsukushhii adalah produk yang ajaib.',
  quoteAttribution: 'Dikutip dalam materi AFC sebagai pernyataan tim peneliti Eropa.',
  product: 'utsukushii',
  asset: ASSETS.stories.kuhnke,
};

export interface Testimonial {
  name: string;
  context: string;
  quote: string;
  product: ProductSlug;
  photo?: Asset;
  /** Optional original material, shown behind "Lihat materi asli". */
  original?: Asset;
}

/**
 * User testimonials. The asset pack's testimonial slides are clinical
 * before/after photos tied to disease outcomes, so none are published here.
 * Add consented, non-medical testimonials in this list; each renders as a
 * TestimonialCard labelled "Testimoni pengguna".
 */
export const TESTIMONIALS: Testimonial[] = [];
