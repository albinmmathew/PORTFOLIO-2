import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-[#eef2ff] dark:from-zinc-950 dark:to-zinc-900/50 relative overflow-hidden" id="about">
      {/* Decorative Blobs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute -top-20 -right-20 w-96 h-96 bg-blue-400/20 blur-[100px] rounded-full pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

          {/* Left Column: Heading */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="w-12 h-[3px] bg-blue-500 rounded-full"></span>
              <span className="text-blue-500 font-black tracking-widest text-sm uppercase">Background & Vision</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-sans font-black leading-[0.9] text-indigo-900 dark:text-zinc-100 tracking-tighter uppercase mb-8 break-words">
              THE <span className="text-blue-500">ANALYTICAL</span> MIND
            </h2>
            <div className="relative group overflow-hidden rounded-[3rem] shadow-2xl shadow-blue-100 dark:shadow-none border border-white dark:border-zinc-800">
              <div className="absolute inset-0 bg-blue-500/10 group-hover:bg-transparent transition-colors duration-500"></div>
              <img
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1000"
                alt="Tech Setup"
                className="w-full h-[300px] md:h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          </motion.div>

          {/* Right Column: Content */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white/75 dark:bg-zinc-900/40 backdrop-blur-xl border border-white dark:border-zinc-800 p-7 md:p-8 rounded-[2.5rem] md:rounded-[3.5rem] space-y-4 md:space-y-5 text-indigo-900/70 dark:text-zinc-300 text-base md:text-xl leading-relaxed shadow-2xl shadow-blue-100/50 dark:shadow-none"
            >
              <h3 className="text-xl md:text-3xl font-black text-indigo-900 dark:text-zinc-100 uppercase tracking-tighter leading-tight">
                Mathematics Graduate turned <br />
                <span className="text-blue-600">Software Engineer.</span>
              </h3>

              <p className="font-medium">
                My academic journey is rooted in the logical elegance of mathematics. After graduating from <span className="text-blue-600 font-black">St. Berchmans College</span>, I've dedicated myself to bridging the gap between abstract analytical reasoning and high-performance computing.
              </p>

              <div className="p-6 md:p-7 bg-blue-50/50 dark:bg-zinc-800/30 rounded-2xl md:rounded-3xl border border-blue-100 dark:border-zinc-800/50 flex gap-4 md:gap-6 items-center">
                <div className="text-4xl md:text-5xl font-black text-blue-200 dark:text-zinc-700">01</div>
                <p className="text-sm md:text-base font-bold text-indigo-900 dark:text-zinc-200 leading-snug uppercase tracking-tight">
                  Currently pursuing MCA at <span className="text-blue-600 underline underline-offset-4 decoration-2 decoration-blue-200">Rajagiri College</span>, focusing on translating complex logic into scalable digital systems.
                </p>
              </div>

              <p className="font-medium italic text-sm md:text-lg">
                "I believe that code is the modern architecture of thought, where every function is a theorem and every system is a symphony of logic."
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
