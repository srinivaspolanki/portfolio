"use client";

import { useLanguage } from "../context/LanguageContext";

export default function Certifications() {
  const { language } = useLanguage();
  const title = { en: "CERTIFICATIONS", de: "ZERTIFIKATE" };

  const certifications = [
    "AZ-204 Developer Associate (Microsoft)",
    "Programming in Python (Cisco)",
    "Data Analysis with Python (freeCodeCamp)",
  ];

  return (
    <section id="certifications" className="py-10">
      <div className="mb-12 font-mono text-sm tracking-widest text-secondary flex items-center gap-4">
        <span>{title[language]}</span>
        <div className="h-px bg-border/50 flex-grow"></div>
      </div>

      <ul className="flex flex-col gap-4 text-foreground">
        {certifications.map((cert, index) => (
          <li key={index} className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 group">
            <span className="text-lg hover:text-accent transition-colors">
              {cert}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
