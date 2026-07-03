/**
 * Shared Type Definitions for the Creative Developer Portfolio
 */

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  category: 'WordPress Works' | 'Design';
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string; // Lucide icon name
  skills: string[];
}

export interface ExpertiseItem {
  id: string;
  title: string;
  description: string;
  icon: string; // Lucide icon name
  features: string[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
  tags: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
}
