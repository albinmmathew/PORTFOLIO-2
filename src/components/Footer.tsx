import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const socials = [
    { icon: <Github size={22} />, href: 'https://github.com/albinmmathew' },
    { icon: <Linkedin size={22} />, href: 'https://www.linkedin.com/in/albinmmathew/' },
    { icon: <Mail size={22} />, href: 'mailto:albinmathew@gmail.com' },
  ];

  return (
    <footer className="py-20 bg-[#eef2ff] border-t border-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <div className="flex flex-col items-center gap-12">

          <div className="flex flex-col items-center">
            <div className="text-3xl font-black uppercase tracking-tighter text-indigo-900 mb-2">
              ALBIN <span className="text-blue-500">MATHEW</span>
            </div>
            <div className="w-12 h-1 bg-blue-500 rounded-full"></div>
          </div>

          <div className="flex gap-10">
            {socials.map((social, i) => (
              <a
                key={i}
                href={social.href}
                className="w-14 h-14 bg-white border border-white rounded-2xl flex items-center justify-center text-blue-400 hover:bg-blue-600 hover:text-white transition-all duration-500 hover:-translate-y-2 shadow-xl shadow-blue-100/50"
              >
                {social.icon}
              </a>
            ))}
          </div>

          <div className="space-y-4">
            <p className="text-sm font-black uppercase tracking-[0.4em] text-indigo-900/40 flex items-center justify-center gap-2">
              Made with <Heart size={14} className="text-red-400 fill-red-400" /> in Kerala
            </p>
            <p className="text-xs font-bold uppercase tracking-widest text-indigo-900/30">
              &copy; {new Date().getFullYear()} Albin Mathew. All rights reserved.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
