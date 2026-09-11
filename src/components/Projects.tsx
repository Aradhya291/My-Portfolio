import React, { useState } from 'react';
import { ExternalLink, CheckCircle2, Layers } from 'lucide-react';
import { portfolioData, Project } from '../data/portfolioData';
import { GithubIcon } from './Icons';

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'GenAI' | 'ML/IoT' | 'DeepLearning'>('All');

  const { projects } = portfolioData;

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  const getCategoryBadge = (category: Project['category']) => {
    switch (category) {
      case 'GenAI':
        return { label: 'Generative AI & LLMs', color: 'text-cyan-400 bg-cyan-950/50 border-cyan-500/30' };
      case 'ML/IoT':
        return { label: 'Machine Learning & IoT', color: 'text-indigo-400 bg-indigo-950/50 border-indigo-500/30' };
      case 'DeepLearning':
        return { label: 'Deep Neural Networks', color: 'text-emerald-400 bg-emerald-950/50 border-emerald-500/30' };
    }
  };

  return (
    <section id="projects" className="py-24 relative">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-cyan-600/10 blur-[130px] -z-10 pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/60 border border-slate-700/60 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Featured Case Studies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Production-Grade <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400">AI Systems</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl">
            Real-world architectures engineered with quantitative evaluation, low-latency deployment, and zero data leakage.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8 p-1.5 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-md">
            <button
              onClick={() => setActiveFilter('All')}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-xl transition-all duration-200 ${
                activeFilter === 'All'
                  ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              All Projects ({projects.length})
            </button>
            <button
              onClick={() => setActiveFilter('GenAI')}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-xl transition-all duration-200 ${
                activeFilter === 'GenAI'
                  ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              Generative AI & LLMs
            </button>
            <button
              onClick={() => setActiveFilter('ML/IoT')}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-xl transition-all duration-200 ${
                activeFilter === 'ML/IoT'
                  ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              Machine Learning & IoT
            </button>
            <button
              onClick={() => setActiveFilter('DeepLearning')}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-xl transition-all duration-200 ${
                activeFilter === 'DeepLearning'
                  ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              Deep Learning
            </button>
          </div>
        </div>

        {/* Projects List */}
        <div className="space-y-8">
          {filteredProjects.map((project) => {
            const badge = getCategoryBadge(project.category);

            return (
              <div
                key={project.id}
                className="glass-panel rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-800/90 hover:border-indigo-500/40 transition-all duration-300 group shadow-xl shadow-black/30"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  {/* Left content */}
                  <div className="flex-1">
                    {/* Header Row */}
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className={`px-3 py-1 text-xs font-semibold rounded-full border ${badge.color}`}>
                        {badge.label}
                      </span>
                      <span className="text-xs font-mono text-slate-400">
                        {project.date}
                      </span>
                      {project.liveUrl && (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-950/60 text-emerald-400 border border-emerald-500/30">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          Live Dashboard
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm sm:text-base text-indigo-300/90 font-medium mt-1">
                      {project.subtitle}
                    </p>

                    {/* Metrics Bar */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
                      {project.metrics.map((metric, mIdx) => (
                        <div
                          key={mIdx}
                          className="bg-slate-900/80 border border-slate-800/80 rounded-xl p-3 text-center"
                        >
                          <div className="text-lg font-bold text-white tracking-tight">
                            {metric.value}
                          </div>
                          <div className="text-[11px] font-medium text-slate-400 uppercase tracking-wider mt-0.5">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Bullet Points */}
                    <ul className="space-y-2.5 my-4">
                      {project.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5 text-sm sm:text-base text-slate-300 leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-1 shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-2 pt-4 mt-4 border-t border-slate-800/80">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-mono rounded-lg bg-slate-900/90 text-slate-300 border border-slate-700/60"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right side CTAs */}
                  <div className="flex lg:flex-col gap-3 shrink-0 pt-2 lg:pt-0">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 shadow-lg shadow-emerald-600/20 hover:shadow-emerald-500/30 transition-all text-sm"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live App</span>
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-medium text-slate-200 bg-slate-900 hover:bg-slate-800 hover:text-white border border-slate-700/80 hover:border-slate-600 transition-all text-sm"
                      >
                        <GithubIcon className="w-4 h-4 text-slate-400" />
                        <span>View Code</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
