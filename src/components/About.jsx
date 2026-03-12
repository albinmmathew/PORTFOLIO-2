import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="py-24 md:py-32" id="about">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Heading */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4"
          >
            <h2 className="text-4xl lg:text-5xl font-heading font-extrabold mb-6 leading-tight text-zinc-100">
              <span className="text-zinc-500 font-mono tracking-widest text-sm uppercase block mb-4">01.</span>
              A bit about my background.
            </h2>
            <div className="h-[1px] w-24 bg-zinc-800"></div>
          </motion.div>

          {/* Right Column: Content */}
          <div className="lg:col-span-8 lg:mt-12">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="bg-zinc-900/40 border border-zinc-800/60 p-8 md:p-12 rounded-sm space-y-6 text-zinc-400 text-lg leading-relaxed shadow-sm"
            >
              <p className="text-xl text-zinc-200 font-medium">
                I am a Mathematics graduate currently pursuing my Master of Computer Applications (MCA) at <span className="text-zinc-100 font-semibold border-b border-zinc-700 pb-0.5">Rajagiri College of Social Sciences</span>.
              </p>
              <p>
                My academic journey has always been driven by a fascination with the logical elegance of mathematical structures and their practical, real-world application in the digital realm. Having completed my undergraduate degree in Mathematics from <span className="text-zinc-300 font-medium">St. Berchmans College</span>, I developed a rigorous foundation in analytical reasoning and complex problem-solving.
              </p>
              <p>
                Now in my MCA, I am focused on translating these pure mathematical principles into efficient code and structured software systems. I enjoy the unique challenge of architecting solutions that are both computationally sound under the hood, and intuitive for the end user.
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
