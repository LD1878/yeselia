import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ContactForm } from "@/components/forms/ContactForm";
import { JsonLd } from "@/components/layout/JsonLd";
import { PropertyCard } from "@/components/property/PropertyCard";
import { PropertyGallery } from "@/components/property/PropertyGallery";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
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

  const facts = [
    { label: "Price", value: property.priceLabel },
    { label: "Type", value: property.type },
    { label: "Location", value: property.location },
    { label: "Area", value: property.area },
    { label: "Bedrooms", value: String(property.bedrooms) },
    { label: "Bathrooms", value: String(property.bathrooms) },
    { label: "Built", value: `${property.builtM2} m²` },
    ...(property.plotM2
      ? [{ label: "Plot", value: `${property.plotM2} m²` }]
      : []),
    ...(property.yearBuilt
      ? [{ label: "Year", value: String(property.yearBuilt) }]
      : []),
    { label: "Status", value: property.status },
  ];

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

      <article>
        <div className="border-b border-grey-100 bg-white">
          <div className="mx-auto max-w-7xl px-5 pt-6 sm:px-7 sm:pt-8 lg:px-10">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex flex-wrap items-center gap-2 text-xs text-grey-500">
                <li>
                  <Link href="/" className="hover:text-purple">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link href="/properties/" className="hover:text-purple">
                    Properties
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-grey-700">{property.title}</li>
              </ol>
            </nav>

            <PropertyGallery images={property.images} title={property.title} />

            <div className="grid gap-10 py-12 lg:grid-cols-12 lg:gap-14 lg:py-16">
              <div className="lg:col-span-7">
                <p className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.16em] text-grey-600">
                  <span
                    className="h-1 w-1 rounded-full bg-purple"
                    aria-hidden="true"
                  />
                  {property.location} · {property.area}
                </p>
                <h1 className="mt-4 font-serif text-3xl text-black sm:text-4xl lg:text-5xl">
                  {property.title}
                </h1>
                <p className="mt-4 text-lg font-medium text-black">
                  {property.priceLabel}
                </p>
                <p className="mt-6 text-pretty text-base leading-relaxed text-grey-700 sm:text-lg">
                  {property.shortDescription}
                </p>

                <div className="mt-10">
                  <h2 className="font-serif text-2xl text-black">Description</h2>
                  <div className="prose-yeselia mt-4">
                    <p>{property.description}</p>
                  </div>
                </div>

                <div className="mt-12">
                  <h2 className="font-serif text-2xl text-black">Location</h2>
                  <p className="mt-4 text-pretty text-base leading-relaxed text-grey-700">
                    {property.locationContext}
                  </p>
                </div>

                <div className="mt-12">
                  <h2 className="font-serif text-2xl text-black">Features</h2>
                  <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                    {property.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm text-grey-700"
                      >
                        <span
                          className="mt-2 h-1 w-1 shrink-0 rounded-full bg-purple"
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
                  <h2 className="font-serif text-xl text-black">Key facts</h2>
                  <dl className="mt-6 divide-y divide-grey-200">
                    {facts.map((fact) => (
                      <div
                        key={fact.label}
                        className="flex items-baseline justify-between gap-4 py-3"
                      >
                        <dt className="text-sm text-grey-500">{fact.label}</dt>
                        <dd className="text-sm font-medium text-black">
                          {fact.value}
                        </dd>
                      </div>
                    ))}
                  </dl>

                  <div className="mt-8 border-t border-grey-200 pt-8">
                    <h3 className="font-serif text-xl text-black">
                      Request private viewing
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-grey-600">
                      Viewings are by appointment and limited to serious
                      enquiries.
                    </p>
                    <div className="mt-6">
                      <ContactForm
                        intent="viewing"
                        propertyTitle={property.title}
                        submitLabel="Request viewing"
                      />
                    </div>
                  </div>

                  <p className="mt-8 border-t border-grey-200 pt-6 text-xs leading-relaxed text-grey-500">
                    All acquisitions through Yeselia & Co. are supported by
                    lawyer-led due diligence. Legal review of title, planning
                    status and contractual terms is integral to the process, not
                    an optional extra.
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
                  eyebrow="Further"
                  title="Related properties"
                  mark
                />
                <Button href="/properties/" variant="link">
                  Full collection
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
    </>
  );
}
