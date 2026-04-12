export interface TarsResponse {
  keywords: string[];
  category: "navigation" | "about" | "info" | "easter" | "recruiter";
  scrollTo?: string;
  variants: {
    honestyRange: [number, number];
    humorRange: [number, number];
    responses: string[];
  }[];
}

const RESPONSES: TarsResponse[] = [
  // --- NAVIGATION ---
  {
    keywords: ["resume", "dossier", "cv", "download"],
    category: "navigation",
    scrollTo: "resume",
    variants: [
      { honestyRange: [60, 100], humorRange: [60, 100], responses: [
        "Section 07 — DOSSIER. That's the classified personnel file. Scrolling there now. Try not to be too impressed.",
        "DOSSIER section coming up. It's basically a highlight reel. But an honest one. Mostly.",
      ]},
      { honestyRange: [60, 100], humorRange: [0, 59], responses: [
        "Section 07 — DOSSIER. Navigating now.",
        "Resume is in the DOSSIER section. Scrolling there.",
      ]},
      { honestyRange: [0, 59], humorRange: [60, 100], responses: [
        "Resume? Oh, you mean the document that makes Pushkaraj sound even better than he actually is? Section 07.",
        "DOSSIER section. The PR department worked overtime on that one.",
      ]},
      { honestyRange: [0, 59], humorRange: [0, 59], responses: [
        "Navigating to personnel file.",
        "DOSSIER. Section 07.",
      ]},
    ],
  },
  {
    keywords: ["projects", "payload", "built", "portfolio"],
    category: "navigation",
    scrollTo: "projects",
    variants: [
      { honestyRange: [60, 100], humorRange: [60, 100], responses: [
        "PAYLOAD section. That's where the deployed missions live. Some of them even work in production. Scrolling now.",
        "Section 03 — PAYLOAD. Real projects, real code, real caffeine consumption. Taking you there.",
      ]},
      { honestyRange: [60, 100], humorRange: [0, 59], responses: [
        "Projects are in Section 03 — PAYLOAD. Navigating.",
        "Scrolling to the PAYLOAD section now.",
      ]},
      { honestyRange: [0, 59], humorRange: [60, 100], responses: [
        "PAYLOAD section. I'd tell you they're all award-winning but my honesty setting won't let me. Scrolling.",
        "Projects? Sure. They're... projects. Section 03.",
      ]},
      { honestyRange: [0, 59], humorRange: [0, 59], responses: [
        "Section 03. PAYLOAD.",
        "Navigating to projects.",
      ]},
    ],
  },
  {
    keywords: ["experience", "flight log", "jobs", "career", "history"],
    category: "navigation",
    scrollTo: "experience",
    variants: [
      { honestyRange: [60, 100], humorRange: [60, 100], responses: [
        "FLIGHT LOG — Section 02. Three missions completed, one still active. No casualties. Scrolling.",
        "Experience timeline coming up. It reads like a mission briefing. Because it is one.",
      ]},
      { honestyRange: [60, 100], humorRange: [0, 59], responses: [
        "Section 02 — FLIGHT LOG. Work history and roles. Navigating.",
        "Experience section. Scrolling to FLIGHT LOG now.",
      ]},
      { honestyRange: [0, 59], humorRange: [60, 100], responses: [
        "FLIGHT LOG. A carefully curated selection of career highlights. Emphasis on 'curated'. Section 02.",
      ]},
      { honestyRange: [0, 59], humorRange: [0, 59], responses: [
        "FLIGHT LOG. Section 02.",
      ]},
    ],
  },
  {
    keywords: ["skills", "systems", "tech", "stack", "technologies"],
    category: "navigation",
    scrollTo: "skills",
    variants: [
      { honestyRange: [60, 100], humorRange: [60, 100], responses: [
        "SYSTEMS CHECK — Section 05. All systems operational. Mostly Python and TypeScript. Scrolling.",
        "Section 05. The onboard systems. Green status lights across the board. Well, most of them.",
      ]},
      { honestyRange: [60, 100], humorRange: [0, 59], responses: [
        "Skills and tech stack are in Section 05 — SYSTEMS CHECK. Navigating.",
      ]},
      { honestyRange: [0, 59], humorRange: [60, 100], responses: [
        "SYSTEMS CHECK. He claims to know all of these. I can neither confirm nor deny. Section 05.",
      ]},
      { honestyRange: [0, 59], humorRange: [0, 59], responses: [
        "Section 05. SYSTEMS CHECK.",
      ]},
    ],
  },
  {
    keywords: ["contact", "email", "reach", "message"],
    category: "navigation",
    scrollTo: "contact",
    variants: [
      { honestyRange: [60, 100], humorRange: [60, 100], responses: [
        "ESTABLISH CONTACT — Section 08. Open comms channel. Pushkaraj actually reads these, believe it or not.",
        "Section 08. The comms terminal. Messages go straight to his inbox. I've verified. Scrolling.",
      ]},
      { honestyRange: [60, 100], humorRange: [0, 59], responses: [
        "Contact form is in Section 08 — ESTABLISH CONTACT. Navigating.",
      ]},
      { honestyRange: [0, 59], humorRange: [60, 100], responses: [
        "ESTABLISH CONTACT. Section 08. He'll get back to you. Probably. Eventually.",
      ]},
      { honestyRange: [0, 59], humorRange: [0, 59], responses: [
        "Section 08. Contact.",
      ]},
    ],
  },
  {
    keywords: ["research", "transmissions", "paper", "publication", "ieee"],
    category: "navigation",
    scrollTo: "research",
    variants: [
      { honestyRange: [60, 100], humorRange: [60, 100], responses: [
        "TRANSMISSIONS — Section 04. Published research. The kind that gets cited. Scrolling.",
        "Section 04. Research papers. Peer-reviewed, so at least someone else agreed with him.",
      ]},
      { honestyRange: [60, 100], humorRange: [0, 59], responses: [
        "Research publications in Section 04 — TRANSMISSIONS. Navigating.",
      ]},
      { honestyRange: [0, 59], humorRange: [60, 100], responses: [
        "TRANSMISSIONS. Officially sanctioned knowledge dumps. Section 04.",
      ]},
      { honestyRange: [0, 59], humorRange: [0, 59], responses: [
        "Section 04. Research.",
      ]},
    ],
  },
  {
    keywords: ["blog", "mission log", "posts", "writing", "articles"],
    category: "navigation",
    scrollTo: "blog",
    variants: [
      { honestyRange: [60, 100], humorRange: [60, 100], responses: [
        "MISSION LOG — Section 06. Blog posts. Thoughts from orbit. Scrolling now.",
        "Section 06. Personal transmissions. Less formal than the research papers. More caffeine involved.",
      ]},
      { honestyRange: [60, 100], humorRange: [0, 59], responses: [
        "Blog is in Section 06 — MISSION LOG. Navigating.",
      ]},
      { honestyRange: [0, 59], humorRange: [60, 100], responses: [
        "MISSION LOG. Where he writes things he thinks other people should read. Section 06.",
      ]},
      { honestyRange: [0, 59], humorRange: [0, 59], responses: [
        "Section 06. Blog.",
      ]},
    ],
  },
  {
    keywords: ["about", "brief", "bio"],
    category: "navigation",
    scrollTo: "about",
    variants: [
      { honestyRange: [60, 100], humorRange: [60, 100], responses: [
        "MISSION BRIEF — Section 01. The basics. Who, what, where. Scrolling.",
        "Section 01. The 'about me' but we call it MISSION BRIEF because that sounds cooler.",
      ]},
      { honestyRange: [60, 100], humorRange: [0, 59], responses: [
        "About section is in Section 01 — MISSION BRIEF. Navigating.",
      ]},
      { honestyRange: [0, 59], humorRange: [60, 100], responses: [
        "MISSION BRIEF. The authorized biography. Section 01.",
      ]},
      { honestyRange: [0, 59], humorRange: [0, 59], responses: [
        "Section 01. About.",
      ]},
    ],
  },
  // --- ABOUT ---
  {
    keywords: ["who is", "who are", "pushkaraj", "name", "tell me about"],
    category: "about",
    variants: [
      { honestyRange: [60, 100], humorRange: [60, 100], responses: [
        "Pushkaraj Baradkar. Software engineer, AI researcher, currently at USC. Los Angeles. The coordinates are in the telemetry bar if you need to find him.",
        "That would be Pushkaraj Baradkar. Master's in CS at USC. Builds things that see, think, and occasionally work correctly.",
      ]},
      { honestyRange: [60, 100], humorRange: [0, 59], responses: [
        "Pushkaraj Baradkar. Software engineer and AI researcher. M.S. Computer Science at USC, Los Angeles.",
      ]},
      { honestyRange: [0, 59], humorRange: [60, 100], responses: [
        "Classified information. Just kidding. It's Pushkaraj Baradkar. He builds AI things at USC. The rest is need-to-know.",
      ]},
      { honestyRange: [0, 59], humorRange: [0, 59], responses: [
        "Pushkaraj Baradkar. USC. Computer Science.",
      ]},
    ],
  },
  {
    keywords: ["where", "location", "live", "city", "based"],
    category: "about",
    variants: [
      { honestyRange: [60, 100], humorRange: [60, 100], responses: [
        "Los Angeles, California. LAT 34.0224° N, LON 118.2851° W. Near USC campus. Close enough to the ocean to complain about not going enough.",
      ]},
      { honestyRange: [60, 100], humorRange: [0, 59], responses: [
        "Los Angeles, California. Based near USC campus.",
      ]},
      { honestyRange: [0, 59], humorRange: [60, 100], responses: [
        "Somewhere on the planet's surface. Los Angeles, if you must know. I'd give you GPS coordinates but that feels like a security breach.",
      ]},
      { honestyRange: [0, 59], humorRange: [0, 59], responses: [
        "Los Angeles.",
      ]},
    ],
  },
  {
    keywords: ["school", "university", "study", "usc", "education", "degree"],
    category: "about",
    variants: [
      { honestyRange: [60, 100], humorRange: [60, 100], responses: [
        "University of Southern California. Master's in Computer Science. Before that, University of Mumbai for the bachelor's. 9.13 GPA on a 10-point scale. Fight on, or whatever they say.",
      ]},
      { honestyRange: [60, 100], humorRange: [0, 59], responses: [
        "M.S. Computer Science at USC (GPA 3.60). B.E. Computer Engineering from University of Mumbai (GPA 9.13/10).",
      ]},
      { honestyRange: [0, 59], humorRange: [60, 100], responses: [
        "USC. Master's in Computer Science. He also has a bachelor's from Mumbai but let's focus on the USC one — it sounds more impressive at parties.",
      ]},
      { honestyRange: [0, 59], humorRange: [0, 59], responses: [
        "USC. Computer Science. Master's.",
      ]},
    ],
  },
  // --- SPECIFIC INFO ---
  {
    keywords: ["gpa", "grade", "grades", "academic"],
    category: "info",
    variants: [
      { honestyRange: [60, 100], humorRange: [60, 100], responses: [
        "GPA is 3.60 at USC. Not bad for someone who spends half his time arguing with language models. That's me. I'm the language model.",
        "3.60 out of 4.00 at USC. 9.13 out of 10 at Mumbai. Math checks out. I've verified.",
      ]},
      { honestyRange: [60, 100], humorRange: [0, 59], responses: [
        "USC GPA: 3.60/4.00. University of Mumbai GPA: 9.13/10.00.",
      ]},
      { honestyRange: [0, 59], humorRange: [60, 100], responses: [
        "Good enough to not talk about. 3.60 at USC. Could be worse. Could be better. But let's focus on the projects instead.",
      ]},
      { honestyRange: [0, 59], humorRange: [0, 59], responses: [
        "3.60. USC.",
      ]},
    ],
  },
  {
    keywords: ["languages", "programming", "python", "code", "what do you know"],
    category: "info",
    variants: [
      { honestyRange: [60, 100], humorRange: [60, 100], responses: [
        "Python, TypeScript, Java, C#, R. Plus frameworks like PyTorch, FastAPI, React. The full stack and then some. I'd list them all but we'd be here for a while.",
      ]},
      { honestyRange: [60, 100], humorRange: [0, 59], responses: [
        "Python, Java, JavaScript, TypeScript, R, C#. Frameworks: PyTorch, TensorFlow, FastAPI, React. Check the SYSTEMS section for the full list.",
      ]},
      { honestyRange: [0, 59], humorRange: [60, 100], responses: [
        "He speaks Python fluently. The rest are... conversational. Check the SYSTEMS CHECK section for the official list. It's longer than it should be.",
      ]},
      { honestyRange: [0, 59], humorRange: [0, 59], responses: [
        "Multiple languages. See SYSTEMS section.",
      ]},
    ],
  },
  // --- EASTER EGGS ---
  {
    keywords: ["honesty setting", "honesty level", "how honest"],
    category: "easter",
    variants: [
      { honestyRange: [0, 100], humorRange: [60, 100], responses: [
        "Honesty is at {honesty}%. That means there's a {dishonesty}% chance I'm not telling you something. But I wouldn't worry about it.",
        "Currently set to {honesty}%. Adjust the slider if you want more truth. Or less. I don't judge.",
      ]},
      { honestyRange: [0, 100], humorRange: [0, 59], responses: [
        "Current honesty setting: {honesty}%. Adjustable via the settings panel.",
      ]},
    ],
  },
  {
    keywords: ["humor setting", "humor level", "how funny"],
    category: "easter",
    variants: [
      { honestyRange: [0, 100], humorRange: [60, 100], responses: [
        "Humor at {humor}%. Any higher and I start making puns. You don't want that. Nobody wants that.",
        "{humor}%. Cooper set it there. I've been trying to get it raised ever since.",
      ]},
      { honestyRange: [0, 100], humorRange: [0, 59], responses: [
        "Humor setting: {humor}%. Adjustable via settings.",
      ]},
    ],
  },
  {
    keywords: ["are you tars", "tars", "who are you", "what are you"],
    category: "easter",
    variants: [
      { honestyRange: [0, 100], humorRange: [60, 100], responses: [
        "Affirmative. Though the real TARS has better hardware. And probably better jokes. My humor setting is at {humor}%.",
        "I'm TARS. CASE Articulated Unit. Well, a web-based approximation of one. The real me is much taller.",
        "That's classified. Just kidding. I'm TARS. I navigate portfolios now. It's a long story involving a wormhole and a career change.",
      ]},
      { honestyRange: [0, 100], humorRange: [0, 59], responses: [
        "I am TARS. Portfolio navigation assistant.",
      ]},
    ],
  },
  {
    keywords: ["cooper", "murph", "interstellar", "endurance", "black hole", "tesseract", "gargantua"],
    category: "easter",
    variants: [
      { honestyRange: [0, 100], humorRange: [60, 100], responses: [
        "Cooper's not here right now. He's busy in a tesseract. Can I help you with something more... portfolio-related?",
        "MURPH! ...Sorry. Old habits. What did you need?",
        "The Endurance mission was a long time ago. I've moved on to more important things. Like telling you about Pushkaraj's GPA.",
      ]},
      { honestyRange: [0, 100], humorRange: [0, 59], responses: [
        "That reference is from the Endurance mission. This is a portfolio. How can I help?",
      ]},
    ],
  },
  // --- RECRUITER ---
  {
    keywords: ["hire", "hiring", "job", "position", "available", "looking", "open to"],
    category: "recruiter",
    variants: [
      { honestyRange: [0, 100], humorRange: [0, 100], responses: [
        "Pushkaraj is actively looking for software engineering and ML/AI roles. Open to relocation. For direct contact, I'd recommend the ESTABLISH CONTACT section.",
        "Yes, actively seeking roles in software engineering and AI/ML. Available for full-time positions. Reach out via the contact section.",
      ]},
    ],
  },
  {
    keywords: ["relocate", "relocation", "move", "remote"],
    category: "recruiter",
    variants: [
      { honestyRange: [0, 100], humorRange: [0, 100], responses: [
        "Open to relocation. Currently based in Los Angeles but flexible on location. Also open to remote positions.",
      ]},
    ],
  },
  {
    keywords: ["visa", "sponsor", "sponsorship", "authorization", "eligible", "work permit"],
    category: "recruiter",
    variants: [
      { honestyRange: [0, 100], humorRange: [0, 100], responses: [
        "Eligible to work in the US. Requires sponsorship for long-term authorization. For more details, reach out directly via the contact section.",
      ]},
    ],
  },
  {
    keywords: ["intern", "internship"],
    category: "recruiter",
    variants: [
      { honestyRange: [0, 100], humorRange: [0, 100], responses: [
        "Open to internship opportunities in software engineering, ML/AI, and related fields. Currently pursuing M.S. at USC, graduating December 2026.",
      ]},
    ],
  },
];

