import React from 'react';
import {
  Code2,
  Cpu,
  Database,
  Terminal,
  ShieldCheck,
  Users,
  CheckCircle2,
  Wrench,
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function Skills() {
  const skillSections = [
    {
      category: "Programming Languages",
      icon: Code2,
      badge: "Core Foundations",
      description: "Primary programming languages used across software applications, data processing, and scripting.",
      skills: [
        { name: "Python", context: "Main language for ML prototypes (Streamlit), data wrangling (Pandas, NumPy), and backend (Flask)" },
        { name: "Java", context: "Object-oriented program architecture, data structures, and core software concepts" },
        { name: "C / C++", context: "Algorithmic thinking, memory concepts, and foundational systems programming" },
        { name: "JavaScript", context: "Client-side interactivity, DOM manipulation, and modern web application logic" },
        { name: "HTML & CSS", context: "Semantic webpage layout and responsive interface structuring" },
      ],
    },
    {
      category: "Technologies & Data Science",
      icon: Cpu,
      badge: "Analytics & ML",
      description: "Libraries and frameworks used to process data, compute matrices, and deploy interactive tools.",
      skills: [
        { name: "Pandas", context: "Tabular data extraction, data cleaning, aggregation, and automation scripts" },
        { name: "NumPy", context: "Multi-dimensional arrays, mathematical routines, and numerical analysis" },
        { name: "Matplotlib", context: "Data visualization, statistical plotting, and metric distribution charts" },
        { name: "Streamlit", context: "Rapid deployment of interactive analytical web applications" },
      ],
    },
    {
      category: "Databases & Persistence",
      icon: Database,
      badge: "Storage Solutions",
      description: "Relational and document storage solutions for transactional records and structured schemas.",
      skills: [
        { name: "MongoDB", context: "Document-oriented database concepts, flexible JSON-like records, and collections" },
        { name: "MySQL", context: "Relational database querying, structured schemas, SQL joins, and data integrity" },
        { name: "SQLite", context: "Relational database integration implemented during Approtech R&D internship" },
      ],
    },
    {
      category: "Operating Systems & Workflow",
      icon: Wrench,
      badge: "Platforms & Tools",
      description: "Operating systems, command-line environments, and version control tools.",
      skills: [
        { name: "Ubuntu (Linux)", context: "Terminal navigation, package management, bash commands, and Linux environments" },
        { name: "Python OS Module", context: "Automating directory creation, file batching, and automated backups" },
        { name: "Git & GitHub", context: "Source code version control, repository management, and project tracking" },
        { name: "VS Code", context: "Primary integrated development environment" },
      ],
    },
    {
      category: "Domain Knowledge & Certifications",
      icon: ShieldCheck,
      badge: "Verified Knowledge",
      description: "Certified competencies in cybersecurity, programming, and cloud technologies.",
      skills: [
        { name: "Cyber Security", context: "TATA STRIVE certified: security baselines, threat awareness, and defense concepts" },
        { name: "Python Programming", context: "UDEMY certified: comprehensive programming principles, OOP, and data structures" },
        { name: "Cloud Computing", context: "NPTEL-SWAYAM certified: cloud service models, virtualization, and distributed systems" },
      ],
    },
    {
      category: "Soft Skills & Professional Agility",
      icon: Users,
      badge: "Workplace Strengths",
      description: "Essential collaborative and problem-solving strengths highlighted in my resume.",
      skills: [
        { name: "Problem Solving", context: "Systematic decomposition of complex requirements into clear solutions" },
        { name: "Critical Thinking", context: "Evaluating code efficiency, algorithmic choices, and technical trade-offs" },
        { name: "Learning Agility", context: "Quick assimilation of new programming languages, frameworks, and tools" },
        { name: "Cross-Functional Collaboration", context: "Positive communication and teamwork across project deliverables" },
      ],
    },
  ];

  return (
    <div className="flex-1 py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header Banner */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-[#20232F] text-[#D8B879] border border-[#D8B879]/40 mb-3">
            <Code2 className="w-3.5 h-3.5 text-[#D8B879]" />
            <span>Technical Capabilities</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-[#F5F3EF] tracking-tight">
            Technical Skills
          </h1>
          <p className="text-[#B8BAC4] text-sm sm:text-base mt-2.5 leading-relaxed">
            Organized into dedicated domains reflecting my BCA background, postgraduate studies in MCA, internship experience, and completed certifications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skillSections.map((section, idx) => {
            const Icon = section.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="luxury-container p-6 sm:p-7 flex flex-col justify-between hover:border-[#D8B879]/60 transition-colors group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-2xl bg-[#292C38] border border-[#41414B] group-hover:border-[#D8B879]/50 flex items-center justify-center text-[#D8B879] transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold px-3 py-1 rounded-full bg-[#292C38] text-[#D8B879] border border-[#D8B879]/30">
                      {section.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-display font-bold text-[#F5F3EF] mb-1 group-hover:text-[#D8B879] transition-colors">
                    {section.category}
                  </h3>
                  <p className="text-xs text-[#B8BAC4] leading-relaxed mb-5">
                    {section.description}
                  </p>
                </div>

                <div className="space-y-2.5 mt-auto pt-2">
                  {section.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-3 rounded-xl bg-[#292C38] border border-[#41414B]/70 hover:border-[#D8B879]/40 transition-colors"
                    >
                      <div className="flex items-center justify-between font-bold text-[#F5F3EF] text-xs">
                        <span>{skill.name}</span>
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D8B879] flex-shrink-0" />
                      </div>
                      <p className="text-[11px] text-[#B8BAC4] mt-1 leading-normal font-normal">
                        {skill.context}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
