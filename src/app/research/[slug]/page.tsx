import { notFound } from "next/navigation";
import Link from "next/link";
import { getResearchPaper, getResearchPapers } from "@/lib/data";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getResearchPapers().map((p) => ({ slug: p.slug }));
}

export default async function ResearchPage({ params }: Props) {
  const { slug } = await params;
  const paper = getResearchPaper(slug);
  if (!paper) notFound();

  return (
    <div className="max-w-3xl mx-auto px-6 py-24">
      <Link href="/#research" className="font-mono text-xs text-text-muted hover:text-amber-primary transition-colors mb-8 inline-block">
        ← BACK TO TRANSMISSIONS
      </Link>
      <div className="font-mono text-[10px] text-cyan-accent tracking-[1px] mb-2">{paper.venue} // {paper.year}</div>
      <h1 className="font-heading text-4xl font-bold text-text-light mb-4">{paper.title}</h1>
      <p className="text-sm text-text-muted mb-2">{paper.authors.join(", ")}</p>
      <p className="text-text-muted leading-relaxed mb-8">{paper.abstract || paper.description}</p>
      {paper.link && (
        <a href={paper.link} target="_blank" className="px-4 py-2 bg-cyan-accent text-space-deep font-mono text-xs tracking-[1px] font-bold hover:bg-cyan-accent/90 transition-colors">
          VIEW PUBLICATION →
        </a>
      )}
    </div>
  );
}
