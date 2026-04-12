import fs from "fs";
import path from "path";
import { ProfileData, Project, ResearchPaper } from "./types";

const CONTENT_DIR = path.join(process.cwd(), "content");
const PROFILE_PATH = path.join(process.cwd(), "profile.json");

export function getProfile(): ProfileData {
  const raw = fs.readFileSync(PROFILE_PATH, "utf-8");
  return JSON.parse(raw);
}

export function getProjects(): Project[] {
  const dir = path.join(CONTENT_DIR, "projects");
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".json"))
    .map((f) => JSON.parse(fs.readFileSync(path.join(dir, f), "utf-8")))
    .sort((a, b) => b.year - a.year);
}

export function getProject(slug: string): Project | null {
  const filePath = path.join(CONTENT_DIR, "projects", `${slug}.json`);
  if (!fs.existsSync(filePath)) return null;
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}

export function getResearchPapers(): ResearchPaper[] {
  const dir = path.join(CONTENT_DIR, "research");
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".json"))
    .map((f) => JSON.parse(fs.readFileSync(path.join(dir, f), "utf-8")))
    .sort((a, b) => b.year - a.year);
}

export function getResearchPaper(slug: string): ResearchPaper | null {
  const filePath = path.join(CONTENT_DIR, "research", `${slug}.json`);
  if (!fs.existsSync(filePath)) return null;
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}
