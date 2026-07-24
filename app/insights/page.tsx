import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { getInsights } from "@/lib/data/insights";
import { formatDate } from "@/lib/utils";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Insights",
  description:
    "Legal guides and property insight from Yeselia & Co. Cornerstone reading for serious buyers and owners on the Costa del Sol.",
  path: "/insights/",
});

export default function InsightsPage() {
  const articles = getInsights();

  return (
    <>
      <PageHero
        eyebrow="Perspectives"
        title="Insights"
        description="Guides and commentary for serious buyers and owners. Written with legal precision and market clarity."
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
                    <p className="text-xs font-medium uppercase tracking-[0.14em] text-grey-500">
                      {article.category}
                    </p>
                    <p className="mt-2 text-sm text-grey-500">
                      {formatDate(article.publishedAt)} · {article.readMinutes}{" "}
                      min
                    </p>
                  </div>
                  <div className="sm:col-span-8">
                    <h2 className="font-serif text-xl text-black transition-colors group-hover:text-purple sm:text-2xl">
                      {article.title}
                    </h2>
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-grey-600 sm:text-base">
                      {article.excerpt}
                    </p>
                  </div>
                  <div className="hidden sm:col-span-1 sm:flex sm:justify-end">
                    <span
                      className="text-grey-400 transition-colors group-hover:text-purple"
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
