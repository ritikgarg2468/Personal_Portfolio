
import React from 'react';
import SectionWrapper from './SectionWrapper';
import { SKILLS_DATA } from '../constants';
// FIX: Import Variants type from framer-motion to correctly type animation variants.
import { motion, Variants } from 'framer-motion';

// FIX: Explicitly type cardVariants with Variants to resolve TypeScript error with the 'ease' property.
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
};

const Skills: React.FC = () => {
  return (
    <SectionWrapper
      id="skills"
      title="My Technical Skills"
      subtitle="A collection of technologies and tools I'm proficient with, from frontend to AI."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {SKILLS_DATA.map((category, index) => (
          <motion.div
            key={category.title}
            className="bg-white/50 dark:bg-slate-900/50 p-6 rounded-xl shadow-lg border border-slate-200 dark:border-slate-800"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.1 }}
          >
            <h3 className="text-xl font-bold mb-6 text-slate-800 dark:text-slate-200">
              {category.title}
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {category.skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  className="flex items-center gap-3 p-2 rounded-lg"
                  whileHover={{ 
                    scale: 1.05, 
                    backgroundColor: 'rgba(99, 102, 241, 0.1)', // indigo-500 with opacity
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <skill.Icon className="w-6 h-6 text-indigo-500" />
                  <span className="font-medium text-slate-700 dark:text-slate-300">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Skills;
