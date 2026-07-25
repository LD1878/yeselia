import Image from "next/image";
import { HomeContent } from "@/components/pages/HomeContent";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: siteConfig.name,
  description: siteConfig.description,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      {/* Hero shell with image stays server-rendered for LCP */}
      <section className="relative bg-white">
        <div className="mx-auto max-w-7xl px-5 pt-6 sm:px-7 sm:pt-8 lg:px-10">
          <div className="relative min-h-[70vh] overflow-hidden bg-black sm:min-h-[78vh]">
            <Image
              src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=2400&q=85"
              alt="Contemporary luxury villa architecture on the Costa del Sol"
              fill
              priority
              sizes="100vw"
              className="img-vibrant object-cover object-center"
            />
            {/* Strong bottom scrim so white hero type stays readable */}
            <div
              className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/30"
              aria-hidden="true"
            />
            <HomeContent variant="hero" />
          </div>
        </div>
      </section>
      <HomeContent variant="body" />
    </>
  );
}
