import { motion } from 'framer-motion';
import { Layers, Globe, Zap, Terminal } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    { 
      name: 'Programming Languages', 
      icon: <Terminal strokeWidth={1} size={32} />, 
      skills: ['Java', 'C', 'Python'] 
    },
    { 
      name: 'Databases', 
      icon: <Layers strokeWidth={1} size={32} />, 
      skills: ['Oracle Database', 'SQLite'] 
    },
    { 
      name: 'Web Technologies', 
      icon: <Globe strokeWidth={1} size={32} />, 
      skills: ['HTML5', 'Django'] 
    },
    { 
      name: 'Tools & Platforms', 
      icon: <Zap strokeWidth={1} size={32} />, 
      skills: ['Git / GitHub', 'Jira', 'Apache NetBeans'] 
    }
  ];

  return (
    <section className="py-24 md:py-32" id="skills">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-heading font-extrabold mb-6 leading-tight text-zinc-100">
            <span className="text-zinc-500 font-mono tracking-widest text-sm uppercase block mb-4">02.</span>
            Technical Expertise.
          </h2>
          <div className="h-[1px] w-24 bg-zinc-800"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-zinc-900/30 border border-zinc-800/60 p-8 md:p-10 rounded-sm hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="flex flex-col gap-6 mb-8">
                <div className="text-zinc-500">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold mb-0 text-zinc-200 tracking-wide">{category.name}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map(skill => (
                  <span 
                    key={skill} 
                    className="text-sm font-mono px-4 py-2 bg-zinc-800/50 text-zinc-400 rounded-sm border border-zinc-700/50 hover:text-zinc-200 hover:border-zinc-600 transition-colors cursor-default"
                  >
                    {skill}
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

export default Skills;
