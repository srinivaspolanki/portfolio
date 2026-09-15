"use client";

import { useLanguage } from "../context/LanguageContext";

export default function Contact() {
  const { language } = useLanguage();

  const text = {
    heading: { en: "CONTACT", de: "KONTAKT" },
    title: { 
      en: "Have an interesting project or opportunity? Let's talk.", 
      de: "Hast du ein interessantes Projekt oder eine Gelegenheit? Lass uns reden." 
    },
    desc: { 
      en: "I'm currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!", 
      de: "Ich bin derzeit offen für neue Möglichkeiten. Ob du eine Frage hast oder einfach nur Hallo sagen willst, ich werde versuchen, dir so schnell wie möglich zu antworten!" 
    },
    button: { en: "Say Hello", de: "Hallo sagen" },
    links: { en: "Links", de: "Links" },
    connect: { en: "Connect", de: "Vernetzen" }
  };

  return (
    <section id="contact" className="py-10">
      <div className="mb-12 font-mono text-sm tracking-widest text-secondary flex items-center gap-4">
        <span>{text.heading[language]}</span>
        <div className="h-px bg-border/50 flex-grow"></div>
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-16">
        <div className="max-w-md">
          <h3 className="text-2xl font-light text-foreground mb-4">
            {text.title[language]}
          </h3>
          <p className="text-secondary mb-8">
            {text.desc[language]}
          </p>
          <a 
            href="mailto:srinivaspolankis@gmail.com" 
            className="inline-flex items-center justify-center px-6 py-3 border border-border/80 text-foreground bg-white/5 hover:bg-white/10 hover:border-accent hover:text-accent transition-all font-mono text-sm"
          >
            {text.button[language]}
          </a>
        </div>

        <div className="flex flex-col gap-4 min-w-[200px]">
          <h4 className="font-mono text-xs text-secondary tracking-wider uppercase mb-2 border-b border-border/30 pb-2">
            {text.links[language]}
          </h4>
          <a href="mailto:srinivaspolankis@gmail.com" className="text-foreground hover:text-accent transition-colors flex items-center justify-between group">
            <span>Email</span>
            <span className="text-secondary font-mono text-xs opacity-0 group-hover:opacity-100 transition-opacity">srinivaspolankis@gmail.com</span>
          </a>
          <a href="https://github.com/srinivaspolanki" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-accent transition-colors flex items-center justify-between group">
            <span>GitHub</span>
            <span className="text-secondary font-mono text-xs opacity-0 group-hover:opacity-100 transition-opacity">@srinivaspolanki</span>
          </a>
          <a href="https://www.linkedin.com/in/srinivas-polanki-110432219/" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-accent transition-colors flex items-center justify-between group">
            <span>LinkedIn</span>
            <span className="text-secondary font-mono text-xs opacity-0 group-hover:opacity-100 transition-opacity">{text.connect[language]}</span>
          </a>
          <a href="/cv.pdf" download="Srinivas_Polanki_CV.pdf" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-accent transition-colors flex items-center justify-between group">
            <span>CV</span>
            <span className="text-secondary font-mono text-xs opacity-0 group-hover:opacity-100 transition-opacity">PDF</span>
          </a>
        </div>
      </div>
    </section>
  );
}
