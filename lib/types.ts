export type PropertyType =
  | "Villa"
  | "Apartment"
  | "Penthouse"
  | "Townhouse"
  | "Plot";

export type PropertyStatus = "Available" | "Under Offer" | "Sold";

export interface Property {
  slug: string;
  title: string;
  location: string;
  area: string;
  type: PropertyType;
  status: PropertyStatus;
  price: number;
  priceLabel: string;
  bedrooms: number;
  bathrooms: number;
  builtM2: number;
  plotM2?: number;
  yearBuilt?: number;
  shortDescription: string;
  description: string;
  locationContext: string;
  features: string[];
  images: string[];
  featured?: boolean;
}

export interface Insight {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  readMinutes: number;
  content: string[];
  relatedPropertySlugs?: string[];
}

export interface NavItem {
  href: string;
  label: string;
}

export type Locale = "en" | "es";
