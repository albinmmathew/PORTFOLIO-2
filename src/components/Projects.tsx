import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Box, ArrowUpRight } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo: string | null;
  category: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: 'CivicNode',
      category: 'Sustainable Development',
      description: 'A Django platform aligning with SDG 11. Features issue tracking to empower local civic engagement and sustainable urban development.',
      tech: ['Django', 'Python', 'SQLite', 'PostgreSQL'],
      github: 'https://github.com/albinmmathew/CivicNode',
      demo: null
    },
    {
      title: 'CurrencyWebApp',
      category: 'Machine Learning UI',
      description: 'Specialized interface for model evaluation. Features drag-and-drop inference and real-time visualization of performance metrics.',
      tech: ['React', 'Python', 'MLOps', 'Tailwind'],
      github: 'https://github.com/albinmmathew/CurrencyWebApp',
      demo: null
    },
    {
      title: 'Kairo Todo',
      category: 'Frontend Excellence',
      description: 'A minimalist task management system focusing on immediate interaction feedback and sleek responsive design patterns.',
      tech: ['TypeScript', 'Vite', 'Framer Motion'],
      github: 'https://github.com/albinmmathew/TodoPlanner',
      demo: 'https://albinmmathew.github.io/TodoPlanner/'
    }
  ];

  return (
    <section className="py-24 md:py-40 bg-[#eef2ff]" id="projects">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[4px] bg-blue-600 rounded-full"></div>
              <span className="text-blue-600 font-black tracking-[0.4em] text-xs uppercase">Portfolio Gallery</span>
            </div>
            <h2 className="text-6xl md:text-8xl font-sans font-black leading-[0.85] text-indigo-950 tracking-tighter uppercase">
              SELECTED <br />
              <span className="text-blue-500">PROTOTYPES</span>
            </h2>
          </div>
          <p className="text-indigo-900/50 font-bold uppercase tracking-tight max-w-[280px] text-sm leading-relaxed border-l-2 border-blue-100 pl-6">
            A collection of digital systems focusing on architectural logic and technical precision.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group relative h-full"
            >
              <div className="absolute inset-0 bg-blue-400/20 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />

              <div className="bg-white/40 backdrop-blur-3xl border border-white p-10 lg:p-12 rounded-[4rem] shadow-2xl shadow-blue-100/30 hover:shadow-blue-200/50 transition-all duration-700 flex flex-col h-full hover:-translate-y-4">

                <div className="flex justify-between items-start mb-12">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-[2rem] flex items-center justify-center shadow-2xl shadow-blue-200 group-hover:rotate-[15deg] transition-transform duration-500">
                    <Box size={32} strokeWidth={2.5} />
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 flex items-center justify-center bg-blue-50 text-blue-600 rounded-2xl hover:bg-blue-600 hover:text-white transition-all shadow-sm"
                    >
                      <Github size={20} strokeWidth={2.5} />
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 flex items-center justify-center bg-blue-50 text-blue-600 rounded-2xl hover:bg-blue-600 hover:text-white transition-all shadow-sm"
                      >
                        <ExternalLink size={20} strokeWidth={2.5} />
                      </a>
                    )}
                  </div>
                </div>

                <div className="mb-8">
                  <p className="text-blue-500 text-[10px] font-black uppercase tracking-[0.3em] mb-3">{project.category}</p>
                  <h3 className="text-3xl lg:text-4xl font-black text-indigo-950 tracking-tighter uppercase leading-none group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                </div>

                <p className="text-indigo-900/60 font-bold text-base leading-relaxed mb-12 flex-grow uppercase tracking-tight">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map(t => (
                    <span key={t} className="text-[10px] font-black uppercase tracking-widest px-5 py-2 bg-white/80 border border-blue-50 text-blue-600 rounded-full shadow-sm group-hover:border-blue-200 transition-colors">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="absolute bottom-10 right-10 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <ArrowUpRight className="text-blue-600" size={32} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
