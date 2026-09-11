import React from 'react';
import { Award, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  const { certifications } = portfolioData;

  return (
    <section id="certifications" className="py-20 border-t border-slate-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mb-10">
          <span className="text-xs font-mono uppercase tracking-wider text-indigo-400">
            Credentials
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1.5">
            Industry Certifications
          </h2>
          <p className="mt-2 text-sm text-slate-300">
            Accreditations in Machine Learning, Generative AI, Sequence Models, and Cloud Analytics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="surface-card p-5 rounded-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-indigo-400">
                    <Award className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-mono text-slate-500">
                    {cert.date}
                  </span>
                </div>

                <h3 className="text-sm font-semibold text-white leading-snug">
                  {cert.title}
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  {cert.issuer}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/70 flex items-center gap-1.5 text-[11px] text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified Credential</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
