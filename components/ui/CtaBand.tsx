import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type CtaBandProps = {
  title: string;
  description: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  className?: string;
};

export function CtaBand({
  title,
  description,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  className,
}: CtaBandProps) {
  return (
    <section className={cn("section-y bg-grey-50", className)}>
      <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <span
            className="mx-auto mb-5 block h-1 w-1 rounded-full bg-purple"
            aria-hidden="true"
          />
          <h2 className="text-balance font-serif text-3xl text-black sm:text-4xl">
            {title}
          </h2>
          <p className="mt-5 text-pretty text-base leading-relaxed text-grey-600 sm:text-lg">
            {description}
          </p>
          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <Button href={primaryHref} size="lg">
              {primaryLabel}
            </Button>
            {secondaryHref && secondaryLabel ? (
              <Button href={secondaryHref} variant="secondary" size="lg">
                {secondaryLabel}
              </Button>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
