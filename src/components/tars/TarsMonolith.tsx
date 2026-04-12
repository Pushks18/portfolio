"use client";

import { useState, useEffect } from "react";

const TEASERS = [
  "Need directions, Cooper?",
  "Honesty setting at 90%.",
  "I have a cue light I can use to show you.",
  "Want to see the payload?",
  "It's not possible. No, it's necessary.",
];

interface TarsMonolithProps {
  onClick: () => void;
}

export function TarsMonolith({ onClick }: TarsMonolithProps) {
  const [teaserIndex, setTeaserIndex] = useState(0);
  const [showBubble, setShowBubble] = useState(true);
  const [cycleCount, setCycleCount] = useState(0);

  useEffect(() => {
    if (cycleCount >= 3) {
      setShowBubble(false);
      const timeout = setTimeout(() => {
        setCycleCount(0);
        setShowBubble(true);
      }, 30000);
      return () => clearTimeout(timeout);
    }

    const interval = setInterval(() => {
      setTeaserIndex((prev) => {
        const next = (prev + 1) % TEASERS.length;
        if (next === 0) setCycleCount((c) => c + 1);
        return next;
      });
    }, 8000);
    return () => clearInterval(interval);
  }, [cycleCount]);

  return (
    <div className="fixed bottom-[48px] right-5 z-50 flex items-end gap-2">
      {showBubble && (
        <div
          key={teaserIndex}
          className="bg-space-panel/90 border border-amber-primary/20 rounded-lg rounded-br-none px-3 py-2 backdrop-blur-sm max-w-[180px] animate-[fadeIn_0.3s_ease-out]"
        >
          <p className="font-mono text-[11px] text-text-muted">
            <span className="text-amber-primary">TARS:</span> {TEASERS[teaserIndex]}
          </p>
        </div>
      )}
      <button
        onClick={onClick}
        className="w-12 h-14 bg-gradient-to-b from-space-console to-space-panel border border-amber-primary/30 rounded flex flex-col items-center justify-center cursor-pointer relative
          shadow-[0_0_15px_rgba(245,158,11,0.15)] hover:shadow-[0_0_25px_rgba(245,158,11,0.25)] transition-shadow"
      >
        <div className="w-5 h-[3px] bg-amber-primary rounded-sm shadow-[0_0_8px_rgba(245,158,11,0.6)] mb-1.5" />
        <span className="font-mono text-[7px] text-amber-primary tracking-[2px]">TARS</span>
        <div className="absolute -inset-1 border border-amber-primary/15 rounded-md animate-pulse" />
      </button>
    </div>
  );
}
