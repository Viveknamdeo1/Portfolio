import type { ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const styles = {
  primary: "bg-foreground-primary text-background-primary hover:bg-accent-primary",
  secondary: "border border-border-strong text-foreground-primary hover:border-foreground-primary hover:bg-background-secondary",
  inverse: "bg-background-primary text-foreground-primary hover:bg-background-secondary",
  ghost: "text-foreground-secondary hover:text-foreground-primary",
  text: "px-0 text-accent-primary hover:text-accent-secondary",
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof styles;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex min-h-11 items-center justify-center rounded-full px-5 text-sm font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background-primary",
        styles[variant],
        className,
      )}
    >
      {children}
    </Link>
  );
}
