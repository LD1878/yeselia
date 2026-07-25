import { SellContent } from "@/components/pages/SellContent";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Sell with Yeselia",
  description:
    "Confidential property sales on the Costa del Sol. Pre-qualified buyers, legal preparation and absolute discretion for serious owners.",
  path: "/sell/",
});

export default function SellPage() {
  return <SellContent />;
}
