import { notFound } from "next/navigation";
import Link from "next/link";
import { getResearchPaper, getResearchPapers } from "@/lib/data";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getResearchPapers().map((paper) => ({ slug: paper.slug }));
}

export default async function ResearchPage({ params }: Props) {
  const { slug } = await params;
  const paper = getResearchPaper(slug);

  if (!paper) notFound();

  return (
    <main className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-24">
      <Link href="/" className="text-link text-sm">
        ← Back
      </Link>

      <article className="panel mt-8 p-8 md:p-10">
        <div className="text-sm text-muted">
          {paper.venue} · {paper.year}
        </div>
        <h1 className="mt-4 text-4xl font-semibold tracking-[-0.06em] text-foreground md:text-5xl">
          {paper.title}
        </h1>
        <p className="mt-5 text-base leading-8 text-copy">{paper.authors.join(", ")}</p>
        <p className="mt-6 text-base leading-8 text-copy">
          {paper.abstract || paper.description}
        </p>

        {paper.link ? (
          <div className="mt-10">
            <a className="button-primary" href={paper.link} target="_blank" rel="noreferrer">
              View publication
            </a>
          </div>
        ) : null}
      </article>
    </main>
  );
}
