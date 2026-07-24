import Link from "next/link";
import { PropertyImage } from "@/components/ui/PropertyImage";
import type { Property } from "@/lib/types";
import { cn } from "@/lib/utils";

type PropertyCardProps = {
  property: Property;
  className?: string;
  priority?: boolean;
};

export function PropertyCard({
  property,
  className,
  priority = false,
}: PropertyCardProps) {
  return (
    <article className={cn("group", className)}>
      <Link
        href={`/properties/${property.slug}/`}
        className="block focus-visible:outline-offset-4"
      >
        <div className="overflow-hidden">
          <div className="transition-transform duration-700 ease-out group-hover:scale-[1.02]">
            <PropertyImage
              src={property.images[0]}
              alt={property.title}
              aspect="video"
              priority={priority}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
        </div>

        <div className="border border-t-0 border-grey-200 bg-white px-5 py-5 sm:px-6 sm:py-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-grey-500">
                {property.location}
              </p>
              <h3 className="mt-2 font-serif text-xl leading-snug text-black sm:text-[1.375rem]">
                {property.title}
              </h3>
            </div>
            <span
              className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-purple opacity-0 transition-opacity duration-200 group-hover:opacity-100"
              aria-hidden="true"
            />
          </div>

          <dl className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm text-grey-600">
            <div>
              <dt className="sr-only">Type</dt>
              <dd>{property.type}</dd>
            </div>
            <div>
              <dt className="sr-only">Bedrooms</dt>
              <dd>{property.bedrooms} bed</dd>
            </div>
            <div>
              <dt className="sr-only">Built area</dt>
              <dd>{property.builtM2} m²</dd>
            </div>
          </dl>

          <p className="mt-4 text-sm font-medium tracking-wide text-black">
            {property.priceLabel}
          </p>

          {property.status !== "Available" ? (
            <p className="mt-2 text-xs uppercase tracking-[0.12em] text-grey-500">
              {property.status}
            </p>
          ) : null}
        </div>
      </Link>
    </article>
  );
}
