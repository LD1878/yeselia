"use client";

import Link from "next/link";
import { ContactForm } from "@/components/forms/ContactForm";
import { useLocale } from "@/components/layout/LocaleProvider";
import { PropertyCard } from "@/components/property/PropertyCard";
import { PropertyGallery } from "@/components/property/PropertyGallery";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { localizeProperty } from "@/lib/data/properties";
import { propertyTypeLabel, type DictionaryKey } from "@/lib/i18n";
import type { Property } from "@/lib/types";

type Props = {
  property: Property;
  related: Property[];
};

export function PropertyDetailContent({ property, related }: Props) {
  const { t, locale } = useLocale();
  const display = localizeProperty(property, locale);

  const statusLabel =
    display.status === "Under Offer"
      ? t("properties.underOffer")
      : display.status === "Sold"
        ? t("properties.sold")
        : t("properties.available");

  const facts: Array<{ labelKey: DictionaryKey; value: string }> = [
    { labelKey: "fact.price", value: display.priceLabel },
    { labelKey: "fact.type", value: propertyTypeLabel(display.type, locale) },
    { labelKey: "fact.location", value: display.location },
    { labelKey: "fact.area", value: display.area },
    { labelKey: "fact.bedrooms", value: String(display.bedrooms) },
    { labelKey: "fact.bathrooms", value: String(display.bathrooms) },
    { labelKey: "fact.built", value: `${display.builtM2} m²` },
    ...(display.plotM2
      ? [{ labelKey: "fact.plot" as const, value: `${display.plotM2} m²` }]
      : []),
    ...(display.yearBuilt
      ? [{ labelKey: "fact.year" as const, value: String(display.yearBuilt) }]
      : []),
    { labelKey: "fact.status", value: statusLabel },
  ];

  return (
    <article>
      <div className="border-b border-grey-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 pt-6 sm:px-7 sm:pt-8 lg:px-10">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 text-xs font-medium text-grey-600">
              <li>
                <Link href="/" className="hover:text-purple">
                  {t("cta.home")}
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/properties/" className="hover:text-purple">
                  {t("nav.properties")}
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-grey-800">{display.title}</li>
            </ol>
          </nav>

          <PropertyGallery images={display.images} title={display.title} />

          <div className="grid gap-10 py-12 lg:grid-cols-12 lg:gap-14 lg:py-16">
            <div className="lg:col-span-7">
              <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-grey-700">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-purple"
                  aria-hidden="true"
                />
                {display.location} · {display.area}
              </p>
              <h1 className="heading-display mt-4 text-3xl sm:text-4xl lg:text-5xl">
                {display.title}
              </h1>
              <p className="mt-4 text-xl font-bold tracking-tight text-black">
                {display.priceLabel}
              </p>
              <p className="mt-6 text-pretty text-base leading-relaxed text-grey-800 sm:text-lg">
                {display.shortDescription}
              </p>

              <div className="mt-10">
                <h2 className="heading-section text-2xl">
                  {t("properties.description")}
                </h2>
                <div className="prose-yeselia mt-4">
                  <p>{display.description}</p>
                </div>
              </div>

              <div className="mt-12">
                <h2 className="heading-section text-2xl">
                  {t("properties.location")}
                </h2>
                <p className="mt-4 text-pretty text-base leading-relaxed text-grey-800">
                  {display.locationContext}
                </p>
              </div>

              <div className="mt-12">
                <h2 className="heading-section text-2xl">
                  {t("properties.features")}
                </h2>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {display.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-grey-800"
                    >
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-purple"
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <aside className="lg:col-span-5">
              <div className="border border-grey-200 bg-grey-50 p-6 sm:p-8 lg:sticky lg:top-28">
                <h2 className="heading-section text-xl">
                  {t("properties.keyFacts")}
                </h2>
                <dl className="mt-6 divide-y divide-grey-200">
                  {facts.map((fact) => (
                    <div
                      key={fact.labelKey}
                      className="flex items-baseline justify-between gap-4 py-3"
                    >
                      <dt className="text-sm font-medium text-grey-600">
                        {t(fact.labelKey)}
                      </dt>
                      <dd className="text-sm font-semibold text-black">
                        {fact.value}
                      </dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-8 border-t border-grey-200 pt-8">
                  <h3 className="heading-section text-xl">
                    {t("properties.viewing.title")}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-grey-700">
                    {t("properties.viewing.desc")}
                  </p>
                  <div className="mt-6">
                    <ContactForm
                      intent="viewing"
                      propertyTitle={display.title}
                      submitLabel={t("properties.viewing.submit")}
                    />
                  </div>
                </div>

                <p className="mt-8 border-t border-grey-200 pt-6 text-xs leading-relaxed text-grey-600">
                  {t("properties.legalNote")}
                </p>
              </div>
            </aside>
          </div>
        </div>
      </div>

      {related.length > 0 ? (
        <section className="section-y bg-white">
          <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <SectionHeading
                eyebrow={t("properties.related.eyebrow")}
                title={t("properties.related")}
                mark
              />
              <Button href="/properties/" variant="link">
                {t("cta.fullCollection")}
              </Button>
            </div>
            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <PropertyCard key={p.slug} property={p} />
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </article>
  );
}
