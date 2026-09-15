"use client";

import { useState, useEffect } from "react";
import { SearchIcon } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Header() {
  const [activeSection, setActiveSection] = useState("work");
  const { language, toggleLanguage } = useLanguage();

  const navItems = [
    { id: "about", en: "about", de: "über mich" },
    { id: "background", en: "background", de: "werdegang" },
    { id: "projects", en: "projects", de: "projekte" },
    { id: "tools", en: "tools", de: "tools" },
    { id: "contact", en: "contact", de: "kontakt" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const item of navItems) {
        const element = document.getElementById(item.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-background/80 backdrop-blur-sm border-b border-border/50 py-4">
      <div className="max-w-3xl mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="font-mono text-sm tracking-wider font-semibold cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth"})}>
          SRINIVAS POLANKI
        </div>
        
        <nav className="hidden md:flex items-center gap-6 text-xs font-mono tracking-widest text-secondary">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`hover:text-foreground transition-colors uppercase ${
                activeSection === item.id ? "text-foreground font-semibold" : ""
              }`}
            >
              {item[language]}
            </button>
          ))}
          <button 
            onClick={toggleLanguage}
            className="flex items-center hover:text-foreground transition-colors ml-4 uppercase font-bold text-accent px-2 py-1 bg-accent/10 rounded"
          >
            {language === "en" ? "EN" : "DE"}
          </button>
          <button 
            onClick={() => window.dispatchEvent(new KeyboardEvent('keydown', { key: '/' }))}
            className="flex items-center gap-1 hover:text-foreground transition-colors ml-4"
            aria-label="Search"
          >
            <SearchIcon size={14} /> <span className="opacity-60">/</span>
          </button>
        </nav>

        {/* Mobile Nav Button (Simplified) */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => window.dispatchEvent(new KeyboardEvent('keydown', { key: '/' }))}
            className="p-2 text-secondary hover:text-foreground"
          >
            <SearchIcon size={16} />
          </button>
        </div>
      </div>
      
      {/* Mobile Nav Links - horizontally scrollable */}
      <div className="md:hidden overflow-x-auto no-scrollbar py-2 mt-1 border-t border-border/30">
        <div className="flex px-4 gap-4 text-[10px] font-mono tracking-widest text-secondary w-max items-center">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`hover:text-foreground uppercase transition-colors whitespace-nowrap ${
                activeSection === item.id ? "text-foreground font-semibold" : ""
              }`}
            >
              {item[language]}
            </button>
          ))}
          <div className="border-l border-border/50 h-4 mx-1"></div>
          <button 
            onClick={toggleLanguage}
            className="hover:text-foreground transition-colors uppercase font-bold text-accent"
          >
            {language === "en" ? "EN" : "DE"}
          </button>
        </div>
      </div>
    </header>
  );
}
