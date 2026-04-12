"use client";

import { useState, useEffect } from "react";
import { PBLogo } from "@/components/ui/PBLogo";

const SECTIONS = [
  { id: "hero", label: "HOME" },
  { id: "about", label: "BRIEF" },
  { id: "experience", label: "FLIGHT LOG" },
  { id: "projects", label: "PAYLOAD" },
  { id: "research", label: "TRANSMISSIONS" },
  { id: "skills", label: "SYSTEMS" },
  { id: "blog", label: "MISSION LOG" },
  { id: "resume", label: "DOSSIER" },
  { id: "contact", label: "CONTACT" },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? scrollTop / docHeight : 0);

      for (const section of [...SECTIONS].reverse()) {
        const el = document.getElementById(section.id);
        if (el && el.offsetTop - 200 <= scrollTop) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-space-deep/80 backdrop-blur-md border-b border-amber-primary/15">
      <div className="flex items-center justify-between px-6 py-3">
        <button onClick={() => scrollTo("hero")} className="flex items-center gap-3">
          <PBLogo size={32} />
          <span className="font-mono text-[11px] text-amber-primary tracking-[2px]">
            MISSION CONTROL v1.0
          </span>
        </button>
        <div className="hidden md:flex items-center gap-6">
          {SECTIONS.filter((s) => s.id !== "hero").map((section) => (
            <button
              key={section.id}
              onClick={() => scrollTo(section.id)}
              className={`font-mono text-[11px] tracking-wider transition-colors ${
                activeSection === section.id
                  ? "text-amber-primary"
                  : "text-text-muted hover:text-text-light"
              }`}
            >
              {section.label}
            </button>
          ))}
          <span className="font-mono text-[11px] text-status-green">● ONLINE</span>
        </div>
      </div>
      <div className="h-[2px] bg-space-console">
        <div
          className="h-full bg-amber-primary/60 transition-[width] duration-150"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>
    </nav>
  );
}
