"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SearchIcon, X } from "lucide-react";
import { projects } from "../data/projects";
import { useLanguage } from "../context/LanguageContext";


export default function Search() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const { language } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "/" && !["INPUT", "TEXTAREA"].includes((e.target as HTMLElement).tagName)) {
        e.preventDefault();
        setIsOpen(true);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setTimeout(() => {
        document.getElementById("search-input")?.focus();
      }, 100);
    } else {
      document.body.style.overflow = "";
      setQuery("");
    }
  }, [isOpen]);

  const searchResults = () => {
    if (!query) return null;
    const lowerQuery = query.toLowerCase();

    const matchedProjects = projects.filter(
      p => p.title[language].toLowerCase().includes(lowerQuery) || 
           p.description[language].toLowerCase().includes(lowerQuery) ||
           p.technologies.some(t => t.toLowerCase().includes(lowerQuery))
    );

    return { matchedProjects };
  };

  const results = searchResults();

  const handleResultClick = (sectionId: string) => {
    setIsOpen(false);
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 80,
          behavior: "smooth",
        });
      }
    }, 100);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          
          <motion.div 
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="relative w-full max-w-2xl bg-background border border-border/50 rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh]"
          >
            <div className="flex items-center px-4 border-b border-border/50">
              <SearchIcon size={20} className="text-secondary" />
              <input 
                id="search-input"
                type="text"
                placeholder="Search projects, experiments, notes..."
                className="w-full bg-transparent border-none focus:outline-none focus:ring-0 py-4 px-4 text-foreground font-mono text-sm placeholder:text-secondary/50"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-md text-secondary hover:text-foreground hover:bg-white/5 transition-colors font-mono text-xs flex items-center gap-1"
              >
                <X size={16} /> <span>ESC</span>
              </button>
            </div>

            <div className="overflow-y-auto overflow-x-hidden p-4 no-scrollbar">
              {!query && (
                <div className="text-center py-12 text-secondary font-mono text-xs opacity-50">
                  Type to start searching
                </div>
              )}

              {query && results && (
                <div className="flex flex-col gap-6">
                  {results.matchedProjects.length > 0 && (
                    <div>
                      <h4 className="font-mono text-xs text-secondary tracking-wider uppercase mb-3">
                        Projects
                      </h4>
                      <div className="flex flex-col gap-2">
                        {results.matchedProjects.map(p => (
                          <button
                            key={p.id}
                            onClick={() => handleResultClick("projects")}
                            className="w-full text-left p-3 rounded hover:bg-white/5 transition-colors flex items-center justify-between group"
                          >
                            <div>
                              <div className="text-foreground font-medium group-hover:text-accent transition-colors">{p.title[language]}</div>
                              <div className="text-xs text-secondary mt-1">{p.description[language]}</div>
                            </div>
                            <span className="font-mono text-xs text-secondary opacity-0 group-hover:opacity-100 transition-opacity hidden md:block">
                              Goto →
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}





                  {results.matchedProjects.length === 0 && (
                    <div className="text-center py-12 text-secondary font-mono text-xs opacity-50">
                      No results found for &quot;{query}&quot;
                    </div>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
