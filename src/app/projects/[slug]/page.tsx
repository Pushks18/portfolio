import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getProject, getProjects } from "@/lib/data";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getProjects().map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  return (
    <main className="mx-auto max-w-2xl px-6 py-16 md:py-24">
      <Link
        href="/"
        className="text-[15px] text-[#9b9b9b] link-underline hover:text-black"
      >
        ← Back
      </Link>

      <article className="mt-12">
        <h1 className="text-[28px] font-semibold leading-tight tracking-tight text-black">
          {project.title}
        </h1>
        <div className="mt-2 text-[17px] text-[#9b9b9b]">
          {project.year} · {project.tech.join(", ")}
        </div>

        {project.screenshot ? (
          <div className="relative mt-10 aspect-[4/3] w-full overflow-hidden rounded-md bg-[#f4f4f4]">
            <Image
              src={project.screenshot}
              alt={project.title}
              fill
              sizes="(min-width: 768px) 672px, 100vw"
              className={
                ["cold-reach", "infodistill"].includes(project.slug)
                  ? "object-contain p-6"
                  : "object-cover"
              }
              priority
            />
          </div>
        ) : null}

        <div className="mt-10 space-y-5 text-[17px] leading-[1.7] text-black">
          {project.longDescription.split("\n\n").map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-10 flex gap-6 text-[17px] text-[#9b9b9b]">
          {project.live ? (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="link-underline hover:text-black"
            >
              Visit live site
            </a>
          ) : null}
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="link-underline hover:text-black"
            >
              View source
            </a>
          ) : null}
        </div>
      </article>
    </main>
  );
}
