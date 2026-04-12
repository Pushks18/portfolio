"use client";

import { ProfileData } from "@/lib/types";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { HUDLabel } from "@/components/ui/HUDLabel";

interface ResumeProps {
  profile: ProfileData;
}

export function Resume({ profile }: ResumeProps) {
  return (
    <SectionWrapper id="resume">
      <HUDLabel text="07 // DOSSIER" />
      <h2 className="font-heading text-3xl font-bold text-text-light mb-8">Personnel Dossier</h2>
      <div className="max-w-2xl mx-auto">
        <div className="p-6 bg-space-panel/60 border border-amber-primary/15 rounded-lg">
          <div className="font-mono text-[10px] text-amber-primary tracking-[1px] mb-4 pb-3 border-b border-amber-primary/10">
            CLASSIFIED // PERSONNEL FILE // {profile.nameData.preferredFirstName.toUpperCase()}{" "}
            {profile.nameData.preferredLastName.toUpperCase()}
          </div>
          <div className="space-y-3 text-sm text-text-muted mb-6">
            <div className="flex gap-4">
              <span className="font-mono text-[10px] text-text-dim w-24">NAME</span>
              <span className="text-text-light">
                {profile.nameData.preferredFirstName} {profile.nameData.preferredLastName}
              </span>
            </div>
            <div className="flex gap-4">
              <span className="font-mono text-[10px] text-text-dim w-24">LOCATION</span>
              <span className="text-text-light">
                {profile.addressData.city}, {profile.addressData.state}
              </span>
            </div>
            <div className="flex gap-4">
              <span className="font-mono text-[10px] text-text-dim w-24">EDUCATION</span>
              <span className="text-text-light">
                {profile.educationData[0]?.degree} {profile.educationData[0]?.fieldOfStudy},{" "}
                {profile.educationData[0]?.school}
              </span>
            </div>
            <div className="flex gap-4">
              <span className="font-mono text-[10px] text-text-dim w-24">CLEARANCE</span>
              <span className="text-status-green">GRANTED</span>
            </div>
          </div>
          <a
            href="/resume.pdf"
            download
            className="inline-block px-5 py-2.5 bg-amber-primary text-space-deep font-mono text-xs tracking-[1px] font-bold hover:bg-amber-primary/90 transition-colors"
          >
            DOWNLOAD FULL DOSSIER [PDF]
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
}
