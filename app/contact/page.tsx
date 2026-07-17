import { Mail } from "lucide-react";
import { PageHero } from "@/components/content/page-hero";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <PageHero
      eyebrow="Contact"
      title="Let’s talk about product clarity, design leadership, and business impact."
      description="Reach out for leadership opportunities, advisory conversations, product/design transformation, or facilitation work with executive and cross-functional teams."
    >
      <Button href="mailto:hello@example.com">
        <Mail className="mr-2 size-4" /> Start a conversation
      </Button>
    </PageHero>
  );
}
