import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string | ReactNode;
  align?: "left" | "center";
  mark?: boolean;
  className?: string;
  titleAs?: "h1" | "h2" | "h3";
};

/**
 * Section title with optional tiny purple accent mark.
 * Purple is used as a precise detail only.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  mark = true,
  className,
  titleAs: TitleTag = "h2",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "mb-4 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-grey-600",
            align === "center" && "justify-center",
          )}
        >
          {mark ? (
            <span
              className="inline-block h-1 w-1 shrink-0 rounded-full bg-purple"
              aria-hidden="true"
            />
          ) : null}
          {eyebrow}
        </p>
      ) : mark ? (
        <span
          className={cn(
            "mb-5 block h-1 w-1 rounded-full bg-purple",
            align === "center" && "mx-auto",
          )}
          aria-hidden="true"
        />
      ) : null}

      <TitleTag className="text-balance text-[1.875rem] leading-[1.15] sm:text-4xl lg:text-[2.75rem]">
        {title}
      </TitleTag>

      {description ? (
        <div className="mt-5 text-pretty text-base leading-relaxed text-grey-600 sm:text-lg">
          {description}
        </div>
      ) : null}
    </div>
  );
}
