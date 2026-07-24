import Image from "next/image";
import { cn } from "@/lib/utils";

type PropertyImageProps = {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  sizes?: string;
  aspect?: "video" | "square" | "portrait" | "wide" | "hero";
  fill?: boolean;
};

const aspectClasses = {
  video: "aspect-[4/3]",
  square: "aspect-square",
  portrait: "aspect-[3/4]",
  wide: "aspect-[16/10]",
  hero: "aspect-[16/11] sm:aspect-[16/9] lg:aspect-[21/9]",
} as const;

/**
 * High-quality image treatment with fixed aspect ratios.
 * Greyscale-friendly presentation for architectural photography.
 */
export function PropertyImage({
  src,
  alt,
  priority = false,
  className,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  aspect = "video",
  fill = true,
}: PropertyImageProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-grey-100",
        aspectClasses[aspect],
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill={fill}
        priority={priority}
        sizes={sizes}
        className="object-cover object-center transition-transform duration-700 ease-out will-change-transform"
      />
    </div>
  );
}
