import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  Github,
  ExternalLink,
  Layers,
  Cpu,
  AlertTriangle,
  Lightbulb,
  CheckCircle2,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

export default function ProjectDetail() {
  const { id } = useParams();

  const project = portfolioData.projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="flex-1 py-20 flex flex-col items-center justify-center px-4">
        <h2 className="text-2xl font-display font-bold text-[#F5F3EF] mb-2">Project Not Found</h2>
        <p className="text-[#B8BAC4] text-xs sm:text-sm mb-6">
          The requested project specification could not be located.
        </p>
        <Link
          to="/projects"
          className="btn-gold inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Portfolio</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="flex-1 py-10 sm:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Back Link */}
        <div>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#858796] hover:text-[#D8B879] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Projects</span>
          </Link>
        </div>

        {/* Main Luxury Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="luxury-container overflow-hidden"
        >
          {/* Header Banner */}
          <div className="p-6 sm:p-10 border-b border-[#41414B] bg-[#292C38]/40 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#20232F] text-[#D8B879] border border-[#D8B879]/40">
              <span>{project.category}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-display font-extrabold text-[#F5F3EF] tracking-tight">
              {project.title}
            </h1>
            <p className="text-[#B8BAC4] text-sm sm:text-base leading-relaxed max-w-3xl">
              {project.shortDescription}
            </p>

            {/* Action Bar */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#20232F] hover:bg-[#171923] text-[#F5F3EF] text-xs font-semibold transition-all border border-[#41414B] hover:border-[#D8B879]/60"
                >
                  <Github className="w-4 h-4 text-[#D8B879]" />
                  <span>GitHub Repository</span>
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-10 space-y-8">
            {/* Technologies Applied */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-[#858796] mb-3 flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-[#D8B879]" />
                Technologies Applied
              </h2>
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="p-5 rounded-2xl bg-[#292C38] border border-[#41414B]">
                <div className="flex items-center gap-2 font-bold text-[#D8B879] text-sm mb-2">
                  <AlertTriangle className="w-4 h-4 text-[#D8B879] flex-shrink-0" />
                  <span>Problem Statement</span>
                </div>
                <p className="text-[#B8BAC4] text-xs leading-relaxed">
                  {project.problemStatement}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#292C38] border border-[#41414B]">
                <div className="flex items-center gap-2 font-bold text-[#E9DCC2] text-sm mb-2">
                  <Lightbulb className="w-4 h-4 text-[#D8B879] flex-shrink-0" />
                  <span>Proposed Solution</span>
                </div>
                <p className="text-[#B8BAC4] text-xs leading-relaxed">
                  {project.proposedSolution}
                </p>
              </div>
            </div>

            {/* Architecture / Workflow */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#171923] border border-[#41414B] space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D8B879]">
                <Layers className="w-4 h-4 text-[#D8B879]" />
                <span>Workflow & System Execution</span>
              </div>
              <p className="text-xs text-[#B8BAC4] font-mono bg-[#20232F] p-4 rounded-xl border border-[#41414B]/70 leading-relaxed overflow-x-auto">
                {project.architecture}
              </p>
            </div>

            {/* Key Features */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-[#858796] mb-3">
                Key Features & Capabilities
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {project.keyFeatures.map((feat, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-[#292C38] border border-[#41414B] flex items-start gap-2.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#D8B879] flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-[#F5F3EF] leading-relaxed">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* My Contribution */}
            <div className="p-5 rounded-2xl bg-[#292C38] border border-[#41414B]">
              <h2 className="text-xs font-bold uppercase tracking-wider text-[#858796] mb-2">
                Technical Contribution
              </h2>
              <p className="text-xs text-[#B8BAC4] leading-relaxed">
                {project.myContribution}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
