import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const socials = [
    { Icon: Github, href: 'https://github.com/albinmmathew' },
    { Icon: Linkedin, href: 'https://www.linkedin.com/in/albinmmathew/' },
    { Icon: Mail, href: 'mailto:albinmathew@gmail.com' },
  ];

  return (
    <footer className="py-12 bg-[#1e1b4b] relative overflow-hidden">
      {/* Background Noise Effect */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] mix-blend-overlay"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center relative z-10">
        <div className="flex flex-col items-center gap-8">

          <div className="flex flex-col items-center">
            <div className="text-3xl font-black uppercase tracking-tighter text-white mb-1">
              ALBIN<span className="text-blue-500">.</span>
            </div>
            <div className="w-10 h-[2px] bg-blue-500/50 rounded-full"></div>
          </div>

          <div className="flex gap-4 md:gap-5">
            {socials.map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                className="w-10 h-10 md:w-12 md:h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-blue-400 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-500 hover:-translate-y-1 shadow-2xl shadow-black/20"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>

          <div className="space-y-2">
            <p className="text-[10px] font-bold uppercase tracking-widest text-white/20">
              &copy; {new Date().getFullYear()} Albin Mammen Mathew. All rights reserved.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
