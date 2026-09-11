import React from 'react';
import { Bot, Cpu, Network, Trophy, Sparkles } from 'lucide-react';

export const About: React.FC = () => {
  const highlights = [
    {
      icon: <Bot className="w-6 h-6 text-cyan-400" />,
      title: "Generative AI & Agentic Systems",
      desc: "Designed multi-agent Mixture-of-Experts (MoE) architectures with specialized agents, strict temporal zero-lookahead RAG pipelines, and high-throughput LLM inference via Groq."
    },
    {
      icon: <Network className="w-6 h-6 text-indigo-400" />,
      title: "Production ML & Edge IoT",
      desc: "Engineered real-time telemetry pipelines with physical sensors (ACS712, DHT11, MQ2) and unsupervised Isolation Forest models delivering sub-2-second alert latency."
    },
    {
      icon: <Cpu className="w-6 h-6 text-purple-400" />,
      title: "Deep Neural Architectures",
      desc: "Formulated custom ANN topologies and automated chemical informatics feature pipelines using RDKit, elevating molecular classification reliability by +50%."
    },
    {
      icon: <Trophy className="w-6 h-6 text-amber-400" />,
      title: "Strategic Analytical Problem Solving",
      desc: "Competitive chess champion (UIC Chess Champion 2024, National Chess Meet competitor). Brings sharp tactical forecasting and structured evaluation to every ML architecture."
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/60 border border-slate-700/60 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Engineering Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Bridging Theory to <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Production AI</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            I specialize in crafting AI systems that survive real-world conditions: ensuring zero data leakage in predictive models, keeping end-to-end telemetry latency under 2 seconds, and orchestrating autonomous multi-agent reasoning.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="glass-panel p-6 sm:p-7 rounded-2xl flex items-start gap-4 group hover:border-indigo-500/40 transition-all duration-300"
            >
              <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 shrink-0 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-slate-400 leading-relaxed">
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
