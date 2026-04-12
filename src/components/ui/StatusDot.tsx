interface StatusDotProps {
  status: "active" | "completed" | "inactive";
  size?: "sm" | "md";
}

export function StatusDot({ status, size = "sm" }: StatusDotProps) {
  const sizeClass = size === "sm" ? "w-2 h-2" : "w-3 h-3";

  const colorClass =
    status === "active"
      ? "bg-status-green shadow-[0_0_8px_rgba(34,197,94,0.5)]"
      : status === "completed"
        ? "bg-amber-primary shadow-[0_0_8px_rgba(245,158,11,0.4)]"
        : "bg-space-console border border-text-dim";

  return <span className={`inline-block rounded-full ${sizeClass} ${colorClass}`} />;
}
