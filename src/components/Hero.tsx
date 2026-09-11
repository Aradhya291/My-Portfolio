import React from 'react';
import { Download, Mail, MapPin, ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Hero: React.FC = () => {
  const { personal, stats } = portfolioData;

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Bio & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-medium text-slate-300 mb-6">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for AI / ML Roles</span>
            </div>

            {/* Name & Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15]">
              {personal.name}
            </h1>
            <p className="mt-2 text-xl sm:text-2xl font-medium text-indigo-400">
              AI & Machine Learning Engineer
            </p>

            {/* Natural Introduction */}
            <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
              I design and deploy end-to-end AI systems — specializing in{' '}
              <strong className="text-white font-medium">Multi-Agent LLM architectures</strong>,{' '}
              <strong className="text-white font-medium">real-time IoT anomaly detection</strong>, and{' '}
              <strong className="text-white font-medium">molecular deep learning</strong>. Focused on zero-leakage evaluation and sub-2-second edge latency.
            </p>

            {/* Metadata (Location & AWS Credentials) */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 mt-6 text-xs sm:text-sm text-slate-400">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-slate-500" />
                {personal.location}
              </span>
              <span className="text-slate-600">•</span>
              <span className="text-slate-300">
                AWS Certified (ML, GenAI, Data Analytics)
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 mt-8">
              <a
                href={personal.resumePdf}
                download="Aradhya_Yadav_Resume_Genai.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-500 transition-colors shadow-sm"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>

              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 transition-colors"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </a>

              <a
                href="#contact"
                className="px-4 py-2.5 rounded-lg text-sm font-medium text-slate-400 hover:text-slate-200 transition-colors"
              >
                Contact
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 mt-8 pt-6 border-t border-slate-800/80 w-full max-w-xl">
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

          {/* Right Column: Professional Profile Headshot */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group w-full max-w-[340px]">
              {/* Photo Frame */}
              <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-white/[0.1] shadow-2xl shadow-black/60">
                <img
                  src="/profile.jpg"
                  alt="Aradhya Yadav - AI/ML Engineer"
                  className="w-full h-auto object-cover aspect-[4/5] filter contrast-[1.02] brightness-[1.01] transition-transform duration-300 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090d16]/80 via-transparent to-transparent" />
                
                {/* Embedded Status Badge inside the photo container */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[#090d16]/90 backdrop-blur-md border border-white/[0.08] flex items-center justify-between">
                  <div>
                    <div className="text-xs font-semibold text-white">
                      Aradhya Yadav
                    </div>
                    <div className="text-[11px] text-slate-400">
                      MCA (AI & ML) • Chandigarh Univ
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-indigo-400 bg-indigo-950/70 border border-indigo-500/30 px-2 py-0.5 rounded">
                    Noida, IN
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Minimal Metrics Strip (HCI principle of chunked information & low cognitive overhead) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mt-16 pt-10 border-t border-slate-800/80">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="surface-card p-4 rounded-xl text-center"
            >
              <div className="text-2xl font-bold text-white tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs text-slate-400 mt-1 font-medium leading-snug">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
