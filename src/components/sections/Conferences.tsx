"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { HUDLabel } from "@/components/ui/HUDLabel";

interface ConferencesProps {
  conferences: string[];
  achievements: string[];
}

export function Conferences({ conferences, achievements }: ConferencesProps) {
  return (
    <SectionWrapper id="conferences">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Conferences */}
        <div>
          <HUDLabel text="COMM LINKS // CONFERENCES" />
          <h2 className="font-heading text-2xl font-bold text-text-light mb-6">Conferences</h2>
          <div className="flex flex-col gap-3">
            {conferences.map((conf, i) => (
              <div
                key={i}
                className="p-3 bg-space-panel/40 border border-cyan-accent/10 rounded-lg border-l-[3px] border-l-cyan-accent"
              >
                <p className="text-sm text-text-muted">{conf}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <HUDLabel text="MISSION HONORS // ACHIEVEMENTS" />
          <h2 className="font-heading text-2xl font-bold text-text-light mb-6">Achievements</h2>
          <div className="flex flex-col gap-3">
            {achievements.map((ach, i) => (
              <div
                key={i}
                className="p-3 bg-space-panel/40 border border-amber-primary/10 rounded-lg border-l-[3px] border-l-amber-primary"
              >
                <p className="text-sm text-text-muted flex items-center gap-2">
                  <span className="text-amber-primary">★</span> {ach}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
