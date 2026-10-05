/**
 * Business-opportunity structure exactly as stated in AFC's marketing-plan
 * slides (AFC-SRC-75 to 79). Maximum-income figures from the source are
 * intentionally not shown: they are theoretical ceilings, not typical results.
 */

export interface Tier {
  id: 'reseller' | 'agent' | 'distributor';
  name: string;
  capital: string;
  packageLength: string;
  boxes: string;
}

export const TIERS: Tier[] = [
  { id: 'reseller', name: 'Reseller', capital: 'Rp 3.750.000', packageLength: 'Paket 1 bulan', boxes: '2 box' },
  { id: 'agent', name: 'Agent', capital: 'Rp 11.250.000', packageLength: 'Paket 3 bulan', boxes: '6 box' },
  { id: 'distributor', name: 'Distributor', capital: 'Rp 22.500.000', packageLength: 'Paket 6 bulan', boxes: '12 box' },
];

/** Direct-sponsor bonus: rows = your tier, columns = tier of the person you sponsor. */
export const DIRECT_SPONSOR: Record<Tier['id'], Record<Tier['id'], string>> = {
  distributor: { distributor: 'Rp 3.300.000', agent: 'Rp 1.650.000', reseller: 'Rp 550.000' },
  agent: { distributor: 'Rp 2.700.000', agent: 'Rp 1.350.000', reseller: 'Rp 450.000' },
  reseller: { distributor: 'Rp 1.800.000', agent: 'Rp 900.000', reseller: 'Rp 300.000' },
};

export const PAIRING: Record<Tier['id'], { perPackage: string; maxPairs: string }> = {
  distributor: { perPackage: 'Rp 300.000 / paket', maxPairs: '200 pasangan per hari' },
  agent: { perPackage: 'Rp 200.000 / paket', maxPairs: '60 pasangan per hari' },
  reseller: { perPackage: 'Rp 150.000 / paket', maxPairs: '10 pasangan per hari' },
};

export const PASS_UP_STEPS = [
  'Seorang Reseller mensponsori Distributor baru dan menerima bonus sponsor Rp 1.800.000.',
  'Selisih hingga bonus sponsor Distributor (Rp 3.300.000), yaitu Rp 1.500.000, diteruskan ke atas.',
  'Sponsor di atasnya yang belum berpaket Distributor dilewati.',
  'Rp 1.500.000 diterima oleh sponsor pertama di atasnya yang sudah berpaket Distributor.',
];

export const HOW_IT_WORKS = [
  { title: 'Kenali produknya', body: 'Mulai dari memahami produk AFC dan informasi di baliknya.' },
  { title: 'Pilih paket keanggotaan', body: 'Tiga tingkat: Reseller, Agent, atau Distributor, dengan jumlah paket produk berbeda.' },
  { title: 'Perkenalkan ke orang lain', body: 'Bonus dihitung dari penjualan langsung dan dari jaringan yang kamu sponsori.' },
  { title: 'Didampingi konsultan', body: 'Konsultan AFC menjelaskan rencana pemasaran lengkap sebelum kamu memutuskan.' },
];
