import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "How does a Mathematics background help in Coding?",
      a: "Mathematics provides the foundation for logical reasoning and algorithmic thinking. Deconstructing a complex proof is very similar to architecting a scalable software system."
    },
    {
      q: "What is your primary focus as a Developer?",
      a: "I focus on building robust, performant systems where logic and aesthetics meet. I enjoy translating complex requirements into clean, maintainable code."
    },
    {
      q: "Are you open to collaborating on open-source projects?",
      a: "Absolutely! I believe in the power of community and am always looking for interesting logical puzzles to solve with others."
    }
  ];

  return (
    <section className="py-24 md:py-40 bg-gradient-to-b from-[#eef2ff] to-white" id="faq">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <HelpCircle className="mx-auto text-blue-500 mb-6" size={48} strokeWidth={1.5} />
          <h2 className="text-3xl md:text-5xl font-black text-indigo-950 uppercase tracking-tighter">
            CURIOUS <span className="text-blue-500">MINDS</span>
          </h2>
          <p className="mt-4 text-indigo-900/50 font-bold uppercase tracking-widest text-xs">Frequently Asked Questions</p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              className="bg-white border border-blue-50 rounded-[2rem] overflow-hidden shadow-xl shadow-blue-100/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <button
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                className="w-full px-8 py-6 flex items-center justify-between text-left group"
              >
                <span className="text-indigo-950 font-black text-sm md:text-lg uppercase tracking-tight">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`text-blue-500 transition-transform duration-500 ${activeIndex === i ? 'rotate-180' : ''}`}
                  size={24}
                />
              </button>
              <AnimatePresence>
                {activeIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="px-8 pb-8 text-indigo-900/60 font-medium leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
