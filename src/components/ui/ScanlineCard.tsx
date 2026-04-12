"use client";

import { ReactNode } from "react";

interface ScanlineCardProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

export function ScanlineCard({ children, onClick, className = "" }: ScanlineCardProps) {
  return (
    <div
      onClick={onClick}
      className={`
        relative bg-space-panel border border-amber-primary/10 rounded-lg overflow-hidden
        transition-all duration-300 cursor-pointer group
        hover:border-amber-primary/40 hover:shadow-[0_0_20px_rgba(245,158,11,0.1)]
        ${className}
      `}
    >
      {children}
      <div className="absolute inset-0 scanline-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  );
}
