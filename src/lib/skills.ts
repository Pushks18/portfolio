import { SkillCategory } from "./types";

const CATEGORIES: Record<string, string[]> = {
  "AI / ML": [
    "Deep Learning", "Generative AI", "NLP", "LLMs", "Transformers",
    "RAGs", "Data Mining", "Data Science", "PyTorch", "TensorFlow", "LangChain",
  ],
  "Languages": [
    "Python", "Java", "C++", "JavaScript", "TypeScript", "R",
  ],
  "Frameworks": [
    "React.js", "Next.js", "Node.js", "Django", "Flask", "Express.js",
    "FastAPI", "NestJS", "Angular.js", "GraphQL", "Flutter", "Kotlin", "Swift",
    "OAuth", "Microservices",
  ],
  "Databases & Cloud": [
    "MongoDB", "SQL", "MySQL", "PostgreSQL", "Supabase", "Redis",
    "AWS", "GCP", "Azure", "Docker", "Kubernetes", "Git", "CI/CD",
  ],
};

export function categorizeSkills(skills: string[]): SkillCategory[] {
  const categorized: SkillCategory[] = [];
  const assigned = new Set<string>();

  for (const [categoryName, keywords] of Object.entries(CATEGORIES)) {
    const matched = skills.filter(
      (skill) =>
        keywords.some(
          (kw) => skill.toLowerCase() === kw.toLowerCase()
        ) && !assigned.has(skill)
    );
    matched.forEach((s) => assigned.add(s));
    if (matched.length > 0) {
      categorized.push({ name: categoryName, skills: matched });
    }
  }

  const uncategorized = skills.filter((s) => !assigned.has(s));
  if (uncategorized.length > 0) {
    categorized.push({ name: "Other", skills: uncategorized });
  }

  return categorized;
}
