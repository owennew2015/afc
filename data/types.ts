/**
 * Content model. Every factual field must come from
 * AFC_Website_Asset_Pack_Optimized.pdf; `source` holds the AFC-SRC page
 * reference so content can be audited. Missing facts use `null` and render
 * as a deliberate placeholder instead of a guess.
 */

export type ProductSlug = 'utsukushii' | 'subarashi' | 'hikari';

export interface Asset {
  src: string;
  width: number;
  height: number;
  alt: string;
  /** Source-page reference in the asset pack, e.g. "AFC-SRC-09". */
  source: string;
}

/**
 * How a statement should be read (see the claim policy):
 * - documented: visible on a document or packaging in the source
 * - company: a claim made in AFC's own promotional material
 */
export type ClaimKind = 'documented' | 'company';

export interface Fact {
  label: string;
  value: string | null;
  kind: ClaimKind;
  source: string;
}

export interface Ingredient {
  name: string;
  image?: Asset;
  /** What the source material says about it, kept to the source's own wording. */
  note?: string;
}

export interface IngredientGroup {
  title: string;
  summary?: string;
  items: Ingredient[];
}

export interface TechPoint {
  title: string;
  body: string;
  kind: ClaimKind;
  source: string;
}

export interface Patent {
  number: string;
}

export interface SourceMaterial {
  title: string;
  caption: string;
  asset: Asset;
}

export interface ProductTheme {
  /** Deep background of the product world. */
  deep: string;
  /** Mid tone used for gradients. */
  mid: string;
  /** Accent (champagne/gold/warm light). */
  accent: string;
  /** Soft tint for light surfaces. */
  soft: string;
  /** Whether the hero sits on a dark atmosphere. */
  dark: boolean;
}

export interface Product {
  slug: ProductSlug;
  name: string;
  /** Name in Japanese as printed on the packaging. */
  nameJa: string | null;
  /** Plain-language meaning of the Japanese name. */
  nameMeaning: string;
  edition: string | null;
  tagline: string;
  shortDescription: string;
  whatIs: string[];
  positioning: string;
  positioningPoints: string[];
  format: string;
  /** Pack contents, e.g. "28 sachet @ 3,5 g". */
  contents: string | null;
  /** BPOM registration number as printed on the pack; null when not legible in the source. */
  bpom: string | null;
  /** Composition summary as supplied by AFC; shown as "Komposisi" in the summary. */
  composition: string | null;
  packaging: Fact[];
  price: string | null;
  usage: string | null;
  heroAsset: Asset;
  keyVisual: Asset;
  theme: ProductTheme;
  /** Discovery category used by the recommender. */
  category: string;
  highlightIngredients: string[];
  ingredientGroups: IngredientGroup[];
  technology: TechPoint[];
  patents: Patent[];
  supportingMaterial: SourceMaterial[];
  awards: string[];
  quality: string[];
  seo: { title: string; description: string };
}
