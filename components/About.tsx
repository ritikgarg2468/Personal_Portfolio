
import React from 'react';
import SectionWrapper from './SectionWrapper';
import { Download } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <SectionWrapper id="about" title="About Me">
      <div className="grid md:grid-cols-5 gap-10 md:gap-16 items-center">
        <motion.div 
          className="md:col-span-2"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <img
            src="./images/Ritik_Garg.jpg"
            alt="Ritik Garg"
            className="rounded-lg w-full max-w-sm mx-auto shadow-2xl"
          />
        </motion.div>
        <div className="md:col-span-3 text-lg text-slate-600 dark:text-slate-400 space-y-6">
          <p>
            Hello! I'm Ritik Garg, a software developer with a deep passion for building beautiful, functional, and user-centric web applications. My journey into technology started with a fascination for how bits and bytes could create immersive digital experiences, and it has since evolved into a career dedicated to professional craftsmanship.
          </p>
          <p>
            With a strong foundation in both frontend and backend technologies, I enjoy tackling complex problems and turning ideas into reality. I'm a lifelong learner, constantly exploring new technologies, and currently diving deep into the world of AI and its applications.
          </p>
          <p>
            When I'm not coding, you can find me exploring hiking trails, experimenting with new recipes, or contributing to open-source projects.
          </p>
          <div className="pt-4">
            <a
              href="/Ritik_Garg_Resume.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-white bg-indigo-600 rounded-lg shadow-lg hover:bg-indigo-700 transition-transform hover:scale-105"
            >
              <Download size={18} />
              Download Ritik_Garg_Resume
            </a>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
