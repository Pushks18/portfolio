"use client";

import { JobEntry } from "@/lib/types";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { HUDLabel } from "@/components/ui/HUDLabel";

interface ExperienceProps {
  jobs: JobEntry[];
}

function formatDate(dateStr: string): string {
  const [year, month] = dateStr.split("-");
  const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
  return `${months[parseInt(month) - 1]} ${year}`;
}

export function Experience({ jobs }: ExperienceProps) {
  return (
    <SectionWrapper id="experience">
      <HUDLabel text="02 // FLIGHT LOG" />
      <h2 className="font-heading text-3xl font-bold text-text-light mb-8">Mission History</h2>
      <div className="relative pl-8 border-l-2 border-amber-primary/20">
        {jobs.map((job, i) => (
          <div key={i} className="mb-8 relative last:mb-0">
            <div
              className={`absolute -left-[calc(2rem+5px)] top-1 w-3 h-3 rounded-full ${
                job.currentlyWorkHere
                  ? "bg-amber-primary shadow-[0_0_12px_rgba(245,158,11,0.4)]"
                  : "bg-space-deep border-2 border-text-dim"
              }`}
            />
            <div
              className={`font-mono text-[10px] tracking-[1px] mb-1 ${
                job.currentlyWorkHere ? "text-status-green" : "text-text-dim"
              }`}
            >
              {job.currentlyWorkHere ? "ACTIVE MISSION" : "COMPLETED"} //{" "}
              {formatDate(job.startDate)} — {job.currentlyWorkHere ? "PRESENT" : formatDate(job.endDate!)}
            </div>
            <h3 className="text-lg font-semibold text-text-light mb-1">{job.jobTitle}</h3>
            <p className="text-sm text-cyan-accent mb-2">{job.company}</p>
            <p className="text-sm text-text-dim leading-relaxed">
              {job.description
                .split("\n")
                .filter(Boolean)
                .map((line) => line.replace(/^-\s*/, ""))
                .join(" • ")}
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
