import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-[#eef2ff]" id="education">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-12 h-[3px] bg-blue-500 rounded-full"></span>
            <span className="text-blue-500 font-black tracking-widest text-sm uppercase">Academic Foundation</span>
          </div>
          <h2 className="text-4xl lg:text-7xl font-sans font-black leading-tight text-indigo-900 tracking-tighter uppercase break-words">
            EDUCATION <span className="text-blue-500">&</span> GROWTH
          </h2>
        </motion.div>

        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white/75 backdrop-blur-xl border border-white p-7 md:p-10 rounded-[3rem] md:rounded-[3.5rem] shadow-2xl shadow-blue-100/50"
          >
            <div className="flex items-center gap-4 mb-10 md:mb-14">
              <div className="p-4 bg-blue-600 text-white rounded-2xl md:rounded-3xl shadow-lg shadow-blue-100">
                <GraduationCap className="w-7 h-7 md:w-8 md:h-8" strokeWidth={2.5} />
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-indigo-900 uppercase tracking-tighter">Academic Path</h3>
            </div>

            <div className="space-y-12 md:space-y-16 relative">
              <div className="absolute left-[20px] md:left-[23px] top-4 bottom-4 w-[2px] bg-blue-100"></div>

              <div className="relative pl-12 md:pl-16">
                <div className="absolute left-0 top-2 w-10 h-10 md:w-12 md:h-12 bg-white border-4 border-blue-500 rounded-full z-10 flex items-center justify-center shadow-lg shadow-blue-50">
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-blue-500 rounded-full animate-pulse"></div>
                </div>
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-2 md:gap-4 mb-3">
                  <h4 className="text-xl md:text-2xl font-black text-indigo-900 uppercase tracking-tight leading-tight break-words">Master of Computer Applications</h4>
                  <span className="px-4 py-1 bg-blue-600 text-white text-[10px] md:text-xs font-black uppercase tracking-widest rounded-full w-fit whitespace-nowrap">2024 — 2026</span>
                </div>
                <div className="flex items-center gap-2 text-blue-500 mb-4">
                  <MapPin className="w-3.5 h-3.5 md:w-4 md:h-4" />
                  <p className="font-bold uppercase tracking-wide text-[10px] md:text-sm">Rajagiri College of Social Sciences</p>
                </div>
                <p className="text-indigo-900/60 font-medium leading-relaxed text-sm md:text-base max-w-2xl">
                  Advanced specialized study in software development, data structures, and complex system design.
                </p>
              </div>

              <div className="relative pl-12 md:pl-16">
                <div className="absolute left-0 top-2 w-10 h-10 md:w-12 md:h-12 bg-white border-4 border-blue-200 rounded-full z-10 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-blue-200 rounded-full"></div>
                </div>
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-2 md:gap-4 mb-3">
                  <h4 className="text-xl md:text-2xl font-black text-indigo-900 uppercase tracking-tight leading-tight break-words">BSc Mathematics</h4>
                  <span className="px-4 py-1 bg-blue-100 text-blue-600 text-[10px] md:text-xs font-black uppercase tracking-widest rounded-full w-fit whitespace-nowrap">2021 — 2024</span>
                </div>
                <div className="flex items-center gap-2 text-blue-500 mb-4">
                  <MapPin className="w-3.5 h-3.5 md:w-4 md:h-4" />
                  <p className="font-bold uppercase tracking-wide text-[10px] md:text-sm">St. Berchmans College, Changanassery</p>
                </div>
                <p className="text-indigo-900/60 font-medium leading-relaxed text-sm md:text-base max-w-2xl">
                  Focus on rigorous analytical thinking, numerical methods, and abstract problem-solving foundations.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
