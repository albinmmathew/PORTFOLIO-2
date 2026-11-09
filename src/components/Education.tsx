import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Award, Users, Trophy } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-[#eef2ff] dark:from-zinc-950 dark:to-zinc-900/50" id="education">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 md:mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-12 h-[3px] bg-blue-500 rounded-full"></span>
            <span className="text-blue-500 font-black tracking-widest text-sm uppercase">Academic Foundation & Honors</span>
          </div>
          <h2 className="text-4xl lg:text-7xl font-sans font-black leading-tight text-indigo-900 dark:text-zinc-100 tracking-tighter uppercase break-words">
            EDUCATION <span className="text-blue-500">&</span> GROWTH
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Academic Path */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 bg-white/75 dark:bg-zinc-900/40 backdrop-blur-xl border border-white dark:border-zinc-800 p-7 md:p-10 rounded-[2.5rem] md:rounded-[3.5rem] shadow-2xl shadow-blue-100/50 dark:shadow-none"
          >
            <div className="flex items-center gap-4 mb-8 md:mb-12">
              <div className="p-4 bg-blue-600 text-white rounded-2xl md:rounded-3xl shadow-lg shadow-blue-100 dark:shadow-none">
                <GraduationCap className="w-7 h-7 md:w-8 md:h-8" strokeWidth={2.5} />
              </div>
              <div>
                <span className="text-blue-500 text-[10px] font-black uppercase tracking-widest block">Trajectory</span>
                <h3 className="text-2xl md:text-3xl font-black text-indigo-900 dark:text-zinc-100 uppercase tracking-tighter">Academic Path</h3>
              </div>
            </div>

            <div className="space-y-10 md:space-y-14 relative">
              <div className="absolute left-[20px] md:left-[23px] top-4 bottom-4 w-[2px] bg-blue-100 dark:bg-zinc-800"></div>

              {/* MCA */}
              <div className="relative pl-12 md:pl-16">
                <div className="absolute left-0 top-2 w-10 h-10 md:w-12 md:h-12 bg-white dark:bg-zinc-900 border-4 border-blue-500 rounded-full z-10 flex items-center justify-center shadow-lg shadow-blue-50 dark:shadow-none">
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-blue-500 rounded-full animate-pulse"></div>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <h4 className="text-xl md:text-2xl font-black text-indigo-900 dark:text-zinc-100 uppercase tracking-tight leading-tight">Master of Computer Applications</h4>
                  <span className="px-4 py-1 bg-blue-600 text-white text-[10px] md:text-xs font-black uppercase tracking-widest rounded-full w-fit whitespace-nowrap">Expected 2027</span>
                </div>
                <div className="flex items-center gap-2 text-blue-500 mb-3">
                  <MapPin className="w-3.5 h-3.5 md:w-4 md:h-4 flex-shrink-0" />
                  <p className="font-bold uppercase tracking-wide text-[11px] md:text-sm">Rajagiri College of Social Sciences, Kalamassery</p>
                </div>
                <p className="text-indigo-900/60 dark:text-zinc-400 font-medium leading-relaxed text-sm md:text-base">
                  Advanced specialized study in software development, database architectures, and distributed systems.
                </p>
              </div>

              {/* B.Sc. Maths */}
              <div className="relative pl-12 md:pl-16">
                <div className="absolute left-0 top-2 w-10 h-10 md:w-12 md:h-12 bg-white dark:bg-zinc-900 border-4 border-blue-200 dark:border-zinc-800 rounded-full z-10 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-blue-200 dark:bg-zinc-800 rounded-full"></div>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <h4 className="text-xl md:text-2xl font-black text-indigo-900 dark:text-zinc-100 uppercase tracking-tight leading-tight">B.Sc. Mathematics</h4>
                  <span className="px-4 py-1 bg-blue-100 dark:bg-zinc-800 text-blue-600 dark:text-blue-400 text-[10px] md:text-xs font-black uppercase tracking-widest rounded-full w-fit whitespace-nowrap">2022 — 2025</span>
                </div>
                <div className="flex items-center gap-2 text-blue-500 mb-3">
                  <MapPin className="w-3.5 h-3.5 md:w-4 md:h-4 flex-shrink-0" />
                  <p className="font-bold uppercase tracking-wide text-[11px] md:text-sm">St. Berchmans College, Changanassery (CGPA: 8.43)</p>
                </div>
                <p className="text-indigo-900/60 dark:text-zinc-400 font-medium leading-relaxed text-sm md:text-base">
                  Rigorous analytical training in linear algebra, numerical analysis, abstract algebra, and mathematical logic.
                </p>
              </div>

              {/* Class XII */}
              <div className="relative pl-12 md:pl-16">
                <div className="absolute left-0 top-2 w-10 h-10 md:w-12 md:h-12 bg-white dark:bg-zinc-900 border-4 border-blue-100 dark:border-zinc-800 rounded-full z-10 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-blue-100 dark:bg-zinc-800 rounded-full"></div>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <h4 className="text-lg md:text-xl font-black text-indigo-900 dark:text-zinc-100 uppercase tracking-tight leading-tight">Higher Secondary (Class XII)</h4>
                  <span className="px-4 py-1 bg-blue-50 dark:bg-zinc-800/80 text-blue-600 dark:text-blue-400 text-[10px] md:text-xs font-black uppercase tracking-widest rounded-full w-fit whitespace-nowrap">2022</span>
                </div>
                <div className="flex items-center gap-2 text-blue-500 mb-2">
                  <MapPin className="w-3.5 h-3.5 md:w-4 md:h-4 flex-shrink-0" />
                  <p className="font-bold uppercase tracking-wide text-[11px] md:text-sm">St. Thomas HSS, Kozhencherry — 94.91%</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Achievements & Leadership */}
          <div className="lg:col-span-5 space-y-6 md:space-y-8">
            {/* National Qualifications & Honors */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white/75 dark:bg-zinc-900/40 backdrop-blur-xl border border-white dark:border-zinc-800 p-7 md:p-8 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl shadow-blue-100/50 dark:shadow-none"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-blue-50 dark:bg-zinc-800 text-blue-600 dark:text-blue-400 rounded-2xl shadow-sm">
                  <Trophy size={26} strokeWidth={2.5} />
                </div>
                <div>
                  <span className="text-blue-500 text-[10px] font-black uppercase tracking-widest block">Accreditations</span>
                  <h3 className="text-xl md:text-2xl font-black text-indigo-900 dark:text-zinc-100 uppercase tracking-tighter">Honors & Awards</h3>
                </div>
              </div>

              <div className="space-y-4">
                {/* UGC NET */}
                <div className="p-5 bg-gradient-to-br from-blue-50 to-indigo-50/50 dark:from-zinc-800/60 dark:to-zinc-800/30 rounded-2xl border border-blue-100/80 dark:border-zinc-700/60 shadow-sm">
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <span className="text-blue-600 dark:text-blue-400 text-xs font-black">June 2026</span>
                  </div>
                  <h4 className="text-base md:text-lg font-black text-indigo-950 dark:text-zinc-100 uppercase tracking-tight">UGC NET Qualified</h4>
                  <p className="text-xs md:text-sm text-indigo-900/70 dark:text-zinc-300 font-medium mt-1 leading-snug">
                    Qualified for <span className="font-bold text-blue-600 dark:text-blue-400">Assistant Professor & Admission to Ph.D.</span> in Computer Science and Applications.
                  </p>
                </div>

                {/* Subject Topper */}
                <div className="p-4 bg-white dark:bg-zinc-900/80 rounded-2xl border border-blue-50 dark:border-zinc-800 shadow-sm flex items-start gap-3">
                  <Award className="text-blue-500 flex-shrink-0 mt-0.5" size={20} />
                  <div>
                    <h5 className="text-sm md:text-base font-black text-indigo-900 dark:text-zinc-100 uppercase tracking-tight">Subject Topper (Semester 2)</h5>
                    <p className="text-xs text-indigo-900/60 dark:text-zinc-400 font-medium">Master of Computer Applications (MCA) — Rajagiri College</p>
                  </div>
                </div>

                {/* Excel Expert */}
                <div className="p-4 bg-white dark:bg-zinc-900/80 rounded-2xl border border-blue-50 dark:border-zinc-800 shadow-sm flex items-start gap-3">
                  <Award className="text-blue-500 flex-shrink-0 mt-0.5" size={20} />
                  <div>
                    <h5 className="text-sm md:text-base font-black text-indigo-900 dark:text-zinc-100 uppercase tracking-tight">MOS: Microsoft Excel Expert</h5>
                    <p className="text-xs text-indigo-900/60 dark:text-zinc-400 font-medium">Certiport (Excel & Excel 2019) — May 2024</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Leadership & Extracurriculars */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white/75 dark:bg-zinc-900/40 backdrop-blur-xl border border-white dark:border-zinc-800 p-7 md:p-8 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl shadow-blue-100/50 dark:shadow-none"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="p-3 bg-blue-50 dark:bg-zinc-800 text-blue-600 dark:text-blue-400 rounded-2xl shadow-sm">
                  <Users size={26} strokeWidth={2.5} />
                </div>
                <div>
                  <span className="text-blue-500 text-[10px] font-black uppercase tracking-widest block">Extracurriculars</span>
                  <h3 className="text-xl md:text-2xl font-black text-indigo-900 dark:text-zinc-100 uppercase tracking-tighter">Leadership</h3>
                </div>
              </div>

              <div className="p-5 bg-white dark:bg-zinc-900/80 rounded-2xl border border-blue-50 dark:border-zinc-800 shadow-sm">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h4 className="text-base font-black text-indigo-900 dark:text-zinc-100 uppercase tracking-tight">Placement Coordinator</h4>
                  <span className="text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest">Class Rep</span>
                </div>
                <p className="text-xs font-bold text-blue-500 mb-2">St. Berchmans College</p>
                <p className="text-xs md:text-sm text-indigo-900/60 dark:text-zinc-400 font-medium leading-relaxed">
                  Acted as the official liaison between students and the institutional placement cell; coordinated campus placement readiness training sessions and batch-wide recruitment drives.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
