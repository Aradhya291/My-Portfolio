import React from 'react';
import { Download, Mail, MapPin, ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Hero: React.FC = () => {
  const { personal, stats } = portfolioData;

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Row: Identity & Compact Profile Picture */}
        <div className="flex flex-col-reverse sm:flex-row sm:items-center justify-between gap-6 pb-6 border-b border-slate-800/80">
          <div>
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-medium text-slate-300 mb-3">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for AI / ML Roles</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              {personal.name}
            </h1>
            <p className="text-lg sm:text-xl font-medium text-indigo-400 mt-1">
              AI & Machine Learning Engineer
            </p>
          </div>

          {/* Compact, understated profile picture (HCI: supportive identity, not dominant distraction) */}
          <div className="shrink-0">
            <div className="relative">
              <img
                src="/profile.jpg"
                alt="Aradhya Yadav"
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover object-top border border-white/10 shadow-md shadow-black/50"
              />
              <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-[#090d16] flex items-center justify-center">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              </span>
            </div>
          </div>
        </div>

        {/* Bio Content */}
        <div className="pt-6">
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
            I design and deploy end-to-end AI systems — specializing in{' '}
            <strong className="text-white font-medium">Multi-Agent LLM architectures</strong>,{' '}
            <strong className="text-white font-medium">real-time IoT anomaly detection</strong>, and{' '}
            <strong className="text-white font-medium">molecular deep learning</strong>. Focused on zero-leakage evaluation, low physical latency, and production reliability.
          </p>

          {/* Location & Credentials */}
          <div className="flex flex-wrap items-center gap-y-2 gap-x-4 mt-5 text-xs sm:text-sm text-slate-400">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-slate-500" />
              {personal.location}
            </span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-300">
              AWS Certified (ML, GenAI, Data Analytics)
            </span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">
              MCA (AI & ML) • Chandigarh Univ
            </span>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 mt-8">
            <a
              href={personal.resumePdf}
              download="Aradhya_Yadav_Resume_Genai.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-500 transition-colors shadow-sm"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </a>

            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-medium text-slate-200 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 transition-colors"
            >
              <span>View Case Studies</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </a>

            <a
              href="#contact"
              className="px-4 py-2.5 rounded-lg text-xs sm:text-sm font-medium text-slate-400 hover:text-slate-200 transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Connect Bar */}
          <div className="flex items-center gap-3 mt-8 pt-6 border-t border-slate-800/80">
            <span className="text-xs text-slate-500 font-mono uppercase tracking-wider">Connect</span>
            <div className="flex items-center gap-2">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-400 hover:text-white rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-400 hover:text-indigo-400 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="p-2 text-slate-400 hover:text-white rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Minimal Metrics Strip */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mt-14 pt-8 border-t border-slate-800/80">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="surface-card p-3.5 rounded-xl text-center"
            >
              <div className="text-xl font-bold text-white tracking-tight">
                {stat.value}
              </div>
              <div className="text-[11px] text-slate-400 mt-1 font-medium leading-snug">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
