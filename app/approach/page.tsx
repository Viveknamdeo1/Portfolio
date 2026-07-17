import { PageHero } from "@/components/content/page-hero";
import { SectionHeading } from "@/components/content/section-heading";
import { Section } from "@/components/layout/section";
import { approachSteps } from "@/content/pages";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Approach",
  description: "A structured approach to ambiguity, alignment, product framing, and execution.",
  path: "/approach",
});


export default function ApproachPage() {
  return (
    <>
      <PageHero
        eyebrow="Approach"
        title="A structured approach to ambiguity, alignment, and execution."
        description="My process connects discovery, facilitation, product framing, design systems, and delivery rituals so teams can move from uncertainty to shared direction."
      />
      <Section className="border-t border-border-subtle">
        <SectionHeading
          title="From unclear problem to shared product direction"
          description="The approach is intentionally simple: clarify the decision, understand the system, align the stakeholders, and shape the product experience."
        />
        <div className="mt-12 divide-y divide-border-strong border-y border-border-strong">
          {approachSteps.map((step, index) => (
            <div key={step.title} className="grid gap-4 py-8 md:grid-cols-[160px_0.8fr_1.2fr]">
              <span className="text-sm font-semibold text-accent-primary">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h2 className="text-2xl font-semibold tracking-[-0.03em] text-foreground-primary">
                {step.title}
              </h2>
              <p className="leading-7 text-foreground-secondary">{step.body}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
