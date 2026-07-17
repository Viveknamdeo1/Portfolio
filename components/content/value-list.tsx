export function ValueList({ items }: { items: string[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {items.map((item, index) => (
        <div key={item} className="border-t border-border-strong pt-5">
          <span className="mb-4 block text-sm font-semibold text-accent-primary">
            {String(index + 1).padStart(2, "0")}
          </span>
          <p className="text-base leading-7 text-foreground-secondary">{item}</p>
        </div>
      ))}
    </div>
  );
}
