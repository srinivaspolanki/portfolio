"use client";

import { useLanguage } from "../context/LanguageContext";

export default function About() {
  const { language } = useLanguage();

  const text = {
    heading: { en: "ABOUT", de: "ÜBER MICH" },
    p1: {
      en: "I'm Srinivas Polanki, a Computer Science graduate currently pursuing my M.Sc. in Artificial Intelligence and Robotics at Hochschule Hof in Germany. I enjoy building software, experimenting with AI/ML, learning new technologies and turning random ideas into working projects.",
      de: "Ich bin Srinivas Polanki, ein Informatik-Absolvent und studiere derzeit im Masterstudiengang Artificial Intelligence and Robotics an der Hochschule Hof in Deutschland. Ich entwickle gerne Software, experimentiere mit KI/ML, lerne neue Technologien und verwandle Ideen in funktionierende Projekte."
    },
    outside: { en: "Outside programming", de: "Abseits der Programmierung" },
    interests: {
      en: ["Gaming", "Cricket", "Movies", "Travel", "Cooking"],
      de: ["Gaming", "Cricket", "Filme", "Reisen", "Kochen"]
    }
  };

  return (
    <section id="about" className="py-10">
      <div className="mb-12 font-mono text-sm tracking-widest text-secondary flex items-center gap-4">
        <span>{text.heading[language]}</span>
        <div className="h-px bg-border/50 flex-grow"></div>
      </div>

      <div className="max-w-2xl text-foreground leading-relaxed text-lg font-light mb-8">
        <p className="mb-6">
          {text.p1[language]}
        </p>
      </div>

      <div>
        <h4 className="font-mono text-xs text-secondary tracking-wider uppercase mb-4">
          {text.outside[language]}
        </h4>
        <div className="flex flex-wrap gap-3">
          {text.interests[language].map((interest) => (
            <span 
              key={interest}
              className="font-mono text-xs px-3 py-1 border border-border/50 text-secondary bg-white/5 rounded-full"
            >
              {interest}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
