import type { Metadata } from 'next';
import { PageIntro } from '@/components/sections/PageIntro';
import { WhatsAppCTA } from '@/components/sections/WhatsAppCTA';
import { OpportunitySection } from '@/components/sections/OpportunitySection';
import { WHATSAPP_MESSAGES } from '@/config/site';

export const metadata: Metadata = {
  title: 'Peluang menjadi bagian dari AFC',
  description:
    'Cara kerja keanggotaan AFC Indonesia: tingkat Reseller, Agent, dan Distributor, beserta struktur bonus sebagaimana tercantum dalam rencana pemasaran AFC.',
  alternates: { canonical: '/opportunity' },
};

export default function OpportunityPage() {
  return (
    <div data-whatsapp-context="opportunity">
      <PageIntro
        eyebrow="Peluang"
        title="Peluang menjadi bagian dari AFC"
        lede="AFC Indonesia menjalankan model penjualan langsung. Berikut cara kerjanya, apa adanya."
      />
      <OpportunitySection />
      <WhatsAppCTA
        context="opportunity"
        eyebrow="Bicara dulu, putuskan kemudian"
        title="Hubungi Konsultan"
        body="Minta penjelasan lengkap rencana pemasaran AFC, termasuk syarat dan ketentuannya, sebelum memutuskan."
        message={WHATSAPP_MESSAGES.opportunity}
      />
    </div>
  );
}
