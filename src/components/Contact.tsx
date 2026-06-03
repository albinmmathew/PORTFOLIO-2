import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MapPin, Send, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-[#eef2ff] dark:from-zinc-950 dark:to-zinc-900/50" id="contact">
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
            <span className="text-blue-500 font-black tracking-widest text-sm uppercase">Get In Touch</span>
          </div>
          <h2 className="text-4xl lg:text-7xl font-sans font-black leading-tight text-indigo-900 dark:text-zinc-100 tracking-tighter uppercase break-words">
            LET'S <span className="text-blue-500 text-glow">CONNECT</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">

          {/* Left Column: Info */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/75 dark:bg-zinc-900/40 backdrop-blur-xl border border-white dark:border-zinc-800 p-6 md:p-7 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl shadow-blue-100/50 dark:shadow-none space-y-6"
            >
              <div className="flex items-center gap-4 mb-2">
                <div className="p-3 bg-blue-50 dark:bg-zinc-800 text-blue-600 dark:text-blue-400 rounded-2xl">
                  <MessageSquare size={24} />
                </div>
                <h3 className="text-2xl font-black text-indigo-900 dark:text-zinc-100 uppercase tracking-tighter">Contact Info</h3>
              </div>

              <div className="space-y-6">
                <a href="mailto:albinmathew@gmail.com" className="flex items-center gap-4 md:gap-6 group">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-50 dark:bg-zinc-800 text-blue-600 dark:text-blue-400 rounded-xl md:rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 flex-shrink-0">
                    <Mail size={20} />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-[10px] font-black text-blue-400 uppercase tracking-[0.2em] mb-1">Email</p>
                    <p className="font-bold text-indigo-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors tracking-tight truncate max-w-full">albinmathew@gmail.com</p>
                  </div>
                </a>

                <a href="https://www.linkedin.com/in/albinmmathew/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 md:gap-6 group">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-50 dark:bg-zinc-800 text-blue-600 dark:text-blue-400 rounded-xl md:rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 flex-shrink-0">
                    <Linkedin size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-blue-400 uppercase tracking-[0.2em] mb-1">LinkedIn</p>
                    <p className="font-bold text-indigo-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors tracking-tight">albinmmathew</p>
                  </div>
                </a>

                <a href="https://github.com/albinmmathew" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 md:gap-6 group">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-50 dark:bg-zinc-800 text-blue-600 dark:text-blue-400 rounded-xl md:rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 flex-shrink-0">
                    <Github size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-blue-400 uppercase tracking-[0.2em] mb-1">GitHub</p>
                    <p className="font-bold text-indigo-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors tracking-tight">albinmmathew</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 md:gap-6 group pt-4 border-t border-blue-50 dark:border-zinc-800">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-white dark:bg-zinc-800 text-blue-300 dark:text-zinc-500 rounded-xl md:rounded-2xl flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-blue-400 uppercase tracking-[0.2em] mb-1">Location</p>
                    <p className="font-bold text-indigo-900/60 dark:text-zinc-400 tracking-tight">Kerala, India</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-white/75 dark:bg-zinc-900/40 backdrop-blur-xl border border-white dark:border-zinc-800 p-8 md:p-14 rounded-[2.5rem] md:rounded-[3.5rem] shadow-2xl shadow-blue-100/50 dark:shadow-none"
          >
            <form className="space-y-6 md:space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div className="space-y-3">
                  <label className="text-xs font-black text-blue-400 uppercase tracking-[0.3em] ml-2">Name</label>
                  <input
                    type="text"
                    placeholder="Albin Mathew"
                    className="w-full bg-white/50 dark:bg-zinc-900/30 border-2 border-blue-50 dark:border-zinc-800 rounded-2xl px-6 py-4 text-indigo-900 dark:text-zinc-100 font-bold placeholder:text-blue-200 dark:placeholder:text-zinc-700 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-all shadow-sm"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-black text-blue-400 uppercase tracking-[0.3em] ml-2">Email</label>
                  <input
                    type="email"
                    placeholder="email@domain.com"
                    className="w-full bg-white/50 dark:bg-zinc-900/30 border-2 border-blue-50 dark:border-zinc-800 rounded-2xl px-6 py-4 text-indigo-900 dark:text-zinc-100 font-bold placeholder:text-blue-200 dark:placeholder:text-zinc-700 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-all shadow-sm"
                  />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-xs font-black text-blue-400 uppercase tracking-[0.3em] ml-2">Message</label>
                <textarea
                  placeholder="Describe your project..."
                  rows={5}
                  className="w-full bg-white/50 dark:bg-zinc-900/30 border-2 border-blue-50 dark:border-zinc-800 rounded-[2rem] px-6 py-5 text-indigo-900 dark:text-zinc-100 font-bold placeholder:text-blue-200 dark:placeholder:text-zinc-700 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-all shadow-sm resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full md:w-auto px-10 py-5 bg-blue-600 text-white font-black uppercase tracking-widest rounded-full hover:bg-blue-700 transition-all shadow-2xl shadow-blue-200 dark:shadow-none flex items-center justify-center gap-4 active:scale-95 group cursor-pointer"
              >
                Send Signal
                <Send size={20} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
