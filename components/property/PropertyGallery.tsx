"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

type PropertyGalleryProps = {
  images: string[];
  title: string;
};

export function PropertyGallery({ images, title }: PropertyGalleryProps) {
  const [active, setActive] = useState(0);
  const current = images[active] ?? images[0];

  return (
    <div>
      <div className="relative aspect-[16/11] overflow-hidden bg-grey-100 sm:aspect-[16/9]">
        <Image
          src={current}
          alt={`${title} - image ${active + 1}`}
          fill
          priority
          sizes="100vw"
          className="img-vibrant object-cover object-center"
        />
      </div>

      {images.length > 1 ? (
        <div
          className="mt-3 flex gap-2 overflow-x-auto no-scrollbar sm:mt-4 sm:gap-3"
          role="tablist"
          aria-label="Property images"
        >
          {images.map((src, index) => (
            <button
              key={src}
              type="button"
              role="tab"
              aria-selected={index === active}
              aria-label={`Show image ${index + 1}`}
              onClick={() => setActive(index)}
              className={cn(
                "relative h-16 w-24 shrink-0 overflow-hidden border-2 transition-colors duration-200 sm:h-20 sm:w-28",
                index === active
                  ? "border-purple"
                  : "border-grey-200 hover:border-grey-400",
              )}
            >
              <Image
                src={src}
                alt=""
                fill
                sizes="112px"
                className="img-vibrant object-cover"
              />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
