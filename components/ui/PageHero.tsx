import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string | ReactNode;
  className?: string;
  children?: ReactNode;
};

export function PageHero({
  eyebrow,
  title,
  description,
  className,
  children,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "border-b border-grey-200 bg-white pb-14 pt-12 sm:pb-16 sm:pt-16 lg:pb-20 lg:pt-20",
        className,
      )}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
        <div className="max-w-3xl">
          {eyebrow ? (
            <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-grey-700">
              <span
                className="inline-block h-1.5 w-1.5 rounded-full bg-purple"
                aria-hidden="true"
              />
              {eyebrow}
            </p>
          ) : (
            <span
              className="mb-5 block h-1.5 w-1.5 rounded-full bg-purple"
              aria-hidden="true"
            />
          )}
          <h1 className="heading-display text-balance text-[2.25rem] sm:text-5xl lg:text-[3.5rem]">
            {title}
          </h1>
          {description ? (
            <div className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-grey-700 sm:text-lg">
              {description}
            </div>
          ) : null}
          {children ? <div className="mt-8">{children}</div> : null}
        </div>
      </div>
    </section>
  );
}
