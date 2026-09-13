"use client";

import Link from "next/link";
import { useLocale } from "@/components/layout/LocaleProvider";
import { PropertyCard } from "@/components/property/PropertyCard";
import { Button } from "@/components/ui/Button";
import { CtaBand } from "@/components/ui/CtaBand";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { localizeInsight } from "@/lib/data/insights";
import type { Insight, Property } from "@/lib/types";
import { formatDate } from "@/lib/utils";

type Props = {
  article: Insight;
  relatedProperties: Property[];
};

export function InsightsArticleContent({ article, relatedProperties }: Props) {
  const { t, locale } = useLocale();
  const display = localizeInsight(article, locale);

  return (
    <article>
      <header className="border-b border-grey-200 bg-white pb-12 pt-10 sm:pb-16 sm:pt-14">
        <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-2 text-xs font-medium text-grey-600">
              <li>
                <Link href="/" className="hover:text-purple">
                  {t("cta.home")}
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/insights/" className="hover:text-purple">
                  {t("nav.insights")}
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="max-w-[12rem] truncate text-grey-800 sm:max-w-none">
                {display.title}
              </li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-grey-700">
              <span
                className="h-1.5 w-1.5 rounded-full bg-purple"
                aria-hidden="true"
              />
              {display.category}
            </p>
            <h1 className="heading-display mt-5 text-balance text-3xl sm:text-4xl lg:text-5xl">
              {display.title}
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-grey-700">
              {display.excerpt}
            </p>
            <p className="mt-6 text-sm font-medium text-grey-600">
              {formatDate(display.publishedAt)} · {display.readMinutes}{" "}
              {t("insights.minReadFull")}
            </p>
          </div>
        </div>
      </header>

      <div className="section-y bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
          <div className="prose-yeselia mx-auto">
            {display.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="mx-auto mt-14 max-w-[42rem] border-t border-grey-200 pt-10">
            <p className="text-sm leading-relaxed text-grey-700">
              {t("insights.disclaimer")}{" "}
              <Link
                href="/contact/"
                className="font-semibold text-black underline underline-offset-4 hover:text-purple"
              >
                {t("insights.disclaimerLink")}
              </Link>
            </p>
            <div className="mt-6">
              <Button href="/insights/" variant="secondary">
                {t("cta.allInsights")}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {relatedProperties.length > 0 ? (
        <section className="section-y border-t border-grey-200 bg-grey-50">
          <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
            <SectionHeading
              eyebrow={t("insights.related.eyebrow")}
              title={t("insights.related.title")}
            />
            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {relatedProperties.map((property) => (
                <PropertyCard key={property.slug} property={property} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <CtaBand
        title={t("insights.cta.title")}
        description={t("insights.cta.desc")}
        primaryHref="/contact/"
        primaryLabel={t("cta.contact")}
        secondaryHref="/properties/"
        secondaryLabel={t("cta.viewCollection")}
      />
    </article>
  );
}
