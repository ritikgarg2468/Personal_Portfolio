
import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-8 flex flex-col sm:flex-row items-center justify-between">
        <p className="text-sm text-slate-600 dark:text-slate-400 text-center sm:text-left mb-4 sm:mb-0">
          &copy; {currentYear} Ritik Garg. All Rights Reserved.
        </p>
        <div className="flex items-center space-x-6">
          <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-slate-500 hover:text-indigo-500 transition-colors">
            <Github size={24} />
          </a>
          <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-slate-500 hover:text-indigo-500 transition-colors">
            <Linkedin size={24} />
          </a>
          <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-slate-500 hover:text-indigo-500 transition-colors">
            <Twitter size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
