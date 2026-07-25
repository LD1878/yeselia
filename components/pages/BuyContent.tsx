"use client";

import { ContactForm } from "@/components/forms/ContactForm";
import { useLocale } from "@/components/layout/LocaleProvider";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";

const steps = [
  {
    title: {
      en: "Define the brief",
      es: "Definir el brief",
    },
    text: {
      en: "Location, scale, budget, timeline and lifestyle requirements. We establish what is essential and what is flexible.",
      es: "Ubicación, escala, presupuesto, plazos y estilo de vida. Establecemos lo esencial y lo flexible.",
    },
  },
  {
    title: {
      en: "Curated shortlist",
      es: "Lista curada",
    },
    text: {
      en: "You receive only properties that meet the brief. Off-market opportunities are included where appropriate and available.",
      es: "Solo recibe propiedades que cumplen el brief. Se incluyen oportunidades off-market cuando proceden.",
    },
  },
  {
    title: {
      en: "Accompanied viewings",
      es: "Visitas acompañadas",
    },
    text: {
      en: "Viewings are organised efficiently. We attend, advise and filter in real time so your attention is reserved for serious candidates.",
      es: "Las visitas se organizan con eficiencia. Asistimos, asesoramos y filtramos en tiempo real.",
    },
  },
  {
    title: {
      en: "Legal diligence",
      es: "Diligencia jurídica",
    },
    text: {
      en: "Before reservation or private contract, title, planning, licences, community status and tax implications are examined.",
      es: "Antes de la reserva o el contrato privado, se examinan título, urbanismo, licencias, comunidad e impuestos.",
    },
  },
  {
    title: {
      en: "Negotiation and contract",
      es: "Negociación y contrato",
    },
    text: {
      en: "Terms are negotiated with legal precision. Deposit structures, conditions and timelines are drafted to protect your position.",
      es: "Los términos se negocian con precisión jurídica. Depósitos, condiciones y plazos se redactan para protegerle.",
    },
  },
  {
    title: {
      en: "Completion",
      es: "Cierre",
    },
    text: {
      en: "Notary completion, funds and post-completion formalities are coordinated as a single, orderly sequence.",
      es: "Firma notarial, fondos y trámites posteriores se coordinan como una secuencia ordenada.",
    },
  },
];

const guides = [
  {
    title: {
      en: "Buying property in Spain: a lawyer’s essential checklist",
      es: "Comprar en España: la checklist esencial del abogado",
    },
    href: "/insights/buying-property-spain-legal-checklist/",
  },
  {
    title: {
      en: "Why a lawyer-led agency changes the transaction",
      es: "Por qué una agencia dirigida por abogados cambia la operación",
    },
    href: "/insights/why-lawyer-led-agency-matters/",
  },
  {
    title: {
      en: "Non-resident buyers: NIE, banking and completion logistics",
      es: "Compradores no residentes: NIE, banca y logística de cierre",
    },
    href: "/insights/non-resident-buyers-nie-banking/",
  },
];

export function BuyContent() {
  const { t, locale } = useLocale();

  return (
    <>
      <PageHero
        eyebrow={t("buy.hero.eyebrow")}
        title={t("buy.hero.title")}
        description={t("buy.hero.desc")}
      >
        <Button href="/properties/" variant="secondary">
          {t("cta.browseCollection")}
        </Button>
      </PageHero>

      <section className="section-y bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow={t("buy.diff.eyebrow")}
                title={t("buy.diff.title")}
              />
            </div>
            <div className="space-y-6 lg:col-span-7">
              <p className="text-pretty text-lg leading-relaxed text-grey-800">
                {t("buy.diff.p1")}
              </p>
              <p className="text-pretty text-base leading-relaxed text-grey-700">
                {t("buy.diff.p2")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-y border-t border-grey-200 bg-grey-50">
        <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
          <SectionHeading
            eyebrow={t("buy.process.eyebrow")}
            title={t("buy.process.title")}
            description={t("buy.process.desc")}
          />
          <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, index) => (
              <li key={step.title.en}>
                <FadeIn delay={index * 0.04}>
                  <div className="h-full border border-grey-200 bg-white p-6 sm:p-8">
                    <p className="text-xs font-bold tracking-[0.16em] text-purple">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="heading-section mt-4 text-xl">
                      {step.title[locale]}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-grey-700">
                      {step.text[locale]}
                    </p>
                  </div>
                </FadeIn>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
          <SectionHeading
            eyebrow={t("buy.guides.eyebrow")}
            title={t("buy.guides.title")}
            description={t("buy.guides.desc")}
          />
          <ul className="mt-10 divide-y divide-grey-200 border-y border-grey-200">
            {guides.map((guide) => (
              <li key={guide.href}>
                <a
                  href={guide.href}
                  className="group flex min-h-16 items-center justify-between gap-6 py-5 transition-colors"
                >
                  <span className="text-base font-medium text-black group-hover:text-purple sm:text-lg">
                    {guide.title[locale]}
                  </span>
                  <span
                    className="shrink-0 text-sm font-semibold text-grey-500 transition-colors group-hover:text-purple"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-y border-t border-grey-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow={t("buy.enquire.eyebrow")}
                title={t("buy.enquire.title")}
                description={t("buy.enquire.desc")}
              />
            </div>
            <div className="border border-grey-200 bg-grey-50 p-6 sm:p-8 lg:col-span-7">
              <ContactForm intent="buy" submitLabel={t("cta.submitEnquiry")} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
