import Link from "next/link";
import { cn } from "@/lib/utils";

const styles = {
  primary: "bg-foreground-primary text-background-primary hover:bg-accent-primary",
  secondary: "border border-border-strong text-foreground-primary hover:border-foreground-primary hover:bg-background-secondary",
  text: "text-accent-primary hover:text-accent-secondary px-0",
};

export function Button({ href, children, variant = "primary" }: { href: string; children: React.ReactNode; variant?: keyof typeof styles }) {
  return <Link href={href} className={cn("inline-flex min-h-11 items-center rounded-full px-5 text-sm font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background-primary", styles[variant])}>{children}</Link>;
}
