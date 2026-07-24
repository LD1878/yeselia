import { ContactForm } from "@/components/forms/ContactForm";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Buy with Yeselia",
  description:
    "Acquire luxury property on the Costa del Sol with lawyer-led representation. Clear process, rigorous diligence, complete legal certainty.",
  path: "/buy/",
});

const steps = [
  {
    title: "Define the brief",
    text: "Location, scale, budget, timeline and lifestyle requirements. We establish what is essential and what is flexible.",
  },
  {
    title: "Curated shortlist",
    text: "You receive only properties that meet the brief. Off-market opportunities are included where appropriate and available.",
  },
  {
    title: "Accompanied viewings",
    text: "Viewings are organised efficiently. We attend, advise and filter in real time so your attention is reserved for serious candidates.",
  },
  {
    title: "Legal diligence",
    text: "Before reservation or private contract, title, planning, licences, community status and tax implications are examined.",
  },
  {
    title: "Negotiation and contract",
    text: "Terms are negotiated with legal precision. Deposit structures, conditions and timelines are drafted to protect your position.",
  },
  {
    title: "Completion",
    text: "Notary completion, funds and post-completion formalities are coordinated as a single, orderly sequence.",
  },
];

const guides = [
  {
    title: "Buying property in Spain: a lawyer’s essential checklist",
    href: "/insights/buying-property-spain-legal-checklist/",
  },
  {
    title: "Why a lawyer-led agency changes the transaction",
    href: "/insights/why-lawyer-led-agency-matters/",
  },
  {
    title: "Non-resident buyers: NIE, banking and completion logistics",
    href: "/insights/non-resident-buyers-nie-banking/",
  },
];

export default function BuyPage() {
  return (
    <>
      <PageHero
        eyebrow="Acquire"
        title="Buy with Yeselia"
        description="Representation for international and domestic buyers who require more than a viewing schedule. Dual-qualified advice from first conversation to notary."
      >
        <Button href="/properties/" variant="secondary">
          Browse the collection
        </Button>
      </PageHero>

      <section className="section-y bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Difference"
                title="Why work with a lawyer-agent"
              />
            </div>
            <div className="space-y-6 lg:col-span-7">
              <p className="text-pretty text-lg leading-relaxed text-grey-700">
                On the Costa del Sol, beautiful presentation is common. Clean
                legal status is not always. When your adviser is also a
                qualified lawyer, risk is identified earlier, documents are
                read with a different eye, and commercial decisions rest on
                solid ground.
              </p>
              <p className="text-pretty text-base leading-relaxed text-grey-600">
                You are not managing parallel relationships with an agent and a
                separate legal team who meet only at crisis points. One practice.
                One standard. One accountable process.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-y border-t border-grey-100 bg-grey-50">
        <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
          <SectionHeading
            eyebrow="Process"
            title="How an acquisition proceeds"
            description="A clear sequence designed for high-net-worth buyers who value time and certainty."
          />
          <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, index) => (
              <li key={step.title}>
                <FadeIn delay={index * 0.04}>
                  <div className="h-full border border-grey-200 bg-white p-6 sm:p-8">
                    <p className="text-xs font-medium tracking-[0.16em] text-purple">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-4 font-serif text-xl text-black">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-grey-600">
                      {step.text}
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
            eyebrow="Guides"
            title="Legal and practical resources"
            description="Cornerstone reading for serious buyers. Written to inform, not to sell."
          />
          <ul className="mt-10 divide-y divide-grey-200 border-y border-grey-200">
            {guides.map((guide) => (
              <li key={guide.href}>
                <a
                  href={guide.href}
                  className="group flex min-h-16 items-center justify-between gap-6 py-5 transition-colors"
                >
                  <span className="text-base text-black group-hover:text-purple sm:text-lg">
                    {guide.title}
                  </span>
                  <span
                    className="shrink-0 text-sm text-grey-400 transition-colors group-hover:text-purple"
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

      <section className="section-y border-t border-grey-100 bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Enquire"
                title="Begin your search"
                description="Share your requirements. We respond with a clear view of what is realistic, available and secure."
              />
            </div>
            <div className="border border-grey-200 bg-grey-50 p-6 sm:p-8 lg:col-span-7">
              <ContactForm intent="buy" submitLabel="Submit enquiry" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
