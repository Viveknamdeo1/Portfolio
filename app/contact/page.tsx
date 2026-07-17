import { Mail } from "lucide-react";
import { PageHero } from "@/components/content/page-hero";
import { site } from "@/content/site";
import { Button } from "@/components/ui/button";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Contact",
  description: "Start a conversation about product clarity, design leadership, facilitation, and business impact.",
  path: "/contact",
});


export default function ContactPage() {
  return (
    <PageHero
      eyebrow="Contact"
      title="Let’s talk about product clarity, design leadership, and business impact."
      description="Reach out for leadership opportunities, advisory conversations, product/design transformation, or facilitation work with executive and cross-functional teams."
    >
      <Button href={`mailto:${site.email}`}>
        <Mail className="mr-2 size-4" /> Start a conversation
      </Button>
    </PageHero>
  );
}
