
import React from 'react';
import SectionWrapper from './SectionWrapper';
import { EXPERIENCE_DATA } from '../constants';
// FIX: Import Variants type from framer-motion to correctly type animation variants.
import { motion, Variants } from 'framer-motion';
import { Briefcase, CheckCircle } from 'lucide-react';

// FIX: Explicitly type timelineItemVariants with Variants to resolve TypeScript error with the 'ease' property.
const timelineItemVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: 'easeOut'
    },
  }),
};


const Experience: React.FC = () => {
  return (
    <SectionWrapper
      id="experience"
      title="Work Experience"
      subtitle="My professional journey and key contributions in various roles."
    >
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-4 md:left-1/2 w-0.5 h-full bg-slate-300 dark:bg-slate-700 -translate-x-1/2"></div>

        <div className="space-y-12">
          {EXPERIENCE_DATA.map((item, index) => (
            <motion.div
              key={index}
              className="relative pl-12 md:pl-0"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={timelineItemVariants}
            >
              <div className="md:flex items-start md:gap-8">
                {/* Left side (desktop) / Top (mobile) */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:text-right' : 'md:order-2 md:text-left'}`}>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{item.role}</h3>
                  <p className="text-lg font-semibold text-indigo-500 dark:text-indigo-400">{item.company}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{item.duration}</p>
                </div>
                
                {/* Timeline Dot */}
                <div className="absolute left-4 top-1 -translate-x-1/2 md:left-1/2 md:top-1.5 w-8 h-8 bg-white dark:bg-slate-900 rounded-full border-4 border-slate-300 dark:border-slate-700 flex items-center justify-center">
                  <Briefcase className="w-4 h-4 text-indigo-500" />
                </div>

                {/* Right side (desktop) / Bottom (mobile) */}
                <div className={`mt-4 md:mt-0 md:w-1/2 ${index % 2 === 0 ? '' : 'md:order-1'}`}>
                  <div className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-lg border border-slate-200 dark:border-slate-800">
                    <ul className="space-y-3">
                      {item.description.map((point, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 mt-1 text-green-500 flex-shrink-0" />
                          <span className="text-slate-600 dark:text-slate-400">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Experience;
