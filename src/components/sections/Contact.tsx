"use client";

import { useState, FormEvent } from "react";
import { ProfileData } from "@/lib/types";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { HUDLabel } from "@/components/ui/HUDLabel";

interface ContactProps {
  profile: ProfileData;
}

export function Contact({ profile }: ContactProps) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const formData = new FormData(e.currentTarget);
    const body = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <SectionWrapper id="contact">
      <HUDLabel text="08 // ESTABLISH CONTACT" />
      <h2 className="font-heading text-3xl font-bold text-text-light mb-8">Open Comms Channel</h2>
      <div className="max-w-xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-mono text-[10px] text-amber-primary tracking-[1px] mb-1">CALLSIGN</label>
            <input
              name="name"
              required
              className="w-full bg-space-console/50 border border-white/10 rounded px-4 py-2.5 font-mono text-sm text-text-light placeholder-text-dim focus:border-amber-primary/50 focus:outline-none transition-colors"
              placeholder="> Enter name..."
            />
          </div>
          <div>
            <label className="block font-mono text-[10px] text-amber-primary tracking-[1px] mb-1">FREQUENCY</label>
            <input
              name="email"
              type="email"
              required
              className="w-full bg-space-console/50 border border-white/10 rounded px-4 py-2.5 font-mono text-sm text-text-light placeholder-text-dim focus:border-amber-primary/50 focus:outline-none transition-colors"
              placeholder="> Enter email..."
            />
          </div>
          <div>
            <label className="block font-mono text-[10px] text-amber-primary tracking-[1px] mb-1">TRANSMISSION</label>
            <textarea
              name="message"
              required
              rows={5}
              className="w-full bg-space-console/50 border border-white/10 rounded px-4 py-2.5 font-mono text-sm text-text-light placeholder-text-dim focus:border-amber-primary/50 focus:outline-none transition-colors resize-none"
              placeholder="> Enter message..."
            />
          </div>
          <button
            type="submit"
            disabled={status === "sending"}
            className="px-6 py-2.5 bg-amber-primary text-space-deep font-mono text-xs tracking-[1px] font-bold hover:bg-amber-primary/90 transition-colors disabled:opacity-50"
          >
            {status === "sending" ? "TRANSMITTING..." : status === "sent" ? "TRANSMISSION SENT ✓" : "TRANSMIT"}
          </button>
          {status === "error" && (
            <p className="font-mono text-xs text-red-400">TRANSMISSION FAILED — TRY AGAIN</p>
          )}
        </form>
        <div className="mt-8 pt-6 border-t border-white/5 flex items-center gap-6 font-mono text-xs">
          <a href={profile.websiteData.github} target="_blank" className="text-text-muted hover:text-cyan-accent transition-colors">GITHUB →</a>
          <a href={profile.websiteData.linkedin} target="_blank" className="text-text-muted hover:text-cyan-accent transition-colors">LINKEDIN →</a>
          <a href={`mailto:${profile.contactData.email}`} className="text-text-muted hover:text-cyan-accent transition-colors">EMAIL →</a>
        </div>
      </div>
    </SectionWrapper>
  );
}
