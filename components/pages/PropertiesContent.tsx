"use client";

import { useLocale } from "@/components/layout/LocaleProvider";
import { PropertyFilters } from "@/components/property/PropertyFilters";
import { PageHero } from "@/components/ui/PageHero";
import { properties } from "@/lib/data/properties";

export function PropertiesContent() {
  const { t } = useLocale();

  return (
    <>
      <PageHero
        eyebrow={t("properties.hero.eyebrow")}
        title={t("properties.hero.title")}
        description={t("properties.hero.desc")}
      />
      <section className="section-y bg-white pt-10 sm:pt-12">
        <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
          <PropertyFilters properties={properties} />
        </div>
      </section>
    </>
  );
}
