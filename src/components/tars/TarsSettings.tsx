"use client";

interface TarsSettingsProps {
  honesty: number;
  humor: number;
  onHonestyChange: (value: number) => void;
  onHumorChange: (value: number) => void;
}

export function TarsSettings({
  honesty,
  humor,
  onHonestyChange,
  onHumorChange,
}: TarsSettingsProps) {
  return (
    <div className="px-4 py-3 bg-space-deep/50 border-b border-amber-primary/8">
      <div className="flex items-center justify-between mb-1.5">
        <span className="font-mono text-[9px] text-text-dim tracking-[1px]">HONESTY</span>
        <span className="font-mono text-[9px] text-amber-primary">{honesty}%</span>
      </div>
      <input
        type="range"
        min={0}
        max={100}
        value={honesty}
        onChange={(e) => onHonestyChange(Number(e.target.value))}
        className="w-full h-1 bg-space-console rounded-full appearance-none cursor-pointer mb-3
          [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3
          [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-amber-primary
          [&::-webkit-slider-thumb]:shadow-[0_0_8px_rgba(245,158,11,0.5)]"
      />
      <div className="flex items-center justify-between mb-1.5">
        <span className="font-mono text-[9px] text-text-dim tracking-[1px]">HUMOR</span>
        <span className="font-mono text-[9px] text-cyan-accent">{humor}%</span>
      </div>
      <input
        type="range"
        min={0}
        max={100}
        value={humor}
        onChange={(e) => onHumorChange(Number(e.target.value))}
        className="w-full h-1 bg-space-console rounded-full appearance-none cursor-pointer
          [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3
          [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-cyan-accent
          [&::-webkit-slider-thumb]:shadow-[0_0_8px_rgba(6,182,212,0.5)]"
      />
    </div>
  );
}
