import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle2, Layers, Cpu, AlertTriangle, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-[#171923]/80 backdrop-blur-md animate-in fade-in duration-200">
      {/* Modal Dialog Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.2 }}
        className="luxury-container w-full max-w-3xl max-h-[90vh] flex flex-col overflow-hidden shadow-2xl border border-[#D8B879]/30"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-[#41414B] bg-[#292C38]">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold bg-[#20232F] text-[#D8B879] border border-[#D8B879]/40 mb-1.5">
              {project.category}
            </div>
            <h3 className="text-xl sm:text-2xl font-display font-bold text-[#F5F3EF] tracking-tight">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#858796] hover:text-[#D8B879] rounded-xl hover:bg-[#20232F] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="px-6 sm:px-8 py-6 overflow-y-auto space-y-6 text-[#B8BAC4] text-xs leading-relaxed">
          {/* Overview */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-wider text-[#858796] mb-1">
              Project Overview
            </h4>
            <p className="text-[#F5F3EF] font-medium text-sm">
              {project.shortDescription}
            </p>
          </div>

          {/* Tech Stack Pills */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-wider text-[#858796] mb-2.5 flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-[#D8B879]" />
              Technologies Applied
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-xl text-xs font-semibold bg-[#292C38] text-[#F5F3EF] border border-[#41414B]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Problem Statement & Proposed Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-[#292C38] border border-[#41414B]">
              <div className="flex items-center gap-2 font-bold text-[#D8B879] text-xs mb-1.5">
                <AlertTriangle className="w-4 h-4 text-[#D8B879] flex-shrink-0" />
                Problem Statement
              </div>
              <p className="text-[#B8BAC4] text-xs leading-relaxed">
                {project.problemStatement}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#292C38] border border-[#41414B]">
              <div className="flex items-center gap-2 font-bold text-[#E9DCC2] text-xs mb-1.5">
                <Lightbulb className="w-4 h-4 text-[#D8B879] flex-shrink-0" />
                Proposed Solution
              </div>
              <p className="text-[#B8BAC4] text-xs leading-relaxed">
                {project.proposedSolution}
              </p>
            </div>
          </div>

          {/* Architecture / Workflow */}
          <div className="p-4 rounded-2xl bg-[#171923] border border-[#41414B] space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D8B879]">
              <Layers className="w-4 h-4 text-[#D8B879]" />
              System Workflow
            </div>
            <p className="text-[11px] text-[#B8BAC4] font-mono bg-[#20232F] p-3 rounded-xl border border-[#41414B]/70 leading-relaxed overflow-x-auto">
              {project.architecture}
            </p>
          </div>

          {/* Key Features */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-wider text-[#858796] mb-2.5">
              Key Features
            </h4>
            <ul className="space-y-2">
              {project.keyFeatures.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-[#F5F3EF]">
                  <CheckCircle2 className="w-4 h-4 text-[#D8B879] flex-shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* My Contribution */}
          <div className="p-4 rounded-2xl bg-[#292C38] border border-[#41414B]">
            <h4 className="text-[10px] font-bold uppercase tracking-wider text-[#858796] mb-1.5">
              Technical Contribution
            </h4>
            <p className="text-xs text-[#B8BAC4] leading-relaxed">
              {project.myContribution}
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 sm:px-8 py-4 border-t border-[#41414B] bg-[#292C38] flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#20232F] hover:bg-[#171923] text-[#F5F3EF] text-xs font-semibold transition-colors border border-[#41414B]"
              >
                <Github className="w-3.5 h-3.5 text-[#D8B879]" />
                <span>View Repository</span>
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Live Demo</span>
              </a>
            )}
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-full border border-[#41414B] text-[#B8BAC4] hover:text-[#F5F3EF] hover:bg-[#20232F] text-xs font-semibold transition-colors"
          >
            Close
          </button>
        </div>
      </motion.div>
    </div>
  );
}
