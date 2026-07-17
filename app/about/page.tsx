import { ExecutiveStatement } from "@/components/content/executive-statement";
import { PageHero } from "@/components/content/page-hero";
import { SectionHeading } from "@/components/content/section-heading";
import { Section } from "@/components/layout/section";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "About",
  description: "A product design leader focused on clarity, collaboration, and measurable business impact.",
  path: "/about",
});


export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A product design leader focused on clarity, collaboration, and measurable impact."
        description="My work sits at the intersection of customer understanding, business strategy, product execution, and organizational alignment."
      />
      <Section className="border-t border-border-subtle">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeading title="How I show up" />
          <div className="space-y-8">
            <ExecutiveStatement>
              <p>
                I am at my best when the problem is complex, the stakeholders are distributed, and the organization needs a clearer way to move forward.
              </p>
            </ExecutiveStatement>
            <p className="text-lg leading-8 text-foreground-secondary">
              I partner closely with product, engineering, research, data, customer-facing teams, and executives to create shared understanding. The goal is not to make design louder. The goal is to make product decisions better.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
