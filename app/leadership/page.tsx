import { PageHero } from "@/components/content/page-hero";
import { SectionHeading } from "@/components/content/section-heading";
import { Section } from "@/components/layout/section";
import { leadershipFocus } from "@/content/pages";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Leadership",
  description: "Design leadership that creates clarity, confidence, and organizational momentum across complex product organizations.",
  path: "/leadership",
});


export default function LeadershipPage() {
  return (
    <>
      <PageHero
        eyebrow="Leadership"
        title="Design leadership that creates clarity, confidence, and organizational momentum."
        description="I lead through strategy, facilitation, coaching, and executive partnership—building the conditions for teams to make better product decisions and deliver stronger customer outcomes."
      />
      <Section className="border-t border-border-subtle bg-background-secondary">
        <SectionHeading
          title="What leadership looks like in practice"
          description="The role is to connect ambition to execution while helping teams improve the quality of their decisions."
        />
        <div className="mt-12 grid gap-px overflow-hidden border border-border-subtle bg-border-subtle md:grid-cols-2">
          {leadershipFocus.map((item) => (
            <div key={item} className="bg-background-secondary p-8 text-lg leading-8 text-foreground-secondary">
              {item}
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
