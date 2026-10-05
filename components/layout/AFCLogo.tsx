import { ASSETS } from '@/data/assets';
import { cx } from '@/lib/cx';

/**
 * The original AFC logo from the asset pack. On dark surfaces it is rendered
 * as a single-colour light version (shape unchanged) for legibility.
 */
export function AFCLogo({ className }: { className?: string }) {
  const { src, width, height } = ASSETS.logo;
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img className={cx('afc-logo', className)} src={src} width={width} height={height} alt="AFC" decoding="async" />
  );
}
