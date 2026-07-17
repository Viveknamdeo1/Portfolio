import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/content/page-hero";
import { Section } from "@/components/layout/section";
import { insightTopics } from "@/content/pages";

export default function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Thinking on product design leadership, AI, and organizational alignment."
        description="A place for essays and frameworks about decision quality, enterprise product design, facilitation, design systems, and AI-enabled product innovation."
      />
      <Section className="border-t border-border-subtle bg-background-secondary">
        <div className="grid gap-px overflow-hidden border border-border-subtle bg-border-subtle md:grid-cols-2">
          {insightTopics.map((topic) => (
            <article key={topic} className="group bg-background-secondary p-8 sm:p-10">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-accent-primary">Essay</p>
              <h2 className="text-2xl font-semibold tracking-[-0.03em] text-foreground-primary">{topic}</h2>
              <p className="mt-5 flex items-center text-sm font-medium text-accent-primary">
                Coming soon <ArrowRight className="ml-2 size-4 transition group-hover:translate-x-1" />
              </p>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
