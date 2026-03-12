import { motion } from 'framer-motion';
import { Github, ExternalLink, Folder } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'CivicNode (SDG 11)',
      description: 'A comprehensive Django-based platform developed to align with Sustainable Development Goal 11. Features complex data models and issue tracking to empower local civic engagement.',
      tech: ['Python', 'Django', 'SQLite', 'HTML/CSS'],
      github: 'https://github.com/albinmmathew/CivicNode',
      demo: null
    },
    {
      title: 'CurrencyWebApp',
      description: 'A specialized web interface for testing and evaluating image recognition models. It allows seamless drag-and-drop inference and visualizes crucial performance metrics like confusion matrices.',
      tech: ['Python', 'Machine Learning', 'React'],
      github: 'https://github.com/albinmmathew/CurrencyWebApp',
      demo: null
    },
    {
      title: 'Kairo Todo Planner',
      description: 'A minimalist, highly responsive daily task management application built utilizing core frontend web technologies. Focuses on user-centric design and immediate interaction feedback.',
      tech: ['JavaScript', 'HTML5', 'CSS3'],
      github: 'https://github.com/albinmmathew/TodoPlanner',
      demo: 'https://albinmmathew.github.io/TodoPlanner/'
    }
  ];

  return (
    <section className="py-24 md:py-32" id="projects">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-heading font-extrabold mb-6 leading-tight text-zinc-100">
            <span className="text-zinc-500 font-mono tracking-widest text-sm uppercase block mb-4">03.</span>
            Selected Academic Projects.
          </h2>
          <div className="h-[1px] w-24 bg-zinc-800"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-zinc-900/30 border border-zinc-800/60 p-8 flex flex-col h-full rounded-sm hover:-translate-y-2 transition-transform duration-300 group"
            >
              <div className="flex justify-between items-start mb-8">
                <Folder className="text-zinc-500 w-10 h-10 group-hover:text-zinc-300 transition-colors" strokeWidth={1} />
                <div className="flex gap-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-200 transition-colors">
                    <Github size={20} strokeWidth={1.5} />
                  </a>
                  {project.demo ? (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-200 transition-colors">
                      <ExternalLink size={20} className="" strokeWidth={1.5} />
                    </a>
                  ) : (
                    <ExternalLink size={20} className="text-zinc-700 cursor-not-allowed" strokeWidth={1.5} />
                  )}
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-4 tracking-wide text-zinc-100 group-hover:text-zinc-300 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-zinc-400 mb-8 flex-grow leading-relaxed text-sm">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map(t => (
                  <span key={t} className="text-xs font-mono px-2 py-1 bg-zinc-800/50 text-zinc-400 rounded-sm">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

