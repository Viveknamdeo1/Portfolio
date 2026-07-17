import { Section } from "@/components/layout/section";
import { AnimatedReveal } from "@/components/ui/animated-reveal";
import { Button } from "@/components/ui/button";
import { site } from "@/content/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Product Design Leader",
  description:
    "Executive product design leadership across strategy, facilitation, AI-enabled innovation, and measurable business impact.",
  path: "/",
});

export default function Home() {
  return (
    <Section id="positioning" className="min-h-[calc(100svh-4rem)] pb-20 pt-24 sm:pb-28 sm:pt-32">
      <div className="max-w-6xl">
        <AnimatedReveal>
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.28em] text-accent-primary">
            Product Design Leadership · Strategy · Organizational Alignment
          </p>
          <h1 className="text-[clamp(3.25rem,8vw,7.4rem)] font-semibold leading-[0.94] tracking-[-0.075em] text-foreground-primary">
            Design leadership for complex product decisions.
          </h1>
          <p className="mt-8 max-w-3xl text-xl leading-8 text-foreground-secondary sm:text-2xl sm:leading-9">
            I help organizations clarify direction, align cross-functional leaders, and turn customer insight into product experiences that create measurable business value.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button href={`mailto:${site.email}`}>Start a conversation</Button>
            <Button href={`mailto:${site.email}`} variant="secondary">Request leadership overview</Button>
          </div>
        </AnimatedReveal>
      </div>
      <div className="mt-16 grid gap-px overflow-hidden border border-border-subtle bg-border-subtle md:grid-cols-3">
        {[
          "Enterprise product strategy",
          "Stakeholder facilitation",
          "AI-enabled product innovation",
        ].map((item) => (
          <div key={item} className="bg-background-primary p-6 text-sm font-medium text-foreground-secondary">
            {item}
          </div>
        ))}
      </div>
    </Section>
  );
}
