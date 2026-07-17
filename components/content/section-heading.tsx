import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={cn("max-w-3xl", className)}>
      {eyebrow ? (
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-accent-primary">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-4xl font-semibold leading-[1.08] tracking-[-0.045em] text-foreground-primary sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-6 text-lg leading-8 text-foreground-secondary">{description}</p>
      ) : null}
    </div>
  );
}
