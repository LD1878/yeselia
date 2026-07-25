"use client";

import { ContactForm } from "@/components/forms/ContactForm";
import { useLocale } from "@/components/layout/LocaleProvider";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/lib/site";

export function ContactContent() {
  const { t } = useLocale();

  return (
    <>
      <PageHero
        eyebrow={t("contact.hero.eyebrow")}
        title={t("contact.hero.title")}
        description={t("contact.hero.desc")}
      />

      <section className="section-y bg-white pt-4 sm:pt-6">
        <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <SectionHeading
                eyebrow={t("contact.direct.eyebrow")}
                title={t("contact.direct.title")}
                mark
              />
              <div className="mt-10 space-y-8">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-grey-600">
                    {t("contact.email")}
                  </p>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="mt-2 block text-base font-medium text-black transition-colors hover:text-purple"
                  >
                    {siteConfig.email}
                  </a>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-grey-600">
                    {t("contact.telephone")}
                  </p>
                  <a
                    href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                    className="mt-2 block text-base font-medium text-black transition-colors hover:text-purple"
                  >
                    {siteConfig.phoneDisplay}
                  </a>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-grey-600">
                    {t("contact.office")}
                  </p>
                  <p className="mt-2 text-base leading-relaxed text-grey-800">
                    {siteConfig.address.street}
                    <br />
                    {siteConfig.address.postalCode}{" "}
                    {siteConfig.address.locality}
                    <br />
                    {siteConfig.address.region}, {siteConfig.address.countryName}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-grey-600">
                    {t("contact.hours")}
                  </p>
                  <p className="mt-2 text-base leading-relaxed text-grey-800">
                    {t("contact.hours.days")}
                    <br />
                    {t("contact.hours.time")}
                  </p>
                  <p className="mt-2 text-sm text-grey-600">
                    {t("contact.hours.note")}
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-grey-200 bg-grey-50 p-6 sm:p-8 lg:col-span-8">
              <h2 className="heading-section text-2xl">
                {t("contact.form.title")}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-grey-700">
                {t("contact.form.required")}
              </p>
              <div className="mt-8">
                <ContactForm intent="general" submitLabel={t("cta.sendMessage")} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
