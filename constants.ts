
import { Project, SkillCategory, Experience, Achievement } from './types';
import {
  Code,
  Server,
  Database,
  Cloud,
  BrainCircuit,
  Antenna,
  GitFork,
  Rocket,
  Palette,
  Component,
  TestTube2,
  Cpu,
  Award,
  Trophy,
  BookOpenCheck,
  MessageCircleMore,
  Github,
  Linkedin,
  Twitter,
  Mail,
} from 'lucide-react';

export const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', Icon: Component },
      { name: 'TypeScript', Icon: Code },
      { name: 'Next.js', Icon: Rocket },
      { name: 'Tailwind CSS', Icon: Palette },
      { name: 'Framer Motion', Icon: Code },
      { name: 'Jest', Icon: TestTube2 },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', Icon: Server },
      { name: 'Express', Icon: Server },
      { name: 'Python', Icon: Code },
      { name: 'PostgreSQL', Icon: Database },
      { name: 'MongoDB', Icon: Database },
      { name: 'GraphQL', Icon: GitFork },
    ],
  },
  {
    title: 'DevOps & Cloud',
    skills: [
      { name: 'Docker', Icon: Cpu },
      { name: 'AWS', Icon: Cloud },
      { name: 'Vercel', Icon: Cloud },
      { name: 'Git', Icon: GitFork },
      { name: 'CI/CD', Icon: Rocket },
      { name: 'Terraform', Icon: Cloud },
    ],
  },
  {
    title: 'AI & Machine Learning',
    skills: [
      { name: 'PyTorch', Icon: BrainCircuit },
      { name: 'Gemini API', Icon: Antenna },
      { name: 'LangChain', Icon: GitFork },
      { name: 'Hugging Face', Icon: BrainCircuit },
      { name: 'Scikit-learn', Icon: TestTube2 },
      { name: 'Jupyter', Icon: BookOpenCheck },
    ],
  },
];

export const PROJECTS_DATA: Project[] = [
  {
    title: 'Quick AI',
    description: 'An AI-powered SaaS platform that integrates the Gemini API for intelligent content generation, image creation, and text summarization. Built using Next.js, TypeScript, and Tailwind CSS with PostgreSQL for data management and Clerk for authentication.',
    tags: ['React', 'Gemini API', 'PostgreSQL', 'Clerk', 'Docker', 'CI/CD'],
    imageUrl: './images/Quick_AI.png',
    liveUrl: 'https://quick-ai-wd5r.vercel.app/',
    githubUrl: 'https://github.com/ritikgarg2468/Quick-AI.git',
  },
  {
    title: 'URL Shortener',
    description: 'A full-stack URL shortening application that allows users to create personalized short links, manage URLs, and track redirections. Built with React, Node.js, and MongoDB with secure JWT-based authentication.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'REST API'],
    imageUrl: './images/URL_Shortener.png',
    liveUrl: 'https://url-shortner-delta-liart.vercel.app/',
    githubUrl: 'https://github.com/ritikgarg2468/URL-Shortener.git',
  },
  {
    title: 'Wanderlust',
    description: 'A full-stack rental listing platform where users can explore, create, and manage property listings. Includes authentication, reviews, and secure CRUD operations with image uploads and validations.',
    tags: ['EJS', 'Express', 'Node.js', 'MongoDB', 'REST API', 'JWT', 'Multer'],
    imageUrl: './images/Wanderlust.png',
    liveUrl: 'https://wanderlust-3u5p.onrender.com/listings',
    githubUrl: 'https://github.com/ritikgarg2468/Wanderlust.git',
  },
  {
    title: 'TaskTrack',
    description: 'A full-stack task management application that enables users to register, log in, and manage tasks with priorities, due dates, and statuses. Built with React (Vite) for the frontend and Node.js/Express/MongoDB for the backend, featuring JWT-based authentication and a responsive UI.',
    tags: ['React', 'Vite', 'Node.js', 'Express', 'MongoDB', 'JWT',],
    imageUrl: './images/Task_Track.png',
    liveUrl: 'https://inzint-full-stack-assignment-task-t.vercel.app/',
    githubUrl: 'https://github.com/ritikgarg2468/Inzint-Full-Stack-Assignment-TaskTrack?tab=readme-ov-file'
  },
];

export const EXPERIENCE_DATA: Experience[] = [
  {
    role: 'Tech Contributor',
    company: 'Girlscript Foundation',
    duration: 'Sep 2025 - Dec 2025',
    description: [
      'Contributed to open-source projects under GirlScript Foundation.',
      'Learned collaborative development using Git and GitHub.',
      'Improved coding skills by working on real-world web development tasks.',
      'Gained experience in teamwork and open-source contribution workflow.',
    ],
  },
  {
    role: 'Software Development Engineer Intern',
    company: 'Bluestock Fintech',
    duration: 'Aug 2024 - Sep 2024',
    description: [
      'Collaborated with teams to design and integrate features, enhancing user experience and functionality.',
      'Designed financial dashboards with React.js and Angular.js, providing real-time analytics and insights.',
      'Developed high-performance APIs with Node.js and Express.js for seamless fintech data integration.',
      'Optimized MongoDB operations with efficient schemas and queries, improving performance by 80%.',
    ],
  },
  {
    role: 'Full Stack Developer Intern',
    company: 'Coding Raja Technologies',
    duration: 'Jun 2024 - Jul 2024',
    description: [
      'Learned the basics of building web applications using React.',
      'Practiced writing and testing simple code to understand reliability and quality.',
      'Gained experience using Git for version control and learned how teams work with Agile methods.',
    ],
  },
];

export const ACHIEVEMENTS_DATA: Achievement[] = [
  {
    title: 'University Topper',
    description: 'Achieved a top 10 rank among 5000+ students in the university for academic and project excellence.',
    Icon: Trophy,
  },
  {
    title: 'AWS Certified Developer',
    description: 'Earned the AWS Certified Developer - Associate certification, validating technical expertise in developing and maintaining applications on AWS.',
    Icon: Award,
  },
  {
    title: 'Open Source Contributor',
    description: 'Contributed to several popular open-source projects, including documentation improvements and bug fixes for a major UI library.',
    Icon: BookOpenCheck,
  },
];

export const SOCIAL_LINKS = {
  github: '#https://www.github.com/ritikgarg2468/',
  linkedin: 'https://www.linkedin.com/in/ritikgarg2468/',
  twitter: 'https://x.com/ritikgarg2468',
  email: 'mailto:ritikgarg2468@gmail.com',
};
