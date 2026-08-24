"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useLocale } from "@/components/layout/LocaleProvider";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { Logo } from "@/components/ui/Logo";
import type { DictionaryKey } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const navItems: Array<{ href: string; key: DictionaryKey }> = [
  { href: "/properties/", key: "nav.properties" },
  { href: "/buy/", key: "nav.buy" },
  { href: "/sell/", key: "nav.sell" },
  { href: "/about/", key: "nav.about" },
  { href: "/insights/", key: "nav.insights" },
  { href: "/contact/", key: "nav.contact" },
];

export function Header() {
  const pathname = usePathname();
  const { t } = useLocale();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 border-b transition-colors duration-200",
          open ? "bg-white" : "bg-white/95 backdrop-blur-sm",
          scrolled || open ? "border-grey-200" : "border-transparent",
        )}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 sm:h-[4.5rem] sm:px-7 lg:px-10">
          <Logo size="md" />

          <nav
            className="hidden items-center gap-0.5 lg:flex"
            aria-label={t("nav.primary")}
          >
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "group relative px-3 py-2 text-sm font-medium tracking-wide transition-colors duration-200",
                    active ? "text-black" : "text-grey-700 hover:text-black",
                  )}
                  aria-current={active ? "page" : undefined}
                >
                  {t(item.key)}
                  <span
                    className={cn(
                      "absolute inset-x-3 -bottom-0.5 h-0.5 bg-purple transition-opacity duration-200",
                      active
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-100",
                    )}
                    aria-hidden="true"
                  />
                </Link>
              );
            })}
            <LanguageSwitcher className="ml-3" compact />
            <Link
              href="/contact/"
              className="ml-2 inline-flex min-h-11 items-center border-2 border-purple bg-purple px-5 text-sm font-semibold text-white transition-opacity duration-200 hover:bg-purple hover:text-white hover:opacity-90"
            >
              {t("nav.enquire")}
            </Link>
          </nav>

          <div className="flex items-center gap-2 lg:hidden">
            <LanguageSwitcher compact />
            <button
              type="button"
              className="relative z-[60] flex min-h-12 min-w-12 items-center justify-center"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? t("nav.close") : t("nav.open")}
              onClick={() => setOpen((v) => !v)}
            >
              <span className="sr-only">{open ? t("nav.close") : t("nav.menu")}</span>
              <span className="flex w-6 flex-col gap-1.5" aria-hidden="true">
                <span
                  className={cn(
                    "block h-0.5 w-full bg-black transition-transform duration-200",
                    open && "translate-y-[4px] rotate-45",
                  )}
                />
                <span
                  className={cn(
                    "block h-0.5 w-full bg-black transition-opacity duration-200",
                    open && "opacity-0",
                  )}
                />
                <span
                  className={cn(
                    "block h-0.5 w-full bg-black transition-transform duration-200",
                    open && "-translate-y-[4px] -rotate-45",
                  )}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-nav"
        className={cn(
          "fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto bg-white lg:hidden",
          "transition-opacity duration-200",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
        style={{ backgroundColor: "#FFFFFF" }}
        aria-hidden={!open}
        {...(!open ? { inert: true } : {})}
      >
        <nav
          className="flex min-h-full flex-col bg-white px-5 pt-6 pb-10"
          aria-label={t("nav.mobile")}
          style={{ backgroundColor: "#FFFFFF" }}
        >
          <ul className="flex flex-col">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <li key={item.href} className="border-grey-100 border-b">
                  <Link
                    href={item.href}
                    tabIndex={open ? undefined : -1}
                    className={cn(
                      "flex min-h-14 items-center justify-between text-lg font-semibold tracking-wide",
                      active ? "text-black" : "text-grey-900",
                    )}
                    aria-current={active ? "page" : undefined}
                  >
                    {t(item.key)}
                    {active ? (
                      <span
                        className="bg-purple h-1.5 w-1.5 rounded-full"
                        aria-hidden="true"
                      />
                    ) : null}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="mt-auto grid gap-3 pt-8">
            <Link
              href="/buy/"
              tabIndex={open ? undefined : -1}
              className="border-purple text-purple hover:bg-purple-soft hover:text-purple flex min-h-[3.25rem] items-center justify-center border-2 bg-white text-sm font-semibold transition-colors"
            >
              {t("cta.buy")}
            </Link>
            <Link
              href="/sell/"
              tabIndex={open ? undefined : -1}
              className="border-purple bg-purple hover:bg-purple flex min-h-[3.25rem] items-center justify-center border-2 text-sm font-semibold text-white transition-opacity hover:text-white hover:opacity-90"
            >
              {t("cta.sell")}
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
