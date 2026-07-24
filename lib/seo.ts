import type { Metadata } from "next";
import { siteConfig, absoluteUrl } from "./site";

type BuildMetadataInput = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
};

export function buildMetadata({
  title,
  description,
  path = "/",
  image,
  noIndex = false,
}: BuildMetadataInput): Metadata {
  const url = absoluteUrl(path);
  const pageTitle =
    title === siteConfig.name ? title : `${title} | ${siteConfig.name}`;

  return {
    title: pageTitle,
    description,
    alternates: {
      canonical: url,
      languages: {
        en: url,
        // Spanish routes can be wired here later: es: absoluteUrl(`/es${path}`)
      },
    },
    openGraph: {
      type: "website",
      locale: "en_GB",
      url,
      siteName: siteConfig.name,
      title: pageTitle,
      description,
      images: image
        ? [{ url: image, width: 1200, height: 630, alt: title }]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: image ? [image] : undefined,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}
