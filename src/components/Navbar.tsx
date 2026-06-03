import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-700 ${scrolled ? 'py-4' : 'py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className={`flex justify-between items-center px-4 md:px-8 py-2 md:py-3 rounded-[1.5rem] md:rounded-[2rem] transition-all duration-700 ${scrolled ? 'bg-white/75 dark:bg-zinc-900/75 backdrop-blur-3xl border border-white/50 dark:border-zinc-800 shadow-2xl shadow-blue-100/30 dark:shadow-black/20' : 'bg-white/40 dark:bg-zinc-900/30 backdrop-blur-md border border-white/30 dark:border-zinc-800/40 shadow-sm'}`}>

          {/* Logo */}
          <motion.a
            href="#home"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 group"
          >
            <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-600 text-white rounded-xl md:rounded-2xl flex items-center justify-center font-black text-lg md:text-xl shadow-lg shadow-blue-200 group-hover:scale-110 transition-transform">
              AM
            </div>
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-2">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                onMouseEnter={() => {
                  if (link.name !== 'Contact') setHoveredLink(link.name);
                }}
                onMouseLeave={() => {
                  if (link.name !== 'Contact') setHoveredLink(null);
                }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`relative px-4 py-2 text-[10px] md:text-xs font-black uppercase tracking-[0.2em] transition-all rounded-full border border-transparent z-10 ${link.name === 'Contact'
                    ? 'bg-blue-600 text-white hover:bg-white hover:text-blue-600 hover:border-blue-600 dark:hover:bg-zinc-950 dark:hover:text-blue-400 dark:hover:border-blue-400 shadow-lg shadow-blue-100 dark:shadow-none'
                    : 'text-indigo-950/80 dark:text-zinc-200 hover:text-blue-600 dark:hover:text-blue-400'
                  }`}
              >
                {link.name}
                {hoveredLink === link.name && link.name !== 'Contact' && (
                  <motion.div
                    layoutId="navHover"
                    className="absolute inset-0 bg-blue-50/70 dark:bg-zinc-800/60 rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.a>
            ))}

            {/* Desktop Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="ml-2 p-2.5 text-indigo-950/80 dark:text-zinc-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50/50 dark:hover:bg-zinc-800/50 rounded-full transition-all duration-300 cursor-pointer"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          {/* Mobile Menu & Toggle Row */}
          <div className="lg:hidden flex items-center gap-2">
            {/* Quick Mobile Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 text-indigo-950/80 dark:text-zinc-200 hover:bg-blue-50 dark:hover:bg-zinc-800/50 rounded-xl transition-colors cursor-pointer"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-indigo-950 dark:text-zinc-100 hover:bg-blue-50 dark:hover:bg-zinc-800/50 rounded-xl transition-colors cursor-pointer"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-[calc(100%+0.5rem)] left-6 right-6 bg-white/70 dark:bg-zinc-900/90 backdrop-blur-3xl border border-white dark:border-zinc-800 rounded-[2rem] p-8 shadow-2xl shadow-blue-200/50 dark:shadow-black/40 lg:hidden overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent pointer-events-none"></div>
            <div className="flex flex-col gap-6 relative z-10">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-xl font-black uppercase tracking-[0.2em] text-indigo-950 dark:text-zinc-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-4 w-full text-center px-8 py-5 text-lg font-black uppercase tracking-[0.2em] bg-blue-600 text-white rounded-2xl shadow-xl shadow-blue-200 dark:shadow-none"
              >
                Let's Talk
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
