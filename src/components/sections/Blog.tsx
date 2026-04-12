"use client";

import Link from "next/link";
import { BlogPost } from "@/lib/types";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { HUDLabel } from "@/components/ui/HUDLabel";
import { ScanlineCard } from "@/components/ui/ScanlineCard";

interface BlogProps {
  posts: Omit<BlogPost, "content">[];
}

function toMissionTimestamp(dateStr: string): string {
  const launch = new Date("2025-01-01");
  const postDate = new Date(dateStr);
  const days = Math.floor((postDate.getTime() - launch.getTime()) / (1000 * 60 * 60 * 24));
  return `T+${days}d`;
}

export function Blog({ posts }: BlogProps) {
  if (posts.length === 0) return null;

  return (
    <SectionWrapper id="blog">
      <HUDLabel text="06 // MISSION LOG" />
      <h2 className="font-heading text-3xl font-bold text-text-light mb-8">Mission Log</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <ScanlineCard className="p-5">
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-[10px] text-amber-primary tracking-[1px]">
                  {toMissionTimestamp(post.date)}
                </span>
                <span className="font-mono text-[10px] text-text-dim">{post.date}</span>
              </div>
              <h3 className="text-base font-semibold text-text-light mb-2">{post.title}</h3>
              <p className="text-xs text-text-dim leading-relaxed mb-3">{post.excerpt}</p>
              <div className="flex flex-wrap gap-1.5">
                {post.tags.map((tag) => (
                  <span key={tag} className="px-2 py-0.5 bg-amber-primary/10 border border-amber-primary/20 rounded text-[10px] text-amber-primary font-mono">
                    {tag}
                  </span>
                ))}
              </div>
            </ScanlineCard>
          </Link>
        ))}
      </div>
    </SectionWrapper>
  );
}
