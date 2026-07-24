/**
 * Multilingual-ready structure.
 * English is primary. Spanish hooks are prepared for a future locale layer.
 *
 * Usage pattern:
 *   import { t, type DictionaryKey } from "@/lib/i18n";
 *   t("nav.properties") // English for now
 *
 * When Spanish is added, swap the active locale via routing or a provider
 * without rewriting page components.
 */

import type { Locale } from "./types";

export const defaultLocale: Locale = "en";
export const locales: Locale[] = ["en", "es"];

const en = {
  "nav.properties": "Properties",
  "nav.buy": "Buy",
  "nav.sell": "Sell",
  "nav.about": "About",
  "nav.insights": "Insights",
  "nav.contact": "Contact",
  "cta.buy": "Buy",
  "cta.sell": "Sell",
  "cta.viewCollection": "View collection",
  "cta.requestViewing": "Request private viewing",
  "cta.contact": "Get in touch",
  "cta.valuation": "Request a confidential valuation",
  "footer.rights": "All rights reserved.",
  "footer.tagline": "Lawyer-led luxury real estate on the Costa del Sol.",
} as const;

/** Spanish dictionary stub - ready for expansion */
const es: Partial<Record<keyof typeof en, string>> = {
  "nav.properties": "Propiedades",
  "nav.buy": "Comprar",
  "nav.sell": "Vender",
  "nav.about": "Nosotros",
  "nav.insights": "Perspectivas",
  "nav.contact": "Contacto",
  "cta.buy": "Comprar",
  "cta.sell": "Vender",
  "cta.viewCollection": "Ver colección",
  "cta.requestViewing": "Solicitar visita privada",
  "cta.contact": "Contactar",
  "cta.valuation": "Solicitar valoración confidencial",
  "footer.rights": "Todos los derechos reservados.",
  "footer.tagline": "Inmobiliaria de lujo dirigida por abogados en la Costa del Sol.",
};

export type DictionaryKey = keyof typeof en;

export function t(key: DictionaryKey, locale: Locale = defaultLocale): string {
  if (locale === "en") return en[key];
  return es[key] ?? en[key];
}

export function getDictionary(locale: Locale = defaultLocale) {
  return locale === "en" ? en : { ...en, ...es };
}
