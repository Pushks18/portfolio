interface TechPillProps {
  label: string;
}

export function TechPill({ label }: TechPillProps) {
  return (
    <span className="px-2 py-0.5 bg-cyan-accent/10 border border-cyan-accent/20 rounded text-[10px] text-cyan-accent font-mono">
      {label}
    </span>
  );
}
