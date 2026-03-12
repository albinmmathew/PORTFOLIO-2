import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Download } from 'lucide-react';
import { useRef } from 'react';

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative overflow-hidden min-h-screen flex items-center pt-20" id="home">
      {/* Deep Parallax Background Accent (Subtle) */}
      <motion.div 
        style={{ y: yBg }}
        className="absolute top-[20%] right-[10%] w-[40rem] h-[40rem] bg-zinc-800/20 blur-[120px] rounded-full z-0 pointer-events-none"
      />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 z-10 relative w-full">
        <motion.div style={{ y: yText, opacity }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl"
          >
            <p className="text-zinc-400 text-lg md:text-xl uppercase tracking-[0.2em] font-medium mb-6">
              Albin Mathew
            </p>
            
            <h1 className="text-zinc-100 font-heading text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[1.1] tracking-tight mb-8">
              MCA Student <br />
              <span className="text-zinc-400">Mathematics Graduate.</span>
            </h1>
            
            <p className="text-zinc-400 text-lg md:text-xl max-w-2xl leading-relaxed font-light mb-12">
              Bridging the gap between pure mathematics and advanced computing. Focusing on analytical logic, complex problem-solving, and building structured software systems.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-6 md:gap-8"
          >
            <a 
              href="/Resume.pdf" 
              download
              className="px-8 py-4 bg-zinc-100 text-zinc-950 hover:bg-zinc-300 font-medium text-sm md:text-base tracking-wide transition-colors rounded-sm flex items-center gap-2"
            >
              <Download size={18} strokeWidth={2} />
              Download CV
            </a>
            <a 
              href="#contact" 
              className="group flex items-center gap-3 text-zinc-400 hover:text-zinc-100 font-medium text-sm md:text-base uppercase tracking-widest transition-colors"
            >
              Contact
              <ArrowDown size={18} className="transform group-hover:translate-y-1 transition-transform" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

