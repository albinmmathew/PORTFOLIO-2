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
    <section className="py-24 md:py-40 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20 md:mb-32"
        >
          <div className="inline-flex items-center gap-3 mb-6 bg-blue-50 px-6 py-2 rounded-full">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-ping"></span>
            <span className="text-blue-600 font-black tracking-widest text-xs uppercase">Workflow</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-indigo-950 uppercase tracking-tighter">
            THE <span className="text-blue-500 text-glow">EXECUTION</span> STRATEGY
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[1px] bg-blue-100 -translate-y-1/2 z-0"></div>

          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative z-10 flex flex-col items-center text-center group"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 bg-white border border-blue-50 rounded-3xl flex items-center justify-center text-blue-600 shadow-xl shadow-blue-100/50 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 group-hover:-translate-y-3 mb-8">
                {step.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-black text-indigo-950 uppercase tracking-tighter mb-4">{step.title}</h3>
              <p className="text-indigo-900/60 text-sm md:text-base font-medium leading-relaxed max-w-[200px]">
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
