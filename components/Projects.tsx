
import React from 'react';
import SectionWrapper from './SectionWrapper';
import { PROJECTS_DATA } from '../constants';
import { Github, ExternalLink } from 'lucide-react';
// FIX: Import Variants type from framer-motion to correctly type animation variants.
import { motion, Variants } from 'framer-motion';

// FIX: Explicitly type cardVariants with Variants to resolve TypeScript error with the 'ease' property.
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
};

const Projects: React.FC = () => {
  return (
    <SectionWrapper
      id="projects"
      title="Featured Projects"
      subtitle="A selection of my work. Each project showcases my ability to solve problems and deliver quality code."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS_DATA.map((project, index) => (
          <motion.div
            key={project.title}
            className="bg-white dark:bg-slate-900 rounded-lg overflow-hidden shadow-xl border border-slate-200 dark:border-slate-800 flex flex-col"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">
                {project.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4 flex-grow">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-semibold px-2.5 py-1 bg-indigo-100 text-indigo-800 dark:bg-indigo-900/50 dark:text-indigo-300 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-auto pt-4 flex items-center justify-end space-x-4">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 dark:text-slate-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
                  aria-label={`GitHub repository for ${project.title}`}
                >
                  <Github size={24} />
                </a>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-500 dark:text-slate-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
                    aria-label={`Live demo of ${project.title}`}
                  >
                    <ExternalLink size={24} />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Projects;
