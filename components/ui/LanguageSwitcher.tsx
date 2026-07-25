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

  const options: Locale[] = ["en", "es"];

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-none border border-grey-300 bg-white",
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
            aria-label={code === "en" ? t("lang.switchToEn") : t("lang.switchToEs")}
            className={cn(
              "min-w-[2.5rem] px-2.5 text-xs font-bold tracking-wide transition-colors duration-150",
              compact ? "h-9" : "h-10",
              active
                ? "bg-black text-white"
                : "bg-transparent text-grey-700 hover:bg-grey-50 hover:text-black",
            )}
          >
            {code === "en" ? t("lang.en") : t("lang.es")}
          </button>
        );
      })}
    </div>
  );
}
