import React from 'react';
import { Cpu, Terminal, Cloud, Brain, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const { skills } = portfolioData;

  const categoryIcons: Record<string, React.ReactNode> = {
    "Generative AI & LLMs": <Brain className="w-5 h-5 text-cyan-400" />,
    "Machine Learning & Deep Learning": <Cpu className="w-5 h-5 text-indigo-400" />,
    "Data Science & Informatics": <Terminal className="w-5 h-5 text-emerald-400" />,
    "IoT, Cloud & Tools": <Cloud className="w-5 h-5 text-purple-400" />
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/60 border border-slate-700/60 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-emerald-400">Technical Stack</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl">
            A comprehensive taxonomy of frameworks, architectures, and tools applied in production AI pipelines.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="glass-panel p-6 sm:p-7 rounded-3xl border border-slate-800/80 hover:border-indigo-500/40 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-5 pb-4 border-b border-slate-800/70">
                <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800">
                  {categoryIcons[category] || <Cpu className="w-5 h-5 text-indigo-400" />}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {items.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium bg-slate-900/70 text-slate-200 border border-slate-800 hover:border-slate-700 hover:text-white transition-all hover:scale-[1.02]"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/80" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
