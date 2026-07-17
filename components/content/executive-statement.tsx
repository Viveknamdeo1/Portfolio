export function ExecutiveStatement({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-l border-accent-primary pl-6 text-xl leading-9 text-foreground-primary sm:text-2xl sm:leading-10">
      {children}
    </div>
  );
}
