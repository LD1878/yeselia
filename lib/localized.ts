import type { Locale } from "./types";

/** English source plus optional translations. Missing locales fall back to English. */
export type LocalizedText = {
  en: string;
  es?: string;
  nl?: string;
};

export type LocalizedList = {
  en: string[];
  es?: string[];
  nl?: string[];
};

export function pickText(
  value: LocalizedText | string,
  locale: Locale,
): string {
  if (typeof value === "string") return value;
  return value[locale] || value.en;
}

export function pickList(
  value: LocalizedList | string[],
  locale: Locale,
): string[] {
  if (Array.isArray(value)) return value;
  return value[locale] || value.en;
}

export function loc(
  map: LocalizedText,
  locale: Locale,
): string {
  return map[locale] || map.en;
}
