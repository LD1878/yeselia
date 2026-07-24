import type { MetadataRoute } from "next";
import { getAllInsightSlugs } from "@/lib/data/insights";
import { getAllPropertySlugs } from "@/lib/data/properties";
import { siteConfig } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url.replace(/\/$/, "");

  const staticRoutes = [
    "",
    "/properties/",
    "/buy/",
    "/sell/",
    "/about/",
    "/insights/",
    "/contact/",
  ].map((path) => ({
    url: `${base}${path || "/"}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const propertyRoutes = getAllPropertySlugs().map((slug) => ({
    url: `${base}/properties/${slug}/`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const insightRoutes = getAllInsightSlugs().map((slug) => ({
    url: `${base}/insights/${slug}/`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...propertyRoutes, ...insightRoutes];
}
