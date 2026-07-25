"use client";

import { useLocale } from "@/components/layout/LocaleProvider";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/lib/site";

const founderCopy = {
  p1: {
    en: "Yeselia founded the practice on a clear observation: the most consequential property decisions on the Costa del Sol were often made with incomplete legal context, while legal advice arrived too late to shape the commercial outcome.",
    es: "Yeselia fundó el despacho a partir de una observación clara: las decisiones inmobiliarias más importantes en la Costa del Sol se tomaban a menudo con un contexto jurídico incompleto, mientras el asesoramiento legal llegaba demasiado tarde para moldear el resultado comercial.",
  },
  p2: {
    en: "As both a qualified lawyer and a real estate specialist, she built Yeselia & Co. to close that gap. Clients instruct a single practice that understands market, mandate and statute with equal seriousness. The result is calmer transactions, fewer surprises and documentation that withstands scrutiny.",
    es: "Como abogada cualificada y especialista inmobiliaria, creó Yeselia & Co. para cerrar esa brecha. Los clientes encargan a un único despacho que entiende mercado, mandato y norma con la misma seriedad. El resultado: operaciones más serenas, menos sorpresas y documentación que resiste el escrutinio.",
  },
  p3: {
    en: "The work is selective by design. Not every property, and not every client, is a fit. Those who value precision over volume find a durable partner.",
    es: "El trabajo es selectivo por diseño. No toda propiedad, ni todo cliente, encaja. Quienes valoran la precisión por encima del volumen encuentran un socio duradero.",
  },
};

const philosophy = [
  {
    title: { en: "Certainty first", es: "La certeza primero" },
    text: {
      en: "No recommendation proceeds without a clear view of legal and practical risk. Beauty without title is not a home.",
      es: "Ninguna recomendación avanza sin una visión clara del riesgo jurídico y práctico. La belleza sin título no es un hogar.",
    },
  },
  {
    title: { en: "Discretion always", es: "Discreción siempre" },
    text: {
      en: "Private clients require private handling. Information is shared on a need-to-know basis, never for theatre.",
      es: "Los clientes privados requieren gestión privada. La información se comparte solo a quien debe saberla, nunca por teatro.",
    },
  },
  {
    title: { en: "Measured counsel", es: "Consejo mesurado" },
    text: {
      en: "We advise, we do not pressure. A transaction that should not proceed will be stopped, even when fees are at stake.",
      es: "Asesoramos, no presionamos. Una operación que no debe seguir se detiene, aunque haya honorarios en juego.",
    },
  },
];

const credentials = [
  {
    term: { en: "Legal practice", es: "Práctica jurídica" },
    detail: {
      en: "Qualified lawyer with focus on property transactions, due diligence and private client matters in Spain.",
      es: "Abogada cualificada con enfoque en operaciones inmobiliarias, diligencia debida y clientes privados en España.",
    },
  },
  {
    term: { en: "Real estate", es: "Inmobiliario" },
    detail: {
      en: "Specialist knowledge of the Costa del Sol luxury market: Marbella, Benahavís, Estepona and surrounding areas.",
      es: "Conocimiento especializado del mercado de lujo de la Costa del Sol: Marbella, Benahavís, Estepona y alrededores.",
    },
  },
  {
    term: { en: "Client profile", es: "Perfil de cliente" },
    detail: {
      en: "International high-net-worth buyers, private owners and discreet institutional or family-office mandates.",
      es: "Compradores internacionales de alto patrimonio, propietarios privados y mandatos institucionales o family office discretos.",
    },
  },
  {
    term: { en: "Languages", es: "Idiomas" },
    detail: {
      en: "English and Spanish. Additional language support arranged as required for international clients.",
      es: "Inglés y español. Soporte de idiomas adicionales según se requiera para clientes internacionales.",
    },
  },
  {
    term: { en: "Base", es: "Sede" },
    detail: {
      en: `${siteConfig.address.locality}, ${siteConfig.address.region}, ${siteConfig.address.countryName}`,
      es: `${siteConfig.address.locality}, ${siteConfig.address.region}, ${siteConfig.address.countryName}`,
    },
  },
];

export function AboutContent() {
  const { t, locale } = useLocale();

  return (
    <>
      <PageHero
        eyebrow={t("about.hero.eyebrow")}
        title={t("about.hero.title")}
        description={t("about.hero.desc")}
      />

      <section className="section-y bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <SectionHeading
                eyebrow={t("about.founder.eyebrow")}
                title={t("about.founder.title")}
              />
            </div>
            <div className="space-y-6 lg:col-span-8">
              <p className="text-pretty text-lg leading-relaxed text-grey-800 sm:text-xl">
                {founderCopy.p1[locale]}
              </p>
              <p className="text-pretty text-base leading-relaxed text-grey-700">
                {founderCopy.p2[locale]}
              </p>
              <p className="text-pretty text-base leading-relaxed text-grey-700">
                {founderCopy.p3[locale]}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-y border-t border-grey-200 bg-grey-50">
        <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
          <SectionHeading
            eyebrow={t("about.phil.eyebrow")}
            title={t("about.phil.title")}
            description={t("about.phil.desc")}
          />
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {philosophy.map((item) => (
              <div
                key={item.title.en}
                className="border border-grey-200 bg-white p-8"
              >
                <span
                  className="mb-5 block h-1.5 w-1.5 rounded-full bg-purple"
                  aria-hidden="true"
                />
                <h3 className="heading-section text-xl sm:text-2xl">
                  {item.title[locale]}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-grey-700 sm:text-base">
                  {item.text[locale]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow={t("about.cred.eyebrow")}
                title={t("about.cred.title")}
              />
            </div>
            <div className="lg:col-span-7">
              <dl className="divide-y divide-grey-200 border-y border-grey-200">
                {credentials.map((row) => (
                  <div
                    key={row.term.en}
                    className="grid gap-2 py-6 sm:grid-cols-3 sm:gap-8"
                  >
                    <dt className="text-sm font-semibold text-black">
                      {row.term[locale]}
                    </dt>
                    <dd className="text-sm leading-relaxed text-grey-700 sm:col-span-2">
                      {row.detail[locale]}
                    </dd>
                  </div>
                ))}
              </dl>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Button href="/contact/">{t("cta.contact")}</Button>
                <Button href="/insights/" variant="secondary">
                  {t("cta.readInsights")}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
