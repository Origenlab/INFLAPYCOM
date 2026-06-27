import { CONTACT } from '../config/site';

/** Genera URL de WhatsApp con mensaje codificado */
export function waUrl(message: string): string {
  return `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`;
}

/** Genera URL de teléfono */
export function telUrl(): string {
  return `tel:+52${CONTACT.phone}`;
}

/** Formatea precio MXN */
export function formatPrice(price: number): string {
  return `$${price.toLocaleString('es-MX')} MXN`;
}
