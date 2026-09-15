"use client";

import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { language } = useLanguage();

  const text = {
    title: { en: "Master's student", de: "Masterstudent" },
    cs: { en: "Computer science", de: "Informatik" },
    ai: { en: "AI", de: "KI" }
  };

  return (
    <footer className="py-8 mt-10 border-t border-border/50 text-secondary font-mono text-xs flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-center md:text-left">
        <span className="font-semibold text-foreground tracking-widest uppercase">SRINIVAS POLANKI</span>
        <span className="hidden md:inline opacity-50">/</span>
        <span>{text.title[language]}</span>
        <span className="hidden md:inline opacity-50">·</span>
        <span>{text.cs[language]}</span>
        <span className="hidden md:inline opacity-50">·</span>
        <span>{text.ai[language]}</span>
      </div>

      <div className="flex items-center gap-4">
        <a href="https://github.com/srinivaspolanki" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">GitHub</a>
        <span className="opacity-30">|</span>
        <a href="https://www.linkedin.com/in/srinivas-polanki-110432219/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">LinkedIn</a>
        <span className="opacity-30">|</span>
        <a href="mailto:srinivaspolankis@gmail.com" className="hover:text-accent transition-colors">Email</a>
        <span className="opacity-30">|</span>
        <a href="/cv.pdf" download="Srinivas_Polanki_CV.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">CV</a>
      </div>

      <div className="mt-4 md:mt-0 opacity-60">
        © 2026 Srinivas Polanki
      </div>
    </footer>
  );
}
