import Link from "next/link";
import { EDUCATION, EXPERIENCE, SKILLS } from "@/lib/portfolio-data";

function formatMonth(value?: string) {
  if (!value) return "";

  const [year, month] = value.split("-");
  const date = new Date(Number(year), Number(month) - 1);

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    year: "numeric",
  }).format(date);
}

function getBullets(description: string) {
  return description
    .split("\n")
    .map((line) => line.replace(/^-+\s*/, "").trim())
    .filter(Boolean);
}

export default function ResumePage() {
  return (
    <main className="mx-auto max-w-4xl px-5 py-16 md:px-8 md:py-24">
      <Link href="/" className="text-link text-sm">
        ← Back to home
      </Link>

      <section className="panel mt-8 p-8 md:p-10">
        <p className="section-kicker">Resume</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-[-0.06em] text-foreground md:text-5xl">
          Pushkaraj Baradkar
        </h1>

        <div className="mt-10 grid gap-10">
          <section>
            <h2 className="text-2xl font-semibold tracking-[-0.04em] text-foreground">
              Education
            </h2>
            <div className="mt-5 grid gap-4">
              {EDUCATION.map((education) => (
                <article key={`${education.school}-${education.endDate}`} className="rounded-2xl border border-border bg-surface p-5">
                  <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                    <div>
                      <h3 className="text-lg font-medium text-foreground">
                        {education.degree} in {education.fieldOfStudy}
                      </h3>
                      <p className="mt-1 text-copy">{education.school}</p>
                    </div>
                    <div className="text-sm text-muted">
                      {formatMonth(education.startDate)} - {formatMonth(education.endDate)}
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-copy">GPA: {education.gpa}</p>
                </article>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold tracking-[-0.04em] text-foreground">
              Experience
            </h2>
            <div className="mt-5 grid gap-4">
              {EXPERIENCE.map((job) => (
                <article key={`${job.company}-${job.startDate}`} className="rounded-2xl border border-border bg-surface p-5">
                  <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                    <div>
                      <h3 className="text-lg font-medium text-foreground">{job.jobTitle}</h3>
                      <p className="mt-1 text-copy">{job.company}</p>
                    </div>
                    <div className="text-sm text-muted md:text-right">
                      <div>{job.location}</div>
                      <div>
                        {formatMonth(job.startDate)} -{" "}
                        {job.currentlyWorkHere ? "Present" : formatMonth(job.endDate)}
                      </div>
                    </div>
                  </div>
                  <ul className="mt-4 grid gap-3 text-base leading-7 text-copy">
                    {getBullets(job.description).map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <span className="mt-3 h-1.5 w-1.5 rounded-full bg-accent" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold tracking-[-0.04em] text-foreground">
              Skills
            </h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {SKILLS.map((skill) => (
                <span key={skill} className="tag">
                  {skill}
                </span>
              ))}
            </div>
          </section>
        </div>

        <div className="mt-10">
          <a href="/resume.pdf" download className="button-primary">
            Download PDF
          </a>
        </div>
      </section>
    </main>
  );
}
