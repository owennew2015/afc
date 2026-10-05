import type { Metadata, Viewport } from 'next';
import '@fontsource-variable/playfair-display/wght.css';
import '@fontsource-variable/playfair-display/wght-italic.css';
import '@fontsource-variable/plus-jakarta-sans/wght.css';
import '@/styles/tokens.css';
import '@/styles/base.css';
import '@/styles/layout.css';
import '@/styles/home.css';
import '@/styles/sections.css';
import '@/styles/product.css';
import { AFCHeader } from '@/components/layout/AFCHeader';
import { FloatingContact } from '@/components/layout/FloatingContact';
import { Footer } from '@/components/layout/Footer';
import { LoadingScreen } from '@/components/layout/LoadingScreen';
import { SITE } from '@/config/site';

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: 'AFC Life Science — Wellness dari Jepang',
    template: '%s | AFC Life Science',
  },
  description: SITE.description,
  applicationName: SITE.name,
  openGraph: {
    type: 'website',
    locale: SITE.locale,
    siteName: SITE.name,
    title: 'AFC Life Science — Wellness dari Jepang',
    description: SITE.description,
    images: [{ url: SITE.ogImage, width: 1200, height: 630, alt: 'Utsukushhii, SOP Subarashi, dan Hikari dari AFC' }],
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: '/' },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f7f3ec' },
    { media: '(prefers-color-scheme: dark)', color: '#0f0e0d' },
  ],
};

// Runs before paint: enables JS-only motion, restores the chosen theme, and
// shows the logo intro only on the first page of a session.
const bootScript = `(function(){var d=document.documentElement;d.classList.add('js');try{var t=localStorage.getItem('afc-theme');if(t==='light'||t==='dark')d.dataset.theme=t}catch(e){}try{if(sessionStorage.getItem('afc-intro')||matchMedia('(prefers-reduced-motion: reduce)').matches){d.classList.add('no-intro')}else{sessionStorage.setItem('afc-intro','1')}}catch(e){d.classList.add('no-intro')}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
      </head>
      <body>
        <a href="#main" className="skip-link">
          Langsung ke konten
        </a>
        <LoadingScreen />
        <AFCHeader />
        <main id="main">{children}</main>
        <FloatingContact />
        <Footer />
      </body>
    </html>
  );
}
