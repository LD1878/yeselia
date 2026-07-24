import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import { JsonLd } from "@/components/layout/JsonLd";
import { personSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "About",
  description:
    "Yeselia & Co. is a lawyer-led luxury real estate practice on the Costa del Sol. Dual-qualified representation for serious buyers and owners.",
  path: "/about/",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd data={personSchema()} />

      <PageHero
        eyebrow="Practice"
        title="About Yeselia & Co."
        description="A dual-qualified practice where legal rigour and property expertise are never separated."
      />

      <section className="section-y bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <SectionHeading eyebrow="Founder" title="Dual qualification" />
            </div>
            <div className="space-y-6 lg:col-span-8">
              <p className="text-pretty text-lg leading-relaxed text-grey-700 sm:text-xl">
                Yeselia founded the practice on a clear observation: the most
                consequential property decisions on the Costa del Sol were often
                made with incomplete legal context, while legal advice arrived
                too late to shape the commercial outcome.
              </p>
              <p className="text-pretty text-base leading-relaxed text-grey-600">
                As both a qualified lawyer and a real estate specialist, she
                built Yeselia & Co. to close that gap. Clients instruct a single
                practice that understands market, mandate and statute with equal
                seriousness. The result is calmer transactions, fewer surprises
                and documentation that withstands scrutiny.
              </p>
              <p className="text-pretty text-base leading-relaxed text-grey-600">
                The work is selective by design. Not every property, and not
                every client, is a fit. Those who value precision over volume
                find a durable partner.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-y border-t border-grey-100 bg-grey-50">
        <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
          <SectionHeading
            eyebrow="Philosophy"
            title="How we work"
            description="Principles that govern every mandate."
          />
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Certainty first",
                text: "No recommendation proceeds without a clear view of legal and practical risk. Beauty without title is not a home.",
              },
              {
                title: "Discretion always",
                text: "Private clients require private handling. Information is shared on a need-to-know basis, never for theatre.",
              },
              {
                title: "Measured counsel",
                text: "We advise, we do not pressure. A transaction that should not proceed will be stopped, even when fees are at stake.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="border border-grey-200 bg-white p-8"
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

      <section className="section-y bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Credentials"
                title="Professional foundation"
              />
            </div>
            <div className="lg:col-span-7">
              <dl className="divide-y divide-grey-200 border-y border-grey-200">
                {[
                  {
                    term: "Legal practice",
                    detail:
                      "Qualified lawyer with focus on property transactions, due diligence and private client matters in Spain.",
                  },
                  {
                    term: "Real estate",
                    detail:
                      "Specialist knowledge of the Costa del Sol luxury market: Marbella, Benahavís, Estepona and surrounding areas.",
                  },
                  {
                    term: "Client profile",
                    detail:
                      "International high-net-worth buyers, private owners and discreet institutional or family-office mandates.",
                  },
                  {
                    term: "Languages",
                    detail:
                      "English and Spanish. Additional language support arranged as required for international clients.",
                  },
                  {
                    term: "Base",
                    detail: `${siteConfig.address.locality}, ${siteConfig.address.region}, ${siteConfig.address.countryName}`,
                  },
                ].map((row) => (
                  <div
                    key={row.term}
                    className="grid gap-2 py-6 sm:grid-cols-3 sm:gap-8"
                  >
                    <dt className="text-sm font-medium text-black">
                      {row.term}
                    </dt>
                    <dd className="text-sm leading-relaxed text-grey-600 sm:col-span-2">
                      {row.detail}
                    </dd>
                  </div>
                ))}
              </dl>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Button href="/contact/">Get in touch</Button>
                <Button href="/insights/" variant="secondary">
                  Read insights
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
