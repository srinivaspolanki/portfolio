"use client";

import { useState } from "react";
import { projects } from "../data/projects";
import ProjectItem from "./ProjectItem";
import { useLanguage } from "../context/LanguageContext";

export default function Work() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const { language } = useLanguage();

  const title = { en: "PROJECTS", de: "PROJEKTE" };

  return (
    <section id="projects" className="py-10">
      <div className="mb-12 font-mono text-sm tracking-widest text-secondary flex items-center gap-4">
        <span>{title[language]}</span>
        <div className="h-px bg-border/50 flex-grow"></div>
      </div>

      <div className="border-t border-border/50">
        {projects.map((project) => (
          <ProjectItem
            key={project.id}
            project={project}
            isExpanded={expandedId === project.id}
            onToggle={() => setExpandedId(expandedId === project.id ? null : project.id)}
          />
        ))}
      </div>
    </section>
  );
}
