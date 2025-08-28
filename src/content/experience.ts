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
  // …add other roles
];

export default experience;