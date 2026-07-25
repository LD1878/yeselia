"use client";

import { useLocale } from "@/components/layout/LocaleProvider";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  const { t } = useLocale();

  return (
    <section className="flex min-h-[60vh] items-center bg-white">
      <div className="mx-auto max-w-7xl px-5 py-20 text-center sm:px-7 lg:px-10">
        <span
          className="mx-auto mb-6 block h-1.5 w-1.5 rounded-full bg-purple"
          aria-hidden="true"
        />
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-grey-600">
          {t("notFound.code")}
        </p>
        <h1 className="heading-display mt-4 text-3xl sm:text-4xl">
          {t("notFound.title")}
        </h1>
        <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-grey-700">
          {t("notFound.text")}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/">{t("cta.home")}</Button>
          <Button href="/properties/" variant="secondary">
            {t("nav.properties")}
          </Button>
        </div>
      </div>
    </section>
  );
}
