import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Download, Sparkles, MousePointer2, Eye } from 'lucide-react';
import React, { useRef } from 'react';

const Hero: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    setMousePos({
      x: (clientX / innerWidth - 0.5) * 20,
      y: (clientY / innerHeight - 0.5) * 20
    });
  };

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={ref}
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden min-h-[100svh] flex items-center justify-center pt-32 md:pt-40 pb-20 mesh-bg"
      id="home"
    >
      {/* Dynamic Background Elements */}
      <motion.div
        animate={{ x: mousePos.x, y: mousePos.y }}
        style={{ y: y1, rotate }}
        className="absolute top-[5%] left-[10%] w-64 h-64 bg-blue-300/20 blur-[80px] rounded-full mix-blend-multiply transition-transform duration-300 ease-out"
      />
      <motion.div
        animate={{ x: -mousePos.x, y: -mousePos.y }}
        style={{ y: y2, rotate: -rotate }}
        className="absolute bottom-[10%] right-[15%] w-96 h-96 bg-indigo-300/20 blur-[100px] rounded-full mix-blend-multiply transition-transform duration-300 ease-out"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] bg-white/40 blur-[120px] rounded-full z-0"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 z-10 relative text-center pb-20">
        <motion.div style={{ opacity }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-3 px-6 py-2 bg-white dark:bg-zinc-900 border border-white dark:border-zinc-800 rounded-full mb-8 shadow-xl shadow-blue-100/50 dark:shadow-none"
          >
            <Sparkles className="text-blue-500 dark:text-blue-400 animate-pulse" size={16} />
            <span className="text-blue-600 dark:text-blue-400 text-[10px] md:text-xs font-black uppercase tracking-[0.4em]">
              Available for Innovation
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-indigo-950 dark:text-zinc-50 font-sans text-[10vw] sm:text-[9vw] md:text-[7vw] lg:text-[6.5rem] font-black leading-[0.9] tracking-tighter mb-6 md:mb-8 break-words"
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
            <p className="text-indigo-900/60 dark:text-zinc-400 text-base md:text-xl max-w-2xl leading-relaxed font-bold uppercase tracking-tight mb-6 px-4">
              MCA Student // Mathematics Graduate <br />
              <span className="text-blue-400 font-medium lowercase italic opacity-90 block mt-1">architecting logic into digital symphonies.</span>
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto px-6">
              <a
                href="/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full sm:w-auto px-8 md:px-12 py-4 md:py-6 bg-blue-600 text-white hover:bg-blue-700 font-black text-xs md:text-base uppercase tracking-widest transition-all rounded-xl md:rounded-2xl shadow-2xl shadow-blue-500/20 flex items-center justify-center gap-3 hover:-translate-y-1 active:scale-95 cursor-pointer"
              >
                <Eye className="w-5 h-5 md:w-6 md:h-6" strokeWidth={3} />
                View Resume
              </a>
              <a
                href="#projects"
                className="group w-full sm:w-auto px-8 md:px-12 py-4 md:py-6 bg-white dark:bg-zinc-900 text-indigo-950 dark:text-zinc-50 border-2 border-white dark:border-zinc-800 hover:shadow-xl transition-all rounded-xl md:rounded-2xl font-black text-xs md:text-base uppercase tracking-widest flex items-center justify-center gap-3 shadow-lg hover:-translate-y-1 cursor-pointer"
              >
                View Works
                <MousePointer2 className="w-4 h-4 md:w-5 md:h-5 group-hover:rotate-12 transition-transform" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
};

export default Hero;
