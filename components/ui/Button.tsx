import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "link";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-sans font-semibold tracking-wide transition-all duration-200 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple disabled:pointer-events-none disabled:opacity-45 active:scale-[0.99]";

const variants: Record<Variant, string> = {
  /* Black fill → white label; purple hover keeps white label */
  primary:
    "bg-black text-white border border-black hover:bg-purple hover:border-purple hover:text-white",
  /* White fill → purple label and border */
  secondary:
    "bg-white text-purple border border-purple hover:border-purple hover:bg-purple-soft hover:text-purple",
  ghost:
    "bg-transparent text-black border border-transparent hover:bg-grey-100",
  link: "bg-transparent text-black border-0 underline-offset-[0.28em] hover:text-purple hover:underline px-0 font-semibold",
};

const sizes: Record<Size, string> = {
  sm: "min-h-11 px-5 text-sm",
  md: "min-h-12 px-7 text-sm sm:text-[0.9375rem]",
  lg: "min-h-[3.25rem] px-8 text-base",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

type ButtonAsButton = CommonProps &
  Omit<ComponentPropsWithoutRef<"button">, keyof CommonProps> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps &
  Omit<ComponentPropsWithoutRef<typeof Link>, keyof CommonProps> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    base,
    variants[variant],
    variant !== "link" && sizes[size],
    variant === "link" && "text-sm sm:text-[0.9375rem]",
    className,
  );

  if ("href" in props && props.href) {
    const { href, ...rest } = props;
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  const buttonProps = props as ButtonAsButton;
  return (
    <button
      className={classes}
      type={buttonProps.type ?? "button"}
      {...buttonProps}
    >
      {children}
    </button>
  );
}
