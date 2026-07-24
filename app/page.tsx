import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { CtaBand } from "@/components/ui/CtaBand";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PropertyCard } from "@/components/property/PropertyCard";
import { getFeaturedProperties } from "@/lib/data/properties";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: siteConfig.name,
  description: siteConfig.description,
  path: "/",
});

const processSteps = [
  {
    step: "01",
    title: "Brief",
    text: "We begin with a precise conversation: requirements, timeline, legal context and discretion preferences.",
  },
  {
    step: "02",
    title: "Selection",
    text: "Only properties that meet your criteria are presented. No filler. No time-wasting viewings.",
  },
  {
    step: "03",
    title: "Diligence",
    text: "Title, planning, licences and tax implications are reviewed before commitment deepens.",
  },
  {
    step: "04",
    title: "Completion",
    text: "Negotiation, contract and notary completion are coordinated as one continuous process.",
  },
];

export default function HomePage() {
  const featured = getFeaturedProperties(4);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-white">
        <div className="mx-auto max-w-7xl px-5 pt-6 sm:px-7 sm:pt-8 lg:px-10">
          <div className="relative min-h-[70vh] overflow-hidden bg-grey-900 sm:min-h-[78vh]">
            <Image
              src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=2400&q=80"
              alt="Contemporary luxury villa architecture on the Costa del Sol"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center opacity-90"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/20"
              aria-hidden="true"
            />

            <div className="relative flex h-full min-h-[70vh] flex-col justify-end px-6 pb-10 pt-24 sm:min-h-[78vh] sm:px-10 sm:pb-14 lg:px-14 lg:pb-16">
              <FadeIn>
                <p className="mb-5 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-white/80">
                  <span
                    className="inline-block h-1 w-1 rounded-full bg-purple"
                    aria-hidden="true"
                  />
                  Costa del Sol
                </p>
                <h1 className="max-w-3xl text-balance font-serif text-[2.5rem] leading-[1.08] text-white sm:text-5xl lg:text-6xl">
                  Serious properties.
                  <br />
                  Serious buyers.
                  <br />
                  Complete legal certainty
                  <span className="text-purple">.</span>
                </h1>
                <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-white/85 sm:text-lg">
                  Lawyer-led luxury real estate. Where dual qualification meets
                  the Costa del Sol’s finest residences.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Button
                    href="/buy/"
                    size="lg"
                    className="border-white bg-white text-black hover:border-purple hover:bg-white"
                  >
                    Buy
                  </Button>
                  <Button
                    href="/sell/"
                    size="lg"
                    variant="secondary"
                    className="border-white/50 bg-transparent text-white hover:border-white hover:bg-white/10"
                  >
                    Sell
                  </Button>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Positioning */}
      <section className="section-y bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Positioning"
                title="A different standard of representation"
                titleAs="h2"
              />
            </div>
            <div className="lg:col-span-7">
              <FadeIn>
                <p className="text-pretty text-lg leading-relaxed text-grey-700 sm:text-xl">
                  Yeselia & Co. is built on a simple conviction: high-value
                  property transactions deserve the same rigour as high-stakes
                  legal work. Our founder is both a qualified lawyer and a real
                  estate specialist. That dual expertise is not a marketing
                  line. It is how every mandate is conducted.
                </p>
                <p className="mt-6 text-pretty text-base leading-relaxed text-grey-600">
                  We work with international buyers who require certainty, and
                  with owners who require discretion. The collection is curated.
                  The process is calm. The legal foundation is non-negotiable.
                </p>
                <div className="mt-8">
                  <Button href="/about/" variant="link">
                    About the practice
                  </Button>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Featured properties */}
      <section className="section-y border-t border-grey-100 bg-grey-50">
        <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="Collection"
              title="Selected residences"
              description="A measured selection of properties currently available through Yeselia & Co."
            />
            <Button href="/properties/" variant="secondary" className="shrink-0 self-start sm:self-auto">
              View all
            </Button>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
            {featured.map((property, index) => (
              <FadeIn key={property.slug} delay={index * 0.06}>
                <PropertyCard property={property} priority={index < 2} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="section-y bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
          <SectionHeading
            eyebrow="Credentials"
            title="Legal certainty at the centre"
            description="Property advice without legal depth is incomplete. Legal advice without market knowledge is abstract. We provide both."
            className="max-w-3xl"
          />
          <div className="mt-14 grid gap-px bg-grey-200 sm:grid-cols-3">
            {[
              {
                title: "Qualified lawyer",
                text: "Legal due diligence is not outsourced as an afterthought. It is integral from the first conversation.",
              },
              {
                title: "Real estate specialist",
                text: "Market knowledge across Marbella, Benahavís, Estepona and the wider Costa del Sol.",
              },
              {
                title: "Private client standard",
                text: "Discrete handling of sensitive mandates. Pre-qualified introductions. No public spectacle.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white px-6 py-10 sm:px-8 sm:py-12"
              >
                <span
                  className="mb-5 block h-1 w-1 rounded-full bg-purple"
                  aria-hidden="true"
                />
                <h3 className="font-serif text-xl text-black sm:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-grey-600 sm:text-base">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-y border-t border-grey-100 bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
          <SectionHeading
            eyebrow="Process"
            title="Clear steps. No theatre."
            description="Whether you are acquiring or disposing, the sequence is deliberate and transparent."
          />
          <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {processSteps.map((item, index) => (
              <li key={item.step}>
                <FadeIn delay={index * 0.05}>
                  <p className="text-xs font-medium tracking-[0.16em] text-purple">
                    {item.step}
                  </p>
                  <h3 className="mt-3 font-serif text-xl text-black">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-grey-600">
                    {item.text}
                  </p>
                </FadeIn>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand
        title="Begin a private conversation"
        description="Tell us whether you wish to buy or sell. We respond with clarity, not pressure."
        primaryHref="/buy/"
        primaryLabel="Buy with Yeselia"
        secondaryHref="/sell/"
        secondaryLabel="Sell with Yeselia"
      />
    </>
  );
}
