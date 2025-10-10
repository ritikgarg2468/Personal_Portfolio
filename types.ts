
import { LucideIcon } from 'lucide-react';

export interface Skill {
  name: string;
  Icon: LucideIcon;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl: string;
}

export interface Experience {
  role: string;
  company: string;
  duration: string;
  description: string[];
}

export interface Achievement {
  title: string;
  description: string;
  Icon: LucideIcon;
}
