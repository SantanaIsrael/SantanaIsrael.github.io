export type Locale = 'pt' | 'en';
export type ThemeMode = 'system' | 'light' | 'dark';

export interface LocalizedText {
  pt: string;
  en: string;
}

export interface FeaturedProject {
  id: string;
  title: string;
  subtitle: LocalizedText;
  description: LocalizedText;
  architectureDetails: LocalizedText;
  highlights: {
    pt: string[];
    en: string[];
  };
  status: 'in_development' | 'research' | 'completed';
  visibility: 'private' | 'partner' | 'public';
  partnerTag?: LocalizedText;
  techStack: string[];
  repoUrl?: string;
  demoUrl?: string;
  featuredSpan: 'large' | 'medium';
  accentGradient: string;
  year: string;
}

export interface RepoEnrichment {
  description: LocalizedText;
  category: LocalizedText;
  highlights?: {
    pt: string[];
    en: string[];
  };
}

export interface GitHubRepo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  topics?: string[];
}

export interface TrajectoryItem {
  id: string;
  category: 'academic' | 'professional';
  sourceBadge: 'Lattes' | 'LinkedIn' | 'UESC';
  title: LocalizedText;
  organization: string;
  period: LocalizedText;
  summary: LocalizedText;
  details: {
    pt: string[];
    en: string[];
  };
  tags: string[];
  externalUrl?: string;
}

export interface InstitutionalPartner {
  id: string;
  acronym: string;
  name: LocalizedText;
  unitType: LocalizedText;
  description: LocalizedText;
  relatedProjects: string[];
  location: string;
  website?: string;
}

export interface SkillGroup {
  id: string;
  title: LocalizedText;
  subtitle: LocalizedText;
  skills: {
    name: string;
    context: LocalizedText;
  }[];
}

export interface ModalPayload {
  badge: string;
  secondaryBadge?: string;
  title: string;
  subtitle: string;
  period?: string;
  description: string;
  secondarySectionTitle?: string;
  secondarySectionBody?: string;
  bulletsTitle: string;
  bullets: string[];
  tags: string[];
  primaryLink?: {
    label: string;
    url: string;
  };
  secondaryLink?: {
    label: string;
    url: string;
  };
}
