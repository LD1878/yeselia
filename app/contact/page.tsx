import { ContactContent } from "@/components/pages/ContactContent";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact",
  description:
    "Contact Yeselia & Co. for private enquiries regarding luxury property on the Costa del Sol. Discrete, professional response.",
  path: "/contact/",
});

export default function ContactPage() {
  return <ContactContent />;
}
