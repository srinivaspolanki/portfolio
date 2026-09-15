import { Project } from "./types";

export const projects: Project[] = [
  {
    id: "job-radar",
    num: "01",
    title: {
      en: "Job Radar - Automated AI Job Matching System",
      de: "Job Radar - Automatisiertes KI-Job-Matching-System"
    },
    description: {
      en: "Automated Data Pipeline, Secure CI/CD, and Scoring Engine",
      de: "Automatisierte Data Pipeline, sichere CI/CD und Scoring-Engine"
    },
    technologies: ["Python", "REST API", "GitHub Actions"],
    year: "2024",
    demo: "https://srinivaspolanki.github.io/job-radar/",
    fullDescription: {
      en: "An automated AI job matching system featuring a data pipeline for ingestion and cleaning of AI job postings via Python and REST APIs. It includes secure, fully automated daily builds and deployments via GitHub Actions using encrypted secrets. The core is a rule-based scoring engine algorithm for evaluating candidate skills, locations, and job requirements.",
      de: "Ein automatisiertes KI-Job-Matching-System mit einer Data Pipeline zur Ingestion und Bereinigung von KI-Stellenangeboten via Python & REST API. Es umfasst einen vollautomatischen täglichen Build & Deployment über GitHub Actions mit verschlüsselten Secrets. Der Kern ist ein regelbasierter Algorithmus zur Evaluierung von Skills, Standorten und Job-Anforderungen."
    },
    image: "/projects/job-radar.png"
  },
  {
    id: "subs",
    num: "02",
    title: { en: "Subs", de: "Subs" },
    description: {
      en: "Download raw subtitles without ZIP extraction",
      de: "Herunterladen von Roh-Untertiteln ohne ZIP-Extraktion"
    },
    technologies: ["Next.js", "React"],
    year: "2024",
    demo: "https://www.justsubtitles.com/",
    fullDescription: {
      en: "A Next.js and React-based application with a modern user interface that allows users to directly download raw SRT subtitle files without extracting ZIP archives. Integrated external APIs to fetch subtitle data and implement language-based filtering so users can find relevant SRT files quickly.",
      de: "Eine auf Next.js und React basierende Anwendung mit einer modernen Benutzeroberfläche, die es Nutzern ermöglicht, rohe SRT-Untertiteldateien direkt herunterzuladen, ohne ZIP-Dateien extrahieren zu müssen. Integration externer APIs zum Abrufen von Untertiteldaten sowie sprachbasierte Filterung, damit Nutzer relevante SRT-Dateien schnell finden können."
    },
    image: "/projects/subs.png"
  },
  {
    id: "ai-document-assistant",
    num: "03",
    title: {
      en: "AI Document Assistant",
      de: "AI Document Assistant"
    },
    description: {
      en: "AI-supported document analysis",
      de: "KI-gestützte Dokumentenanalyse"
    },
    technologies: ["Next.js", "React", "TypeScript", "FastAPI", "Python", "Ollama", "REST API"],
    year: "2024",
    fullDescription: {
      en: "Development of a full-stack application using Next.js, FastAPI, and Ollama to analyze PDF, DOCX, and TXT documents with local Large Language Models. Implemented features for document analysis, summarization, document history, and export functions (PDF, DOCX, and Markdown).",
      de: "Entwicklung einer Full-Stack-Anwendung mit Next.js, FastAPI und Ollama zur Analyse von PDF-, DOCX- und TXT-Dokumenten mithilfe lokaler Large Language Models. Implementierung von Dokumentenanalyse, Zusammenfassungen, Dokumentenhistorie sowie Exportfunktionen (PDF, DOCX und Markdown)."
    }
  }
];
