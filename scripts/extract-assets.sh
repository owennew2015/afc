#!/usr/bin/env bash
# Extracts web assets from AFC_Website_Asset_Pack_Optimized.pdf.
#
# Usage: scripts/extract-assets.sh path/to/AFC_Website_Asset_Pack_Optimized.pdf
#
# Requires poppler-utils (pdfimages) and ImageMagick with WebP support.
# Optional: set SR_DIR to a folder holding OpenCV EDSR models (EDSR_x2.pb,
# EDSR_x4.pb) to super-resolve the most visible assets via scripts/sr.py
# (needs opencv-contrib-python-headless). Without it, assets are extracted
# at source resolution.
# Every PDF page holds one 1333x750 slide; pages map to the source-page
# references (AFC-SRC-xx) listed on the pack's cover page.
set -euo pipefail

PDF="${1:?path to asset pack PDF}"
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
OUT="$ROOT/public/assets/afc"
TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

pdfimages -j -p "$PDF" "$TMP/img" >/dev/null
SRC_PAGES=(1 $(seq 9 47) $(seq 51 80))
i=0
for f in $(ls "$TMP"/img-* | sort); do
  convert "$f" "$TMP/p$(printf %02d "${SRC_PAGES[$i]}").png"
  i=$((i + 1))
done
src() { echo "$TMP/p$1.png"; }

# sr <scale> <in> <out>: EDSR super-resolution, or a Lanczos resize without models.
sr() {
  if [ -n "${SR_DIR:-}" ]; then
    python3 -I "$ROOT/scripts/sr.py" "$SR_DIR" "$1" "$2" "$3"
  else
    convert "$2" -filter Lanczos -resize "$(( $1 * 100 ))%" "$3"
  fi
}

mkdir -p "$OUT"/{brand,products/{subarashi,utsukushii,hikari},ingredients/{subarashi,utsukushii,hikari},quality,company,awards,stories}

# crop <page> <geometry> <out> [width] [sr]
crop() {
  if [ "${5:-}" = sr ]; then
    convert "$(src "$1")" -crop "$2" +repage "$TMP/c.png"
    sr 2 "$TMP/c.png" "$TMP/c2.png"
    convert "$TMP/c2.png" -resize "${4:-1600}x>" -quality 86 "$OUT/$3.webp"
  else
    convert "$(src "$1")" -crop "$2" +repage -resize "${4:-1600}x>" -quality 82 "$OUT/$3.webp"
  fi
}

# packshot <page> <geometry> <polygon relative to crop> <out>
# Isolates the packaging from its slide background; the pack itself is untouched.
# Super-resolved 2x; the polygon is scaled to match.
packshot() {
  local g="$2" w="${2%%x*}" h poly
  h="${g#*x}"; h="${h%%+*}"
  poly=$(echo "$3" | tr ' ' '\n' | awk -F, '{printf "%d,%d ", $1*2, $2*2}')
  convert "$(src "$1")" -crop "$g" +repage "$TMP/pk.png"
  sr 2 "$TMP/pk.png" "$TMP/pk2.png"
  convert "$TMP/pk2.png" \
    \( -size "$((w * 2))x$((h * 2))" xc:black -fill white -draw "polygon $poly" -blur 0x1.4 \) \
    -alpha off -compose CopyOpacity -composite -quality 90 "$OUT/$4.webp"
}

# circle <page> <cx> <cy> <r> <out>  (super-resolved 4x, then 192px)
circle() {
  local d=$(( $4 * 2 ))
  convert "$(src "$1")" -crop "${d}x${d}+$(( $2 - $4 ))+$(( $3 - $4 ))" +repage "$TMP/ci.png"
  sr 4 "$TMP/ci.png" "$TMP/ci4.png"
  convert "$TMP/ci4.png" -resize 192x192 \
    \( -size 192x192 xc:black -fill white -draw "circle 96,96 96,2" \) \
    -alpha off -compose CopyOpacity -composite -quality 88 "$OUT/$5.webp"
}

# Brand: logo on transparent background (shape and colours unchanged).
convert "$(src 01)" -crop 1040x320+148+105 +repage -fuzz 8% -transparent white -quality 92 "$OUT/brand/afc-logo.webp"
convert "$(src 01)" -crop 1040x320+148+105 +repage -fuzz 8% -transparent white "$OUT/brand/afc-logo.png"

# Product packshots.
packshot 09 670x470+330+155 "6,60 38,8 655,31 660,460 5,460" products/subarashi/pack
packshot 25 620x410+360+172 "7,60 20,18 608,5 609,403 6,403" products/utsukushii/pack
packshot 42 490x370+410+305 "13,44 34,11 476,29 477,337 13,337" products/hikari/pack

# Original key visuals and ingredient overview slides (shown as "materi asli").
crop 09 1333x750+0+0 products/subarashi/key-visual
crop 10 1333x750+0+0 products/subarashi/hexa-peptide
crop 11 1333x750+0+0 products/subarashi/ingredients-overview
crop 25 1333x750+0+0 products/utsukushii/key-visual
crop 26 1333x750+0+0 products/utsukushii/ingredients-core
crop 27 1333x750+0+0 products/utsukushii/ingredients-overview
crop 38 1333x750+0+0 products/hikari/key-visual
crop 41 1333x750+0+0 products/hikari/triple-vegan-peptides
crop 42 1333x750+0+0 products/hikari/ingredients-overview
crop 67 1333x750+0+0 products/all-products-awards
crop 13 1333x750+0+0 ingredients/subarashi/fruitflow-efsa

