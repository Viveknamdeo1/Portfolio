import { ArrowRight } from "lucide-react";
import { ContactCta } from "@/components/content/contact-cta";
import { ExecutiveStatement } from "@/components/content/executive-statement";
import { ImpactNarrative } from "@/components/content/impact-narrative";
import { SectionHeading } from "@/components/content/section-heading";
import { ValueList } from "@/components/content/value-list";
import { Section } from "@/components/layout/section";
import { AnimatedReveal } from "@/components/ui/animated-reveal";
import { Button } from "@/components/ui/button";
import { impactAreas, impactNarratives, principles, valueAreas } from "@/content/home";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Product Design Leader",
  description: "Executive product design leadership across strategy, facilitation, AI-enabled innovation, and measurable business impact.",
  path: "/",
});


export default function Home() {
  return (
    <>
      <Section className="pb-16 pt-24 sm:pb-24 sm:pt-32">
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
              <Button href="/leadership">View leadership approach</Button>
              <Button href="/contact" variant="secondary">Discuss an opportunity</Button>
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

      <Section className="border-y border-border-subtle bg-background-secondary">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading title="The work is not just better interfaces. It is better product decisions." />
          <ValueList items={valueAreas} />
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <SectionHeading
            eyebrow="Leadership posture"
            title="I create the conditions for teams to make clearer decisions and stronger products."
          />
          <div className="space-y-8">
            <ExecutiveStatement>
              <p>
                Senior design leadership is not about owning every screen. It is about shaping the conversations, systems, and evidence that help organizations choose what matters.
              </p>
            </ExecutiveStatement>
            <p className="text-lg leading-8 text-foreground-secondary">
              My work sits at the intersection of customer understanding, product strategy, delivery constraints, organizational incentives, and executive decision-making.
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-background-tertiary">
        <SectionHeading eyebrow="Operating principles" title="Principles that shape how I lead." />
        <div className="mt-14 divide-y divide-border-strong">
          {principles.map((principle, index) => (
            <div key={principle.title} className="grid gap-4 py-8 md:grid-cols-[160px_0.8fr_1.2fr]">
              <span className="text-sm font-semibold text-accent-primary">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-2xl font-semibold tracking-[-0.03em] text-foreground-primary">
                {principle.title}
              </h3>
              <p className="leading-7 text-foreground-secondary">{principle.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading eyebrow="Business value" title="Impact areas" />
          <Button href="/business-impact" variant="text">
            Explore business impact <ArrowRight className="ml-2 size-4" />
          </Button>
        </div>
        <div className="grid gap-px overflow-hidden border border-border-subtle bg-border-subtle md:grid-cols-2">
          {impactAreas.map((item) => (
            <article key={item.title} className="bg-background-primary p-8 sm:p-10">
              <h3 className="text-2xl font-semibold tracking-[-0.03em] text-foreground-primary">
                {item.title}
              </h3>
              <p className="mt-5 leading-7 text-foreground-secondary">{item.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section className="bg-background-secondary">
        <SectionHeading
          eyebrow="Selected narratives"
          title="How strategic design leadership shows up in the business."
          description="These examples describe the type of leadership work behind strong product outcomes: framing, facilitation, systems, and organizational alignment."
        />
        <div className="mt-12">
          <ImpactNarrative items={impactNarratives} />
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading eyebrow="Recent thinking" title="Design leadership is decision leadership." />
          <div className="space-y-7 text-lg leading-8 text-foreground-secondary">
            <p>
              Senior design roles are less about producing screens and more about helping organizations make clearer product decisions. The artifact matters, but the alignment that makes it possible matters more.
            </p>
            <Button href="/insights" variant="text">
              Read insights <ArrowRight className="ml-2 size-4" />
            </Button>
          </div>
        </div>
      </Section>

      <ContactCta />
    </>
  );
}
