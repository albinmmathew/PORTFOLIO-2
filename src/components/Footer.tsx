import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const socials = [
    { Icon: Github, href: 'https://github.com/albinmmathew' },
    { Icon: Linkedin, href: 'https://www.linkedin.com/in/albinmmathew/' },
    { Icon: Mail, href: 'mailto:albinmmathew@gmail.com' },
  ];

  return (
    <footer className="py-8 bg-blue-600 dark:bg-blue-950 border-t border-blue-500 dark:border-blue-900/60 relative overflow-hidden text-white transition-colors duration-300">
      {/* Background Noise Effect */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] mix-blend-overlay pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          
          <div className="text-xl font-black uppercase tracking-tighter text-white">
            ALBIN<span className="text-blue-200 dark:text-blue-400">.</span>
          </div>

          <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-blue-100 dark:text-blue-200/70 text-center sm:text-left order-3 sm:order-2">
            &copy; {new Date().getFullYear()} Albin Mammen Mathew. All rights reserved.
          </p>

          <div className="flex gap-3 order-2 sm:order-3">
            {socials.map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="w-9 h-9 bg-white/10 dark:bg-blue-900/40 border border-white/20 dark:border-blue-800/60 rounded-xl flex items-center justify-center text-white dark:text-blue-200 hover:bg-white hover:text-blue-600 dark:hover:bg-blue-600 dark:hover:text-white dark:hover:border-blue-600 transition-all duration-300 shadow-sm"
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
