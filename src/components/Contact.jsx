import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-24 md:py-32 mb-10" id="contact">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 text-center md:text-left"
        >
          <h2 className="text-4xl lg:text-5xl font-heading font-extrabold mb-6 leading-tight text-zinc-100">
            <span className="text-zinc-500 font-mono tracking-widest text-sm uppercase block mb-4">05.</span>
            Get in touch.
          </h2>
          <div className="h-[1px] w-24 bg-zinc-800 mx-auto md:mx-0"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 lg:gap-16">
          
          {/* Left Column: Contact Info List */}
          <div className="md:col-span-2 flex flex-col gap-6">
            <motion.a 
              href="mailto:albinmathew@gmail.com"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="bg-zinc-900/30 border border-zinc-800/60 p-6 flex flex-col items-start gap-4 group rounded-sm hover:-translate-y-1 transition-transform"
            >
              <div className="text-zinc-500 group-hover:text-zinc-300 transition-colors"><Mail size={24} strokeWidth={1.5} /></div>
              <div>
                <p className="text-xs font-mono text-zinc-500 mb-1 uppercase tracking-widest">Email</p>
                <span className="text-zinc-200 font-medium tracking-wide group-hover:text-white transition-colors">albinmathew@gmail.com</span>
              </div>
            </motion.a>

            <motion.a 
              href="https://www.linkedin.com/in/albinmmathew/"
              target="_blank" 
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-zinc-900/30 border border-zinc-800/60 p-6 flex items-center gap-6 group rounded-sm hover:-translate-y-1 transition-transform"
            >
              <div className="text-zinc-500 group-hover:text-zinc-300 transition-colors"><Linkedin size={24} strokeWidth={1.5} /></div>
              <span className="text-zinc-400 font-medium tracking-wide group-hover:text-zinc-200 transition-colors">LinkedIn Profile</span>
            </motion.a>

            <motion.a 
              href="#"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="bg-zinc-900/30 border border-zinc-800/60 p-6 flex items-center gap-6 group rounded-sm hover:-translate-y-1 transition-transform"
            >
              <div className="text-zinc-500 group-hover:text-zinc-300 transition-colors"><Github size={24} strokeWidth={1.5} /></div>
              <span className="text-zinc-400 font-medium tracking-wide group-hover:text-zinc-200 transition-colors">GitHub Profile</span>
            </motion.a>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="px-6 py-4 flex items-center gap-6"
            >
              <div className="text-zinc-600"><MapPin size={24} strokeWidth={1.5} /></div>
              <span className="text-zinc-500 font-medium tracking-wide">Kerala, India</span>
            </motion.div>
          </div>

          {/* Right Column: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-3 bg-zinc-900/10 border border-zinc-800/50 p-8 md:p-10 rounded-sm"
          >
            <form className="flex flex-col gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-mono text-zinc-500 tracking-widest uppercase">Your Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full bg-zinc-900/60 text-zinc-200 placeholder-zinc-700 border border-zinc-800 rounded-sm px-4 py-3 pb-3.5 focus:outline-none focus:border-zinc-500 focus:bg-zinc-900 transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-mono text-zinc-500 tracking-widest uppercase">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="w-full bg-zinc-900/60 text-zinc-200 placeholder-zinc-700 border border-zinc-800 rounded-sm px-4 py-3 pb-3.5 focus:outline-none focus:border-zinc-500 focus:bg-zinc-900 transition-colors"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-mono text-zinc-500 tracking-widest uppercase">Message</label>
                <textarea 
                  placeholder="Hello, let's work together..." 
                  rows="5"
                  className="w-full bg-zinc-900/60 text-zinc-200 placeholder-zinc-700 border border-zinc-800 rounded-sm px-4 py-3 focus:outline-none focus:border-zinc-500 focus:bg-zinc-900 transition-colors resize-none"
                ></textarea>
              </div>
              <button 
                type="button" 
                className="mt-4 px-8 py-4 bg-zinc-100 text-zinc-950 font-medium tracking-wide hover:bg-zinc-300 transition-colors w-full sm:w-auto self-start rounded-sm flex items-center justify-center gap-3"
              >
                Send Message <Send size={16} strokeWidth={2} />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
