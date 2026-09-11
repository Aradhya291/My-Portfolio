import React from 'react';
import { GraduationCap, Trophy, Building } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Education: React.FC = () => {
  const { education, awards } = portfolioData;

  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Education Column */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/60 border border-slate-700/60 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Academic Background</span>
            </div>
            <h2 className="text-3xl font-bold text-white tracking-tight mb-8">
              Education & <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Qualifications</span>
            </h2>

            <div className="space-y-6">
              {education.map((item, idx) => (
                <div
                  key={idx}
                  className="glass-panel p-6 rounded-2xl border border-slate-800/80 hover:border-indigo-500/40 transition-all duration-300 relative group"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {item.degree}
                    </h3>
                    <span className="text-xs font-mono text-slate-400 bg-slate-900 px-2.5 py-1 rounded-md border border-slate-800 shrink-0 w-fit">
                      {item.period}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-slate-400 mb-3">
                    <Building className="w-4 h-4 text-slate-500 shrink-0" />
                    <span>{item.institution}</span>
                  </div>

                  {item.highlights && (
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
                      {item.highlights}
                    </p>
                  )}

                  <div className="flex items-center gap-2 pt-3 border-t border-slate-800/70">
                    <span className="text-xs text-slate-400">Academic Score:</span>
                    <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950/60 px-2.5 py-0.5 rounded border border-emerald-500/30">
                      {item.scoreLabel}: {item.score}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Awards & Leadership Column */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/60 border border-slate-700/60 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <Trophy className="w-3.5 h-3.5" />
              <span>Leadership & Honors</span>
            </div>
            <h2 className="text-3xl font-bold text-white tracking-tight mb-8">
              Awards & <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">Achievements</span>
            </h2>

            <div className="space-y-4">
              {awards.map((award, idx) => (
                <div
                  key={idx}
                  className="glass-panel p-5 rounded-2xl border border-slate-800/80 hover:border-amber-500/40 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="p-2 rounded-lg bg-amber-950/30 border border-amber-500/30 text-amber-400">
                      <Trophy className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-mono text-slate-400">
                      {award.date}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                    {award.title}
                  </h3>
                  <p className="text-xs font-medium text-amber-400/90 mt-0.5">
                    {award.organization}
                  </p>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    {award.description}
                  </p>
                </div>
              ))}

              {/* Personal Interests card */}
              <div className="glass-panel p-5 rounded-2xl border border-slate-800/80 bg-slate-900/30">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  Interests & Languages
                </div>
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="px-2.5 py-1 rounded-lg bg-slate-900 text-slate-300 border border-slate-800">
                    🏆 Competitive Chess
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-slate-900 text-slate-300 border border-slate-800">
                    ✈️ Travelling & Exploration
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-slate-900 text-slate-300 border border-slate-800">
                    🗣️ English (Fluent)
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-slate-900 text-slate-300 border border-slate-800">
                    🗣️ Hindi (Native)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
