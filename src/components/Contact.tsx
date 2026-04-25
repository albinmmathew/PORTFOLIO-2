import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MapPin, Send, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section className="py-24 md:py-32" id="contact">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="w-12 h-[3px] bg-blue-500 rounded-full"></span>
            <span className="text-blue-500 font-black tracking-widest text-sm uppercase">Get In Touch</span>
          </div>
          <h2 className="text-5xl lg:text-7xl font-sans font-black leading-tight text-indigo-900 tracking-tighter uppercase">
            LET'S <span className="text-blue-500 text-glow">CONNECT</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Column: Info */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/60 backdrop-blur-xl border border-white p-8 rounded-[3rem] shadow-2xl shadow-blue-100/50 space-y-8"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl">
                  <MessageSquare size={24} />
                </div>
                <h3 className="text-2xl font-black text-indigo-900 uppercase tracking-tighter">Contact Info</h3>
              </div>

              <div className="space-y-6">
                <a href="mailto:albinmathew@gmail.com" className="flex items-center gap-6 group">
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <Mail size={22} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-blue-400 uppercase tracking-[0.2em] mb-1">Email</p>
                    <p className="font-bold text-indigo-900 group-hover:text-blue-600 transition-colors uppercase tracking-tight">albinmathew@gmail.com</p>
                  </div>
                </a>

                <a href="https://www.linkedin.com/in/albinmmathew/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group">
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <Linkedin size={22} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-blue-400 uppercase tracking-[0.2em] mb-1">LinkedIn</p>
                    <p className="font-bold text-indigo-900 group-hover:text-blue-600 transition-colors uppercase tracking-tight">albinmmathew</p>
                  </div>
                </a>

                <a href="https://github.com/albinmmathew" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group">
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <Github size={22} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-blue-400 uppercase tracking-[0.2em] mb-1">GitHub</p>
                    <p className="font-bold text-indigo-900 group-hover:text-blue-600 transition-colors uppercase tracking-tight">albinmmathew</p>
                  </div>
                </a>

                <div className="flex items-center gap-6 group pt-4 border-t border-blue-50">
                  <div className="w-12 h-12 bg-white text-blue-300 rounded-2xl flex items-center justify-center">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-blue-400 uppercase tracking-[0.2em] mb-1">Location</p>
                    <p className="font-bold text-indigo-900/60 uppercase tracking-tight">Kerala, India</p>
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
            className="lg:col-span-7 bg-white/60 backdrop-blur-xl border border-white p-10 md:p-14 rounded-[3.5rem] shadow-2xl shadow-blue-100/50"
          >
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-xs font-black text-blue-400 uppercase tracking-[0.3em] ml-2">Name</label>
                  <input
                    type="text"
                    placeholder="ALBIN MATHEW"
                    className="w-full bg-white/50 border-2 border-blue-50 rounded-2xl px-6 py-4 text-indigo-900 font-bold placeholder:text-blue-200 focus:outline-none focus:border-blue-500 transition-all shadow-sm"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-black text-blue-400 uppercase tracking-[0.3em] ml-2">Email</label>
                  <input
                    type="email"
                    placeholder="EMAIL@DOMAIN.COM"
                    className="w-full bg-white/50 border-2 border-blue-50 rounded-2xl px-6 py-4 text-indigo-900 font-bold placeholder:text-blue-200 focus:outline-none focus:border-blue-500 transition-all shadow-sm"
                  />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-xs font-black text-blue-400 uppercase tracking-[0.3em] ml-2">Message</label>
                <textarea
                  placeholder="DESCRIBE YOUR PROJECT..."
                  rows={5}
                  className="w-full bg-white/50 border-2 border-blue-50 rounded-[2rem] px-6 py-5 text-indigo-900 font-bold placeholder:text-blue-200 focus:outline-none focus:border-blue-500 transition-all shadow-sm resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full md:w-auto px-12 py-5 bg-blue-600 text-white font-black uppercase tracking-widest rounded-full hover:bg-blue-700 transition-all shadow-2xl shadow-blue-200 flex items-center justify-center gap-4 active:scale-95 group"
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
