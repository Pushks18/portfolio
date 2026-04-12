import { notFound } from "next/navigation";
import Link from "next/link";
import { getProject, getProjects } from "@/lib/data";
import { TechPill } from "@/components/ui/TechPill";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getProjects().map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <div className="max-w-3xl mx-auto px-6 py-24">
      <Link
        href="/#projects"
        className="font-mono text-xs text-text-muted hover:text-amber-primary transition-colors mb-8 inline-block"
      >
        ← BACK TO PAYLOAD
      </Link>
      <div className="flex items-center justify-between mb-2">
        <span className="font-mono text-[10px] text-status-green tracking-[1px]">● {project.status}</span>
        <span className="font-mono text-[10px] text-text-dim">{project.year}</span>
      </div>
      <h1 className="font-heading text-4xl font-bold text-text-light mb-4">{project.title}</h1>
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((t) => (<TechPill key={t} label={t} />))}
      </div>
      <p className="text-text-muted leading-relaxed mb-8">{project.longDescription}</p>
      <div className="flex gap-3">
        {project.github && (
          <a href={project.github} target="_blank" className="px-4 py-2 border border-cyan-accent text-cyan-accent font-mono text-xs tracking-[1px] hover:bg-cyan-accent/10 transition-colors">
            SOURCE CODE →
          </a>
        )}
        {project.live && (
          <a href={project.live} target="_blank" className="px-4 py-2 bg-amber-primary text-space-deep font-mono text-xs tracking-[1px] font-bold hover:bg-amber-primary/90 transition-colors">
            LIVE DEMO →
          </a>
        )}
      </div>
    </div>
  );
}
