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
 * Section title: Inter ExtraBold + optional purple accent mark.
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
            "mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-grey-700",
            align === "center" && "justify-center",
          )}
        >
          {mark ? (
            <span
              className="inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-purple"
              aria-hidden="true"
            />
          ) : null}
          {eyebrow}
        </p>
      ) : mark ? (
        <span
          className={cn(
            "mb-5 block h-1.5 w-1.5 rounded-full bg-purple",
            align === "center" && "mx-auto",
          )}
          aria-hidden="true"
        />
      ) : null}

      <TitleTag className="heading-section text-balance text-[1.875rem] text-black sm:text-4xl lg:text-[2.75rem]">
        {title}
      </TitleTag>

      {description ? (
        <div className="mt-5 text-pretty text-base leading-relaxed text-grey-800 sm:text-lg">
          {description}
        </div>
      ) : null}
    </div>
  );
}
