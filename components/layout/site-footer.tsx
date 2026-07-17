import Link from "next/link";
import { navigation } from "@/content/navigation";
import { site } from "@/content/site";
import { Container } from "./container";

export function SiteFooter() {
  return (
    <footer className="border-t border-border-subtle py-12">
      <Container className="grid gap-10 lg:grid-cols-[1fr_auto]">
        <div>
          <Link href="/" className="text-sm font-semibold text-foreground-primary">
            {site.name}
          </Link>
          <p className="mt-4 max-w-xl text-sm leading-6 text-foreground-secondary">
            Product design leadership for organizations that need stronger clarity, cross-functional alignment, and measurable business impact.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-[auto_auto] sm:gap-12">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-foreground-tertiary">Navigate</p>
            <div className="grid gap-2 text-sm text-foreground-tertiary">
              {navigation.map((item) => (
                <Link key={item.href} href={item.href} className="hover:text-foreground-primary">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-foreground-tertiary">Connect</p>
            <Link href={`mailto:${site.email}`} className="text-sm text-foreground-tertiary hover:text-foreground-primary">
              {site.email}
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
