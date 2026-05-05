import { EXPERIENCE } from "./portfolio-data";
import { JobEntry } from "./types";

export function experienceSlug(job: JobEntry): string {
  return job.company
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function getExperience(slug: string): JobEntry | null {
  return EXPERIENCE.find((j) => experienceSlug(j) === slug) ?? null;
}

export function allExperienceSlugs(): string[] {
  return EXPERIENCE.map(experienceSlug);
}

export function formatRange(
  start: string,
  end?: string,
  current?: boolean
): string {
  const fmt = (v: string) => {
    const [y, m] = v.split("-");
    const d = new Date(Number(y), Number(m) - 1);
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      year: "numeric",
    }).format(d);
  };
  return `${fmt(start)} – ${current ? "Present" : end ? fmt(end) : ""}`;
}
