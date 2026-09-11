import React from 'react';
import { Trophy, Building } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Education: React.FC = () => {
  const { education, awards } = portfolioData;

  return (
    <section id="education" className="py-20 border-t border-slate-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Education Column */}
          <div className="lg:col-span-7">
            <div className="mb-8">
              <span className="text-xs font-mono uppercase tracking-wider text-indigo-400">
                Academics
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1.5">
                Education & Qualifications
              </h2>
            </div>

            <div className="space-y-4">
              {education.map((item, idx) => (
                <div
                  key={idx}
                  className="surface-card p-5 rounded-xl"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                    <h3 className="text-base font-semibold text-white">
                      {item.degree}
                    </h3>
                    <span className="text-xs font-mono text-slate-500 shrink-0">
                      {item.period}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
                    <Building className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                    <span>{item.institution}</span>
                  </div>

                  {item.highlights && (
                    <p className="text-xs text-slate-300 leading-relaxed mb-3">
                      {item.highlights}
                    </p>
                  )}

                  <div className="text-xs text-slate-400 pt-2 border-t border-slate-800 flex items-center gap-2">
                    <span>Grade / Score:</span>
                    <span className="font-mono text-emerald-400 font-semibold">
                      {item.scoreLabel} {item.score}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Honors Column */}
          <div className="lg:col-span-5">
            <div className="mb-8">
              <span className="text-xs font-mono uppercase tracking-wider text-indigo-400">
                Recognition
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1.5">
                Awards & Leadership
              </h2>
            </div>

            <div className="space-y-3">
              {awards.map((award, idx) => (
                <div
                  key={idx}
                  className="surface-card p-4 rounded-xl"
                >
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <Trophy className="w-4 h-4 text-indigo-400 shrink-0" />
                      <h3 className="text-xs font-semibold text-white">
                        {award.title}
                      </h3>
                    </div>
                    <span className="text-[11px] font-mono text-slate-500">
                      {award.date}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 ml-6">
                    {award.organization}
                  </p>
                  <p className="text-xs text-slate-300 ml-6 mt-1 leading-relaxed">
                    {award.description}
                  </p>
                </div>
              ))}

              <div className="surface-card p-4 rounded-xl mt-4">
                <div className="text-xs font-medium text-slate-400 mb-2">
                  Interests & Languages
                </div>
                <div className="flex flex-wrap gap-1.5 text-xs">
                  <span className="px-2.5 py-1 rounded bg-slate-900 text-slate-300 border border-slate-800">
                    Competitive Chess
                  </span>
                  <span className="px-2.5 py-1 rounded bg-slate-900 text-slate-300 border border-slate-800">
                    Travelling
                  </span>
                  <span className="px-2.5 py-1 rounded bg-slate-900 text-slate-300 border border-slate-800">
                    English (Fluent)
                  </span>
                  <span className="px-2.5 py-1 rounded bg-slate-900 text-slate-300 border border-slate-800">
                    Hindi (Native)
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
