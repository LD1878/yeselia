"use client";

import { useLocale } from "@/components/layout/LocaleProvider";
import { cn } from "@/lib/utils";
import type { Locale } from "@/lib/types";

type LanguageSwitcherProps = {
  className?: string;
  compact?: boolean;
};

export function LanguageSwitcher({
  className,
  compact = false,
}: LanguageSwitcherProps) {
  const { locale, setLocale, t } = useLocale();

  const options: Locale[] = ["en", "es", "nl"];
  const switchLabel: Record<Locale, "lang.switchToEn" | "lang.switchToEs" | "lang.switchToNl"> =
    {
      en: "lang.switchToEn",
      es: "lang.switchToEs",
      nl: "lang.switchToNl",
    };
  const codeLabel: Record<Locale, "lang.en" | "lang.es" | "lang.nl"> = {
    en: "lang.en",
    es: "lang.es",
    nl: "lang.nl",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-none border-2 border-purple bg-white",
        compact ? "h-9" : "h-10",
        className,
      )}
      role="group"
      aria-label={t("lang.label")}
    >
      {options.map((code) => {
        const active = locale === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLocale(code)}
            aria-pressed={active}
            aria-label={t(switchLabel[code])}
            className={cn(
              "min-w-[2.25rem] px-2 text-xs font-bold tracking-wide transition-colors duration-150",
              compact ? "h-9" : "h-10",
              active
                ? "bg-purple text-white"
                : "bg-transparent text-purple hover:bg-purple/10",
            )}
          >
            {t(codeLabel[code])}
          </button>
        );
      })}
    </div>
  );
}
