import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Github,
  ExternalLink,
  ArrowUpRight,
  Globe,
  Handshake,
  Coins,
  Smartphone,
  X,
  CheckCircle2,
  Download
} from 'lucide-react';

interface Project {
  title: string;
  category: string;
  badge?: string;
  description: string;
  fullDescription: string;
  highlights: string[];
  tech: string[];
  github: string | null;
  demo: string | null;
  releaseUrl?: string | null;
  icon: React.ReactNode;
}

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProject]);

  const projects: Project[] = [
    {
      title: 'R-Login',
      category: 'Android Systems & Security',
      badge: 'Flagship Prototype',
      description: 'One-tap campus connectivity and secure credential manager for Rajagiri College services with hardware KeyStore encryption.',
      fullDescription: 'R-Login is a high-utility native Android application designed for Rajagiri College students. It centralizes authentication for campus services, automates captive portal Wi-Fi network logins, parses student attendance into actionable analytics, and tracks LMS Moodle assignments.',
      highlights: [
        'Android Quick Settings Tile (TileService) & 1×1 Home Screen Widget for 1-tap captive portal connection directly from the notification shade.',
        'Direct network interface binding to Wi-Fi interface (172.16.0.20), ensuring captive portal login even when mobile data is simultaneously active.',
        'Native Fedena attendance scraper with subject cards, total hours calculation, and instant Duty Leave (OD) toggle.',
        'Moodle LMS assignment tracker with 6-tier urgency countdowns and offline SQLite caching.',
        'Hardware-backed AES-GCM credential encryption generated in the Android KeyStore with zero cloud transmission.'
      ],
      tech: ['Java', 'Android SDK', 'Android KeyStore', 'SQLite', 'Material 3'],
      github: 'https://github.com/albinmmathew/R-Login',
      demo: null,
      releaseUrl: 'https://github.com/albinmmathew/R-Login/releases/latest',
      icon: <Smartphone size={28} strokeWidth={2.5} />
    },
    {
      title: 'St. Thomas HSS Portal',
      category: 'Production Web Platform',
      badge: 'Live Production',
      description: 'Official modern, responsive web portal engineered for St. Thomas Higher Secondary School to improve digital presence and resource access.',
      fullDescription: 'A modern, high-performance institutional portal co-developed for St. Thomas Higher Secondary School. The platform enhances the school\'s digital presence, delivers real-time administrative circulars, and provides an accessible repository of student resources.',
      highlights: [
        'Production web platform serving students, parents, and prospective applicants with responsive layouts.',
        'Dynamic announcement channels and institutional event publications integrated with cloud storage.',
        'Structured administrative sections and digital academic resource archives.',
        'Optimized for fast mobile loading across various screen sizes and network conditions.'
      ],
      tech: ['Next.js (React)', 'TypeScript', 'Tailwind CSS', 'Firebase'],
      github: null,
      demo: 'https://stthomashsskzhry.in',
      releaseUrl: null,
      icon: <Globe size={28} strokeWidth={2.5} />
    },
    {
      title: 'CivicNode',
      category: 'Sustainable Urban Platform',
      badge: 'UN SDG-11',
      description: 'A Django-based citizen portal aligned with SDG-11 to help citizens raise, track, and resolve local civic issues with municipal authorities.',
      fullDescription: 'CivicNode is a community-driven web platform designed to improve civic engagement and urban infrastructure maintenance. Citizens can report infrastructure defects, track grievance lifecycles, and interface transparently with local governance bodies.',
      highlights: [
        'Structured grievance submission pipeline with category classification and progress tracking.',
        'Role-based administrative dashboards for municipal authorities to update resolution timelines.',
        'Relational database architecture built with PostgreSQL for audit trails and resolution logging.',
        'Designed under the framework of UN Sustainable Development Goal 11 (Sustainable Cities & Communities).'
      ],
      tech: ['Python', 'Django', 'PostgreSQL', 'HTML5', 'CSS3'],
      github: 'https://github.com/albinmmathew/CivicNode',
      demo: null,
      releaseUrl: null,
      icon: <Globe size={28} strokeWidth={2.5} />
    },
    {
      title: 'NativeExchange',
      category: 'Sustainable Commerce',
      badge: 'UN SDG-8',
      description: 'A Java-based digital exchange platform directly connecting micro-scale local producers with consumers, eliminating middle-tier margins.',
      fullDescription: 'Aligned with United Nations SDG-8 (Decent Work & Economic Growth), NativeExchange provides a localized digital exchange system. It empowers grassroots agricultural and artisanal micro-producers by giving them direct access to local consumers.',
      highlights: [
        'Full desktop GUI application developed using Java Swing with responsive state management.',
        'Role-based access control separating producers, retail consumers, and system supervisors.',
        'Product catalog management with real-time stock monitoring and order request processing.',
        'Robust transaction management integrated with an Oracle Database backend.'
      ],
      tech: ['Java', 'Swing (GUI)', 'Oracle Database', 'JDBC'],
      github: 'https://github.com/albinmmathew/NativeExchange',
      demo: null,
      releaseUrl: null,
      icon: <Handshake size={28} strokeWidth={2.5} />
    },
    {
      title: 'CurrencyWebApp',
      category: 'Deep Learning & Vision',
      badge: 'Transfer Learning',
      description: 'Indian currency recognition system utilizing fine-tuned MobileNetV2 and ResNet50 neural networks for denomination classification.',
      fullDescription: 'A computer vision application utilizing transfer learning to accurately recognize and classify Indian paper currency notes across various denominations, providing a lightweight inference backend for classification tasks.',
      highlights: [
        'Leverages fine-tuned MobileNetV2 and ResNet50 deep learning architectures.',
        'Trained on diverse datasets accounting for varied lighting, background clutter, and note wear.',
        'Flask web service offering real-time model inference and probability distributions.',
        'Extensible computer vision pipeline adaptable for assistive technologies.'
      ],
      tech: ['Python', 'TensorFlow', 'MobileNetV2', 'ResNet50', 'Flask'],
      github: 'https://github.com/albinmmathew/CurrencyWebApp',
      demo: null,
      releaseUrl: null,
      icon: <Coins size={28} strokeWidth={2.5} />
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-[#eef2ff] dark:from-zinc-950 dark:to-zinc-900/50 relative overflow-hidden" id="projects">
      {/* Background Accent */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-30">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[120%] bg-blue-400/10 blur-[120px] rotate-12 animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[120%] bg-indigo-400/10 blur-[120px] -rotate-12 animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[4px] bg-blue-600 rounded-full"></div>
              <span className="text-blue-600 dark:text-blue-400 font-black tracking-[0.4em] text-xs uppercase">Portfolio Gallery</span>
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-sans font-black leading-[0.85] text-indigo-950 dark:text-zinc-100 tracking-tighter uppercase">
              SELECTED <br />
              <span className="text-blue-500">PROTOTYPES</span>
            </h2>
          </div>
          <p className="text-indigo-900/50 dark:text-zinc-400 font-bold uppercase tracking-tight max-w-[320px] text-sm leading-relaxed border-l-2 border-blue-100 dark:border-zinc-800 pl-6 hidden md:block">
            Architectural logic, mobile systems, and web platforms. Click any prototype for technical details.
          </p>
        </motion.div>

        {/* Projects Grid: 5 Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative h-full flex ${i === 0 ? 'md:col-span-2' : ''}`}
            >
              <div className="absolute inset-0 bg-blue-400/10 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />

              <div
                onClick={() => setSelectedProject(project)}
                className="bg-white/75 dark:bg-zinc-900/40 backdrop-blur-3xl border border-white dark:border-zinc-800 p-7 md:p-8 lg:p-10 rounded-[2.5rem] md:rounded-[3.5rem] shadow-2xl shadow-blue-100/30 dark:shadow-none hover:shadow-blue-200/50 transition-all duration-700 flex flex-col w-full hover:-translate-y-3 hover:scale-[1.01] light-sweep cursor-pointer relative"
              >
                {/* Top Badge & Icons */}
                <div className="flex justify-between items-start mb-6 md:mb-8">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-blue-600 text-white rounded-[1.5rem] md:rounded-[2rem] flex items-center justify-center shadow-xl shadow-blue-200/50 dark:shadow-none group-hover:rotate-[12deg] transition-transform duration-500">
                    {project.icon}
                  </div>

                  <div className="flex items-center gap-2">
                    {project.badge && (
                      <span className="px-3.5 py-1.5 bg-blue-50 dark:bg-zinc-800 text-blue-600 dark:text-blue-400 border border-blue-100/80 dark:border-zinc-700 text-[9px] md:text-[10px] font-black uppercase tracking-wider rounded-full shadow-sm">
                        {project.badge}
                      </span>
                    )}
                    <div className="w-10 h-10 flex items-center justify-center bg-blue-50 dark:bg-zinc-800 text-blue-600 dark:text-blue-400 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                      <ArrowUpRight size={18} strokeWidth={2.5} />
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-blue-500 text-[10px] font-black uppercase tracking-[0.3em] mb-2">{project.category}</p>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-indigo-950 dark:text-zinc-100 tracking-tighter uppercase leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors break-words">
                    {project.title}
                  </h3>
                </div>

                <p className="text-indigo-900/60 dark:text-zinc-400 font-bold text-sm md:text-base leading-relaxed mb-6 flex-grow uppercase tracking-tight">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-blue-50 dark:border-zinc-800/80">
                  {project.tech.map(t => (
                    <span
                      key={t}
                      className="text-[9px] md:text-[10px] font-black uppercase tracking-widest px-3.5 py-1.5 bg-white dark:bg-zinc-950 border border-blue-50 dark:border-zinc-800 text-blue-600 dark:text-blue-400 rounded-full shadow-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex items-center gap-2 text-blue-600 dark:text-blue-400 text-xs font-black uppercase tracking-widest opacity-80 group-hover:opacity-100 transition-opacity">
                  <span>View Details</span>
                  <ArrowUpRight size={14} strokeWidth={3} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Detail Pop-up Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[150] flex items-center justify-center p-3 sm:p-6 md:p-8">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-indigo-950/60 dark:bg-black/80 backdrop-blur-md cursor-pointer"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-2xl h-[85vh] max-h-[700px] flex flex-col bg-white dark:bg-zinc-900 border border-indigo-100 dark:border-zinc-800 rounded-[2rem] md:rounded-[2.5rem] shadow-2xl z-10 text-indigo-950 dark:text-zinc-100 overflow-hidden"
            >
              {/* FIXED MODAL HEADER */}
              <div className="p-5 sm:p-6 md:p-7 border-b border-indigo-100 dark:border-zinc-800/80 flex items-center justify-between flex-shrink-0 bg-white dark:bg-zinc-900">
                <div className="flex items-center gap-3.5 sm:gap-4 pr-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-blue-200/50 dark:shadow-none flex-shrink-0">
                    {selectedProject.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className="text-blue-500 text-[10px] font-black uppercase tracking-[0.25em]">
                        {selectedProject.category}
                      </span>
                      {selectedProject.badge && (
                        <span className="px-2.5 py-0.5 bg-blue-50 dark:bg-zinc-800 text-blue-600 dark:text-blue-400 text-[9px] font-black uppercase tracking-wider rounded-full border border-blue-100 dark:border-zinc-700">
                          {selectedProject.badge}
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-indigo-950 dark:text-zinc-100 uppercase tracking-tighter leading-tight">
                      {selectedProject.title}
                    </h3>
                  </div>
                </div>

                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  aria-label="Close modal"
                  className="p-2 sm:p-2.5 bg-blue-50 dark:bg-zinc-800 text-indigo-900 dark:text-zinc-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white rounded-full transition-all cursor-pointer flex-shrink-0 shadow-sm"
                >
                  <X size={20} strokeWidth={2.5} />
                </button>
              </div>

              {/* SCROLLABLE MODAL CONTENT */}
              <div className="flex-1 overflow-y-auto p-5 sm:p-6 md:p-7 space-y-6">
                {/* Overview */}
                <div>
                  <h4 className="text-[11px] font-black uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-2">Overview</h4>
                  <p className="text-xs sm:text-sm md:text-base text-indigo-900/80 dark:text-zinc-300 font-medium leading-relaxed">
                    {selectedProject.fullDescription}
                  </p>
                </div>

                {/* Key Technical Highlights */}
                <div>
                  <h4 className="text-[11px] font-black uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-3">Key Technical Highlights</h4>
                  <div className="space-y-2.5">
                    {selectedProject.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3 sm:p-3.5 bg-blue-50/50 dark:bg-zinc-800/40 rounded-xl border border-blue-100/50 dark:border-zinc-800/50 text-xs sm:text-sm">
                        <CheckCircle2 size={16} className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                        <span className="text-indigo-950 dark:text-zinc-200 font-medium leading-snug">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack Pills */}
                <div>
                  <h4 className="text-[11px] font-black uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-2.5">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map(t => (
                      <span
                        key={t}
                        className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest px-3.5 py-1.5 bg-blue-50 dark:bg-zinc-800 border border-blue-100 dark:border-zinc-700 text-blue-600 dark:text-blue-400 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* FIXED MODAL FOOTER */}
              <div className="p-4 sm:p-5 md:p-6 border-t border-indigo-100 dark:border-zinc-800/80 flex flex-wrap items-center gap-2.5 sm:gap-3 flex-shrink-0 bg-white dark:bg-zinc-900">
                {selectedProject.demo && (
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white font-black text-xs uppercase tracking-widest rounded-xl shadow-lg shadow-blue-500/20 flex items-center gap-2 hover:-translate-y-0.5 transition-all"
                  >
                    <span>Visit Live Website</span>
                    <ExternalLink size={15} strokeWidth={2.5} />
                  </a>
                )}

                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 bg-indigo-950 dark:bg-zinc-800 hover:bg-blue-600 dark:hover:bg-blue-600 text-white font-black text-xs uppercase tracking-widest rounded-xl shadow-md flex items-center gap-2 hover:-translate-y-0.5 transition-all"
                  >
                    <Github size={15} strokeWidth={2.5} />
                    <span>View on GitHub</span>
                  </a>
                )}

                {selectedProject.releaseUrl && (
                  <a
                    href={selectedProject.releaseUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 bg-blue-50 dark:bg-zinc-800 hover:bg-blue-100 dark:hover:bg-zinc-700 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-zinc-700 font-black text-xs uppercase tracking-widest rounded-xl flex items-center gap-2 hover:-translate-y-0.5 transition-all"
                  >
                    <Download size={15} strokeWidth={2.5} />
                    <span>Download APK Release</span>
                  </a>
                )}

                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-3 ml-auto text-indigo-900/60 dark:text-zinc-400 hover:text-indigo-900 dark:hover:text-zinc-100 font-bold text-xs uppercase tracking-widest transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
