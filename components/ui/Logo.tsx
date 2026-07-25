import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  href?: string;
  size?: "sm" | "md" | "lg";
};

/** Thick black wordmark + large brand-purple full stop */
const sizeMap = {
  sm: { height: 26, fontSize: 17, width: 142, periodSize: 28 },
  md: { height: 32, fontSize: 21, width: 174, periodSize: 36 },
  lg: { height: 42, fontSize: 28, width: 232, periodSize: 48 },
} as const;

/**
 * Wordmark: thick black “Yeselia & Co” + large dark purple full stop (#4A1C6B).
 * Inter Black (900) for premium weight.
 */
export function Logo({ className, href = "/", size = "md" }: LogoProps) {
  const { height, fontSize, width, periodSize } = sizeMap[size];
  const baseline = height * 0.78;

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
        y={baseline}
        fill="#0A0A0A"
        style={{
          fontFamily:
            "var(--font-inter), ui-sans-serif, system-ui, -apple-system, sans-serif",
          fontSize,
          fontWeight: 900,
          letterSpacing: "-0.025em",
        }}
      >
        Yeselia &amp; Co
        <tspan
          fill="#4A1C6B"
          style={{
            fontSize: periodSize,
            fontWeight: 900,
            letterSpacing: "0",
          }}
          dy={periodSize * 0.06}
        >
          .
        </tspan>
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
