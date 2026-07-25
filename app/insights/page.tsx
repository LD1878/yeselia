import { InsightsContent } from "@/components/pages/InsightsContent";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Insights",
  description:
    "Legal guides and property insight from Yeselia & Co. Cornerstone reading for serious buyers and owners on the Costa del Sol.",
  path: "/insights/",
});

export default function InsightsPage() {
  return <InsightsContent />;
}
