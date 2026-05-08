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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }
    }
  };

  return (
    <section className="py-24 md:py-40 bg-gradient-to-b from-white to-[#eef2ff]" id="skills">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-20"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="w-12 h-[3px] bg-blue-500 rounded-full"></span>
            <span className="text-blue-500 font-black tracking-widest text-sm uppercase">Technical Arsenal</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-sans font-black leading-tight text-indigo-900 tracking-tighter uppercase break-words">
            SKILL <span className="text-blue-500">MAPPING</span>
          </h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.name}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 40px -15px rgba(59, 130, 246, 0.2)"
              }}
              className="bg-white/75 backdrop-blur-xl border border-white p-7 md:p-8 rounded-[2.5rem] md:rounded-[3.5rem] shadow-2xl shadow-blue-100/50 transition-all duration-500 group h-full cursor-pointer"
            >
              <div className="flex items-center gap-4 md:gap-6 mb-8 md:mb-10">
                <div className="text-blue-600 p-4 md:p-5 bg-blue-50 rounded-2xl md:rounded-3xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-lg shadow-blue-100/20">
                  {category.icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-indigo-900 tracking-tighter uppercase">{category.name}</h3>
              </div>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {category.skills.map(skill => (
                  <span
                    key={skill}
                    className="text-[10px] md:text-xs font-black uppercase tracking-widest px-4 py-2 md:px-6 md:py-3 bg-white border border-blue-50 text-blue-500 rounded-full shadow-sm hover:shadow-md hover:border-blue-200 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
