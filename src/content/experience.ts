// src/content/experience.ts
export type ExperienceItem = {
  company: string;
  role: string;
  start: string;
  end: string;
  bullets: string[];
  skills: string[];
};

const experience: ExperienceItem[] = [
  {
    company: "Skill High",
    role: "Web Dev Intern",
    start: "2025-02",
    end: "2025-06",
    bullets: [
      "Built backend systems using Node.js, Express, PostgreSQL, Prisma.",
      "Collaborated on testing & production readiness.",
      "Implemented secure authentication and scalable APIs."
    ],
    skills: ["Node.js", "Express", "PostgreSQL", "Prisma"]
  },
  {
    company: "JPMorgan Chase & Co.",
    role: "Virtual Software Engineering Program(Forage)",
    start: "2025-06",
    end: "2025-08",
    bullets:[
      "Completed the Forage Midas Core Virtual Internship simulating enterprise-grade financial transaction systems.",
      "Integrated an external REST Incentives API and applied incentive-based rewards to transactions.",
      "Exposed a REST Balance API on a custom port for real-time user balance queries."
    ],
    skills: ["Java","API Designing","Message Queuing"]
  },
  // …add other roles
];

export default experience;
