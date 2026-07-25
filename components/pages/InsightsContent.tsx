"use client";

import Link from "next/link";
import { useLocale } from "@/components/layout/LocaleProvider";
import { PageHero } from "@/components/ui/PageHero";
import { getInsights } from "@/lib/data/insights";
import { formatDate } from "@/lib/utils";

export function InsightsContent() {
  const { t } = useLocale();
  const articles = getInsights();

  return (
    <>
      <PageHero
        eyebrow={t("insights.hero.eyebrow")}
        title={t("insights.hero.title")}
        description={t("insights.hero.desc")}
      />

      <section className="section-y bg-white pt-4 sm:pt-6">
        <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
          <ul className="divide-y divide-grey-200 border-y border-grey-200">
            {articles.map((article) => (
              <li key={article.slug}>
                <Link
                  href={`/insights/${article.slug}/`}
                  className="group grid gap-4 py-8 transition-colors sm:grid-cols-12 sm:items-baseline sm:gap-8 sm:py-10"
                >
                  <div className="sm:col-span-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-grey-600">
                      {article.category}
                    </p>
                    <p className="mt-2 text-sm text-grey-600">
                      {formatDate(article.publishedAt)} · {article.readMinutes}{" "}
                      {t("insights.minRead")}
                    </p>
                  </div>
                  <div className="sm:col-span-8">
                    <h2 className="heading-section text-xl transition-colors group-hover:text-purple sm:text-2xl">
                      {article.title}
                    </h2>
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-grey-700 sm:text-base">
                      {article.excerpt}
                    </p>
                  </div>
                  <div className="hidden sm:col-span-1 sm:flex sm:justify-end">
                    <span
                      className="font-semibold text-grey-500 transition-colors group-hover:text-purple"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
