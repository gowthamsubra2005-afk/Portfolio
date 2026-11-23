import React from 'react';
import { Link } from 'react-router-dom';
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  Cpu,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <div className="flex-1 py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header Banner */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-[#20232F] text-[#D8B879] border border-[#D8B879]/40 mb-3">
            <Briefcase className="w-3.5 h-3.5 text-[#D8B879]" />
            <span>Practical Industry Experience</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-[#F5F3EF] tracking-tight">
            Work Experience
          </h1>
          <p className="text-[#B8BAC4] text-sm sm:text-base mt-2.5 leading-relaxed">
            Documented engineering contributions and deliverables from my internship at Approtech R&D Solutions Pvt Ltd.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8 max-w-4xl">
          {experience.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="luxury-container p-6 sm:p-10 relative overflow-hidden"
            >
              {/* Top Accent Strip */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D8B879] via-[#C49F58] to-[#E9DCC2]"></div>

              {/* Title & Metadata Header */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-[#41414B]">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold bg-[#292C38] text-[#D8B879] border border-[#D8B879]/30 mb-2">
                    {item.type}
                  </span>
                  <h2 className="text-2xl font-display font-bold text-[#F5F3EF] tracking-tight">
                    {item.role}
                  </h2>
                  <h3 className="text-sm font-semibold text-[#D8B879] mt-0.5">
                    {item.company}
                  </h3>
                </div>

                <div className="flex flex-col sm:items-end gap-1.5 text-xs text-[#B8BAC4] font-medium">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-[#D8B879]" />
                    <span>{item.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-[#D8B879]" />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>

              {/* Summary Description */}
              <div className="py-6 border-b border-[#41414B]">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#858796] mb-2">
                  Internship Overview
                </h4>
                <p className="text-[#B8BAC4] text-xs sm:text-sm leading-relaxed">
                  {item.summary}
                </p>
              </div>

              {/* Technologies Applied */}
              <div className="py-6 border-b border-[#41414B]">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#858796] mb-3 flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-[#D8B879]" />
                  Technologies Applied
                </h4>
                <div className="flex flex-wrap gap-2">
                  {item.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 rounded-xl text-xs font-semibold bg-[#292C38] text-[#F5F3EF] border border-[#41414B]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Core Work Performed */}
              <div className="py-6 border-b border-[#41414B]">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#858796] mb-3">
                  Key Technical Work Performed
                </h4>
                <div className="space-y-3">
                  {item.responsibilities.map((resp, rIdx) => (
                    <div key={rIdx} className="flex items-start gap-3 text-xs sm:text-sm text-[#F5F3EF]">
                      <CheckCircle2 className="w-4 h-4 text-[#D8B879] flex-shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{resp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Learning Outcomes */}
              <div className="pt-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#858796] mb-3 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#D8B879]" />
                  Key Learning Outcomes
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                  {item.learningOutcomes.map((outcome, oIdx) => (
                    <div
                      key={oIdx}
                      className="p-4 rounded-2xl bg-[#292C38] border border-[#41414B] text-xs text-[#B8BAC4] leading-relaxed"
                    >
                      {outcome}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="max-w-4xl luxury-container p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-base font-display font-bold text-[#F5F3EF]">
              Want to see the projects I have developed?
            </h4>
            <p className="text-xs text-[#B8BAC4] mt-0.5">
              Explore the interactive Phishing Detection website and Attendance Management System.
            </p>
          </div>
          <Link
            to="/projects"
            className="btn-gold inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold flex-shrink-0"
          >
            <span>Explore Portfolio</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
