"use client";

import { ProfileData } from "@/lib/types";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { HUDLabel } from "@/components/ui/HUDLabel";
import { MissionPatch } from "@/components/ui/MissionPatch";

interface AboutProps {
  profile: ProfileData;
}

export function About({ profile }: AboutProps) {
  return (
    <SectionWrapper id="about">
      <div className="flex flex-col md:flex-row gap-10 items-start">
        <div className="flex-shrink-0 text-center">
          <MissionPatch size={176} />
          <div className="mt-3 font-mono text-[10px]">
            <span className="text-status-green">● </span>
            <span className="text-text-muted">STATUS: ACTIVE</span>
            <br />
            <span className="text-cyan-accent">◎ </span>
            <span className="text-text-muted">
              {profile.addressData.city}, {profile.addressData.state}
            </span>
          </div>
        </div>
        <div className="flex-1">
          <HUDLabel text="01 // MISSION BRIEF" />
          <h2 className="font-heading text-3xl font-bold text-text-light mb-4">About Me</h2>
          <p className="text-text-muted leading-relaxed mb-6">
            MS Computer Science graduate student at USC with experience in machine learning,
            full-stack development, and scalable cloud systems. Passionate about building
            AI-driven products and performant web platforms. Currently designing multi-camera
            vision pipelines for assistive navigation and benchmarking transformer models.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {profile.educationData.map((edu, i) => (
              <div key={i} className="p-3 bg-space-console/50 border border-white/5 rounded-md">
                <div className="font-mono text-[10px] text-amber-primary tracking-[1px] mb-1">
                  {i === 0 ? "EDUCATION" : "UNDERGRAD"}
                </div>
                <div className="text-text-light text-sm font-medium">
                  {edu.degree} {edu.fieldOfStudy}
                </div>
                <div className="text-text-dim text-xs">
                  {edu.school} — GPA {edu.gpa}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
