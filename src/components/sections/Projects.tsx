"use client";

import Link from "next/link";
import { Project } from "@/lib/types";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { HUDLabel } from "@/components/ui/HUDLabel";
import { ScanlineCard } from "@/components/ui/ScanlineCard";
import { TechPill } from "@/components/ui/TechPill";

interface ProjectsProps {
  projects: Project[];
}

export function Projects({ projects }: ProjectsProps) {
  return (
    <SectionWrapper id="projects">
      <HUDLabel text="03 // PAYLOAD" />
      <h2 className="font-heading text-3xl font-bold text-text-light mb-8">Deployed Missions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <Link key={project.slug} href={`/projects/${project.slug}`}>
            <ScanlineCard>
              <div className="h-36 bg-gradient-to-br from-space-deep to-space-console flex items-center justify-center border-b border-white/5 overflow-hidden">
                {project.screenshot ? (
                  <img src={project.screenshot} alt={project.title} className="w-full h-full object-contain object-center" />
                ) : (
                  <span className="font-mono text-xs text-text-dim">[PROJECT SCREENSHOT]</span>
                )}
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className={`font-mono text-[10px] tracking-[1px] ${
                    project.status === "ACTIVE" || project.status === "DEPLOYED"
                      ? "text-status-green" : "text-text-dim"
                  }`}>
                    ● {project.status}
                  </span>
                  <span className="font-mono text-[10px] text-text-dim">{project.year}</span>
                </div>
                <h3 className="text-base font-semibold text-text-light mb-1">{project.title}</h3>
                <p className="text-xs text-text-dim leading-relaxed mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <TechPill key={t} label={t} />
                  ))}
                </div>
              </div>
            </ScanlineCard>
          </Link>
        ))}
      </div>
    </SectionWrapper>
  );
}
