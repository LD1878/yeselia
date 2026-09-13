import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/layout/JsonLd";
import { InsightsArticleContent } from "@/components/pages/InsightsArticleContent";
import {
  getAllInsightSlugs,
  getInsightBySlug,
} from "@/lib/data/insights";
import { getPropertyBySlug } from "@/lib/data/properties";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

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
    .filter((property): property is NonNullable<typeof property> =>
      Boolean(property),
    );

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
      <InsightsArticleContent
        article={article}
        relatedProperties={relatedProperties}
      />
    </>
  );
}
