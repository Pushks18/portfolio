import { notFound } from "next/navigation";
import Link from "next/link";
import {
  allExperienceSlugs,
  getExperience,
  formatRange,
} from "@/lib/experience";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return allExperienceSlugs().map((slug) => ({ slug }));
}

function getBullets(description: string) {
  return description
    .split("\n")
    .map((line) => line.replace(/^-+\s*/, "").trim())
    .filter(Boolean);
}

export default async function ExperiencePage({ params }: Props) {
  const { slug } = await params;
  const job = getExperience(slug);

  if (!job) notFound();

  const bullets = getBullets(job.description);

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
          {job.jobTitle}
        </h1>
        <div className="mt-2 text-[17px] text-[#9b9b9b]">
          {job.company} · {job.location}
        </div>
        <div className="mt-1 text-[17px] text-[#9b9b9b]">
          {formatRange(job.startDate, job.endDate, job.currentlyWorkHere)}
        </div>

        <ul className="mt-10 space-y-4 text-[17px] leading-[1.7] text-black">
          {bullets.map((b, i) => (
            <li key={i} className="flex gap-3">
              <span className="mt-[10px] h-1 w-1 shrink-0 rounded-full bg-black" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </article>
    </main>
  );
}
