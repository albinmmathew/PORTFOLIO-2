import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Music, Cpu, Zap, Eye, Layout, Palette } from 'lucide-react';

const themes = {
  harmonic: {
    name: 'Harmonic Tech',
    bg: 'bg-zinc-950',
    text: 'text-zinc-100',
    accent: 'text-cyan-400',
    accentBg: 'bg-cyan-400',
    border: 'border-zinc-800',
    card: 'bg-zinc-900/50 backdrop-blur-xl',
    font: 'font-sans',
    heading: 'font-bold tracking-tight',
    description: 'High-performance tech aesthetic with equalizer-style bars and glowing accents.',
    vibe: 'Cyber-Rhythm'
  },
  sonic: {
    name: 'Sonic Minimalist',
    bg: 'bg-white',
    text: 'text-zinc-900',
    accent: 'text-sky-500',
    accentBg: 'bg-sky-500',
    border: 'border-zinc-200',
    card: 'bg-white shadow-xl shadow-zinc-200/50',
    font: 'font-serif',
    heading: 'font-normal italic',
    description: 'Clean luxury minimalism with circular geometry and smooth rotations.',
    vibe: 'Vinyl-Elegance'
  },
  ambient: {
    name: 'Ambient Flux',
    bg: 'bg-indigo-950',
    text: 'text-blue-50',
    accent: 'text-cyan-400',
    accentBg: 'bg-cyan-400',
    border: 'border-indigo-800',
    card: 'bg-indigo-900/30 backdrop-blur-2xl',
    font: 'font-sans',
    heading: 'font-extrabold tracking-widest uppercase',
    description: 'Organic fluid motion with glowing cyan accents and morphing deep blue background blobs.',
    vibe: 'Lava-Logic'
  },
  mono: {
    name: 'Mono Modulator',
    bg: 'bg-black',
    text: 'text-white',
    accent: 'text-red-600',
    accentBg: 'bg-red-600',
    border: 'border-white/20',
    card: 'bg-zinc-900 border-2 border-white/10',
    font: 'font-mono',
    heading: 'font-black uppercase skew-x-[-10deg]',
    description: 'Stark, avant-garde high contrast with bold monospaced typography.',
    vibe: 'Static-Avant'
  },
  solarized: {
    name: 'Solarized Gold',
    bg: 'bg-stone-950',
    text: 'text-stone-100',
    accent: 'text-amber-500',
    accentBg: 'bg-amber-500',
    border: 'border-stone-800',
    card: 'bg-stone-900/40 backdrop-blur-md',
    font: 'font-serif',
    heading: 'font-light tracking-[0.1em]',
    description: 'Luxury charcoal background with liquid gold accents and elegant serif fonts.',
    vibe: 'Luxury-Amber'
  },
  vapor: {
    name: 'Vapor Circuit',
    bg: 'bg-zinc-900',
    text: 'text-emerald-400',
    accent: 'text-emerald-500',
    accentBg: 'bg-emerald-500',
    border: 'border-emerald-900/50',
    card: 'bg-zinc-950 border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.1)]',
    font: 'font-mono',
    heading: 'font-bold uppercase tracking-tight',
    description: 'Phosphorous emerald greens on a dark matte background, inspired by retro terminals.',
    vibe: 'Retro-Mainframe'
  },
  blueprint: {
    name: 'Blueprint Sync',
    bg: 'bg-blue-900',
    text: 'text-blue-50',
    accent: 'text-white',
    accentBg: 'bg-white',
    border: 'border-blue-700',
    card: 'bg-blue-950/50 border border-white/20',
    font: 'font-sans',
    heading: 'font-semibold',
    description: 'Technical blue background with clean white lines, mimicking a structural schematic.',
    vibe: 'Draft-Schematic'
  },
  sandstone: {
    name: 'Sandstone Serif',
    bg: 'bg-[#f5f2ed]',
    text: 'text-[#4a3f35]',
    accent: 'text-[#bc6c25]',
    accentBg: 'bg-[#bc6c25]',
    border: 'border-[#e0dcd0]',
    card: 'bg-white/40 border border-[#e0dcd0]',
    font: 'font-serif',
    heading: 'font-bold tracking-tight',
    description: 'Warm sandstone background with earthy terracotta accents and elegant serif typography.',
    vibe: 'Warm-Earthy'
  },
  sky: {
    name: 'Sky Logic',
    bg: 'bg-[#eef2ff]',
    text: 'text-[#1e3a8a]',
    accent: 'text-[#3b82f6]',
    accentBg: 'bg-[#3b82f6]',
    border: 'border-white',
    card: 'bg-white/60 backdrop-blur-lg border border-white shadow-lg shadow-blue-100',
    font: 'font-sans',
    heading: 'font-extrabold uppercase',
    description: 'Soft sky blue background with crystal-clear glassmorphism and deep blue tech accents.',
    vibe: 'Soft-Aero'
  },
  mint: {
    name: 'Mint Technical',
    bg: 'bg-[#f0fdf4]',
    text: 'text-[#064e3b]',
    accent: 'text-[#10b981]',
    accentBg: 'bg-[#10b981]',
    border: 'border-[#dcfce7]',
    card: 'bg-white border-2 border-[#dcfce7] shadow-sm',
    font: 'font-mono',
    heading: 'font-bold',
    description: 'Fresh mint green background with forest green technical labels and precise grid lines.',
    vibe: 'Fresh-Mint'
  },
  pearl: {
    name: 'Pearl Music',
    bg: 'bg-[#fafaf9]',
    text: 'text-zinc-900',
    secondary: 'text-zinc-600',
    accent: 'text-zinc-500',
    accentBg: 'bg-zinc-800',
    border: 'border-zinc-300',
    card: 'bg-white/80 backdrop-blur-xl border border-zinc-200 shadow-2xl',
    font: 'font-sans',
    heading: 'font-light italic',
    description: 'Clean pearl background with subtle silver accents and high-end minimal aesthetics.',
    vibe: 'Pearl-Minimal'
  }
};

