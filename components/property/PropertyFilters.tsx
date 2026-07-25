"use client";

import { useMemo, useState } from "react";
import { useLocale } from "@/components/layout/LocaleProvider";
import { PropertyCard } from "@/components/property/PropertyCard";
import { Field, Select } from "@/components/ui/FormFields";
import type { Property, PropertyType } from "@/lib/types";
import { propertyLocations, propertyTypes } from "@/lib/data/properties";

type Filters = {
  location: string;
  type: string;
  bedrooms: string;
  price: string;
};

const initial: Filters = {
  location: "all",
  type: "all",
  bedrooms: "all",
  price: "all",
};

function matchesPrice(price: number, band: string): boolean {
  switch (band) {
    case "under-2m":
      return price < 2_000_000;
    case "2m-4m":
      return price >= 2_000_000 && price < 4_000_000;
    case "4m-8m":
      return price >= 4_000_000 && price < 8_000_000;
    case "8m-plus":
      return price >= 8_000_000;
    default:
      return true;
  }
}

export function PropertyFilters({ properties }: { properties: Property[] }) {
  const { t, tFormat } = useLocale();
  const [filters, setFilters] = useState<Filters>(initial);

  const filtered = useMemo(() => {
    return properties.filter((p) => {
      if (filters.location !== "all" && p.location !== filters.location) {
        return false;
      }
      if (filters.type !== "all" && p.type !== (filters.type as PropertyType)) {
        return false;
      }
      if (filters.bedrooms !== "all") {
        const min = Number(filters.bedrooms);
        if (p.bedrooms < min) return false;
      }
      if (!matchesPrice(p.price, filters.price)) return false;
      return true;
    });
  }, [properties, filters]);

  const update = (key: keyof Filters, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const countLabel =
    filtered.length === 1
      ? tFormat("properties.filter.countOne", { n: filtered.length })
      : tFormat("properties.filter.count", { n: filtered.length });

  return (
    <div>
      <div className="border border-grey-200 bg-grey-50 p-5 sm:p-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Field label={t("properties.filter.location")} id="filter-location">
            <Select
              id="filter-location"
              value={filters.location}
              onChange={(e) => update("location", e.target.value)}
              aria-label={t("properties.filter.location")}
            >
              <option value="all">{t("properties.filter.allLocations")}</option>
              {propertyLocations.map((loc) => (
                <option key={loc} value={loc}>
                  {loc}
                </option>
              ))}
            </Select>
          </Field>

          <Field label={t("properties.filter.type")} id="filter-type">
            <Select
              id="filter-type"
              value={filters.type}
              onChange={(e) => update("type", e.target.value)}
              aria-label={t("properties.filter.type")}
            >
              <option value="all">{t("properties.filter.allTypes")}</option>
              {propertyTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </Select>
          </Field>

          <Field label={t("properties.filter.bedrooms")} id="filter-bedrooms">
            <Select
              id="filter-bedrooms"
              value={filters.bedrooms}
              onChange={(e) => update("bedrooms", e.target.value)}
              aria-label={t("properties.filter.bedrooms")}
            >
              <option value="all">{t("properties.filter.any")}</option>
              <option value="3">3+</option>
              <option value="4">4+</option>
              <option value="5">5+</option>
              <option value="6">6+</option>
            </Select>
          </Field>

          <Field label={t("properties.filter.price")} id="filter-price">
            <Select
              id="filter-price"
              value={filters.price}
              onChange={(e) => update("price", e.target.value)}
              aria-label={t("properties.filter.price")}
            >
              <option value="all">{t("properties.filter.anyPrice")}</option>
              <option value="under-2m">Under €2M</option>
              <option value="2m-4m">€2M - €4M</option>
              <option value="4m-8m">€4M - €8M</option>
              <option value="8m-plus">€8M+</option>
            </Select>
          </Field>
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm font-medium text-grey-700" aria-live="polite">
            {countLabel}
          </p>
          <button
            type="button"
            onClick={() => setFilters(initial)}
            className="min-h-11 text-sm font-semibold text-grey-700 underline-offset-4 transition-colors hover:text-purple hover:underline"
          >
            {t("properties.filter.reset")}
          </button>
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="mt-12 border border-grey-200 px-6 py-16 text-center">
          <p className="heading-section text-2xl">
            {t("properties.empty.title")}
          </p>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-grey-700">
            {t("properties.empty.text")}{" "}
            <a
              href="/contact/"
              className="font-semibold text-black underline underline-offset-4 hover:text-purple"
            >
              {t("cta.contact")}
            </a>
          </p>
        </div>
      ) : (
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((property, index) => (
            <PropertyCard
              key={property.slug}
              property={property}
              priority={index < 3}
            />
          ))}
        </div>
      )}
    </div>
  );
}
