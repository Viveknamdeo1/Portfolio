"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navigation } from "@/content/navigation";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";
import { Container } from "./container";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-border-subtle bg-background-primary/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-6">
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight text-foreground-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary"
        >
          {site.name}
        </Link>
        <nav aria-label="Primary navigation" className="hidden items-center gap-7 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm transition hover:text-foreground-primary",
                pathname === item.href ? "text-foreground-primary" : "text-foreground-secondary",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden rounded-full border border-border-strong px-4 py-2 text-sm font-medium text-foreground-primary transition hover:border-foreground-primary sm:inline-flex"
          >
            Contact
          </Link>
          <button
            type="button"
            aria-controls="mobile-navigation"
            aria-expanded={open}
            aria-label="Toggle navigation"
            className="inline-flex size-10 items-center justify-center rounded-full border border-border-strong text-foreground-primary md:hidden"
            onClick={() => setOpen((current) => !current)}
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </Container>
      {open ? (
        <div id="mobile-navigation" className="border-t border-border-subtle bg-background-primary md:hidden">
          <Container className="py-4">
            <nav aria-label="Mobile navigation" className="grid gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-2xl px-4 py-3 text-base transition hover:bg-background-secondary",
                    pathname === item.href ? "text-foreground-primary" : "text-foreground-secondary",
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="mt-2 rounded-2xl bg-foreground-primary px-4 py-3 text-base font-medium text-background-primary"
              >
                Contact
              </Link>
            </nav>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
