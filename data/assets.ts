import type { Asset } from './types';

/**
 * Registry of visuals extracted from AFC_Website_Asset_Pack_Optimized.pdf by
 * scripts/extract-assets.sh. `source` is the pack's page reference.
 */
const BASE = '/assets/afc-hd';

function a(path: string, width: number, height: number, alt: string, source: string): Asset {
  return { src: `${BASE}/${path}.webp`, width, height, alt, source };
}

export function ingredientImage(product: string, file: string, name: string, source: string): Asset {
  return a(`ingredients/${product}/${file}`, 192, 192, `Visual bahan ${name} dari materi AFC`, source);
}

export const ASSETS = {
  logo: { src: `${BASE}/brand/afc-logo.png`, width: 1040, height: 320, alt: 'AFC', source: 'AFC-SRC-01' },

  products: {
    subarashiPack: a('products/subarashi/pack-official', 1410, 1040, 'Kemasan SOP Subarashi 2.0', 'AFC — pengumuman harga resmi'),
    subarashiKeyVisual: a('products/subarashi/key-visual', 1600, 900, 'Key visual SOP Subarashi', 'AFC-SRC-09'),
    subarashiHexa: a('products/subarashi/hexa-peptide', 1600, 900, 'Materi Hexa Peptide SOP Subarashi', 'AFC-SRC-10'),
    subarashiIngredients: a('products/subarashi/ingredients-overview', 1600, 900, 'Ringkasan bahan SOP Subarashi', 'AFC-SRC-11'),
    utsukushiiPack: a('products/utsukushii/pack-official', 1280, 940, 'Kemasan Utsukushhii 2.0', 'AFC — pengumuman harga resmi'),
    utsukushiiKeyVisual: a('products/utsukushii/key-visual', 1600, 900, 'Key visual Utsukushhii 2.0', 'AFC-SRC-25'),
    utsukushiiCore: a('products/utsukushii/ingredients-core', 1600, 900, 'Materi Powerful Ingredients Utsukushhii', 'AFC-SRC-26'),
    utsukushiiIngredients: a('products/utsukushii/ingredients-overview', 1600, 900, 'Ringkasan bahan Utsukushhii 2.0 Gold Version', 'AFC-SRC-27'),
    hikariPack: a('products/hikari/pack-official', 1300, 1040, 'Kemasan Hikari', 'AFC — pengumuman harga resmi'),
    hikariKeyVisual: a('products/hikari/key-visual', 1600, 900, 'Key visual Hikari', 'AFC-SRC-38'),
    hikariPeptides: a('products/hikari/triple-vegan-peptides', 1600, 900, 'Materi Triple Vegan Peptides Hikari', 'AFC-SRC-41'),
    hikariIngredients: a('products/hikari/ingredients-overview', 1600, 900, 'Ringkasan bahan Hikari', 'AFC-SRC-42'),
    allAwards: a('products/all-products-awards', 1600, 900, 'Utsukushhii, SOP Subarashi, dan Hikari bersama penghargaan AFC', 'AFC-SRC-67'),
  },

  ingredientDocs: {
    fruitflowEfsa: a('ingredients/subarashi/fruitflow-efsa', 1600, 900, 'Materi Fruitflow dan European Food Safety Authority', 'AFC-SRC-13'),
  },

  quality: {
    safetyMarks: a('quality/safety-marks', 1600, 356, 'Tanda keamanan: lab tested, natural, Japan GMP, organik JAS, halal', 'AFC-SRC-52'),
    safetyOverview: a('quality/safety-overview', 1600, 900, 'Materi Safety AFC', 'AFC-SRC-52'),
    certOrganic: a('quality/cert-organic', 570, 820, 'Sertifikat organik (JAS)', 'AFC-SRC-53'),
    certHormoneFree: a('quality/cert-hormone-free', 570, 820, 'Sertifikat bebas hormon', 'AFC-SRC-53'),
    certFreeSale: a('quality/cert-free-sale', 570, 820, 'Certificate of Free Sale, Ministry of Health, Labour and Welfare Japan', 'AFC-SRC-53'),
    certRadiation: a('quality/cert-radiation-test', 580, 830, 'Test report bebas radiasi nuklir, Japan Preventive Medical Laboratory', 'AFC-SRC-53'),
    certHalal: a('quality/cert-halal', 800, 1140, 'Sertifikat Halal Republik Indonesia', 'AFC-SRC-54'),
    certHalalAttachment: a('quality/cert-halal-attachment', 900, 1115, 'Lampiran sertifikat halal dengan daftar produk', 'AFC-SRC-54'),
    registeredOn: a('quality/registered-on', 1600, 900, 'Materi AFC: Our Products Registered on', 'AFC-SRC-55'),
  },

  company: {
    building: a('company/afc-japan-building', 2400, 846, 'Gedung AFC di Jepang', 'AFC-SRC-56'),
    group: a('company/afc-hd-group', 1600, 900, 'Konglomerasi bisnis AFC-HD', 'AFC-SRC-57'),
    saikaya: a('company/saikaya', 1600, 588, 'Saikaya Department Store', 'AFC-SRC-58'),
    tse: a('company/tokyo-stock-exchange', 1600, 900, 'AFC-HD AMS Life Science terdaftar di Tokyo Stock Exchange', 'AFC-SRC-59'),
    indonesia: a('company/indonesia-2018', 900, 1361, 'Acara AFC Indonesia dan jajaran pimpinan', 'AFC-SRC-60'),
    afcCare: a('company/afc-care', 1600, 900, 'AFC Care — 私たちは家族です', 'AFC-SRC-62'),
    shizuoka: a('company/location-shizuoka', 350, 880, 'Gedung AFC di Shizuoka', 'AFC-SRC-61'),
    jakarta: a('company/location-jakarta', 560, 880, 'Lippo St. Moritz, Jakarta', 'AFC-SRC-61'),
    surabaya: a('company/location-surabaya', 600, 880, 'Graha Bukopin, Surabaya', 'AFC-SRC-61'),
    medan: a('company/location-medan', 540, 880, 'B&G Tower, Medan', 'AFC-SRC-61'),
    bali: a('company/location-bali', 600, 852, 'SGCC, Sunset Road Bali', 'AFC-SRC-61'),
  },

  stories: {
    lombok: a('stories/health-center-lombok', 1200, 1031, 'AFC Health Center, Puskesmas Pembantu Plus Bakti Nusantara Aik Mual, Lombok', 'AFC-SRC-63'),
    poso: a('stories/health-center-poso', 1200, 915, 'AFC Health Center, Puskesmas Pembantu Plus Bakti Nusantara Poso', 'AFC-SRC-64'),
    water: a('stories/water-ntt', 1200, 1107, 'Peresmian 10 sumber air di NTT', 'AFC-SRC-65'),
    kuhnke: a('stories/dr-kuhnke', 1200, 518, 'Dr. med. Olaf W. Kuhnke dalam presentasi Utsukushhii', 'AFC-SRC-30'),
  },

  awards: {
    mondeSubarashi: a('awards/monde-selection-2021-subarashi', 1600, 900, 'Monde Selection 2021 Bronze Quality Award untuk Subarashi', 'AFC-SRC-14'),
    mondeSenseiSuru: a('awards/monde-selection-2022-sensei-suru', 1600, 900, 'Monde Selection 2022 Grand Gold Quality Award untuk Sensei Suru', 'AFC-SRC-51'),
    bestSelling2020: a('awards/best-selling-product-2020', 1600, 900, 'Best Selling Product 2020, Helmy Attamimi Award', 'AFC-SRC-66'),
    helmy2022: a('awards/helmy-attamimi-2022', 1600, 900, 'Helmy Attamimi Award 2022', 'AFC-SRC-68'),
    helmy2024: a('awards/helmy-attamimi-2024', 1600, 900, 'Helmy Attamimi Award 2024', 'AFC-SRC-69'),
    singapore: a('awards/afc-singapore-unity', 1600, 900, 'AFC Singapore, No. 1 Brand in Unity', 'AFC-SRC-70'),
    topSales2021: a('awards/top-sales-worldwide-2021', 1600, 900, 'Certificate of Achievement No. 1 Top Sales Worldwide 2021', 'AFC-SRC-71'),
    muri: a('awards/muri-records', 1600, 900, 'Rekor MURI AFC', 'AFC-SRC-72'),
  },
} as const;
