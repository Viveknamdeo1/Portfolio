import type { ReactNode } from "react";
import { Container } from "@/components/layout/container";
import { cn } from "@/lib/utils";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
  className,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("py-20 sm:py-28 lg:py-32", className)}>
      <Container>
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-accent-primary">
          {eyebrow}
        </p>
        <h1 className="max-w-5xl text-5xl font-semibold leading-[1.02] tracking-[-0.06em] text-foreground-primary sm:text-6xl lg:text-7xl">
          {title}
        </h1>
        <p className="mt-8 max-w-3xl text-xl leading-8 text-foreground-secondary sm:text-2xl sm:leading-9">
          {description}
        </p>
        {children ? <div className="mt-10">{children}</div> : null}
      </Container>
    </section>
  );
}
