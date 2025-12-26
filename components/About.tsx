
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
            Hello! I'm Ritik Garg, a data analyst with a passion for uncovering insights from complex datasets and driving data-driven decisions. My journey into data analytics began with a curiosity about patterns in information, and it has evolved into a career focused on transforming raw data into strategic business value.
          </p>
          <p>
            With expertise in Python, SQL, and visualization tools like Power BI, I excel at cleaning data, performing statistical analysis, and creating compelling dashboards. I'm committed to continuous learning, staying updated with the latest analytics techniques and tools.
          </p>
          <p>
            Outside of work, I enjoy exploring data visualization trends, reading about machine learning advancements, or hiking in nature to clear my mind for the next analytical challenge.
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
