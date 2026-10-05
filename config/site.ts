/**
 * Central site configuration.
 *
 * WHATSAPP_NUMBER is the single source for the consultant's number. Use the
 * international format without "+" or spaces, e.g. "6281234567890". It can be
 * overridden at build time with NEXT_PUBLIC_WHATSAPP_NUMBER.
 */
export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || 'PLACEHOLDER';

export const SITE = {
  name: 'AFC Life Science',
  shortName: 'AFC',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  description:
    'AFC Life Science Indonesia — kenali AFC Japan, produk Utsukushhii, SOP Subarashi, dan Hikari, beserta informasi bahan, kualitas, dan sertifikasinya.',
  locale: 'id_ID',
  ogImage: '/assets/afc/brand/og-default.jpg',
} as const;

export const WHATSAPP_MESSAGES = {
  general: 'Halo, saya ingin mengetahui lebih lanjut tentang produk AFC.',
  opportunity: 'Halo, saya ingin mengetahui lebih lanjut tentang peluang menjadi bagian dari AFC.',
  product: (name: string) => `Halo, saya ingin mengetahui lebih lanjut tentang ${name}.`,
} as const;
