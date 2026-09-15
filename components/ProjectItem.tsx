"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "../data/types";
import { ExternalLink } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const Github = ({ size = 24, className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

interface ProjectItemProps {
  project: Project;
  isExpanded: boolean;
  onToggle: () => void;
}

export default function ProjectItem({ project, isExpanded, onToggle }: ProjectItemProps) {
  const [isImageExpanded, setIsImageExpanded] = useState(false);
  const { language } = useLanguage();

  const text = {
    closeHint: { en: "[Click to close]", de: "[Klicken zum Schließen]" },
    seeHint: { en: "[Click to see photo & details]", de: "[Klicken für Foto & Details]" },
    tech: { en: "Technologies", de: "Technologien" },
    demo: { en: "Live Demo", de: "Live-Demo" },
    close: { en: "CLOSE [ESC]", de: "SCHLIESSEN [ESC]" }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isImageExpanded) {
        setIsImageExpanded(false);
      }
    };
    
    if (isImageExpanded) {
      window.addEventListener("keydown", handleKeyDown);
    }
    
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isImageExpanded]);

  return (
    <>
      <div className="border-b border-border/50 group">
        <button 
          onClick={onToggle}
          className="w-full text-left py-6 flex flex-col md:flex-row md:items-center justify-between gap-4 group-hover:bg-white/5 transition-colors duration-300"
        >
          <div className="flex items-start md:items-center gap-4 md:gap-8">
            <span className="font-mono text-sm text-secondary opacity-70 mt-1 md:mt-0">
              {project.num}
            </span>
            <div>
              <div className="flex items-center gap-3 mb-1">
                <h3 className="text-lg font-medium text-foreground group-hover:text-accent transition-colors">
                  {project.title[language]}
                </h3>
                <span className="text-[10px] font-mono text-secondary/50 opacity-0 group-hover:opacity-100 transition-opacity hidden sm:inline-block mt-1">
                  {isExpanded ? text.closeHint[language] : text.seeHint[language]}
                </span>
              </div>
              <p className="text-secondary text-sm md:hidden">
                {project.description[language]}
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8 text-left md:text-right">
            <p className="text-secondary text-sm hidden md:block">
              {project.description[language]}
            </p>
            <div className="flex items-center gap-4">
              {project.demo && (
                <a 
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-1.5 text-xs font-mono text-secondary hover:text-accent transition-colors"
                >
                  <span>DEMO</span>
                  <ExternalLink size={14} />
                </a>
              )}
              {project.github && (
                <a 
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-1.5 text-xs font-mono text-secondary hover:text-accent transition-colors"
                >
                  <span>CODE</span>
                  <Github size={14} />
                </a>
              )}
            </div>
          </div>
        </button>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="pb-8 pt-2 pl-0 md:pl-12">
                {/* Placeholder for project screenshot */}
                <div 
                  className={`w-full md:w-1/2 rounded-md overflow-hidden bg-white/5 border border-white/10 aspect-video flex items-center justify-center transition-colors relative mb-8 ${project.image ? 'cursor-pointer group-hover:border-white/20' : ''}`}
                  onClick={() => project.image && setIsImageExpanded(true)}
                >
                  {project.image ? (
                    <img src={project.image} alt={project.title[language]} className="object-cover w-full h-full opacity-80 hover:opacity-100 transition-opacity" />
                  ) : (
                    <div className="text-secondary/30 font-mono text-xs flex flex-col items-center gap-2">
                      <Github className="opacity-50" />
                      <span>[Screenshot]</span>
                    </div>
                  )}
                </div>

                <div className="max-w-2xl text-secondary leading-relaxed mb-8">
                  {project.fullDescription[language]}
                </div>

                <div className="mb-8">
                  <h4 className="font-mono text-xs text-secondary tracking-wider uppercase mb-3 border-b border-border/30 pb-2 inline-block">
                    {text.tech[language]}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="font-mono text-[11px] px-2 py-1 bg-white/5 border border-border/50 text-secondary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  {project.demo && (
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-foreground hover:text-accent transition-colors"
                    >
                      <ExternalLink size={14} />
                      <span>{text.demo[language]}</span>
                    </a>
                  )}
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-foreground hover:text-accent transition-colors"
                    >
                      <Github size={14} />
                      <span>GitHub</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Fullscreen Image Lightbox */}
      <AnimatePresence>
        {isImageExpanded && project.image && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 bg-background/90 backdrop-blur-sm cursor-pointer"
              onClick={() => setIsImageExpanded(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative z-10 max-w-7xl w-full max-h-full rounded-lg overflow-hidden flex flex-col shadow-2xl border border-white/10 bg-background"
            >
              <div className="flex justify-between items-center p-4 border-b border-border/50">
                <span className="font-mono text-xs text-secondary">{project.title[language]}</span>
                <button 
                  onClick={() => setIsImageExpanded(false)}
                  className="text-secondary hover:text-foreground transition-colors font-mono text-xs px-3 py-1 bg-white/5 hover:bg-white/10 rounded-sm"
                >
                  {text.close[language]}
                </button>
              </div>
              <div className="flex-1 overflow-auto bg-black/50 p-4 flex items-center justify-center">
                <img 
                  src={project.image} 
                  alt={project.title[language]} 
                  className="max-w-full max-h-[80vh] object-contain"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
