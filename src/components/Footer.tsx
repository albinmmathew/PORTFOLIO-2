import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const socials = [
    { icon: <Github size={22} />, href: 'https://github.com/albinmmathew' },
    { icon: <Linkedin size={22} />, href: 'https://www.linkedin.com/in/albinmmathew/' },
    { icon: <Mail size={22} />, href: 'mailto:albinmathew@gmail.com' },
  ];

  return (
    <footer className="py-8 bg-gradient-to-b from-[#eef2ff] to-white border-t border-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <div className="flex flex-col items-center gap-10">

          <div className="flex flex-col items-center">
            <div className="text-3xl font-black uppercase tracking-tighter text-indigo-900 mb-1">
              AM
            </div>
            <div className="w-8 h-1 bg-blue-500 rounded-full"></div>
          </div>

          <div className="flex gap-6 md:gap-8">
            {socials.map((social, i) => (
              <a
                key={i}
                href={social.href}
                className="w-12 h-12 md:w-14 md:h-14 bg-white border border-white rounded-2xl flex items-center justify-center text-blue-400 hover:bg-blue-600 hover:text-white transition-all duration-500 hover:-translate-y-2 shadow-xl shadow-blue-100/50"
              >
                {social.icon}
              </a>
            ))}
          </div>

          <div className="space-y-2">
            <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-indigo-900/30">
              &copy; {new Date().getFullYear()} Albin Mammen Mathew. All rights reserved.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
