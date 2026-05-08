import React from 'react';
import { motion } from 'framer-motion';

const Milestones: React.FC = () => {
  const stats = [
    { label: "Projects Completed", value: "15+" },
    { label: "Logic Theorems Solved", value: "100+" },
    { label: "Lines of Precision Code", value: "10K+" },
    { label: "Cups of Coffee", value: "∞" }
  ];

  return (
    <section className="py-20 md:py-32 bg-[#1e1b4b] text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] mix-blend-overlay"></div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <motion.span 
                className="text-4xl md:text-6xl font-black text-blue-400 mb-2 group-hover:scale-110 transition-transform cursor-default"
                whileHover={{ textShadow: "0 0 20px rgba(96, 165, 250, 0.5)" }}
              >
                {stat.value}
              </motion.span>
              <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-white/40">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Milestones;
