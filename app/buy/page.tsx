import { BuyContent } from "@/components/pages/BuyContent";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Buy with Yeselia",
  description:
    "Acquire luxury property on the Costa del Sol with lawyer-led representation. Clear process, rigorous diligence, complete legal certainty.",
  path: "/buy/",
});

export default function BuyPage() {
  return <BuyContent />;
}
