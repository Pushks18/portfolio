"use client";

import { useEffect, useState } from "react";

export function TelemetryBar() {
  const [altitude, setAltitude] = useState(408);

  useEffect(() => {
    const handleScroll = () => {
      const progress = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      setAltitude(Math.round(408 + progress * 50000));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-2 border-t border-amber-primary/10 bg-space-deep/70 backdrop-blur-sm font-mono text-[10px] text-text-dim">
      <span>LAT 34.0224° N // LON 118.2851° W</span>
      <span>ALTITUDE: {altitude.toLocaleString()} KM</span>
      <span>SIGNAL: STRONG ████████░░</span>
    </div>
  );
}
