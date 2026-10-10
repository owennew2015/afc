#!/usr/bin/env bash
# Cuts product packshots out of AFC's official "Harga Resmi" announcement
# images (source/official/*.jpg). These renders are much sharper than the
# packs in the PDF asset pack, so they replace them as hero images.
#
# Usage: SR_DIR=path/to/models scripts/extract-official-packs.sh
# SR_DIR (EDSR_x2.pb) is optional; without it a Lanczos 2x resize is used.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SRC="$ROOT/source/official"
OUT="$ROOT/public/assets/afc-hd/products"
TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

# cut <name> <crop WxH+X+Y> <polygon relative to the crop>
cut() {
  local name=$1 g=$2 poly=$3 w h
  w=${g%%x*}; h=${g#*x}; h=${h%%+*}
  convert "$SRC/$name.jpg" -crop "$g" +repage \
    \( -size "${w}x${h}" xc:black -fill white -draw "polygon $poly" -blur 0x0.7 \) \
    -alpha off -compose CopyOpacity -composite "$TMP/$name.png"
  if [ -n "${SR_DIR:-}" ]; then
    python3 -I "$ROOT/scripts/sr.py" "$SR_DIR" 2 "$TMP/$name.png" "$TMP/$name-2x.png" edsr
  else
    convert "$TMP/$name.png" -filter Lanczos -resize 200% "$TMP/$name-2x.png"
  fi
  convert "$TMP/$name-2x.png" -quality 92 "$OUT/$name/pack-official.webp"
}

cut hikari 650x520+232+474 "8,46 33,8 644,12 644,498 8,501"
cut subarashi 705x520+195+466 "5,46 27,6 700,12 700,494 5,500"
cut utsukushii 640x470+228+492 "5,56 22,6 636,8 636,448 5,443"

# Social share image with the official packshots.
BRAND="$ROOT/public/assets/afc-hd/brand"
convert -size 1200x630 radial-gradient:'#fffdf8'-'#e9dcc3' \
  \( "$OUT/utsukushii/pack-official.webp" -resize 340x \) -geometry +80+230 -composite \
  \( "$OUT/hikari/pack-official.webp" -resize 320x \) -geometry +800+225 -composite \
  \( "$OUT/subarashi/pack-official.webp" -resize 450x \) -geometry +375+190 -composite \
  \( "$BRAND/afc-logo.png" -resize x46 \) -gravity north -geometry +0+60 -composite \
  -quality 86 "$BRAND/og-default.jpg"

echo "Official packshots written to $OUT/*/pack-official.webp"
