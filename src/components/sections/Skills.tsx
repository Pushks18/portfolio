"use client";

import { SkillCategory } from "@/lib/types";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { HUDLabel } from "@/components/ui/HUDLabel";
import { StatusDot } from "@/components/ui/StatusDot";

interface SkillsProps {
  categories: SkillCategory[];
}

export function Skills({ categories }: SkillsProps) {
  return (
    <SectionWrapper id="skills">
      <HUDLabel text="05 // SYSTEMS CHECK" />
      <h2 className="font-heading text-3xl font-bold text-text-light mb-8">Onboard Systems</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((category) => (
          <div key={category.name} className="p-4 bg-space-panel/40 border border-white/5 rounded-lg">
            <div className="font-mono text-[10px] text-amber-primary tracking-[1px] mb-3">
              {category.name.toUpperCase()}
            </div>
            <div className="flex flex-col gap-1.5">
              {category.skills.map((skill) => (
                <div key={skill} className="flex items-center gap-2">
                  <StatusDot status="active" />
                  <span className="text-text-light text-sm">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
