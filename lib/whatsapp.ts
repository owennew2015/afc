import { WHATSAPP_MESSAGES, WHATSAPP_NUMBER } from '@/config/site';

/** True once a real number has replaced the placeholder in config/site.ts. */
export const hasWhatsAppNumber = /^\d{8,15}$/.test(WHATSAPP_NUMBER);

/**
 * Builds a wa.me link with an optional prefilled message. Until the number is
 * configured, the link opens WhatsApp's share sheet with the message so the
 * button still works instead of pointing at an invalid number.
 */
export function getWhatsAppUrl(message: string = WHATSAPP_MESSAGES.general): string {
  const text = encodeURIComponent(message);
  return hasWhatsAppNumber
    ? `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`
    : `https://wa.me/?text=${text}`;
}
