import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { footerNav, siteConfig } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-grey-200 bg-white">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-7 lg:px-10 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <Logo size="md" />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-grey-600">
              Lawyer-led luxury real estate on the Costa del Sol. Serious
              properties. Serious buyers. Complete legal certainty
              <span className="text-purple">.</span>
            </p>
            <div className="mt-8 space-y-2 text-sm text-grey-700">
              <p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="transition-colors hover:text-purple"
                >
                  {siteConfig.email}
                </a>
              </p>
              <p>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="transition-colors hover:text-purple"
                >
                  {siteConfig.phoneDisplay}
                </a>
              </p>
              <p className="pt-2 text-grey-600">
                {siteConfig.address.street}
                <br />
                {siteConfig.address.postalCode} {siteConfig.address.locality}
                <br />
                {siteConfig.address.countryName}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-7 lg:justify-items-end">
            <FooterColumn title="Explore" links={footerNav.explore} />
            <FooterColumn title="Company" links={footerNav.company} />
            <FooterColumn title="Legal" links={footerNav.legal} />
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-grey-100 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs tracking-wide text-grey-500">
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-xs tracking-wide text-grey-500">
            Costa del Sol · Spain
            <span className="ml-1 inline-block h-1 w-1 rounded-full bg-purple align-middle" aria-hidden="true" />
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: ReadonlyArray<{ href: string; label: string }>;
}) {
  return (
    <div>
      <p className="text-xs font-medium uppercase tracking-[0.16em] text-grey-500">
        {title}
      </p>
      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={`${title}-${link.label}`}>
            <Link
              href={link.href}
              className="text-sm text-grey-700 transition-colors duration-200 hover:text-purple"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
