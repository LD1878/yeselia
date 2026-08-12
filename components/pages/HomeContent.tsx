"use client";

import type { CSSProperties } from "react";
import Link from "next/link";
import { useLocale } from "@/components/layout/LocaleProvider";
import { Button } from "@/components/ui/Button";
import { CtaBand } from "@/components/ui/CtaBand";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PropertyCard } from "@/components/property/PropertyCard";
import { getFeaturedProperties } from "@/lib/data/properties";
import type { DictionaryKey } from "@/lib/i18n";

type HomeContentProps = {
  variant: "hero" | "body";
};

export function HomeContent({ variant }: HomeContentProps) {
  const { t } = useLocale();
  const featured = getFeaturedProperties(4);

  if (variant === "hero") {
    /* Inline colors beat unlayered h1 { color: black } and Button variant clashes */
    const heroH1Style: CSSProperties = {
      color: "#C9A0E8",
      fontWeight: 900,
      letterSpacing: "-0.035em",
      lineHeight: 1.08,
      textShadow: "0 2px 24px rgba(0,0,0,0.55)",
    };
    const heroLeadStyle: CSSProperties = {
      color: "#FFFFFF",
      textShadow: "0 1px 12px rgba(0,0,0,0.5)",
    };
    /* White button → purple text; purple button → white text */
    const btnPrimaryStyle: CSSProperties = {
      backgroundColor: "#FFFFFF",
      color: "#4A1C6B",
      border: "2px solid #FFFFFF",
      fontWeight: 700,
    };
    const btnSecondaryStyle: CSSProperties = {
      backgroundColor: "#4A1C6B",
      color: "#FFFFFF",
      border: "2px solid #4A1C6B",
      fontWeight: 700,
    };

    return (
      <div className="relative z-10 flex h-full min-h-[70vh] flex-col justify-end px-6 pb-10 pt-24 sm:min-h-[78vh] sm:px-10 sm:pb-14 lg:px-14 lg:pb-16">
        <FadeIn>
          <p
            className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em]"
            style={{ color: "#FFFFFF" }}
          >
            <span
              className="inline-block h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: "#C9A0E8" }}
              aria-hidden="true"
            />
            {t("home.hero.eyebrow")}
          </p>
          <h1
            className="hero-title max-w-3xl text-balance text-[2.5rem] sm:text-5xl lg:text-6xl"
            style={heroH1Style}
          >
            {t("home.hero.title1")}
            <br />
            {t("home.hero.title2")}
            <br />
            {t("home.hero.title3")}
            <span style={{ color: "#FFFFFF" }}>.</span>
          </h1>
          <p
            className="mt-6 max-w-xl text-pretty text-base leading-relaxed sm:text-lg"
            style={heroLeadStyle}
          >
            {t("home.hero.lead")}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/buy/"
              className="inline-flex min-h-[3.25rem] items-center justify-center px-8 text-base tracking-wide transition-opacity hover:opacity-90"
              style={btnPrimaryStyle}
            >
              {t("cta.buy")}
            </Link>
            <Link
              href="/sell/"
              className="inline-flex min-h-[3.25rem] items-center justify-center px-8 text-base tracking-wide transition-opacity hover:opacity-90"
              style={btnSecondaryStyle}
            >
              {t("cta.sell")}
            </Link>
          </div>
        </FadeIn>
      </div>
    );
  }

  const processSteps: Array<{ step: string; titleKey: DictionaryKey; textKey: DictionaryKey }> = [
    { step: "01", titleKey: "home.process.1.title", textKey: "home.process.1.text" },
    { step: "02", titleKey: "home.process.2.title", textKey: "home.process.2.text" },
    { step: "03", titleKey: "home.process.3.title", textKey: "home.process.3.text" },
    { step: "04", titleKey: "home.process.4.title", textKey: "home.process.4.text" },
  ];

  const credentials: Array<{ titleKey: DictionaryKey; textKey: DictionaryKey }> = [
    { titleKey: "home.cred.1.title", textKey: "home.cred.1.text" },
    { titleKey: "home.cred.2.title", textKey: "home.cred.2.text" },
    { titleKey: "home.cred.3.title", textKey: "home.cred.3.text" },
  ];

  return (
    <>
      <section className="section-y bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow={t("home.pos.eyebrow")}
                title={t("home.pos.title")}
                titleAs="h2"
              />
            </div>
            <div className="lg:col-span-7">
              <FadeIn>
                <p className="text-pretty text-lg leading-relaxed text-grey-900 sm:text-xl">
                  {t("home.pos.p1")}
                </p>
                <p className="mt-6 text-pretty text-base leading-relaxed text-grey-800">
                  {t("home.pos.p2")}
                </p>
                <div className="mt-8">
                  <Button href="/about/" variant="link">
                    {t("cta.aboutPractice")}
                  </Button>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <section className="section-y border-t border-grey-200 bg-grey-50">
        <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow={t("home.collection.eyebrow")}
              title={t("home.collection.title")}
              description={t("home.collection.desc")}
            />
            <Button
              href="/properties/"
              variant="secondary"
              className="shrink-0 self-start sm:self-auto"
            >
              {t("cta.viewAll")}
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

      <section className="section-y bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
          <SectionHeading
            eyebrow={t("home.cred.eyebrow")}
            title={t("home.cred.title")}
            description={t("home.cred.desc")}
            className="max-w-3xl"
          />
          <div className="mt-14 grid gap-px bg-grey-200 sm:grid-cols-3">
            {credentials.map((item) => (
              <div
                key={item.titleKey}
                className="bg-white px-6 py-10 sm:px-8 sm:py-12"
              >
                <span
                  className="mb-5 block h-1.5 w-1.5 rounded-full bg-purple"
                  aria-hidden="true"
                />
                <h3 className="heading-section text-xl text-black sm:text-2xl">
                  {t(item.titleKey)}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-grey-800 sm:text-base">
                  {t(item.textKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y border-t border-grey-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
          <SectionHeading
            eyebrow={t("home.process.eyebrow")}
            title={t("home.process.title")}
            description={t("home.process.desc")}
          />
          <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {processSteps.map((item, index) => (
              <li key={item.step}>
                <FadeIn delay={index * 0.05}>
                  <p className="text-xs font-bold tracking-[0.16em] text-purple">
                    {item.step}
                  </p>
                  <h3 className="heading-section mt-3 text-xl text-black">
                    {t(item.titleKey)}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-grey-800">
                    {t(item.textKey)}
                  </p>
                </FadeIn>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand
        title={t("home.cta.title")}
        description={t("home.cta.desc")}
        primaryHref="/buy/"
        primaryLabel={t("cta.buyWith")}
        secondaryHref="/sell/"
        secondaryLabel={t("cta.sellWith")}
      />
    </>
  );
}
