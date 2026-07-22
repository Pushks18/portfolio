import { JobEntry, EducationEntry } from "./types";

export const EDUCATION: EducationEntry[] = [
  {
    school: "University of Southern California, Viterbi School of Engineering",
    degree: "Master's",
    fieldOfStudy: "Computer Science",
    startDate: "2025-01",
    currentlyAttending: false,
    endDate: "2026-12",
    gpa: "3.73 / 4.00",
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
    jobTitle: "AI Engineer Intern",
    company: "Tabhi",
    location: "Austin, TX",
    startDate: "2026-05",
    currentlyWorkHere: true,
    description: "- Architected an end-to-end personalized discovery feed (retrieve → rank → re-rank) for a 188K-item catalog using hybrid Elasticsearch BM25 and vector retrieval with slot-based re-ranking\n- Designed a recency-decayed user preference model to personalize retrieval and support future Two-Tower and SASRec ranking\n- Reduced cold-feed latency from 8s to <500 ms via three-tier caching, cache pre-warming, optimized indexing, and geospatial retrieval\n- Built recommendation analytics using RudderStack to capture user behavior and optimize personalization through engagement metrics\n- Resolved ES-MongoDB data consistency issues and hardened location-aware retrieval, improving feed and recommendation reliability\n- Engineered the recommendation architecture to support future Two-Tower and SASRec models",
  },
  {
    jobTitle: "Software Engineer Intern – Real-Time AI Systems",
    company: "USC",
    location: "Los Angeles, CA",
    startDate: "2025-11",
    currentlyWorkHere: false,
    endDate: "2026-05",
    description: "- Built a real-time SLAM pipeline combining monocular VO and depth estimation, achieving ~20–25 FPS on noisy indoor data\n- Implemented RANSAC-based feature matching (2500 matches, 2000 inliers), leveraging IMU to improve motion consistency under noise\n- Resolved scale ambiguity using sparse depth and fused VO with GPS in GTSAM, reducing trajectory error from ~95 m to ~1.2 m ATE\n- Debugged sensor noise, calibration drift, and VO failures, improving tracking stability and reducing dropouts by ~30%",
  },
  {
    jobTitle: "Software Engineer Intern – Backend & APIs",
    company: "Technoriya ERP Solution",
    location: "India",
    startDate: "2023-10",
    currentlyWorkHere: false,
    endDate: "2023-12",
    description: "- Developed Python and Node.js backend services and APIs supporting scalable data pipelines and cloud-based ML workflows\n- Implemented secure authentication and access protocols via Firebase Auth and Firestore rules to ensure data integrity\n- Optimized RESTful APIs and Firestore queries to achieve 450 ms response times under 1,000 concurrent requests for ML integration\n- Streamlined deployment workflows using Vercel and GitHub Actions to improve delivery consistency and reliability",
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
  "Southern California Blockchain Conference (SCBC) 2026",
  "Participated in SWE (Society of Women Engineers) Conference 2025",
  "Presented blockchain paper at ICSCSS 2023",
];

export const ACHIEVEMENTS = [
  "Built AgentPay at Southern California Blockchain Hackathon (SCBC) 2026",
  "Won Syrus 2023 Hackathon",
  "Shortlisted for SIH 2023 Hackathon",
  "Shortlisted for IndeHub 2025 Hackathon",
  "Shortlisted for CodeShashtra 2023 & 2024",
];
