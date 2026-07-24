import type { NavItem } from "./types";

export const siteConfig = {
  name: "Yeselia & Co.",
  legalName: "Yeselia & Co.",
  tagline: "Lawyer-led luxury real estate on the Costa del Sol",
  description:
    "Yeselia & Co. is a lawyer-led luxury real estate practice on the Costa del Sol. Serious properties. Serious buyers. Complete legal certainty.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://yeselia.com",
  locale: "en",
  locales: ["en", "es"] as const,
  defaultLocale: "en" as const,
  email: "enquiries@yeselia.com",
  phone: "+34 952 000 000",
  phoneDisplay: "+34 952 000 000",
  address: {
    street: "Avenida Ricardo Soriano 72",
    locality: "Marbella",
    region: "Málaga",
    postalCode: "29601",
    country: "ES",
    countryName: "Spain",
  },
  founder: {
    name: "Yeselia",
    role: "Founder, Qualified Lawyer & Real Estate Specialist",
    shortBio:
      "A dual-qualified practice where legal rigour and property expertise are never separated.",
  },
  social: {
    // Placeholders for future links
    linkedin: "",
    instagram: "",
  },
} as const;

export const mainNav: NavItem[] = [
  { href: "/properties/", label: "Properties" },
  { href: "/buy/", label: "Buy" },
  { href: "/sell/", label: "Sell" },
  { href: "/about/", label: "About" },
  { href: "/insights/", label: "Insights" },
  { href: "/contact/", label: "Contact" },
];

export const footerNav = {
  explore: [
    { href: "/properties/", label: "Collection" },
    { href: "/buy/", label: "Buy with Yeselia" },
    { href: "/sell/", label: "Sell with Yeselia" },
    { href: "/insights/", label: "Insights" },
  ],
  company: [
    { href: "/about/", label: "About" },
    { href: "/contact/", label: "Contact" },
  ],
  legal: [
    { href: "/contact/", label: "Privacy" },
    { href: "/contact/", label: "Legal notice" },
  ],
} as const;

export function absoluteUrl(path = "/"): string {
  const base = siteConfig.url.replace(/\/$/, "");
  const normalised = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalised}`;
}

export function withBasePath(path: string): string {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH?.replace(/\/$/, "") || "";
  if (!path.startsWith("/")) return `${basePath}/${path}`;
  return `${basePath}${path}`;
}
