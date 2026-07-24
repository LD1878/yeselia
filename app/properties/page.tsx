import { PageHero } from "@/components/ui/PageHero";
import { PropertyFilters } from "@/components/property/PropertyFilters";
import { properties } from "@/lib/data/properties";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Properties",
  description:
    "Explore the Yeselia & Co. collection of luxury residences on the Costa del Sol. Villas, penthouses and apartments selected for quality and legal clarity.",
  path: "/properties/",
});

export default function PropertiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Collection"
        title="Properties"
        description="A curated selection of residences across Marbella, Benahavís, Estepona and the wider Costa del Sol. Each property is presented with the essential facts only."
      />
      <section className="section-y bg-white pt-10 sm:pt-12">
        <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
          <PropertyFilters properties={properties} />
        </div>
      </section>
    </>
  );
}
