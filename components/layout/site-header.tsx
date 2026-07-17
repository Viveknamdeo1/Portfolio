import Link from "next/link";
import { navigation } from "@/content/navigation";
import { site } from "@/content/site";
import { Container } from "./container";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border-subtle bg-background-primary/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-6">
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight text-foreground-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary"
        >
          {site.name}
        </Link>
        <nav aria-label="Primary navigation" className="hidden items-center gap-7 sm:flex">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-foreground-secondary transition hover:text-foreground-primary">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href={`mailto:${site.email}`}
          className="rounded-full border border-border-strong px-4 py-2 text-sm font-medium text-foreground-primary transition hover:border-foreground-primary"
        >
          Contact
        </Link>
      </Container>
    </header>
  );
}
