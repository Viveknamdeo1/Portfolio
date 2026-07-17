import { ImpactNarrative } from "@/components/content/impact-narrative";
import { PageHero } from "@/components/content/page-hero";
import { SectionHeading } from "@/components/content/section-heading";
import { Section } from "@/components/layout/section";
import { impactAreas, impactNarratives } from "@/content/home";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Business Impact",
  description: "Business-oriented design leadership focused on product clarity, organizational alignment, and measurable value.",
  path: "/business-impact",
});


export default function BusinessImpactPage() {
  return (
    <>
      <PageHero
        eyebrow="Business Impact"
        title="Connecting design leadership to measurable business value."
        description="The most valuable design work improves product clarity, reduces organizational drag, increases adoption, strengthens trust, and helps teams invest in the right opportunities."
      />
      <Section className="border-t border-border-subtle bg-background-secondary">
        <SectionHeading title="Impact is created through decisions, systems, and alignment." />
        <div className="mt-12 grid gap-px overflow-hidden border border-border-subtle bg-border-subtle md:grid-cols-2">
          {impactAreas.map((item) => (
            <article key={item.title} className="bg-background-secondary p-8 sm:p-10">
              <h2 className="text-2xl font-semibold tracking-[-0.03em] text-foreground-primary">
                {item.title}
              </h2>
              <p className="mt-5 leading-7 text-foreground-secondary">{item.body}</p>
            </article>
          ))}
        </div>
      </Section>
      <Section>
        <SectionHeading
          eyebrow="Narratives"
          title="Examples of business-oriented design leadership"
          description="Instead of presenting isolated screens, these narratives focus on the leadership work that changes outcomes."
        />
        <div className="mt-12">
          <ImpactNarrative items={impactNarratives} />
        </div>
      </Section>
    </>
  );
}
