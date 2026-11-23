import React from 'react';
import { Link } from 'react-router-dom';
import {
  GraduationCap,
  Target,
  Sparkles,
  Compass,
  CheckCircle2,
  Cpu,
  ArrowRight,
  MapPin,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { personal } = portfolioData;

  return (
    <div className="flex-1 py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header Banner */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-[#20232F] text-[#D8B879] border border-[#D8B879]/40 mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-[#D8B879]" />
            <span>Profile & Technical Journey</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-[#F5F3EF] tracking-tight">
            About Me
          </h1>
          <p className="text-[#B8BAC4] text-sm sm:text-base mt-2.5 leading-relaxed">
            A comprehensive look into my academic journey in Computer Applications (BCA & MCA), engineering mindset, and future aspirations.
          </p>
        </div>

        {/* Core Two-Column Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Avatar & Summary Box */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="luxury-container p-6 sm:p-8 text-center space-y-6">
              {/* Circular Avatar in Authentic Format */}
              <div className="relative mx-auto w-48 h-48 sm:w-56 sm:h-56">
                <div className="absolute -inset-3 rounded-full bg-[#D8B879]/20 blur-xl"></div>
                <div className="relative w-full h-full rounded-full p-1.5 bg-gradient-to-tr from-[#D8B879] via-[#C49F58] to-[#E9DCC2] shadow-gold-md">
                  <img
                    src={personal.avatar}
                    alt={personal.fullName}
                    className="w-full h-full rounded-full object-cover object-top"
                  />
                  <div className="absolute bottom-2 right-2 bg-[#20232F] px-2.5 py-1 rounded-full border border-[#D8B879]/50 shadow flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#D8B879] animate-pulse"></span>
                    <span className="text-[10px] font-bold text-[#F5F3EF]">Active</span>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-[#F5F3EF]">
                  {personal.fullName}
                </h2>
                <p className="text-xs font-semibold text-[#D8B879] mt-1">
                  BCA Graduate • MCA Postgraduate Scholar
                </p>
              </div>

              {/* Verified Details Table */}
              <div className="border-t border-[#41414B] pt-4 space-y-2.5 text-xs text-left">
                <div className="flex justify-between items-center">
                  <span className="text-[#858796]">BCA Degree</span>
                  <span className="font-semibold text-[#F5F3EF]">SRM University (CGPA 8.78)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#858796]">Postgraduate</span>
                  <span className="font-semibold text-[#D8B879]">Pursuing MCA</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#858796]">Location</span>
                  <span className="font-semibold text-[#F5F3EF]">Chennai, Tamil Nadu</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#858796]">Languages</span>
                  <span className="font-semibold text-[#F5F3EF]">English, Tamil</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/contact"
                  className="btn-gold w-full inline-flex items-center justify-center gap-2 py-3 rounded-full text-xs font-bold"
                >
                  <span>Connect With Me</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Motivation Box */}
            <div className="p-6 rounded-3xl bg-[#20232F] border border-[#41414B] space-y-2.5">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D8B879]">
                <Sparkles className="w-4 h-4 text-[#D8B879]" />
                <span>What Drives My Work</span>
              </div>
              <p className="text-xs text-[#B8BAC4] leading-relaxed">
                "I am driven by turning technical knowledge into practical software that makes a real impact. Whether applying machine learning algorithms to detect phishing threats with explainable AI or creating automated attendance tools with Pandas, I love building applications that solve daily challenges effectively."
              </p>
            </div>
          </motion.div>

          {/* Right Column: Narrative & Mindset */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Career Objective */}
            <div className="luxury-container p-6 sm:p-8 space-y-3 border-l-4 border-l-[#D8B879]">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D8B879]">
                <Target className="w-4 h-4 text-[#D8B879]" />
                <span>Career Objective</span>
              </div>
              <p className="text-[#F5F3EF] text-sm sm:text-base leading-relaxed font-normal">
                "{personal.careerObjective}"
              </p>
            </div>

            {/* Academic Background Details */}
            <div className="luxury-container p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#858796]">
                <GraduationCap className="w-4 h-4 text-[#D8B879]" />
                <span>Academic Foundation</span>
              </div>
              <h3 className="text-xl font-display font-bold text-[#F5F3EF]">
                Computer Applications (BCA & MCA)
              </h3>
              <p className="text-[#B8BAC4] text-xs sm:text-sm leading-relaxed">
                Graduated with a Bachelor of Computer Applications (BCA) from <strong>SRM University of Science and Technology, Kattankulathur</strong>, achieving a distinguished <strong>8.78 CGPA</strong>. I am currently pursuing my <strong>Master of Computer Applications (MCA)</strong> to deepen my mastery of advanced computing architectures, database engineering, and software solutions.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-4 rounded-2xl bg-[#292C38] border border-[#41414B] text-xs">
                  <span className="font-bold text-[#D8B879] block mb-1">Undergraduate (BCA)</span>
                  SRM University (2023–2026), 8.78 CGPA. Core focus on Python, Java, databases, and application systems.
                </div>
                <div className="p-4 rounded-2xl bg-[#292C38] border border-[#41414B] text-xs">
                  <span className="font-bold text-[#E9DCC2] block mb-1">Postgraduate (MCA)</span>
                  Active Master of Computer Applications scholar focusing on higher-level software design and modern systems.
                </div>
              </div>
            </div>

            {/* Problem Solving Mindset */}
            <div className="luxury-container p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#858796]">
                <Compass className="w-4 h-4 text-[#D8B879]" />
                <span>Engineering Mindset</span>
              </div>
              <h3 className="text-xl font-display font-bold text-[#F5F3EF]">
                4-Step Technical Problem-Solving Approach
              </h3>

              <div className="space-y-3">
                {[
                  { title: 'Understanding Core Requirements', desc: 'Carefully dissecting user needs and system parameters before writing code.' },
                  { title: 'Validation & Data Integrity', desc: 'Ensuring strong input validation and clean database structures to prevent faulty submissions.' },
                  { title: 'Practical Tool Integration', desc: 'Leveraging libraries such as Pandas, Streamlit, and Flask to build fast, robust solutions.' },
                  { title: 'Continuous Learning & Evolution', desc: 'Constantly exploring emerging tools, cloud platforms, and security techniques.' },
                ].map((step, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#292C38] border border-[#41414B]">
                    <div className="w-7 h-7 rounded-xl bg-[#20232F] text-[#D8B879] border border-[#D8B879]/40 flex items-center justify-center font-bold text-xs flex-shrink-0">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#F5F3EF]">{step.title}</h4>
                      <p className="text-[11px] text-[#B8BAC4] mt-0.5">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
