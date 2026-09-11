import React from 'react';
import { Award, CheckCircle, ShieldCheck } from 'lucide-react';
import { portfolioData, Certification } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  const { certifications } = portfolioData;

  const getIssuerBadge = (badgeType: Certification['badgeType']) => {
    switch (badgeType) {
      case 'aws':
        return {
          icon: <ShieldCheck className="w-5 h-5 text-amber-400" />,
          color: 'border-amber-500/30 bg-amber-950/20 text-amber-300'
        };
      case 'deeplearning':
        return {
          icon: <Award className="w-5 h-5 text-indigo-400" />,
          color: 'border-indigo-500/30 bg-indigo-950/20 text-indigo-300'
        };
      case 'intel':
        return {
          icon: <Award className="w-5 h-5 text-cyan-400" />,
          color: 'border-cyan-500/30 bg-cyan-950/20 text-cyan-300'
        };
    }
  };

  return (
    <section id="certifications" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/60 border border-slate-700/60 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Industry <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-indigo-400 to-cyan-400">Certifications</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl">
            Formal accreditations in Generative AI, Machine Learning, Sequence Models, and Cloud Analytics.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, idx) => {
            const badge = getIssuerBadge(cert.badgeType);

            return (
              <div
                key={idx}
                className="glass-panel p-6 rounded-2xl border border-slate-800/80 hover:border-indigo-500/40 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                      {badge.icon}
                    </div>
                    <span className="text-xs font-mono text-slate-400 bg-slate-900/90 px-2.5 py-1 rounded-md border border-slate-800">
                      {cert.date}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-2 font-medium">
                    {cert.issuer}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-800/70 flex items-center justify-between text-xs text-slate-400">
                  <span className="inline-flex items-center gap-1 text-emerald-400 font-medium">
                    <CheckCircle className="w-3.5 h-3.5" />
                    Verified Credential
                  </span>
                  <span className="text-[11px] font-mono text-slate-500">AWS / DeepLearning.AI</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
