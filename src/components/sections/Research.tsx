"use client";

import Link from "next/link";
import { ResearchPaper } from "@/lib/types";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { HUDLabel } from "@/components/ui/HUDLabel";

interface ResearchProps {
  papers: ResearchPaper[];
}

export function Research({ papers }: ResearchProps) {
  return (
    <SectionWrapper id="research">
      <HUDLabel text="04 // TRANSMISSIONS" />
      <h2 className="font-heading text-3xl font-bold text-text-light mb-8">Research & Publications</h2>
      <div className="flex flex-col gap-4">
        {papers.map((paper) => (
          <Link
            key={paper.slug}
            href={paper.link || `/research/${paper.slug}`}
            target={paper.link ? "_blank" : undefined}
            className="block"
          >
            <div className="p-5 bg-space-panel/40 border border-cyan-accent/15 rounded-lg border-l-[3px] border-l-cyan-accent hover:border-cyan-accent/30 transition-colors">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="font-mono text-[10px] text-cyan-accent tracking-[1px] mb-1.5">
                    {paper.venue} // PUBLISHED {paper.year}
                  </div>
                  <h3 className="text-base font-semibold text-text-light mb-2">{paper.title}</h3>
                  <p className="text-sm text-text-dim leading-relaxed">{paper.description}</p>
                </div>
                <div className="flex-shrink-0 px-4 py-2 border border-cyan-accent text-cyan-accent font-mono text-[11px] tracking-[1px] hover:bg-cyan-accent/10 transition-colors">
                  READ →
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <p className="font-mono text-xs text-text-dim mt-4">
        SIGNAL STRENGTH: ████████░░ // MORE TRANSMISSIONS INCOMING
      </p>
    </SectionWrapper>
  );
}
