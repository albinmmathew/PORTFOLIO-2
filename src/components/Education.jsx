import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  return (
    <section className="py-24 md:py-32" id="education">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-heading font-extrabold mb-6 leading-tight text-zinc-100">
            <span className="text-zinc-500 font-mono tracking-widest text-sm uppercase block mb-4">04.</span>
            Academic Background.
          </h2>
          <div className="h-[1px] w-24 bg-zinc-800"></div>
        </motion.div>

        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="bg-zinc-900/40 border border-zinc-800/60 p-8 md:p-12 rounded-sm"
          >
            <div className="flex items-center gap-4 mb-10 pb-6 border-b border-zinc-800">
              <GraduationCap className="text-zinc-300" size={28} strokeWidth={1.5} />
              <h3 className="text-2xl font-bold text-zinc-100 mb-0">Education</h3>
            </div>
            
            <div className="space-y-12">
              <div className="relative pl-6 border-l border-zinc-800">
                <div className="absolute w-3 h-3 bg-zinc-600 rounded-full -left-[6.5px] top-1.5"></div>
                <p className="text-sm font-mono text-zinc-500 mb-2 uppercase tracking-wider">Present</p>
                <h4 className="text-xl font-semibold text-zinc-200 mb-1">Master of Computer Applications (MCA)</h4>
                <p className="text-zinc-400">Rajagiri College of Social Sciences</p>
              </div>
              
              <div className="relative pl-6 border-l border-zinc-800">
                <div className="absolute w-3 h-3 bg-zinc-800 rounded-full -left-[6.5px] top-1.5 border border-zinc-700"></div>
                <p className="text-sm font-mono text-zinc-500 mb-2 uppercase tracking-wider">Completed</p>
                <h4 className="text-xl font-semibold text-zinc-200 mb-1">BSc Mathematics</h4>
                <p className="text-zinc-400">St. Berchmans College, Changanassery</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
