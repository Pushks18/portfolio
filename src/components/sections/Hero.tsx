"use client";

import { ProfileData } from "@/lib/types";

interface HeroProps {
  profile: ProfileData;
}

export function Hero({ profile }: HeroProps) {
  const currentJob = profile.jobData.find((j) => j.currentlyWorkHere);

  return (
    <section id="hero" className="relative min-h-screen flex items-center px-6 md:px-12 lg:px-24">
      <div className="max-w-2xl relative z-10">
        <p className="font-mono text-[11px] text-amber-primary tracking-[3px] uppercase mb-4">
          MISSION DESIGNATION
        </p>
        <h1 className="font-heading text-5xl md:text-6xl font-extrabold text-text-light mb-2 leading-tight">
          {profile.nameData.preferredFirstName} {profile.nameData.preferredLastName}
        </h1>
        <p className="font-body text-xl text-text-muted mb-5">
          Software Engineer & AI Researcher
        </p>
        <p className="font-mono text-xs text-cyan-accent mb-1">
          {profile.educationData[0]?.school} // {profile.educationData[0]?.degree}{" "}
          {profile.educationData[0]?.fieldOfStudy} // GPA {profile.educationData[0]?.gpa}
        </p>
        {currentJob && (
          <p className="font-mono text-xs text-text-dim mb-8">
            CURRENT MISSION: {currentJob.jobTitle}
          </p>
        )}
        <div className="flex gap-3">
          <a
            href="#projects"
            className="px-5 py-2.5 border border-amber-primary text-amber-primary font-mono text-xs tracking-[1px] hover:bg-amber-primary/10 transition-colors"
          >
            VIEW MISSIONS
          </a>
          <a
            href="#contact"
            className="px-5 py-2.5 bg-amber-primary text-space-deep font-mono text-xs tracking-[1px] font-bold hover:bg-amber-primary/90 transition-colors"
          >
            ESTABLISH CONTACT
          </a>
        </div>
      </div>
    </section>
  );
}
