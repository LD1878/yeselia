import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/layout/JsonLd";
import { PropertyDetailContent } from "@/components/pages/PropertyDetailContent";
import {
  getAllPropertySlugs,
  getPropertyBySlug,
  getRelatedProperties,
} from "@/lib/data/properties";
import { breadcrumbSchema, realEstateListingSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllPropertySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);
  if (!property) return {};

  return buildMetadata({
    title: property.title,
    description: property.shortDescription,
    path: `/properties/${property.slug}/`,
    image: property.images[0],
  });
}

export default async function PropertyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);
  if (!property) notFound();

  const related = getRelatedProperties(property.slug, 3);

  return (
    <>
      <JsonLd data={realEstateListingSchema(property)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Properties", path: "/properties/" },
          { name: property.title, path: `/properties/${property.slug}/` },
        ])}
      />
      <PropertyDetailContent property={property} related={related} />
    </>
  );
}
