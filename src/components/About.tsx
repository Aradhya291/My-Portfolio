import React from 'react';
import { Bot, Cpu, Network, Trophy } from 'lucide-react';

export const About: React.FC = () => {
  const highlights = [
    {
      icon: <Bot className="w-5 h-5 text-indigo-400" />,
      title: "Generative AI & Agentic Workflows",
      desc: "Architected 6-agent Mixture-of-Experts pipelines with strict temporal zero-lookahead RAG, using Sentence Transformers and high-throughput LLaMA 3.3 inference."
    },
    {
      icon: <Network className="w-5 h-5 text-indigo-400" />,
      title: "Edge Telemetry & Anomaly Detection",
      desc: "Engineered physical sensor data pipelines (ACS712, DHT11, MQ2) and unsupervised Isolation Forest models, sustaining sub-2-second alert latency for critical infrastructure."
    },
    {
      icon: <Cpu className="w-5 h-5 text-indigo-400" />,
      title: "Deep Neural Architectures",
      desc: "Formulated ANN hidden layer configurations and automated cheminformatics feature pipelines using RDKit, elevating molecular taste classification reliability by +50%."
    },
    {
      icon: <Trophy className="w-5 h-5 text-indigo-400" />,
      title: "Strategic Analytical Discipline",
      desc: "Competitive chess champion (UIC Chess Champion 2024, National Chess Meet). Applies rigorous scenario tree evaluation and pattern recognition to machine learning models."
    }
  ];

  return (
    <section id="about" className="py-20 border-t border-slate-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-mono uppercase tracking-wider text-indigo-400">
            Background & Focus
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1.5">
            Engineering Rigorous AI Systems
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
            I prioritize mathematical validity, benchmark reproducibility, and practical operational constraints — ensuring models deliver value in real deployment environments.
          </p>
        </div>

        {/* 2x2 Minimal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="surface-card p-6 rounded-xl flex items-start gap-4"
            >
              <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 shrink-0">
                {item.icon}
              </div>
              <div>
                <h3 className="text-base font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-sm text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