const StyleLab = () => {
  const [activeTheme, setActiveTheme] = useState('sky');
  const theme = themes[activeTheme as keyof typeof themes];

  return (
    <div className={`min-h-screen transition-colors duration-700 ${theme.bg} ${theme.text} ${theme.font} p-8 md:p-20 relative overflow-hidden`}>
      {/* Background Animated Elements */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTheme}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.2 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 pointer-events-none"
        >
          {activeTheme === 'harmonic' && (
            <div className="absolute top-1/4 right-1/4 w-[30rem] h-[30rem] bg-cyan-500/10 blur-[120px] rounded-full animate-pulse" />
          )}
          {activeTheme === 'sonic' && (
            <div className="absolute inset-0 border-[100px] border-zinc-100 rounded-full scale-[2] opacity-50" />
          )}
          {activeTheme === 'ambient' && (
            <motion.div 
              animate={{ 
                borderRadius: ["40% 60% 70% 30%", "60% 40% 30% 70%", "40% 60% 70% 30%"],
                x: [0, 50, 0],
                y: [0, -50, 0]
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-amber-500/5 blur-[100px]"
            />
          )}
        </motion.div>
      </AnimatePresence>

      <div className="max-w-6xl mx-auto relative z-10">
        <header className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`uppercase tracking-[0.3em] text-sm mb-4 ${theme.accent} font-bold`}
            >
              Interactive Style Lab
            </motion.p>
            <motion.h1 
              key={theme.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className={`text-6xl md:text-8xl ${theme.heading} ${theme.text}`}
            >
              {theme.name}
            </motion.h1>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {Object.keys(themes).map((t) => (
              <button
                key={t}
                onClick={() => setActiveTheme(t)}
                className={`px-6 py-2 rounded-full border-2 transition-all duration-300 text-sm font-bold ${
                  activeTheme === t 
                    ? `${theme.accentBg} text-white border-transparent scale-105` 
                    : `border-current opacity-70 hover:opacity-100`
                }`}
              >
                {themes[t].vibe}
              </button>
            ))}
          </div>
        </header>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            key={`${activeTheme}-content`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <p className={`text-xl md:text-2xl leading-relaxed ${theme.secondary || theme.text} font-medium`}>
              {theme.description} This preview demonstrates how colors, typography, and motion will integrate to create your unique portfolio experience.
            </p>
            
            <div className="flex items-center gap-6">
              <div className={`p-4 rounded-2xl ${theme.card} ${theme.border} border shadow-lg`}>
                <Cpu className={theme.accent} size={32} />
              </div>
              <div className={`p-4 rounded-2xl ${theme.card} ${theme.border} border shadow-lg`}>
                <Music className={theme.accent} size={32} />
              </div>
              <div className={`p-4 rounded-2xl ${theme.card} ${theme.border} border shadow-lg`}>
                <Zap className={theme.accent} size={32} />
              </div>
            </div>

            <button className={`px-10 py-5 rounded-sm font-bold uppercase tracking-widest transition-all ${theme.accentBg} ${theme.bg.includes('white') || theme.bg.includes('f5') || theme.bg.includes('f0') || theme.bg.includes('ee') ? 'text-white' : 'text-white'} hover:brightness-110 active:scale-95 shadow-2xl`}>
              Apply This Style
            </button>
          </motion.div>

          <motion.div 
            key={`${activeTheme}-card`}
            initial={{ opacity: 0, rotateY: 20, scale: 0.9 }}
            animate={{ opacity: 1, rotateY: 0, scale: 1 }}
            className={`p-10 rounded-3xl ${theme.card} border ${theme.border} aspect-square flex flex-col justify-between group cursor-pointer shadow-2xl`}
          >
            <div className="flex justify-between items-start">
              <div className={`w-12 h-12 rounded-full ${theme.accentBg} flex items-center justify-center text-white`}>
                <Layout size={24} />
              </div>
              <span className={`text-xs uppercase tracking-tighter font-bold ${theme.secondary || theme.text} opacity-60`}>Project 01 / Technical Music</span>
            </div>
            
            <div>
              <h3 className={`text-4xl mb-4 ${theme.heading} ${theme.text}`}>Digital Pulse</h3>
              <p className={`${theme.secondary || theme.text} font-medium`}>A synthesis of algorithmic patterns and melodic structures, built with React and WebAudio API.</p>
            </div>

            <div className="flex gap-2">
              {[1, 2, 3].map(i => (
                <div key={i} className={`h-1.5 flex-1 rounded-full ${theme.accentBg} opacity-20 group-hover:opacity-100 transition-opacity duration-500`} style={{ transitionDelay: `${i * 100}ms` }} />
              ))}
            </div>
          </motion.div>
        </div>

        <footer className={`mt-32 pt-8 border-t border-current flex justify-between text-xs font-bold uppercase tracking-[0.5em] ${theme.secondary || theme.text} opacity-40`}>
          <span>Tech Enthusiast Portfolio</span>
          <span>© 2026 Albin Mathew</span>
        </footer>
      </div>
    </div>
  );
};

export default StyleLab;
