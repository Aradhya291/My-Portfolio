import React, { useState } from 'react';
import { ExternalLink, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { GithubIcon } from './Icons';

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'GenAI' | 'ML/IoT' | 'DeepLearning'>('All');

  const { projects } = portfolioData;

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 border-t border-slate-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <div className="max-w-xl">
            <span className="text-xs font-mono uppercase tracking-wider text-indigo-400">
              Featured Work
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1.5">
              Production AI Case Studies
            </h2>
            <p className="mt-2 text-sm text-slate-300">
              Systems designed and evaluated against rigorous latency, accuracy, and leakage benchmarks.
            </p>
          </div>

          {/* Minimal Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-lg bg-slate-900 border border-slate-800 self-start sm:self-auto">
            <button
              onClick={() => setActiveFilter('All')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                activeFilter === 'All'
                  ? 'bg-indigo-600 text-white'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              All ({projects.length})
            </button>
            <button
              onClick={() => setActiveFilter('GenAI')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                activeFilter === 'GenAI'
                  ? 'bg-indigo-600 text-white'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              GenAI & LLMs
            </button>
            <button
              onClick={() => setActiveFilter('ML/IoT')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                activeFilter === 'ML/IoT'
                  ? 'bg-indigo-600 text-white'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              ML & IoT
            </button>
            <button
              onClick={() => setActiveFilter('DeepLearning')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                activeFilter === 'DeepLearning'
                  ? 'bg-indigo-600 text-white'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              Deep Learning
            </button>
          </div>
        </div>

        {/* Projects Stack */}
        <div className="space-y-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="surface-card rounded-2xl p-6 sm:p-8"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                {/* Main Content */}
                <div className="flex-1">
                  {/* Category & Date */}
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[11px] font-mono text-indigo-400 bg-indigo-950/60 px-2 py-0.5 rounded border border-indigo-500/20">
                      {project.category === 'GenAI'
                        ? 'Generative AI & LLMs'
                        : project.category === 'ML/IoT'
                        ? 'Machine Learning & IoT'
                        : 'Deep Learning'}
                    </span>
                    <span className="text-xs font-mono text-slate-500">
                      {project.date}
                    </span>
                    {project.liveUrl && (
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-emerald-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        Live App Available
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1">
                    {project.subtitle}
                  </p>

                  {/* Quantitative Metrics Row */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 my-5">
                    {project.metrics.map((metric, mIdx) => (
                      <div
                        key={mIdx}
                        className="bg-slate-900/90 border border-slate-800/90 rounded-lg p-2.5 text-center"
                      >
                        <div className="text-base font-semibold text-white">
                          {metric.value}
                        </div>
                        <div className="text-[10px] uppercase font-mono tracking-wider text-slate-400 mt-0.5">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-300 my-4">
                    {project.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-indigo-400 mt-0.5 shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5 pt-4 mt-4 border-t border-slate-800/80">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-[11px] font-mono rounded bg-slate-900 text-slate-300 border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex lg:flex-col gap-2.5 shrink-0 pt-2 lg:pt-0">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Live App</span>
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg transition-colors"
                    >
                      <GithubIcon className="w-3.5 h-3.5 text-slate-400" />
                      <span>Source Code</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
