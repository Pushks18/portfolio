import { LINKS } from "@/lib/portfolio-data";

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-5xl px-5 py-12 text-center md:px-8 md:py-20">
      <section className="mx-auto max-w-3xl">
        <h1 className="text-5xl font-semibold tracking-tight text-foreground md:text-6xl">Contact</h1>
        <p className="mt-6 text-lg leading-8 text-copy">
          If you are hiring, collaborating on research, or building ambitious AI products,
          I would be glad to connect.
        </p>

        <div className="panel mt-8 grid gap-4 p-6">
          <a className="text-link text-base" href={`mailto:${LINKS.email}`}>
            {LINKS.email}
          </a>
          <a className="text-link text-base" href={LINKS.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a className="text-link text-base" href={LINKS.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="text-link text-base" href="/resume" target="_blank" rel="noreferrer">
            Full resume page
          </a>
        </div>
      </section>
    </main>
  );
}
