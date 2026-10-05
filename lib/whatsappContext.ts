import { WHATSAPP_MESSAGES } from '@/config/site';

/**
 * Picks the WhatsApp message for the page being viewed: product pages mark
 * themselves with data-product-name, the opportunity page with
 * data-whatsapp-context="opportunity".
 */
export function contextualWhatsAppMessage(): string {
  const productName = document.querySelector<HTMLElement>('[data-product-name]')?.dataset.productName;
  if (productName) return WHATSAPP_MESSAGES.product(productName);
  if (document.querySelector('[data-whatsapp-context="opportunity"]')) return WHATSAPP_MESSAGES.opportunity;
  return WHATSAPP_MESSAGES.general;
}
