"use client";

import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

interface HUDLabelProps {
  text: string;
  className?: string;
}

export function HUDLabel({ text, className = "" }: HUDLabelProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    if (!isInView) return;
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) clearInterval(interval);
    }, 30);
    return () => clearInterval(interval);
  }, [isInView, text]);

  return (
    <div
      ref={ref}
      className={`font-mono text-[11px] text-amber-primary tracking-[3px] uppercase mb-2 ${className}`}
    >
      {displayed}
      {displayed.length < text.length && (
        <span className="animate-[blink_1s_infinite]">▋</span>
      )}
    </div>
  );
}
