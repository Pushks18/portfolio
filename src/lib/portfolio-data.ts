import { JobEntry, EducationEntry } from "./types";

export const EDUCATION: EducationEntry[] = [
  {
    school: "University of Southern California, Viterbi School of Engineering",
    degree: "Master's",
    fieldOfStudy: "Computer Science",
    startDate: "2025-01",
    currentlyAttending: false,
    endDate: "2026-12",
    gpa: "3.6 / 4.00",
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
    jobTitle: "Software Engineer Intern – Real-Time AI Systems",
    company: "USC",
    location: "Los Angeles, CA",
    startDate: "2025-11",
    currentlyWorkHere: true,
    description: "- Built a real-time SLAM pipeline combining monocular VO and depth estimation, achieving ~20–25 FPS on noisy indoor data\n- Implemented keyframe selection and pose graph optimization, reducing drift to <0.8 m ATE over ~100 m trajectories\n- Integrated depth-based reconstruction to improve spatial consistency and reduce scale drift across long sequences\n- Debugged sensor noise, calibration drift, and VO failures, improving tracking stability and reducing dropouts by ~30%\n- Collected and validated multi-modal datasets, ensuring temporal alignment and robustness for downstream pipelines",
  },
  {
    jobTitle: "Software Engineer Intern – AI & Computer Vision",
    company: "YMT Medical",
    location: "India",
    startDate: "2024-01",
    currentlyWorkHere: false,
    endDate: "2024-08",
    description: "- Engineered computer vision pipelines for image quality enhancement and denoising, improving robustness of AI-driven diagnostics\n- Trained and fine-tuned YOLOv8n on 2K dermatology images, supporting model validation and performance testing\n- Enhanced GPU inference and integrated clinical feedback to improve model interpretability and reduce latency by 40%\n- Designed evaluation pipelines to measure model performance, interpretability, and latency tradeoffs in production-like settings\n- Worked closely with domain experts to refine model outputs and reduce failure cases in real clinical data",
  },
  {
    jobTitle: "Software Engineer Intern – Backend & APIs",
    company: "Technoriya ERP Solution",
    location: "India",
    startDate: "2023-10",
    currentlyWorkHere: false,
    endDate: "2023-12",
    description: "- Developed and optimized backend services and APIs using Python and Node.js, supporting scalable data pipelines and cloud-based deployment\n- Implemented secure authentication and access protocols via Firebase Auth and Firestore rules to ensure data integrity\n- Optimized RESTful APIs and Firestore queries to achieve 450 ms response times under 1,000 concurrent requests\n- Streamlined deployment workflows using Vercel and GitHub Actions to improve delivery consistency and reliability",
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
