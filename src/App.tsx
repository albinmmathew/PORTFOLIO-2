import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Process from './components/Process';
import FAQ from './components/FAQ';

import LoadingScreen from './components/LoadingScreen';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isLoading]);

  return (
    <div className="min-h-screen bg-[#eef2ff] font-sans text-[#1e1b4b] antialiased relative selection:bg-blue-600 selection:text-white overflow-x-hidden">
      <LoadingScreen onFinished={() => setIsLoading(false)} />
      {/* Global Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={!isLoading ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 flex flex-col gap-0"
      >
        <Navbar />
        <Hero />
        <About />
        <Process />
        <Skills />
        <Projects />
        <Education />
        <FAQ />
        <Contact />
      </motion.main>
      <Footer />
    </div>
  );
};

export default App;
