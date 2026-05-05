import Link from "next/link";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/research", label: "Research" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="border-b border-border bg-surface">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-5 py-5 text-center md:px-8">
        <Link href="/" className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          Pushkaraj Baradkar
        </Link>

        <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-base text-muted">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="transition-colors hover:text-foreground">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
