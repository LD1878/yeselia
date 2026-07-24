import { cn } from "@/lib/utils";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type FieldProps = {
  label: string;
  id: string;
  hint?: string;
  required?: boolean;
  className?: string;
  children: ReactNode;
};

export function Field({
  label,
  id,
  hint,
  required,
  className,
  children,
}: FieldProps) {
  return (
    <div className={cn("space-y-2", className)}>
      <label htmlFor={id} className="block text-sm font-medium text-black">
        {label}
        {required ? (
          <span className="text-purple" aria-hidden="true">
            {" "}
            ·
          </span>
        ) : null}
      </label>
      {children}
      {hint ? <p className="text-xs leading-relaxed text-grey-500">{hint}</p> : null}
    </div>
  );
}

const controlClass =
  "w-full min-h-12 rounded-none border border-grey-300 bg-white px-4 text-base text-black placeholder:text-grey-400 transition-colors duration-200 hover:border-grey-400 focus:border-black focus:outline-none focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-purple";

export function Input({
  className,
  ...props
}: ComponentPropsWithoutRef<"input">) {
  return <input className={cn(controlClass, className)} {...props} />;
}

export function Textarea({
  className,
  ...props
}: ComponentPropsWithoutRef<"textarea">) {
  return (
    <textarea
      className={cn(controlClass, "min-h-32 resize-y py-3 leading-relaxed", className)}
      {...props}
    />
  );
}

export function Select({
  className,
  children,
  ...props
}: ComponentPropsWithoutRef<"select">) {
  return (
    <select
      className={cn(controlClass, "appearance-none bg-no-repeat pr-10", className)}
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8' fill='none'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%23525252' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
        backgroundPosition: "right 1rem center",
      }}
      {...props}
    >
      {children}
    </select>
  );
}
