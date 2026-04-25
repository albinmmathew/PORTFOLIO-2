import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Globe, Zap, Terminal } from 'lucide-react';

interface SkillCategory {
  name: string;
  icon: React.ReactNode;
  skills: string[];
}

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      name: 'Languages',
      icon: <Terminal strokeWidth={2} size={32} />,
      skills: ['Java', 'C', 'Python']
    },
    {
      name: 'Databases',
      icon: <Layers strokeWidth={2} size={32} />,
      skills: ['Oracle', 'SQLite']
    },
    {
      name: 'Web Tech',
      icon: <Globe strokeWidth={2} size={32} />,
      skills: ['HTML5', 'React', 'Django']
    },
    {
      name: 'Tooling',
      icon: <Zap strokeWidth={2} size={32} />,
      skills: ['Git', 'Jira', 'NetBeans']
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-[#eef2ff]" id="skills">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="w-12 h-[3px] bg-blue-500 rounded-full"></span>
            <span className="text-blue-500 font-black tracking-widest text-sm uppercase">Technical Arsenal</span>
          </div>
          <h2 className="text-5xl lg:text-7xl font-sans font-black leading-tight text-indigo-900 tracking-tighter uppercase">
            SKILL <span className="text-blue-500">MAPPING</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white/60 backdrop-blur-xl border border-white p-10 rounded-[3.5rem] shadow-2xl shadow-blue-100/50 hover:-translate-y-2 transition-all duration-500 group"
            >
              <div className="flex items-center gap-6 mb-10">
                <div className="text-blue-600 p-5 bg-blue-50 rounded-3xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-lg shadow-blue-100/20">
                  {category.icon}
                </div>
                <h3 className="text-3xl font-black text-indigo-900 tracking-tighter uppercase">{category.name}</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {category.skills.map(skill => (
                  <span
                    key={skill}
                    className="text-xs font-black uppercase tracking-widest px-6 py-3 bg-white border border-blue-50 text-blue-500 rounded-full shadow-sm hover:shadow-md hover:border-blue-200 transition-all cursor-default"
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
