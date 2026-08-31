export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  thumbnail: string;
  tech: string[];
  demo?: string;
  link?: string;
  github?: string;
  category?: string;
  featured?: boolean;
  keyFeatures?: string[];
  tags?: string[];
  status?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  location?: string;
  startDate: string;
  endDate: string;
  current?: boolean;
  description: string[];
  technologies?: string[];
}

export interface Skill {
  id: string;
  name: string;
  category: 'ai_ml' | 'data_science' | 'backend' | 'cloud_mlops' | 'tools' | 'frontend' | 'other';
  proficiency?: number;
  icon?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface MovieFact {
  id: string;
  type: string;
  category: string;
  content: string;
  source?: string;
}
