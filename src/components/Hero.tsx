import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Download, Sparkles, MousePointer2 } from 'lucide-react';
import React, { useRef } from 'react';

const Hero: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative overflow-hidden min-h-[100svh] flex items-center justify-center pt-24 md:pt-28 mesh-bg" id="home">
      {/* Dynamic Background Elements */}
      <motion.div
        style={{ y: y1, rotate }}
        className="absolute top-[5%] left-[10%] w-64 h-64 bg-blue-300/20 blur-[80px] rounded-full mix-blend-multiply"
      />
      <motion.div
        style={{ y: y2, rotate: -rotate }}
        className="absolute bottom-[10%] right-[15%] w-96 h-96 bg-indigo-300/20 blur-[100px] rounded-full mix-blend-multiply"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] bg-white/40 blur-[120px] rounded-full z-0"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 z-10 relative text-center pb-10">
        <motion.div style={{ opacity }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-3 px-6 py-2 bg-white border border-white rounded-full mb-6 shadow-xl shadow-blue-100/50"
          >
            <Sparkles className="text-blue-500 animate-pulse" size={16} />
            <span className="text-blue-600 text-[10px] md:text-xs font-black uppercase tracking-[0.4em]">
              Available for Innovation
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-indigo-950 font-sans text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[7.5rem] font-black leading-[0.85] tracking-tighter mb-4 md:mb-6 break-words"
          >
            ALBIN <br />
            <span className="text-blue-500 text-glow">MAMMEN</span> <br />
            MATHEW
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center"
          >
            <p className="text-indigo-900/60 text-base md:text-xl max-w-2xl leading-relaxed font-bold uppercase tracking-tight mb-6 px-4">
              MCA Student // Mathematics Graduate <br />
              <span className="text-blue-400 font-medium lowercase italic opacity-90 block mt-1">architecting logic into digital symphonies.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto px-6">
              <a 
                href="/Resume.pdf" 
                download
                className="group w-full sm:w-auto px-8 md:px-12 py-4 md:py-6 bg-blue-600 text-white hover:bg-blue-700 font-black text-xs md:text-base uppercase tracking-widest transition-all rounded-xl md:rounded-2xl shadow-2xl shadow-blue-500/20 flex items-center justify-center gap-3 hover:-translate-y-1 active:scale-95"
              >
                <Download size={18} md:size={22} strokeWidth={3} />
                Get Resume
              </a>
              <a 
                href="#projects" 
                className="group w-full sm:w-auto px-8 md:px-12 py-4 md:py-6 bg-white text-indigo-950 border-2 border-white hover:shadow-xl transition-all rounded-xl md:rounded-2xl font-black text-xs md:text-base uppercase tracking-widest flex items-center justify-center gap-3 shadow-lg hover:-translate-y-1"
              >
                View Works
                <MousePointer2 size={16} md:size={20} className="group-hover:rotate-12 transition-transform" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
};

export default Hero;
