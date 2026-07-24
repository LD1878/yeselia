import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/layout/JsonLd";
import { PropertyCard } from "@/components/property/PropertyCard";
import { Button } from "@/components/ui/Button";
import { CtaBand } from "@/components/ui/CtaBand";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  getAllInsightSlugs,
  getInsightBySlug,
} from "@/lib/data/insights";
import { getPropertyBySlug } from "@/lib/data/properties";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { formatDate } from "@/lib/utils";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllInsightSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getInsightBySlug(slug);
  if (!article) return {};

  return buildMetadata({
    title: article.title,
    description: article.excerpt,
    path: `/insights/${article.slug}/`,
  });
}

export default async function InsightDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const article = getInsightBySlug(slug);
  if (!article) notFound();

  const relatedProperties = (article.relatedPropertySlugs ?? [])
    .map((s) => getPropertyBySlug(s))
    .filter(Boolean);

  return (
    <>
      <JsonLd
        data={articleSchema({
          title: article.title,
          description: article.excerpt,
          path: `/insights/${article.slug}/`,
          publishedAt: article.publishedAt,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Insights", path: "/insights/" },
          { name: article.title, path: `/insights/${article.slug}/` },
        ])}
      />

      <article>
        <header className="border-b border-grey-100 bg-white pb-12 pt-10 sm:pb-16 sm:pt-14">
          <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex flex-wrap items-center gap-2 text-xs text-grey-500">
                <li>
                  <Link href="/" className="hover:text-purple">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link href="/insights/" className="hover:text-purple">
                    Insights
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="max-w-[12rem] truncate text-grey-700 sm:max-w-none">
                  {article.title}
                </li>
              </ol>
            </nav>

            <div className="max-w-3xl">
              <p className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.16em] text-grey-600">
                <span
                  className="h-1 w-1 rounded-full bg-purple"
                  aria-hidden="true"
                />
                {article.category}
              </p>
              <h1 className="mt-5 text-balance font-serif text-3xl leading-[1.12] text-black sm:text-4xl lg:text-5xl">
                {article.title}
              </h1>
              <p className="mt-6 text-pretty text-lg leading-relaxed text-grey-600">
                {article.excerpt}
              </p>
              <p className="mt-6 text-sm text-grey-500">
                {formatDate(article.publishedAt)} · {article.readMinutes} min
                read
              </p>
            </div>
          </div>
        </header>

        <div className="section-y bg-white">
          <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
            <div className="prose-yeselia mx-auto">
              {article.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="mx-auto mt-14 max-w-[42rem] border-t border-grey-200 pt-10">
              <p className="text-sm leading-relaxed text-grey-600">
                This guide is for general information. It is not a substitute
                for advice on a specific transaction. For counsel tailored to
                your circumstances,{" "}
                <Link
                  href="/contact/"
                  className="text-black underline underline-offset-4 hover:text-purple"
                >
                  contact Yeselia & Co.
                </Link>
              </p>
              <div className="mt-6">
                <Button href="/insights/" variant="secondary">
                  All insights
                </Button>
              </div>
            </div>
          </div>
        </div>

        {relatedProperties.length > 0 ? (
          <section className="section-y border-t border-grey-100 bg-grey-50">
            <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
              <SectionHeading
                eyebrow="Collection"
                title="Related properties"
              />
              <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {relatedProperties.map(
                  (property) =>
                    property && (
                      <PropertyCard key={property.slug} property={property} />
                    ),
                )}
              </div>
            </div>
          </section>
        ) : null}

        <CtaBand
          title="Discuss your requirements"
          description="Whether you are buying or selling, we begin with a private conversation."
          primaryHref="/contact/"
          primaryLabel="Contact"
          secondaryHref="/properties/"
          secondaryLabel="View collection"
        />
      </article>
    </>
  );
}
