import fs from "fs";
import path from "path";
import { BlogPost } from "./types";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export function getBlogPosts(): Omit<BlogPost, "content">[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => {
      const raw = fs.readFileSync(path.join(BLOG_DIR, f), "utf-8");
      const frontmatterMatch = raw.match(/^---\n([\s\S]*?)\n---/);
      if (!frontmatterMatch) return null;

      const frontmatter: Record<string, string> = {};
      frontmatterMatch[1].split("\n").forEach((line) => {
        const [key, ...rest] = line.split(":");
        if (key && rest.length) {
          let value = rest.join(":").trim();
          value = value.replace(/^["']|["']$/g, "");
          frontmatter[key.trim()] = value;
        }
      });

      return {
        slug: f.replace(".mdx", ""),
        title: frontmatter.title || "",
        date: frontmatter.date || "",
        tags: frontmatter.tags
          ? JSON.parse(frontmatter.tags.replace(/'/g, '"'))
          : [],
        excerpt: frontmatter.excerpt || "",
      };
    })
    .filter(Boolean)
    .sort((a, b) => new Date(b!.date).getTime() - new Date(a!.date).getTime()) as Omit<BlogPost, "content">[];
}

export function getBlogPost(slug: string): string | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  return fs.readFileSync(filePath, "utf-8");
}
