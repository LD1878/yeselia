"use client";

import { ValuationForm } from "@/components/forms/ValuationForm";
import { useLocale } from "@/components/layout/LocaleProvider";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import type { DictionaryKey } from "@/lib/i18n";

const timeline = [
  {
    title: {
      en: "Confidential valuation",
      es: "Valoración confidencial",
    },
    text: {
      en: "A private assessment based on comparable evidence, condition, legal status and current demand. No obligation to proceed.",
      es: "Una evaluación privada basada en comparables, estado, situación legal y demanda actual. Sin obligación de continuar.",
    },
  },
  {
    title: {
      en: "Preparation of the file",
      es: "Preparación del expediente",
    },
    text: {
      en: "Title, licences, community certificates and technical documentation assembled before any marketing begins.",
      es: "Título, licencias, certificados de comunidad y documentación técnica reunidos antes de cualquier marketing.",
    },
  },
  {
    title: {
      en: "Strategy and exposure",
      es: "Estrategia y exposición",
    },
    text: {
      en: "Open marketing, limited circulation or fully confidential introductions. You choose the level of visibility.",
      es: "Marketing abierto, circulación limitada o presentaciones totalmente confidenciales. Usted elige el nivel de visibilidad.",
    },
  },
  {
    title: {
      en: "Qualified viewings only",
      es: "Solo visitas cualificadas",
    },
    text: {
      en: "Access is granted to pre-qualified buyers with demonstrated capacity and intent. No time-wasters.",
      es: "El acceso se concede a compradores precalificados con capacidad e intención demostradas. Sin pérdidas de tiempo.",
    },
  },
  {
    title: {
      en: "Negotiation and completion",
      es: "Negociación y cierre",
    },
    text: {
      en: "Offers are evaluated with legal and commercial clarity. Completion is managed through to the notary.",
      es: "Las ofertas se evalúan con claridad jurídica y comercial. El cierre se gestiona hasta el notario.",
    },
  },
];

const benefits: DictionaryKey[] = [
  "sell.val.1",
  "sell.val.2",
  "sell.val.3",
  "sell.val.4",
];

export function SellContent() {
  const { t, locale } = useLocale();

  return (
    <>
      <PageHero
        eyebrow={t("sell.hero.eyebrow")}
        title={t("sell.hero.title")}
        description={t("sell.hero.desc")}
      />

      <section className="section-y border-b border-grey-200 bg-grey-50">
        <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow={t("sell.val.eyebrow")}
                title={t("sell.val.title")}
                description={t("sell.val.desc")}
              />
              <ul className="mt-8 space-y-4">
                {benefits.map((key) => (
                  <li
                    key={key}
                    className="flex items-start gap-3 text-sm font-medium text-grey-800"
                  >
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-purple"
                      aria-hidden="true"
                    />
                    {t(key)}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border border-grey-200 bg-white p-6 sm:p-8 lg:col-span-7">
              <ValuationForm />
            </div>
          </div>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
          <SectionHeading
            eyebrow={t("sell.process.eyebrow")}
            title={t("sell.process.title")}
            description={t("sell.process.desc")}
          />
          <ol className="mt-14 space-y-0">
            {timeline.map((item, index) => (
              <li
                key={item.title.en}
                className="grid gap-4 border-t border-grey-200 py-8 sm:grid-cols-12 sm:gap-8"
              >
                <FadeIn className="contents">
                  <div className="sm:col-span-1">
                    <span className="text-xs font-bold tracking-[0.16em] text-purple">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="sm:col-span-4">
                    <h3 className="heading-section text-xl sm:text-2xl">
                      {item.title[locale]}
                    </h3>
                  </div>
                  <div className="sm:col-span-7">
                    <p className="text-sm leading-relaxed text-grey-700 sm:text-base">
                      {item.text[locale]}
                    </p>
                  </div>
                </FadeIn>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-y border-t border-grey-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="border border-grey-200 p-8 sm:p-10">
              <span
                className="mb-5 block h-1.5 w-1.5 rounded-full bg-purple"
                aria-hidden="true"
              />
              <h2 className="heading-section text-2xl sm:text-3xl">
                {t("sell.card1.title")}
              </h2>
              <p className="mt-4 text-pretty text-base leading-relaxed text-grey-700">
                {t("sell.card1.text")}
              </p>
            </div>
            <div className="border border-grey-200 p-8 sm:p-10">
              <span
                className="mb-5 block h-1.5 w-1.5 rounded-full bg-purple"
                aria-hidden="true"
              />
              <h2 className="heading-section text-2xl sm:text-3xl">
                {t("sell.card2.title")}
              </h2>
              <p className="mt-4 text-pretty text-base leading-relaxed text-grey-700">
                {t("sell.card2.text")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