# Ingredient visuals.
for spec in \
  "279 118 salmon-caviar-peptide" "432 118 tuna-heart-peptide" "582 118 salmon-anserine-peptide" \
  "752 115 salmon-ovary-peptide" "905 115 sardine-peptide" "1055 112 fruitflow-vegan-peptide" \
  "288 305 hyaluronic-acid" "288 460 l-glutathione" "288 625 amino-acid" \
  "1053 305 chondroitin" "1053 458 nucleic-acid" "1053 612 elastin"; do
  set -- $spec; circle 11 "$1" "$2" 45 "ingredients/subarashi/$3"
done
for spec in \
  "461 97 salmon-dna" "598 97 lactococcus-lactis" "735 97 lactic-acid-bacteria" "872 97 bifidobacterium-longum" \
  "346 218 kombu-fucoidan" "346 355 kiwi-seed-extract" "346 493 resveratrol" "346 630 pineapple-extract" \
  "996 218 black-garlic" "996 355 l-glutathione" "996 493 vitamin-d" "996 630 fish-collagen"; do
  set -- $spec; circle 27 "$1" "$2" 35 "ingredients/utsukushii/$3"
done
for spec in \
  "290 118 marigold-peptide" "455 116 spearmint-peptide" "627 115 mango-leaf-peptide" "795 115 acerola-extract" \
  "955 118 blueberry-extract" "1097 180 cherry-extract" "1097 360 lingonberry-extract" "1100 538 l-cysteine" \
  "193 272 blackcurrant-extract" "193 440 inulin" "193 578 strawberry-extract"; do
  set -- $spec; circle 42 "$1" "$2" 36 "ingredients/hikari/$3"
done

# Quality and certification documents.
crop 52 1100x245+84+137 quality/safety-marks
crop 53 285x410+72+268 quality/cert-organic 800 sr
crop 53 285x410+372+268 quality/cert-hormone-free 800 sr
crop 53 285x410+672+268 quality/cert-free-sale 800 sr
crop 53 290x415+970+262 quality/cert-radiation-test 800 sr
crop 54 400x570+225+140 quality/cert-halal 900 sr
crop 54 460x570+680+150 quality/cert-halal-attachment 900 sr
crop 55 1333x750+0+0 quality/registered-on
crop 52 1333x750+0+0 quality/safety-overview

# Company.
crop 56 1333x470+0+0 company/afc-japan-building 2400 sr
crop 57 1333x750+0+0 company/afc-hd-group
crop 58 1333x490+0+260 company/saikaya
crop 59 1333x750+0+0 company/tokyo-stock-exchange
crop 60 496x750+0+0 company/indonesia-2018 900 sr
crop 61 175x440+0+15 company/location-shizuoka 600 sr
crop 61 280x440+175+15 company/location-jakarta 600 sr
crop 61 300x440+455+15 company/location-surabaya 600 sr
crop 61 270x440+755+15 company/location-medan 600 sr
crop 61 310x440+1023+15 company/location-bali 600 sr
crop 62 1333x750+0+0 company/afc-care
crop 63 873x750+0+0 stories/health-center-lombok 1200 sr
crop 64 715x545+35+0 stories/health-center-poso 1200 sr
crop 65 813x750+0+0 stories/water-ntt 1200 sr
crop 30 1333x575+0+0 stories/dr-kuhnke 1200

# Awards.
crop 14 1333x750+0+0 awards/monde-selection-2021-subarashi
crop 51 1333x750+0+0 awards/monde-selection-2022-sensei-suru
crop 66 1333x750+0+0 awards/best-selling-product-2020
crop 68 1333x750+0+0 awards/helmy-attamimi-2022
crop 69 1333x750+0+0 awards/helmy-attamimi-2024
crop 70 1333x750+0+0 awards/afc-singapore-unity
crop 71 1333x750+0+0 awards/top-sales-worldwide-2021
crop 72 1333x750+0+0 awards/muri-records

echo "Assets written to $OUT"

# Social share image: the three original packshots on an ivory field.
convert -size 1200x630 radial-gradient:'#fffdf8'-'#e9dcc3' \
  \( "$OUT/products/utsukushii/pack.webp" -resize 360x \) -geometry +70+215 -composite \
  \( "$OUT/products/hikari/pack.webp" -resize 330x \) -geometry +800+225 -composite \
  \( "$OUT/products/subarashi/pack.webp" -resize 470x \) -geometry +365+170 -composite \
  \( "$OUT/brand/afc-logo.png" -resize x46 \) -gravity north -geometry +0+60 -composite \
  -quality 86 "$OUT/brand/og-default.jpg"

# Favicon / app icon: the AFC heart mark from the logo.
convert "$(src 01)" -crop 368x326+147+102 +repage -fuzz 8% -transparent white \
  -gravity center -background none -extent 400x400 -resize 256x256 "$ROOT/app/icon.png"
convert "$ROOT/app/icon.png" -background white -alpha remove -resize 180x180 "$ROOT/app/apple-icon.png"
