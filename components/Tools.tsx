"use client";

import { tools } from "../data/tools";
import { useLanguage } from "../context/LanguageContext";

export default function Tools() {
  const { language } = useLanguage();

  const title = { en: "TOOLS I USE", de: "TOOLS DIE ICH NUTZE" };

  return (
    <section id="tools" className="py-10">
      <div className="mb-12 font-mono text-sm tracking-widest text-secondary flex items-center gap-4">
        <span>{title[language]}</span>
        <div className="h-px bg-border/50 flex-grow"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {tools.map((category) => (
          <div key={category.title[language]}>
            <h4 className="text-foreground text-sm font-medium mb-4 uppercase tracking-wider">
              {category.title[language]}
            </h4>
            <div className="flex flex-wrap gap-2">
              {category.items.map((tool) => (
                <span 
                  key={tool}
                  className="font-mono text-[11px] px-2 py-1 bg-white/5 border border-border/50 text-secondary"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
