'use client';

import Image from 'next/image';
import { useState } from 'react';
import type { Asset } from '@/data/types';

interface SafeImageProps {
  asset: Asset;
  /** Responsive `sizes` hint so phones never download desktop-sized files. */
  sizes: string;
  fill?: boolean;
  priority?: boolean;
  className?: string;
  alt?: string;
}

/** next/image with a clean placeholder instead of a broken-image icon. */
export function SafeImage({ asset, sizes, fill, priority, className, alt }: SafeImageProps) {
  const [failed, setFailed] = useState(false);
  const label = alt ?? asset.alt;

  if (failed) {
    return (
      <span
        className="img-fallback"
        role="img"
        aria-label={label}
        style={fill ? undefined : { position: 'relative', display: 'grid', aspectRatio: `${asset.width} / ${asset.height}` }}
      >
        Visual akan ditambahkan
      </span>
    );
  }

  const common = {
    src: asset.src,
    alt: label,
    sizes,
    quality: 88,
    priority,
    className,
    onError: () => setFailed(true),
  };

  return fill ? <Image {...common} alt={label} fill /> : <Image {...common} alt={label} width={asset.width} height={asset.height} />;
}
