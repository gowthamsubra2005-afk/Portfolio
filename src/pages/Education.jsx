import React from 'react';
import {
  GraduationCap,
  Award,
  CheckCircle2,
  Globe2,
  ShieldCheck,
  Cloud,
  Terminal,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

export default function Education() {
  const { education, certifications, languages } = portfolioData;

  return (
    <div className="flex-1 py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header Banner */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-[#20232F] text-[#D8B879] border border-[#D8B879]/40 mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-[#D8B879]" />
            <span>Academic Qualifications & Credentials</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-[#F5F3EF] tracking-tight">
            Education & Certifications
          </h1>
          <p className="text-[#B8BAC4] text-sm sm:text-base mt-2.5 leading-relaxed">
            Verified formal academic education (BCA & MCA), professional certifications, and language proficiencies extracted directly from my resume.
          </p>
        </div>

        {/* Academic Timeline Section */}
        <div className="space-y-6 max-w-4xl">
          <h2 className="text-xl font-display font-bold text-[#F5F3EF] flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-[#D8B879]" />
            <span>Academic Timeline</span>
          </h2>

          <div className="space-y-6">
            {education.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="luxury-container p-6 sm:p-8 relative overflow-hidden"
              >
                {/* Visual Accent for Degree / PG */}
                {idx < 2 && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D8B879] to-[#C49F58]"></div>
                )}

                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-4 border-b border-[#41414B]">
                  <div>
                    <h3 className="text-lg sm:text-xl font-display font-bold text-[#F5F3EF]">
                      {item.degree}
                    </h3>
                    <p className="text-[#D8B879] font-semibold text-sm mt-0.5">
                      {item.institution}
                    </p>
                    <p className="text-[#858796] text-xs mt-1">
                      Program: <span className="font-semibold text-[#B8BAC4]">{item.specialization}</span>
                    </p>
                  </div>

                  <div className="flex flex-col sm:items-end gap-1 flex-shrink-0">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#292C38] text-[#D8B879] border border-[#D8B879]/40 text-xs font-bold shadow-sm">
                      {item.score}
                    </span>
                    <span className="text-xs text-[#858796] font-medium">
                      {item.period}
                    </span>
                  </div>
                </div>

                <div className="pt-4">
                  <ul className="space-y-2">
                    {item.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2.5 text-xs text-[#B8BAC4]">
                        <CheckCircle2 className="w-4 h-4 text-[#D8B879] flex-shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div className="space-y-6 max-w-5xl">
          <h2 className="text-xl font-display font-bold text-[#F5F3EF] flex items-center gap-2">
            <Award className="w-5 h-5 text-[#D8B879]" />
            <span>Verified Certifications</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="luxury-container p-6 flex flex-col justify-between hover:border-[#D8B879]/60 transition-colors"
              >
                <div>
                  <div className="w-11 h-11 rounded-2xl bg-[#292C38] text-[#D8B879] border border-[#41414B] flex items-center justify-center mb-4 shadow-gold-sm">
                    {cert.title.toLowerCase().includes('cyber') && <ShieldCheck className="w-5 h-5" />}
                    {cert.title.toLowerCase().includes('python') && <Terminal className="w-5 h-5" />}
                    {cert.title.toLowerCase().includes('cloud') && <Cloud className="w-5 h-5" />}
                  </div>

                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#D8B879] mb-1 block">
                    {cert.issuer}
                  </span>
                  <h3 className="text-lg font-display font-bold text-[#F5F3EF] mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-[#B8BAC4] leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-[#41414B] flex items-center justify-between text-xs text-[#858796]">
                  <span>Verified Credential</span>
                  <CheckCircle2 className="w-4 h-4 text-[#D8B879]" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Languages Section */}
        <div className="space-y-4 max-w-md">
          <h2 className="text-lg font-display font-bold text-[#F5F3EF] flex items-center gap-2">
            <Globe2 className="w-4 h-4 text-[#D8B879]" />
            <span>Languages</span>
          </h2>

          <div className="grid grid-cols-2 gap-3.5">
            {languages.map((lang, idx) => (
              <div
                key={idx}
                className="luxury-container p-4 flex items-center justify-between"
              >
                <span className="font-bold text-[#F5F3EF] text-xs">{lang.name}</span>
                <span className="text-[11px] text-[#D8B879]">{lang.level.split(' ')[0]}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
