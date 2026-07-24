import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  href?: string;
  size?: "sm" | "md" | "lg";
};

const sizeMap = {
  sm: { height: 22, fontSize: 17, width: 118 },
  md: { height: 28, fontSize: 21, width: 146 },
  lg: { height: 36, fontSize: 28, width: 194 },
} as const;

/**
 * Wordmark: “Yeselia & Co.” with a solid purple full stop after Co.
 * SVG for perfect scaling; period colour is exact (#5C2D91).
 */
export function Logo({ className, href = "/", size = "md" }: LogoProps) {
  const { height, fontSize, width } = sizeMap[size];

  const mark = (
    <svg
      role="img"
      aria-label="Yeselia & Co."
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      className={cn("overflow-visible", className)}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Yeselia & Co.</title>
      <text
        x="0"
        y={height * 0.76}
        fill="#0A0A0A"
        style={{
          fontFamily:
            "var(--font-inter), ui-sans-serif, system-ui, -apple-system, sans-serif",
          fontSize,
          fontWeight: 520,
          letterSpacing: "0.02em",
        }}
      >
        Yeselia &amp; Co
        <tspan fill="#5C2D91">.</tspan>
      </text>
    </svg>
  );

  if (!href) return mark;

  return (
    <Link
      href={href}
      className="inline-flex items-center focus-visible:outline-offset-4"
      aria-label="Yeselia & Co. home"
    >
      {mark}
    </Link>
  );
}
