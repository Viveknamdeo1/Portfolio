export type ImpactNarrativeItem = {
  title: string;
  context: string;
  intervention: string;
  outcome: string;
};

export function ImpactNarrative({ items }: { items: ImpactNarrativeItem[] }) {
  return (
    <div className="divide-y divide-border-strong border-y border-border-strong">
      {items.map((item) => (
        <article key={item.title} className="grid gap-6 py-10 lg:grid-cols-[0.75fr_1.25fr]">
          <h3 className="text-2xl font-semibold tracking-[-0.03em] text-foreground-primary">
            {item.title}
          </h3>
          <div className="grid gap-6 text-base leading-7 text-foreground-secondary md:grid-cols-3">
            <p><strong className="block text-foreground-primary">Context</strong>{item.context}</p>
            <p><strong className="block text-foreground-primary">Leadership move</strong>{item.intervention}</p>
            <p><strong className="block text-foreground-primary">Business signal</strong>{item.outcome}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
