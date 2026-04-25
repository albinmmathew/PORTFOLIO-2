import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
  ];

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-700 ${scrolled ? 'py-4' : 'py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className={`flex justify-between items-center px-8 py-4 rounded-[2rem] transition-all duration-700 ${scrolled ? 'bg-white/75 backdrop-blur-3xl border border-white/50 shadow-2xl shadow-blue-100/30' : 'bg-transparent'}`}>

          {/* Logo */}
          <motion.a
            href="#home"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 text-2xl font-black uppercase tracking-tighter text-indigo-950 group"
          >
            <div className="w-14 h-11 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-200 group-hover:rotate-[15deg] transition-transform">
              <span className="text-xl tracking-tighter">AM</span>
            </div>
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="px-6 py-2 text-xs font-black uppercase tracking-[0.2em] text-indigo-950/60 hover:text-blue-600 hover:bg-blue-50/50 rounded-full transition-all"
              >
                {link.name}
              </motion.a>
            ))}
            
            <motion.a
              href="#contact"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="ml-4 flex items-center gap-2 text-xs font-black uppercase tracking-widest px-8 py-4 bg-indigo-950 text-white rounded-2xl hover:bg-blue-600 transition-all shadow-xl shadow-indigo-100 active:scale-95"
            >
              Contact
              <ArrowUpRight size={16} />
            </motion.a>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-12 h-12 flex items-center justify-center text-indigo-900 bg-white/50 backdrop-blur-md rounded-2xl border border-white shadow-sm"
            >
              {isOpen ? <X size={24} strokeWidth={3} /> : <Menu size={24} strokeWidth={3} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 min-h-screen bg-blue-50/95 backdrop-blur-3xl z-[-1] flex flex-col items-center justify-center p-6 pt-24"
          >
            <div className="flex flex-col items-center gap-4 w-full max-w-sm">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center p-8 text-4xl font-black uppercase tracking-tighter text-indigo-950 hover:text-blue-600 bg-white/40 border border-white rounded-[2rem] transition-all"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-8 w-full text-center px-10 py-8 text-xl font-black uppercase tracking-[0.3em] bg-blue-600 text-white rounded-[2rem] shadow-2xl shadow-blue-200"
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
