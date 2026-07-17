import { ArrowRight } from "lucide-react";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { AnimatedReveal } from "@/components/ui/animated-reveal";
import { impactAreas, principles, valueAreas } from "@/content/home";

export default function Home() {
  return (
    <>
      <Section className="pb-16 pt-24 sm:pb-24 sm:pt-32">
        <div className="max-w-5xl">
          <AnimatedReveal>
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.28em] text-accent-primary">Product Design Leadership · Strategy · Organizational Alignment</p>
            <h1 className="text-[clamp(3.25rem,8vw,7.25rem)] font-semibold leading-[0.95] tracking-[-0.07em] text-foreground-primary">Turning complex product decisions into aligned, high-impact customer experiences.</h1>
            <p className="mt-8 max-w-3xl text-xl leading-8 text-foreground-secondary sm:text-2xl sm:leading-9">I lead product design through strategy, facilitation, and cross-functional partnership—helping teams clarify direction, reduce ambiguity, and connect customer insight to measurable business outcomes.</p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row"><Button href="/leadership">View leadership approach</Button><Button href="/contact" variant="secondary">Discuss an opportunity</Button></div>
          </AnimatedReveal>
          <p className="mt-12 max-w-3xl border-l border-border-strong pl-5 text-sm leading-6 text-foreground-tertiary">Experienced across enterprise products, design systems, AI-enabled workflows, and cross-functional product organizations.</p>
        </div>
      </Section>

      <Section className="border-y border-border-subtle bg-background-secondary">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <AnimatedReveal><h2 className="text-4xl font-semibold tracking-[-0.04em] text-foreground-primary sm:text-5xl">The work is not just better interfaces. It is better product decisions.</h2></AnimatedReveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {valueAreas.map((area, index) => <AnimatedReveal key={area} delay={index * 0.04}><div className="h-full border-t border-border-strong pt-5 text-base leading-7 text-foreground-secondary"><span className="mb-4 block text-sm font-semibold text-accent-primary">0{index + 1}</span>{area}</div></AnimatedReveal>)}
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-20">
          <h2 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Design leadership for organizations operating at scale.</h2>
          <div className="space-y-7 text-lg leading-8 text-foreground-secondary"><p>I bring structure to ambiguity, create alignment across disciplines, and help teams move from fragmented opinions to shared product direction.</p><p>My work sits at the intersection of product strategy, customer understanding, business priorities, team leadership, and organizational decision-making.</p></div>
        </div>
      </Section>

      <Section className="bg-background-tertiary">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-accent-primary">Operating principles</p>
        <h2 className="max-w-3xl text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Principles that shape how I lead.</h2>
        <div className="mt-14 divide-y divide-border-strong">
          {principles.map((principle, index) => <div key={principle.title} className="grid gap-4 py-7 md:grid-cols-[160px_0.8fr_1.2fr]"><span className="text-sm font-semibold text-accent-primary">{String(index + 1).padStart(2, "0")}</span><h3 className="text-2xl font-semibold tracking-[-0.03em]">{principle.title}</h3><p className="leading-7 text-foreground-secondary">{principle.body}</p></div>)}
        </div>
      </Section>

      <Section>
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end"><h2 className="max-w-2xl text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Impact areas</h2><Button href="/business-impact" variant="text">Explore business impact <ArrowRight className="ml-2 size-4" /></Button></div>
        <div className="grid gap-px overflow-hidden border border-border-subtle bg-border-subtle md:grid-cols-2">
          {impactAreas.map((item) => <article key={item.title} className="bg-background-primary p-8 sm:p-10"><h3 className="text-2xl font-semibold tracking-[-0.03em]">{item.title}</h3><p className="mt-5 leading-7 text-foreground-secondary">{item.body}</p></article>)}
        </div>
      </Section>

      <Section className="bg-foreground-primary text-foreground-inverse">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]"><div><p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-background-primary/70">Recent thinking</p><h2 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Design leadership is decision leadership.</h2></div><div className="space-y-7 text-lg leading-8 text-background-primary/75"><p>Senior design roles are less about producing screens and more about helping organizations make clearer product decisions. The artifact matters, but the alignment that makes it possible matters more.</p><Button href="/insights" variant="secondary">Read insights</Button></div></div>
      </Section>

      <Section>
        <div className="rounded-[2rem] border border-border-subtle bg-background-secondary p-8 shadow-soft sm:p-12 lg:p-16"><div className="grid gap-10 lg:grid-cols-[1fr_0.9fr]"><h2 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Looking for a design leader who can operate beyond the screen?</h2><div className="space-y-7"><p className="text-lg leading-8 text-foreground-secondary">I partner with organizations that need stronger product clarity, better cross-functional alignment, and design leadership connected to business outcomes.</p><Button href="/contact">Start a conversation</Button></div></div></div>
      </Section>
    </>
  );
}
