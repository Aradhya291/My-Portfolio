import React, { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check, Send, Download } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Contact: React.FC = () => {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${personal.email}?subject=${encodeURIComponent(
      formState.subject || `Opportunity inquiry from ${formState.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    )}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 border-t border-slate-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mb-12">
          <span className="text-xs font-mono uppercase tracking-wider text-indigo-400">
            Get In Touch
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1.5">
            Contact & Opportunities
          </h2>
          <p className="mt-2 text-sm text-slate-300">
            Currently interviewing for AI/ML Engineer, Generative AI, and Machine Learning positions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Details Column */}
          <div className="lg:col-span-5 surface-card p-6 rounded-xl space-y-4">
            <h3 className="text-base font-semibold text-white">
              Direct Channels
            </h3>

            <div className="space-y-3">
              {/* Email with copy */}
              <div className="p-3.5 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3 overflow-hidden">
                  <Mail className="w-4 h-4 text-indigo-400 shrink-0" />
                  <div className="min-w-0">
                    <div className="text-[11px] text-slate-400">Email</div>
                    <a
                      href={`mailto:${personal.email}`}
                      className="text-xs sm:text-sm font-medium text-white hover:text-indigo-400 truncate block transition-colors"
                    >
                      {personal.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-1.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors ml-2 shrink-0"
                  title="Copy email"
                >
                  {copied ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              {/* Phone */}
              <div className="p-3.5 rounded-lg bg-slate-900 border border-slate-800 flex items-center gap-3">
                <Phone className="w-4 h-4 text-indigo-400 shrink-0" />
                <div>
                  <div className="text-[11px] text-slate-400">Phone</div>
                  <a
                    href={`tel:${personal.phone.replace(/\s+/g, '')}`}
                    className="text-xs sm:text-sm font-medium text-white hover:text-indigo-400 transition-colors"
                  >
                    {personal.phone}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="p-3.5 rounded-lg bg-slate-900 border border-slate-800 flex items-center gap-3">
                <MapPin className="w-4 h-4 text-indigo-400 shrink-0" />
                <div>
                  <div className="text-[11px] text-slate-400">Location</div>
                  <span className="text-xs sm:text-sm font-medium text-white">
                    {personal.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Social & Resume Buttons */}
            <div className="pt-3 border-t border-slate-800 space-y-2.5">
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-xs font-medium text-slate-300 hover:text-white border border-slate-800 transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4 text-indigo-400" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-xs font-medium text-slate-300 hover:text-white border border-slate-800 transition-colors"
                >
                  <GithubIcon className="w-4 h-4 text-slate-400" />
                  <span>GitHub</span>
                </a>
              </div>

              <a
                href={personal.resumePdf}
                download="Aradhya_Yadav_Resume_Genai.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 p-2.5 rounded-lg bg-indigo-600/15 hover:bg-indigo-600/25 border border-indigo-500/30 text-xs font-medium text-indigo-300 hover:text-indigo-200 transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Resume (PDF)</span>
              </a>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7 surface-card p-6 rounded-xl">
            <h3 className="text-base font-semibold text-white mb-1">
              Send a Message
            </h3>
            <p className="text-xs text-slate-400 mb-4">
              Directly opens a pre-composed email in your mail client addressed to {personal.email}.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-medium text-slate-400 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="Jane Doe"
                    className="w-full px-3 py-2 rounded-lg surface-input text-xs text-white placeholder-slate-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-medium text-slate-400 mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="jane@company.com"
                    className="w-full px-3 py-2 rounded-lg surface-input text-xs text-white placeholder-slate-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-medium text-slate-400 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  required
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  placeholder="AI/ML Engineer Opportunity"
                  className="w-full px-3 py-2 rounded-lg surface-input text-xs text-white placeholder-slate-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-[11px] font-medium text-slate-400 mb-1">
                  Message
                </label>
                <textarea
                  rows={4}
                  required
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Hi Aradhya, we would love to connect about an AI/ML role..."
                  className="w-full px-3 py-2 rounded-lg surface-input text-xs text-white placeholder-slate-500 transition-colors resize-none leading-relaxed"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-xs font-medium text-white bg-indigo-600 hover:bg-indigo-500 transition-colors"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Send Message</span>
              </button>

              {submitted && (
                <p className="text-[11px] text-emerald-400 text-center mt-1">
                  ✓ Email client opened with your draft.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
