import { ValuationForm } from "@/components/forms/ValuationForm";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Sell with Yeselia",
  description:
    "Confidential property sales on the Costa del Sol. Pre-qualified buyers, legal preparation and absolute discretion for serious owners.",
  path: "/sell/",
});

const timeline = [
  {
    title: "Confidential valuation",
    text: "A private assessment based on comparable evidence, condition, legal status and current demand. No obligation to proceed.",
  },
  {
    title: "Preparation of the file",
    text: "Title, licences, community certificates and technical documentation assembled before any marketing begins.",
  },
  {
    title: "Strategy and exposure",
    text: "Open marketing, limited circulation or fully confidential introductions. You choose the level of visibility.",
  },
  {
    title: "Qualified viewings only",
    text: "Access is granted to pre-qualified buyers with demonstrated capacity and intent. No time-wasters.",
  },
  {
    title: "Negotiation and completion",
    text: "Offers are evaluated with legal and commercial clarity. Completion is managed through to the notary.",
  },
];

export default function SellPage() {
  return (
    <>
      <PageHero
        eyebrow="Dispose"
        title="Sell with Yeselia"
        description="For owners who value privacy, preparation and a buyer pool that has already been filtered. Your property is not a public spectacle."
      />

      {/* Prominent valuation form */}
      <section className="border-b border-grey-100 bg-grey-50 section-y">
        <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Valuation"
                title="Request a confidential valuation"
                description="Tell us about your property. We treat every enquiry as private. There is no listing, no marketing and no third-party disclosure without your written instruction."
              />
              <ul className="mt-8 space-y-4">
                {[
                  "No obligation to list",
                  "Pre-qualified buyer network",
                  "Lawyer-led preparation of the sale file",
                  "Discretion as standard",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-grey-700"
                  >
                    <span
                      className="mt-2 h-1 w-1 shrink-0 rounded-full bg-purple"
                      aria-hidden="true"
                    />
                    {item}
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
            eyebrow="Process"
            title="A measured sale timeline"
            description="Structure reduces risk. Preparation accelerates serious buyers and protects your negotiating position."
          />
          <ol className="mt-14 space-y-0">
            {timeline.map((item, index) => (
              <li
                key={item.title}
                className="grid gap-4 border-t border-grey-200 py-8 sm:grid-cols-12 sm:gap-8"
              >
                <FadeIn className="contents">
                  <div className="sm:col-span-1">
                    <span className="text-xs font-medium tracking-[0.16em] text-purple">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="sm:col-span-4">
                    <h3 className="font-serif text-xl text-black sm:text-2xl">
                      {item.title}
                    </h3>
                  </div>
                  <div className="sm:col-span-7">
                    <p className="text-sm leading-relaxed text-grey-600 sm:text-base">
                      {item.text}
                    </p>
                  </div>
                </FadeIn>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-y border-t border-grey-100 bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="border border-grey-200 p-8 sm:p-10">
              <span
                className="mb-5 block h-1 w-1 rounded-full bg-purple"
                aria-hidden="true"
              />
              <h2 className="font-serif text-2xl text-black sm:text-3xl">
                Pre-qualified buyers
              </h2>
              <p className="mt-4 text-pretty text-base leading-relaxed text-grey-600">
                Open portals attract volume. Volume attracts noise. We prioritise
                buyers who have demonstrated financial capacity and genuine
                intent. Your time, privacy and security are protected as a
                matter of process, not preference.
              </p>
            </div>
            <div className="border border-grey-200 p-8 sm:p-10">
              <span
                className="mb-5 block h-1 w-1 rounded-full bg-purple"
                aria-hidden="true"
              />
              <h2 className="font-serif text-2xl text-black sm:text-3xl">
                Privacy and discretion
              </h2>
              <p className="mt-4 text-pretty text-base leading-relaxed text-grey-600">
                Some mandates require complete confidentiality. Others benefit
                from selective exposure. We structure marketing to match your
                risk profile and personal circumstances. Nothing is published
                without instruction.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
