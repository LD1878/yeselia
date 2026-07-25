import { PropertiesContent } from "@/components/pages/PropertiesContent";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Properties",
  description:
    "Explore the Yeselia & Co. collection of luxury residences on the Costa del Sol. Villas, penthouses and apartments selected for quality and legal clarity.",
  path: "/properties/",
});

export default function PropertiesPage() {
  return <PropertiesContent />;
}
