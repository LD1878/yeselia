import { ContactForm } from "@/components/forms/ContactForm";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Contact",
  description:
    "Contact Yeselia & Co. for private enquiries regarding luxury property on the Costa del Sol. Discrete, professional response.",
  path: "/contact/",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in touch"
        description="Enquiries are handled with discretion. Please share as much context as you wish. We respond typically within one business day."
      />

      <section className="section-y bg-white pt-4 sm:pt-6">
        <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <SectionHeading
                eyebrow="Direct"
                title="How to reach us"
                mark
              />
              <div className="mt-10 space-y-8">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.14em] text-grey-500">
                    Email
                  </p>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="mt-2 block text-base text-black transition-colors hover:text-purple"
                  >
                    {siteConfig.email}
                  </a>
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.14em] text-grey-500">
                    Telephone
                  </p>
                  <a
                    href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                    className="mt-2 block text-base text-black transition-colors hover:text-purple"
                  >
                    {siteConfig.phoneDisplay}
                  </a>
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.14em] text-grey-500">
                    Office
                  </p>
                  <p className="mt-2 text-base leading-relaxed text-grey-700">
                    {siteConfig.address.street}
                    <br />
                    {siteConfig.address.postalCode}{" "}
                    {siteConfig.address.locality}
                    <br />
                    {siteConfig.address.region}, {siteConfig.address.countryName}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.14em] text-grey-500">
                    Hours
                  </p>
                  <p className="mt-2 text-base leading-relaxed text-grey-700">
                    Monday to Friday
                    <br />
                    10:00 - 18:00 CET
                  </p>
                  <p className="mt-2 text-sm text-grey-500">
                    Private appointments outside these hours by arrangement.
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-grey-200 bg-grey-50 p-6 sm:p-8 lg:col-span-8">
              <h2 className="font-serif text-2xl text-black">Send a message</h2>
              <p className="mt-2 text-sm leading-relaxed text-grey-600">
                All fields marked with a purple mark are required.
              </p>
              <div className="mt-8">
                <ContactForm intent="general" submitLabel="Send message" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
