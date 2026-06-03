import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Code2, Rocket, TestTube2 } from 'lucide-react';

const Process: React.FC = () => {
  const steps = [
    {
      icon: <Lightbulb size={32} />,
      title: "Conceptualize",
      desc: "Deconstructing complex problems into logical mathematical frameworks."
    },
    {
      icon: <Code2 size={32} />,
      title: "Architect",
      desc: "Building scalable and efficient systems using modern tech stacks."
    },
    {
      icon: <TestTube2 size={32} />,
      title: "Optimize",
      desc: "Refining code for maximum performance and logical precision."
    },
    {
      icon: <Rocket size={32} />,
      title: "Deploy",
      desc: "Delivering robust digital solutions that solve real-world problems."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-[#eef2ff] dark:from-zinc-950 dark:to-zinc-900/50 relative overflow-hidden" id="process">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20 md:mb-32"
        >
          <div className="inline-flex items-center gap-3 mb-6 bg-blue-50 dark:bg-zinc-900 px-6 py-2 rounded-full border border-transparent dark:border-zinc-800">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-ping"></span>
            <span className="text-blue-600 dark:text-blue-400 font-black tracking-widest text-xs uppercase">Workflow</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-indigo-950 dark:text-zinc-100 uppercase tracking-tighter">
            THE <span className="text-blue-500 text-glow">EXECUTION</span> STRATEGY
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute lg:top-12 left-0 w-full h-[1px] bg-blue-100 dark:bg-zinc-800 z-0"></div>

          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative z-10 flex flex-col items-center text-center group"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 bg-white dark:bg-zinc-900 border border-blue-50 dark:border-zinc-800 rounded-3xl flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-xl shadow-blue-100/50 dark:shadow-none group-hover:bg-blue-600 dark:group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 group-hover:-translate-y-3 mb-8 cursor-default">
                {step.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-black text-indigo-950 dark:text-zinc-100 uppercase tracking-tighter mb-4">{step.title}</h3>
              <p className="text-indigo-900/60 dark:text-zinc-400 text-sm md:text-base font-medium leading-relaxed max-w-[200px]">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
