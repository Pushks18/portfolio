import { getProjects, getResearchPapers } from "@/lib/data";
import { EXPERIENCE, LINKS } from "@/lib/portfolio-data";
import { experienceSlug } from "@/lib/experience";
import { HomeList, type HomeItem } from "@/components/HomeList";

function formatYear(start: string, end?: string, current?: boolean): string {
  const s = start.slice(0, 4);
  if (current) return `${s} – Present`;
  const e = end ? end.slice(0, 4) : s;
  return s === e ? s : `${s} – ${e}`;
}

export default function Home() {
  const projects = getProjects();
  const research = getResearchPapers();

  const items: HomeItem[] = [
    ...EXPERIENCE.map((job) => ({
      title: `${job.jobTitle.split("–")[0].trim()} · ${job.company}`,
      meta: `${formatYear(job.startDate, job.endDate, job.currentlyWorkHere)} · ${job.location}`,
      href: `/experience/${experienceSlug(job)}`,
    })),
    ...projects.map((p) => ({
      title: p.title,
      meta: `${p.year} · ${p.tech.slice(0, 2).join(", ")}`,
      href: `/projects/${p.slug}`,
      image: p.screenshot || undefined,
      fit: (["cold-reach", "infodistill"].includes(p.slug)
        ? "contain"
        : "cover") as "contain" | "cover",
    })),
    ...research.map((r) => ({
      title: r.title,
      meta: `${r.year} · ${r.venue}`,
      href: r.link,
      external: true,
    })),
  ];

  const HEADER_DELAY = 0;
  const NAV_DELAY = 250;
  const LIST_START = 500;
  const STEP = 90;

  return (
    <main className="mx-auto max-w-2xl px-6 py-16 md:py-24">
      <header className="fade-in" style={{ animationDelay: `${HEADER_DELAY}ms` }}>
        <h1 className="text-[17px] font-semibold leading-tight text-black">
          Pushkaraj Baradkar
        </h1>
        <p className="mt-1 text-[17px] leading-tight text-black">
          AI engineer at <span className="link-underline">Tabhi</span>
        </p>
        <a
          href="mailto:pushkarajbaradkar1@gmail.com"
          className="mt-1 block text-[17px] leading-tight text-[#9b9b9b] link-underline hover:text-black"
        >
          pushkarajbaradkar1@gmail.com
        </a>
      </header>

      <nav
        className="fade-in mt-12 flex items-center gap-6 text-[17px] text-[#9b9b9b]"
        style={{ animationDelay: `${NAV_DELAY}ms` }}
      >
        <a
          href={LINKS.github}
          target="_blank"
          rel="noopener noreferrer"
          className="link-underline hover:text-black"
        >
          GitHub
        </a>
        <a
          href={LINKS.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="link-underline hover:text-black"
        >
          LinkedIn
        </a>
        <a href="/resume.pdf" className="link-underline hover:text-black" download>
          Resume
        </a>
      </nav>

      <HomeList items={items} startDelay={LIST_START} step={STEP} />
    </main>
  );
}
