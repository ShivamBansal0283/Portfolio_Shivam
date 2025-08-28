// src/content/education.ts
export type EducationItem = {
  school: string;
  degree: string;
  start: string;
  end: string;
  details?: string;
};

const education: EducationItem[] = [
  {
    school: "Manipal Institute of Technology, Manipal",
    degree: "B.Tech, Information Technology",
    start: "2022",
    end: "2026",
    details: "CGPA: 8.92"
  },
  {
    school: "John Milton Public School, Agra",
    degree: "Class XII",
    start: "2019",
    end: "2021",
    details: "Percentage: 90.5%"
  },
  {
    school: "St. Peter’s College, Agra",
    degree: "Class X",
    start: "2010",
    end: "2019",
    details: "Percentage: 95.4%"
  }
];

export default education;