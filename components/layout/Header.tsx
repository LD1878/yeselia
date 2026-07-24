"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/ui/Logo";
import { mainNav } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
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

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href);
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b bg-white/95 backdrop-blur-sm transition-colors duration-200",
        scrolled || open ? "border-grey-200" : "border-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:h-[4.5rem] sm:px-7 lg:px-10">
        <Logo size="md" />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {mainNav.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "group relative px-3 py-2 text-sm tracking-wide transition-colors duration-200",
                  active ? "text-black" : "text-grey-600 hover:text-black",
                )}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
                <span
                  className={cn(
                    "absolute inset-x-3 -bottom-0.5 h-px bg-purple transition-opacity duration-200",
                    active
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-100",
                  )}
                  aria-hidden="true"
                />
              </Link>
            );
          })}
          <Link
            href="/contact/"
            className="ml-3 inline-flex min-h-11 items-center border border-black bg-black px-5 text-sm font-medium text-white transition-colors duration-200 hover:border-purple"
          >
            Enquire
          </Link>
        </nav>

        <button
          type="button"
          className="relative z-50 flex min-h-12 min-w-12 items-center justify-center lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? "Close" : "Menu"}</span>
          <span className="flex w-6 flex-col gap-1.5" aria-hidden="true">
            <span
              className={cn(
                "block h-px w-full bg-black transition-transform duration-200",
                open && "translate-y-[3.5px] rotate-45",
              )}
            />
            <span
              className={cn(
                "block h-px w-full bg-black transition-opacity duration-200",
                open && "opacity-0",
              )}
            />
            <span
              className={cn(
                "block h-px w-full bg-black transition-transform duration-200",
                open && "-translate-y-[3.5px] -rotate-45",
              )}
            />
          </span>
        </button>
      </div>

      <div
        id="mobile-nav"
        className={cn(
          "fixed inset-0 top-16 z-40 bg-white transition-opacity duration-200 lg:hidden",
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
        )}
        aria-hidden={!open}
      >
        <nav
          className="flex h-full flex-col px-5 pb-10 pt-6"
          aria-label="Mobile primary"
        >
          <ul className="flex flex-col">
            {mainNav.map((item) => {
              const active = isActive(item.href);
              return (
                <li key={item.href} className="border-b border-grey-100">
                  <Link
                    href={item.href}
                    className={cn(
                      "flex min-h-14 items-center justify-between text-lg tracking-wide",
                      active ? "text-black" : "text-grey-700",
                    )}
                    aria-current={active ? "page" : undefined}
                  >
                    {item.label}
                    {active ? (
                      <span
                        className="h-1.5 w-1.5 rounded-full bg-purple"
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
              className="flex min-h-[3.25rem] items-center justify-center border border-grey-300 bg-white text-sm font-medium text-black"
            >
              Buy
            </Link>
            <Link
              href="/sell/"
              className="flex min-h-[3.25rem] items-center justify-center border border-black bg-black text-sm font-medium text-white"
            >
              Sell
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
