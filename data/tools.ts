import { ToolCategory } from "./types";

export const tools: ToolCategory[] = [
  {
    title: { en: "Programming Languages", de: "Programmiersprachen" },
    items: ["Python", "JavaScript", "Java", "TypeScript", "C++"]
  },
  {
    title: { en: "Tools & Operating Systems", de: "Tools & Betriebssysteme" },
    items: ["Ubuntu Linux", "Git", "Docker", "MS Office", "Power BI", "Zapier"]
  },
  {
    title: { en: "Data Analysis & AI", de: "Datenanalyse & AI" },
    items: ["NumPy", "Pandas", "Matplotlib", "NLP", "Prompt Engineering", "Claude", "ChatGPT", "Odysseus", "Gemini"]
  },
  {
    title: { en: "Databases / Web Tech", de: "Datenbanken / Webtechnologien" },
    items: ["PostgreSQL", "Supabase", "MongoDB", "HTML", "Tailwind CSS", "Bootstrap", "React", "Next.js", "FastAPI"]
  },
  {
    title: { en: "Robotics & Simulation", de: "Robotik & Simulation" },
    items: ["ROS 2", "Gazebo", "RViz", "SLAM", "Siemens Tecnomatix Plant Simulation"]
  }
];
