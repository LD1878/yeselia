"use client";

import Link from "next/link";
import { useLocale } from "@/components/layout/LocaleProvider";
import { Logo } from "@/components/ui/Logo";
import { siteConfig } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  const { t } = useLocale();

  const explore = [
    { href: "/properties/", label: t("footer.collection") },
    { href: "/buy/", label: t("cta.buyWith") },
    { href: "/sell/", label: t("cta.sellWith") },
    { href: "/insights/", label: t("nav.insights") },
  ];
  const company = [
    { href: "/about/", label: t("nav.about") },
    { href: "/contact/", label: t("nav.contact") },
  ];
  const legal = [
    { href: "/contact/", label: t("footer.privacy") },
    { href: "/contact/", label: t("footer.legalNotice") },
  ];

  return (
    <footer className="border-t border-grey-200 bg-white">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-7 lg:px-10 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <Logo size="md" />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-grey-700">
              {t("footer.tagline")}
              <span className="text-purple">.</span>
            </p>
            <div className="mt-8 space-y-2 text-sm text-grey-800">
              <p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="font-medium transition-colors hover:text-purple"
                >
                  {siteConfig.email}
                </a>
              </p>
              <p>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="font-medium transition-colors hover:text-purple"
                >
                  {siteConfig.phoneDisplay}
                </a>
              </p>
              <p className="pt-2 text-grey-700">
                {siteConfig.address.street}
                <br />
                {siteConfig.address.postalCode} {siteConfig.address.locality}
                <br />
                {siteConfig.address.countryName}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-7 lg:justify-items-end">
            <FooterColumn title={t("footer.explore")} links={explore} />
            <FooterColumn title={t("footer.company")} links={company} />
            <FooterColumn title={t("footer.legal")} links={legal} />
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-grey-200 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs font-medium tracking-wide text-grey-600">
            © {year} {siteConfig.name}. {t("footer.rights")}
          </p>
          <p className="text-xs font-medium tracking-wide text-grey-600">
            {t("footer.region")}
            <span
              className="ml-1.5 inline-block h-1.5 w-1.5 rounded-full bg-purple align-middle"
              aria-hidden="true"
            />
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
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-grey-600">
        {title}
      </p>
      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={`${title}-${link.label}`}>
            <Link
              href={link.href}
              className="text-sm font-medium text-grey-800 transition-colors duration-200 hover:text-purple"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
