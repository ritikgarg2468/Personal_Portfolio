
import React from 'react';
// FIX: Import Variants type from framer-motion to correctly type animation variants.
import { motion, Variants } from 'framer-motion';
import { Download, Send } from 'lucide-react';

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  // FIX: Explicitly type itemVariants with Variants to resolve TypeScript error with the 'ease' property.
  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
        {/* Aurora Background */}
        <div className="absolute top-0 left-0 w-full h-full -z-10">
            <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-gradient-to-r from-indigo-500/30 to-purple-500/30 rounded-full filter blur-3xl opacity-50 animate-aurora"></div>
            <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full filter blur-3xl opacity-50 animate-aurora [animation-delay:3s]"></div>
        </div>

      <motion.div
        className="max-w-3xl px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 dark:from-white dark:via-slate-300 dark:to-white"
          variants={itemVariants}
        >
          Ritik Garg
        </motion.h1>

        <motion.p
          className="mt-4 text-lg md:text-2xl font-semibold text-slate-700 dark:text-slate-300"
          variants={itemVariants}
        >
          Full Stack Developer | AI & DevOps Enthusiast
        </motion.p>

        <motion.p
          className="mt-6 max-w-xl mx-auto text-base md:text-lg text-slate-600 dark:text-slate-400"
          variants={itemVariants}
        >
          I build elegant, high-performance web applications and explore the frontiers of AI. Passionate about clean code, scalable architecture, and creating impactful digital experiences.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          variants={itemVariants}
        >
          <a
            href="/Ritik_Garg_Resume.pdf"
            download
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 font-semibold text-white bg-indigo-600 rounded-lg shadow-lg hover:bg-indigo-700 transition-transform hover:scale-105"
          >
            <Download size={18} />
            View Ritik_Garg_Resume
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 font-semibold text-slate-800 dark:text-slate-200 bg-slate-200 dark:bg-slate-800 rounded-lg shadow-lg hover:bg-slate-300 dark:hover:bg-slate-700 transition-transform hover:scale-105"
          >
            <Send size={18} />
            Contact Me
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
