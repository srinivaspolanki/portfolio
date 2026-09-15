"use client";

import { background } from "../data/background";
import { useLanguage } from "../context/LanguageContext";

export default function Background() {
  const { language } = useLanguage();

  const title = {
    en: "BACKGROUND",
    de: "WERDEGANG"
  };

  return (
    <section id="background" className="py-10">
      <div className="mb-12 font-mono text-sm tracking-widest text-secondary flex items-center gap-4">
        <span>{title[language]}</span>
        <div className="h-px bg-border/50 flex-grow"></div>
      </div>

      <div className="flex flex-col gap-8">
        {background.map((item, index) => (
          <div key={index} className="flex flex-col md:flex-row md:items-start gap-2 md:gap-8 group">
            <span className="font-mono text-sm text-secondary opacity-60 w-[120px] flex-shrink-0 mt-1">
              {item.year}
            </span>
            <div>
              <h4 className="text-foreground text-lg mb-1">{item.title[language]}</h4>
              {item.location && (
                <p className="text-secondary text-sm">{item.location[language]}</p>
              )}
              {item.description && (
                <p className="text-secondary text-sm italic">{item.description[language]}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
