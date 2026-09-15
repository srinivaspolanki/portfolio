export interface LocalizedString {
  en: string;
  de: string;
}

export interface Project {
  id: string;
  num: string;
  title: LocalizedString;
  description: LocalizedString;
  technologies: string[];
  year: string;
  fullDescription: LocalizedString;
  github?: string;
  demo?: string;
  image?: string;
}

export interface Experiment {
  id: string;
  title: LocalizedString;
  description: LocalizedString;
  status: "BUILDING" | "EXPERIMENT" | "FINISHED" | "ARCHIVED";
}

export interface Note {
  id: string;
  year: string;
  title: LocalizedString;
  content: React.ReactNode;
}

export interface BackgroundItem {
  year: string;
  title: LocalizedString;
  location: LocalizedString;
  description: LocalizedString;
}

export interface ToolCategory {
  title: LocalizedString;
  items: string[];
}

export interface BackgroundEvent {
  year: string;
  location?: string;
  description?: string;
}
