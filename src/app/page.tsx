import { getProjects, getResearchPapers } from "@/lib/data";
import { getBlogPosts } from "@/lib/blog";
import { categorizeSkills } from "@/lib/skills";
import { EDUCATION, EXPERIENCE, SKILLS, LINKS, CONFERENCES, ACHIEVEMENTS } from "@/lib/portfolio-data";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Research } from "@/components/sections/Research";
import { Skills } from "@/components/sections/Skills";
import { Blog } from "@/components/sections/Blog";
import { Conferences } from "@/components/sections/Conferences";
import { Resume } from "@/components/sections/Resume";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  const projects = getProjects();
  const papers = getResearchPapers();
  const posts = getBlogPosts();
  const skillCategories = categorizeSkills(SKILLS);

  const profile = {
    nameData: { firstName: "Pushkaraj", lastName: "Baradkar", preferredFirstName: "Pushkaraj", preferredLastName: "Baradkar" },
    addressData: { city: "Los Angeles", state: "California", country: "United States" },
    contactData: { phoneNumber: "", email: LINKS.email },
    jobData: EXPERIENCE,
    educationData: EDUCATION,
    skillsData: SKILLS,
    websiteData: { websites: [], github: LINKS.github, linkedin: LINKS.linkedin, personal: "" },
    resumeData: { resumeBase64: "", fileName: "" },
  };

  return (
    <>
      <Hero profile={profile} />
      <About profile={profile} />
      <Experience jobs={EXPERIENCE} />
      <Projects projects={projects} />
      <Research papers={papers} />
      <Skills categories={skillCategories} />
      <Blog posts={posts} />
      <Conferences conferences={CONFERENCES} achievements={ACHIEVEMENTS} />
      <Resume profile={profile} />
      <Contact profile={profile} />
    </>
  );
}
