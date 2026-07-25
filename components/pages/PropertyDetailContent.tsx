"use client";

import Link from "next/link";
import { ContactForm } from "@/components/forms/ContactForm";
import { useLocale } from "@/components/layout/LocaleProvider";
import { PropertyCard } from "@/components/property/PropertyCard";
import { PropertyGallery } from "@/components/property/PropertyGallery";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Property } from "@/lib/types";
import type { DictionaryKey } from "@/lib/i18n";

type Props = {
  property: Property;
  related: Property[];
};

export function PropertyDetailContent({ property, related }: Props) {
  const { t } = useLocale();

  const statusLabel =
    property.status === "Under Offer"
      ? t("properties.underOffer")
      : property.status === "Sold"
        ? t("properties.sold")
        : property.status;

  const facts: Array<{ labelKey: DictionaryKey; value: string }> = [
    { labelKey: "fact.price", value: property.priceLabel },
    { labelKey: "fact.type", value: property.type },
    { labelKey: "fact.location", value: property.location },
    { labelKey: "fact.area", value: property.area },
    { labelKey: "fact.bedrooms", value: String(property.bedrooms) },
    { labelKey: "fact.bathrooms", value: String(property.bathrooms) },
    { labelKey: "fact.built", value: `${property.builtM2} m²` },
    ...(property.plotM2
      ? [{ labelKey: "fact.plot" as const, value: `${property.plotM2} m²` }]
      : []),
    ...(property.yearBuilt
      ? [{ labelKey: "fact.year" as const, value: String(property.yearBuilt) }]
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
              <li className="text-grey-800">{property.title}</li>
            </ol>
          </nav>

          <PropertyGallery images={property.images} title={property.title} />

          <div className="grid gap-10 py-12 lg:grid-cols-12 lg:gap-14 lg:py-16">
            <div className="lg:col-span-7">
              <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-grey-700">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-purple"
                  aria-hidden="true"
                />
                {property.location} · {property.area}
              </p>
              <h1 className="heading-display mt-4 text-3xl sm:text-4xl lg:text-5xl">
                {property.title}
              </h1>
              <p className="mt-4 text-xl font-bold tracking-tight text-black">
                {property.priceLabel}
              </p>
              <p className="mt-6 text-pretty text-base leading-relaxed text-grey-800 sm:text-lg">
                {property.shortDescription}
              </p>

              <div className="mt-10">
                <h2 className="heading-section text-2xl">
                  {t("properties.description")}
                </h2>
                <div className="prose-yeselia mt-4">
                  <p>{property.description}</p>
                </div>
              </div>

              <div className="mt-12">
                <h2 className="heading-section text-2xl">
                  {t("properties.location")}
                </h2>
                <p className="mt-4 text-pretty text-base leading-relaxed text-grey-800">
                  {property.locationContext}
                </p>
              </div>

              <div className="mt-12">
                <h2 className="heading-section text-2xl">
                  {t("properties.features")}
                </h2>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {property.features.map((feature) => (
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
                      propertyTitle={property.title}
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
