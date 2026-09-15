"use client";

import { useLanguage } from "../context/LanguageContext";

export default function Intro() {
  const { language } = useLanguage();

  const text = {
    title: { en: "Master's Student / AI & Robotics", de: "Masterstudent / KI & Robotik" },
    desc: { 
      en: "I build software, experiment with AI, and enjoy turning ideas into working projects.", 
      de: "Ich entwickle Software, experimentiere mit KI und verwandle Ideen gerne in funktionierende Projekte." 
    },
    country: { en: "Germany", de: "Deutschland" }
  };

  return (
    <section className="pt-24 pb-10">
      <div className="font-mono text-sm text-secondary mb-6 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
        <span>{text.title[language]}</span>
      </div>
      
      <p className="text-xl md:text-2xl leading-relaxed text-foreground max-w-2xl font-light mb-8">
        {text.desc[language]}
      </p>

      <div className="font-mono text-xs text-secondary flex items-center gap-2">
        <span>{text.country[language]}</span>
        <span className="opacity-50">·</span>
        <span>2026</span>
      </div>
    </section>
  );
}
