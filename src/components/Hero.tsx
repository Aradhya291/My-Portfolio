import React from 'react';
import { Download, Mail, MapPin, ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Hero: React.FC = () => {
  const { personal, stats } = portfolioData;

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-tr from-indigo-600/15 via-cyan-500/15 to-purple-600/10 blur-[130px] -z-10 pointer-events-none rounded-full" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-indigo-500/10 blur-[100px] -z-10 pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 text-xs sm:text-sm font-medium mb-6 shadow-inner backdrop-blur-sm">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-slate-300">Available for Full-time Roles</span>
            <span className="text-indigo-400 font-semibold">•</span>
            <span className="text-indigo-300">AI / ML / GenAI Engineer</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-4xl leading-[1.12]">
            Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-300 to-emerald-400">Production AI</span> & Intelligent Agents
          </h1>

          {/* Subtitle / Role */}
          <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl font-light leading-relaxed">
            Hi, I'm <strong className="text-white font-semibold">{personal.name}</strong>. I build high-impact AI systems — from <span className="text-cyan-300 font-medium">Multi-Agent MoE pipelines</span> and <span className="text-indigo-300 font-medium">real-time IoT anomaly detection</span> to <span className="text-emerald-300 font-medium">molecular deep learning</span>.
          </p>

          {/* Location & Contact Meta */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-4 text-xs sm:text-sm text-slate-400">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-slate-400" />
              {personal.location}
            </span>
            <span className="hidden sm:inline text-slate-600">•</span>
            <a
              href={`mailto:${personal.email}`}
              className="flex items-center gap-1.5 hover:text-indigo-300 transition-colors"
            >
              <Mail className="w-4 h-4 text-indigo-400" />
              {personal.email}
            </a>
            <span className="hidden sm:inline text-slate-600">•</span>
            <span className="text-emerald-400 font-medium">
              AWS Certified (ML, GenAI, Data Analytics)
            </span>
          </div>

          {/* Hero CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <a
              href="#projects"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 shadow-xl shadow-indigo-600/30 hover:shadow-indigo-500/40 transition-all duration-200 hover:-translate-y-0.5"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={personal.resumePdf}
              download="Aradhya_Yadav_Resume_Genai.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-slate-200 bg-slate-800/80 hover:bg-slate-800 hover:text-white border border-slate-700/80 hover:border-slate-600 shadow-lg transition-all duration-200 hover:-translate-y-0.5"
            >
              <Download className="w-4 h-4 text-indigo-400" />
              <span>Download Resume</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-medium text-slate-300 hover:text-white hover:bg-slate-900/60 border border-transparent hover:border-slate-800 transition-all"
            >
              <span>Get in Touch</span>
            </a>
          </div>

          {/* Social Links Row */}
          <div className="flex items-center gap-4 mt-6">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 text-slate-400 hover:text-white rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 hover:scale-105 transition-all"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 text-slate-400 hover:text-cyan-300 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 hover:scale-105 transition-all"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="p-2.5 text-slate-400 hover:text-indigo-400 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 hover:scale-105 transition-all"
              aria-label="Send Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Key Metrics / Highlights Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mt-14 w-full">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="glass-panel p-4 sm:p-5 rounded-2xl flex flex-col items-center justify-center text-center group hover:border-indigo-500/40 transition-all duration-300"
              >
                <span className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-white to-cyan-300 tracking-tight group-hover:scale-105 transition-transform">
                  {stat.value}
                </span>
                <span className="text-xs text-slate-400 mt-1 font-medium leading-snug">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
