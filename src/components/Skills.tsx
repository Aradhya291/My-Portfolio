import React from 'react';
import { Cpu, Terminal, Cloud, Brain } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const { skills } = portfolioData;

  const categoryIcons: Record<string, React.ReactNode> = {
    "Generative AI & LLMs": <Brain className="w-4 h-4 text-indigo-400" />,
    "Machine Learning & Deep Learning": <Cpu className="w-4 h-4 text-indigo-400" />,
    "Data Science & Informatics": <Terminal className="w-4 h-4 text-indigo-400" />,
    "IoT, Cloud & Tools": <Cloud className="w-4 h-4 text-indigo-400" />
  };

  return (
    <section id="skills" className="py-20 border-t border-slate-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mb-10">
          <span className="text-xs font-mono uppercase tracking-wider text-indigo-400">
            Skills & Competencies
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1.5">
            Technical Stack & Frameworks
          </h2>
          <p className="mt-2 text-sm text-slate-300">
            Core toolset and libraries applied across production systems, models, and research.
          </p>
        </div>

        {/* 2x2 Minimal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="surface-card p-6 rounded-xl"
            >
              <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-slate-800">
                <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                  {categoryIcons[category] || <Cpu className="w-4 h-4 text-indigo-400" />}
                </div>
                <h3 className="text-base font-semibold text-white">
                  {category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium bg-slate-900 text-slate-200 border border-slate-800 hover:border-slate-700 transition-colors"
                  >
                    <span className="w-1 h-1 rounded-full bg-indigo-400" />
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
