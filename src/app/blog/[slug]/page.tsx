import { notFound } from "next/navigation";
import Link from "next/link";
import { getBlogPosts, getBlogPost } from "@/lib/blog";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getBlogPosts().map((p) => ({ slug: p.slug }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const posts = getBlogPosts();
  const meta = posts.find((p) => p.slug === slug);
  const raw = getBlogPost(slug);
  if (!meta || !raw) notFound();

  const content = raw.replace(/^---[\s\S]*?---\n/, "").trim();

  return (
    <div className="max-w-3xl mx-auto px-6 py-24">
      <Link href="/#blog" className="font-mono text-xs text-text-muted hover:text-amber-primary transition-colors mb-8 inline-block">
        ← BACK TO MISSION LOG
      </Link>
      <div className="font-mono text-[10px] text-amber-primary tracking-[1px] mb-2">{meta.date}</div>
      <h1 className="font-heading text-4xl font-bold text-text-light mb-4">{meta.title}</h1>
      <div className="flex flex-wrap gap-1.5 mb-8">
        {meta.tags.map((tag) => (
          <span key={tag} className="px-2 py-0.5 bg-amber-primary/10 border border-amber-primary/20 rounded text-[10px] text-amber-primary font-mono">{tag}</span>
        ))}
      </div>
      <article className="prose prose-invert prose-sm max-w-none text-text-muted [&_h1]:font-heading [&_h1]:text-text-light [&_h2]:font-heading [&_h2]:text-text-light [&_a]:text-cyan-accent">
        <div dangerouslySetInnerHTML={{ __html: content.replace(/\n/g, "<br/>") }} />
      </article>
    </div>
  );
}
