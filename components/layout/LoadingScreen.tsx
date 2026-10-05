import { AFCLogo } from './AFCLogo';

/**
 * Brief logo intro (about 1.2s), CSS-only so it never blocks content.
 * Shown once per browser session; skipped entirely with reduced motion.
 */
export function LoadingScreen() {
  return (
    <div className="loader" aria-hidden="true">
      <AFCLogo className="loader__logo" />
      <span className="loader__line" />
    </div>
  );
}
