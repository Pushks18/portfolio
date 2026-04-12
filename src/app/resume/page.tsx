import Link from "next/link";
import { EDUCATION, EXPERIENCE, SKILLS, LINKS } from "@/lib/portfolio-data";

export default function ResumePage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-24">
      <Link href="/#resume" className="font-mono text-xs text-text-muted hover:text-amber-primary transition-colors mb-8 inline-block">
        ← BACK TO MISSION CONTROL
      </Link>
      <div className="font-mono text-[10px] text-amber-primary tracking-[1px] mb-2">CLASSIFIED // FULL PERSONNEL FILE</div>
      <h1 className="font-heading text-4xl font-bold text-text-light mb-8">
        Pushkaraj Baradkar — Dossier
      </h1>
      <section className="mb-8">
        <h2 className="font-mono text-xs text-amber-primary tracking-[1px] mb-4 pb-2 border-b border-amber-primary/10">EDUCATION</h2>
        {EDUCATION.map((edu, i) => (
          <div key={i} className="mb-3">
            <div className="text-text-light font-medium">{edu.degree} {edu.fieldOfStudy}</div>
            <div className="text-sm text-text-muted">{edu.school} — GPA {edu.gpa} — {edu.startDate} to {edu.endDate}</div>
          </div>
        ))}
      </section>
      <section className="mb-8">
        <h2 className="font-mono text-xs text-amber-primary tracking-[1px] mb-4 pb-2 border-b border-amber-primary/10">MISSION HISTORY</h2>
        {EXPERIENCE.map((job, i) => (
          <div key={i} className="mb-4">
            <div className="text-text-light font-medium">{job.jobTitle}</div>
            <div className="text-sm text-cyan-accent">{job.company}</div>
            <div className="text-xs text-text-dim mb-1">{job.startDate} — {job.currentlyWorkHere ? "Present" : job.endDate}</div>
            <div className="text-sm text-text-muted leading-relaxed whitespace-pre-line">{job.description}</div>
          </div>
        ))}
      </section>
      <section className="mb-8">
        <h2 className="font-mono text-xs text-amber-primary tracking-[1px] mb-4 pb-2 border-b border-amber-primary/10">SYSTEMS</h2>
        <div className="flex flex-wrap gap-2">
          {SKILLS.map((skill) => (
            <span key={skill} className="px-2 py-1 bg-cyan-accent/10 border border-cyan-accent/20 rounded text-xs text-cyan-accent font-mono">{skill}</span>
          ))}
        </div>
      </section>
      <a href="/resume.pdf" download className="inline-block px-6 py-2.5 bg-amber-primary text-space-deep font-mono text-xs tracking-[1px] font-bold hover:bg-amber-primary/90 transition-colors">
        DOWNLOAD PDF
      </a>
    </div>
  );
}
