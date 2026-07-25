import { AboutContent } from "@/components/pages/AboutContent";
import { JsonLd } from "@/components/layout/JsonLd";
import { personSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About",
  description:
    "Yeselia & Co. is a lawyer-led luxury real estate practice on the Costa del Sol. Dual-qualified representation for serious buyers and owners.",
  path: "/about/",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd data={personSchema()} />
      <AboutContent />
    </>
  );
}
