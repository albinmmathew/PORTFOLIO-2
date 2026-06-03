import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const socials = [
    { Icon: Github, href: 'https://github.com/albinmmathew' },
    { Icon: Linkedin, href: 'https://www.linkedin.com/in/albinmmathew/' },
    { Icon: Mail, href: 'mailto:albinmathew@gmail.com' },
  ];

  return (
    <footer className="py-6 bg-[#1e1b4b] border-t border-white/5 relative overflow-hidden">
      {/* Background Noise Effect */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] mix-blend-overlay"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          
          <div className="text-xl font-black uppercase tracking-tighter text-white">
            ALBIN<span className="text-blue-500">.</span>
          </div>

          <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-white/30 text-center sm:text-left order-3 sm:order-2">
            &copy; {new Date().getFullYear()} Albin Mammen Mathew. All rights reserved.
          </p>

          <div className="flex gap-3 order-2 sm:order-3">
            {socials.map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                className="w-8 h-8 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-blue-400 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300 shadow-sm"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