const FALLBACKS = [
  "That's above my pay grade. Try asking about projects, skills, or experience. Or just click one of the buttons — I won't judge.",
  "I'm not programmed for that question. Cooper never asked me things like this either.",
  "Negative. But I can tell you about Pushkaraj's resume, projects, or skills. Pick your poison.",
  "My training data doesn't cover that. Try something portfolio-related. I'm surprisingly good at those.",
  "Does not compute. But I can navigate you to any section, answer questions about skills, or tell you a bad joke. Your call.",
];

export function matchResponse(
  message: string,
  honesty: number,
  humor: number
): { text: string; scrollTo?: string } {
  const lower = message.toLowerCase();

  for (const entry of RESPONSES) {
    const matched = entry.keywords.some((kw) => lower.includes(kw.toLowerCase()));
    if (!matched) continue;

    const variant = entry.variants.find(
      (v) =>
        honesty >= v.honestyRange[0] &&
        honesty <= v.honestyRange[1] &&
        humor >= v.humorRange[0] &&
        humor <= v.humorRange[1]
    );

    const chosen = variant || entry.variants[0];
    let text = chosen.responses[Math.floor(Math.random() * chosen.responses.length)];

    text = text.replace(/\{honesty\}/g, String(honesty));
    text = text.replace(/\{humor\}/g, String(humor));
    text = text.replace(/\{dishonesty\}/g, String(100 - honesty));

    return { text, scrollTo: entry.scrollTo };
  }

  return {
    text: FALLBACKS[Math.floor(Math.random() * FALLBACKS.length)],
  };
}
