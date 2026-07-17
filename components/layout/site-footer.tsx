import Link from "next/link";
import { navigation } from "@/content/navigation";
import { Container } from "./container";

export function SiteFooter() {
  return (
    <footer className="border-t border-border-subtle py-12">
      <Container className="grid gap-8 md:grid-cols-[1fr_auto]">
        <p className="max-w-xl text-sm leading-6 text-foreground-secondary">
          Product design leadership for organizations that need stronger clarity, cross-functional alignment, and measurable business impact.
        </p>
        <div className="flex flex-wrap gap-x-5 gap-y-3 text-sm text-foreground-tertiary">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-foreground-primary">
              {item.label}
            </Link>
          ))}
        </div>
      </Container>
    </footer>
  );
}
