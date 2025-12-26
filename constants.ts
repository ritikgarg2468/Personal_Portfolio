
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
  BarChart3,
  TrendingUp,
  PieChart,
  Calculator,
  FileSpreadsheet,
  Zap,
} from 'lucide-react';

export const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    title: 'Data Analysis & Programming',
    skills: [
      { name: 'Python', Icon: Code },
      { name: 'Pandas', Icon: Database },
      { name: 'NumPy', Icon: Calculator },
      { name: 'SQL', Icon: Database },
      { name: 'Jupyter', Icon: BookOpenCheck },
      { name: 'Git', Icon: GitFork },
    ],
  },
  {
    title: 'Visualization & BI Tools',
    skills: [
      { name: 'Matplotlib', Icon: BarChart3 },
      { name: 'Power BI', Icon: PieChart },
      { name: 'Tableau', Icon: TrendingUp },
      { name: 'Seaborn', Icon: BarChart3 },
      { name: 'Plotly', Icon: TrendingUp },
      { name: 'Excel', Icon: FileSpreadsheet },
    ],
  },
  {
    title: 'Machine Learning & Statistics',
    skills: [
      { name: 'Scikit-learn', Icon: BrainCircuit },
      { name: 'Statistics', Icon: Calculator },
      { name: 'Forecasting', Icon: TrendingUp },
      { name: 'Data Cleaning', Icon: Zap },
      { name: 'ETL', Icon: Database },
      { name: 'Regression Analysis', Icon: BarChart3 },
    ],
  },
  {
    title: 'Databases & Cloud',
    skills: [
      { name: 'PostgreSQL', Icon: Database },
      { name: 'MySQL', Icon: Database },
      { name: 'AWS', Icon: Cloud },
      { name: 'Azure', Icon: Cloud },
      { name: 'BigQuery', Icon: Database },
      { name: 'Docker', Icon: Cpu },
    ],
  },
];

export const PROJECTS_DATA: Project[] = [
  {
    title: 'Sales Data Analysis + Forecasting Report',
    description: 'Cleaned, processed and structured raw sales datasets using Pandas/NumPy for accurate and scalable analysis. Identified key revenue trends, sales peaks and top-performing products through detailed statistical examination. Visualized insights using Matplotlib/Power BI dashboards, presenting patterns with clarity and meaningful comparison. Implemented future sales forecasting models to assist in business planning and data-driven decision strategies.',
    tags: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Power BI', 'Forecasting', 'Statistics'],
    imageUrl: './images/sales_analysis.png',
    liveUrl: 'https://github.com/ritikgarg2468/Sales-Data-Analysis-Forecasting-Report.git',
    githubUrl: 'https://github.com/ritikgarg2468/Sales-Data-Analysis-Forecasting-Report.git',
  },
  {
    title: 'Ad Campaign Performance Analytics Dashboard',
    description: 'Collected and cleaned advertising performance data including impressions, clicks, CTR, CPC, and revenue metrics. Analyzed campaign performance patterns to identify high-engagement segments and underperforming channels. Built interactive Power BI dashboards to visualize CTR trends, spend allocation, and ROI distribution. Generated data-backed optimization suggestions to improve ad reach, reduce cost, and increase overall conversion.',
    tags: ['Power BI', 'Data Cleaning', 'CTR Analysis', 'ROI', 'Optimization', 'Visualization'],
    imageUrl: './images/ad_campaign_dashboard.png',
    liveUrl: 'https://github.com/ritikgarg2468/Ad-Campaign-Performance-Analytics-Dashboard.git',
    githubUrl: 'https://github.com/ritikgarg2468/Ad-Campaign-Performance-Analytics-Dashboard.git',
  },
];

export const EXPERIENCE_DATA: Experience[] = [
  {
    role: 'Data Analyst Intern',
    company: 'Internship Studio',
    duration: 'Jun 2024 - Jul 2024',
    description: [
      'Worked with raw datasets to clean, organize, and extract useful information using spreadsheets and Python',
      'Created basic reports and visual summaries to highlight trends, patterns, and key insights.',
      'Wrote simple SQL queries to retrieve and filter data for analysis and decision-support tasks.',
      'Gained hands-on experience in data handling, accuracy checking, and presenting findings clearly'
    ],
  },
];

export const ACHIEVEMENTS_DATA: Achievement[] = [
  {
    title: 'Certified Data Analyst',
    description: 'Earned Google Data Analytics Professional Certificate, demonstrating proficiency in data analysis, visualization, and SQL.',
    Icon: Award,
  },
  {
    title: 'Power BI Expert',
    description: 'Achieved Microsoft Power BI Data Analyst Associate certification, validating skills in data modeling and dashboard creation.',
    Icon: Trophy,
  },
  {
    title: 'Kaggle Competitor',
    description: 'Participated in multiple Kaggle competitions, achieving top 10% rankings in data science challenges.',
    Icon: BookOpenCheck,
  },
];

export const SOCIAL_LINKS = {
  github: '#https://www.github.com/ritikgarg2468/',
  linkedin: 'https://www.linkedin.com/in/ritikgarg2468/',
  twitter: 'https://x.com/ritikgarg2468',
  email: 'mailto:ritikgarg2468@gmail.com',
};
