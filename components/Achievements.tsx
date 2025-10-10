
import React from 'react';
import SectionWrapper from './SectionWrapper';
import { ACHIEVEMENTS_DATA } from '../constants';
// FIX: Import Variants type from framer-motion to correctly type animation variants.
import { motion, Variants } from 'framer-motion';

// FIX: Explicitly type cardVariants with Variants to resolve TypeScript error with the 'ease' property.
const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
};

const Achievements: React.FC = () => {
  return (
    <SectionWrapper
      id="achievements"
      title="Achievements & Certifications"
      subtitle="Recognitions and milestones in my development career."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {ACHIEVEMENTS_DATA.map((achievement, index) => (
          <motion.div
            key={achievement.title}
            className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-6 rounded-xl shadow-lg border border-slate-200 dark:border-slate-800 text-center"
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
            <div className="inline-block p-4 bg-indigo-100 dark:bg-indigo-900/50 rounded-full mb-4">
              <achievement.Icon className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
              {achievement.title}
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              {achievement.description}
            </p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Achievements;
