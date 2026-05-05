interface TechPillProps {
  label: string;
}

export function TechPill({ label }: TechPillProps) {
  return (
    <span className="inline-flex rounded-full border border-border bg-white/60 px-3 py-1 text-xs text-muted">
      {label}
    </span>
  );
}
