import Link from "next/link";
import { site } from "@/content/site";
import { Container } from "./container";

export function SiteFooter() {
  return (
    <footer className="border-t border-border-subtle py-12">
      <Container className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <Link href="/" className="text-sm font-semibold text-foreground-primary">
            {site.name}
          </Link>
          <p className="mt-4 max-w-xl text-sm leading-6 text-foreground-secondary">
            Product design leadership for organizations that need stronger clarity, cross-functional alignment, and measurable business impact.
          </p>
        </div>
        <Link href={`mailto:${site.email}`} className="text-sm text-foreground-tertiary hover:text-foreground-primary">
          {site.email}
        </Link>
      </Container>
    </footer>
  );
}
