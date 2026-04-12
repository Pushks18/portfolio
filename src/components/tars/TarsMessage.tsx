"use client";

import { useEffect, useState } from "react";

interface TarsMessageProps {
  text: string;
  sender: "tars" | "user";
  animate?: boolean;
}

export function TarsMessage({ text, sender, animate = false }: TarsMessageProps) {
  const [displayed, setDisplayed] = useState(animate ? "" : text);
  const [done, setDone] = useState(!animate);

  useEffect(() => {
    if (!animate) return;
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(interval);
        setDone(true);
      }
    }, 30);
    return () => clearInterval(interval);
  }, [text, animate]);

  if (sender === "user") {
    return (
      <div className="flex justify-end">
        <div className="bg-amber-primary/10 border border-amber-primary/15 rounded-lg rounded-br-sm px-3 py-2.5 max-w-[280px]">
          <p className="font-mono text-[11px] text-amber-primary leading-relaxed">{text}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex gap-2 items-start">
      <div className="w-5 h-6 bg-space-console border border-amber-primary/20 rounded-sm flex-shrink-0 flex items-center justify-center">
        <div className="w-2 h-[1.5px] bg-amber-primary rounded-full shadow-[0_0_6px_rgba(245,158,11,0.5)]" />
      </div>
      <div className="bg-space-console/60 border border-white/5 rounded-lg rounded-bl-sm px-3 py-2.5 max-w-[280px]">
        <p className="font-mono text-[11px] text-text-light leading-relaxed">
          {displayed}
          {!done && <span className="animate-[blink_1s_infinite] text-amber-primary">▋</span>}
        </p>
      </div>
    </div>
  );
}
