import { JobEntry, EducationEntry } from "./types";

export const EDUCATION: EducationEntry[] = [
  {
    school: "University of Southern California, Viterbi School of Engineering",
    degree: "Master's",
    fieldOfStudy: "Computer Science",
    startDate: "2025-01",
    currentlyAttending: false,
    endDate: "2026-12",
    gpa: "3.70 / 4.00",
  },
  {
    school: "University of Mumbai",
    degree: "Bachelor's",
    fieldOfStudy: "Computer Engineering",
    startDate: "2020-07",
    currentlyAttending: false,
    endDate: "2024-05",
    gpa: "9.13 / 10",
  },
];

export const EXPERIENCE: JobEntry[] = [
  {
    jobTitle: "Research Assistant",
    company: "Computational Neuroscience Lab, USC",
    location: "Los Angeles, CA",
    startDate: "2025-11",
    currentlyWorkHere: true,
    description: "- Designing a multi-camera vision pipeline for assistive navigation\n- Benchmarking transformer models (Mask2Former, DETR)\n- Integrating Depth Anything V2 for depth estimation\n- Curating a 12K-frame indoor dataset in COCO format",
  },
  {
    jobTitle: "ML Intern",
    company: "YMT Medical",
    location: "India",
    startDate: "2024-01",
    currentlyWorkHere: false,
    endDate: "2024-08",
    description: "- Built computer vision pipeline for skin lesion detection using YOLOv8n\n- Improved detection stability and reduced inference latency\n- GPU optimization and clinical feedback loops\n- Worked with domain experts to refine model outputs",
  },
  {
    jobTitle: "Software Developer",
    company: "Technoriya ERP Solution",
    location: "India",
    startDate: "2023-10",
    currentlyWorkHere: false,
    endDate: "2023-12",
    description: "- Led backend redesign with Firebase Cloud Functions\n- Optimized REST APIs and Firestore queries\n- Streamlined deployments via Vercel and GitHub Actions\n- Implemented secure authentication protocols",
  },
];

export const SKILLS: string[] = [
  // AI/ML
  "Deep Learning", "Generative AI", "NLP", "LLMs", "Transformers",
  "RAGs", "Data Mining", "Data Science", "PyTorch", "TensorFlow", "LangChain",
  // Languages
  "Python", "Java", "C++", "JavaScript", "TypeScript", "R",
  // Frameworks
  "React.js", "Next.js", "Node.js", "Django", "Flask", "Express.js",
  "FastAPI", "NestJS", "Angular.js", "GraphQL", "Flutter", "Kotlin", "Swift",
  "OAuth", "Microservices",
  // Databases & Cloud
  "MongoDB", "SQL", "MySQL", "PostgreSQL", "Supabase", "Redis",
  "AWS", "GCP", "Azure", "Docker", "Kubernetes", "Git", "CI/CD",
];

export const LINKS = {
  github: "https://github.com/pushks18",
  linkedin: "https://www.linkedin.com/in/pushks18/",
  email: "pushkarajbaradkar1@gmail.com",
};

export const CONFERENCES = [
  "Participated in SWE (Society of Women Engineers) Conference 2025",
  "Presented blockchain paper at ICSCSS 2023",
];

export const ACHIEVEMENTS = [
  "Won Syrus 2023 Hackathon",
  "Shortlisted for SIH 2023 Hackathon",
  "Shortlisted for IndeHub 2025 Hackathon",
  "Shortlisted for CodeShashtra 2023 & 2024",
];
