import { Button } from "@/components/ui/button";

export function ContactCta() {
  return (
    <section className="bg-foreground-primary py-20 text-foreground-inverse sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <h2 className="max-w-3xl text-4xl font-semibold leading-[1.08] tracking-[-0.045em] sm:text-5xl">
            Looking for a design leader who can operate beyond the screen?
          </h2>
          <div>
            <p className="mb-8 text-lg leading-8 text-background-primary/75">
              I partner with organizations that need stronger product clarity, better cross-functional alignment, and design leadership connected to business outcomes.
            </p>
            <Button href="/contact" variant="inverse">Start a conversation</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
