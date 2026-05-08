import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onFinished?: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onFinished }) => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [statusIndex, setStatusIndex] = useState(0);

  const statuses = [
    "Initializing Logic",
    "Loading Assets",
    "Configuring UI",
    "Optimizing Performance",
    "Ready to Deploy"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setLoading(false);
            if (onFinished) onFinished();
          }, 1000);
          return 100;
        }
        const next = prev + Math.random() * 12;
        return next > 100 ? 100 : next;
      });
    }, 200);

    return () => clearInterval(timer);
  }, [onFinished]);

  useEffect(() => {
    setStatusIndex(Math.floor((progress / 100) * (statuses.length - 1)));
  }, [progress]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            y: -100,
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#eef2ff] overflow-hidden"
        >
          {/* Background Effects matching the theme */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] mix-blend-overlay"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] bg-blue-300/20 blur-[120px] rounded-full" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          </div>

          <div className="relative z-10 flex flex-col items-center">
            {/* Logo/Name Animation */}
            <div className="mb-8 overflow-hidden">
              <motion.h1
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-indigo-950 font-black text-6xl md:text-8xl tracking-tighter"
              >
                AMM<span className="text-blue-500 text-glow">.</span>
              </motion.h1>
            </div>

            {/* Progress Bar Container */}
            <div className="w-64 h-[2px] bg-indigo-900/10 rounded-full overflow-hidden relative">
              <motion.div
                className="absolute inset-y-0 left-0 bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.5)]"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>

            {/* Loading Text */}
            <div className="mt-4 flex flex-col items-center gap-1">
              <div className="flex items-center gap-2">
                <motion.span 
                  key={statusIndex}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-indigo-900/40 text-[10px] font-black uppercase tracking-[0.4em]"
                >
                  {statuses[statusIndex]}
                </motion.span>
                <span className="text-blue-600 text-[10px] font-black w-8">
                  {Math.round(progress)}%
                </span>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <motion.div
            animate={{ 
              rotate: 360,
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-20 -right-20 w-80 h-80 border-2 border-blue-500/5 rounded-full"
          />
          <motion.div
            animate={{ 
              rotate: -360,
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute -top-20 -left-20 w-96 h-96 border-2 border-indigo-500/5 rounded-full"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
