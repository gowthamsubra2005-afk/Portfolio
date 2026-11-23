import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FolderGit2,
  ExternalLink,
  Github,
  ArrowRight,
  Filter,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import ProjectModal from '../components/ProjectModal';

export default function Projects() {
  const { projects } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const categories = ['All', 'Machine Learning & Security', 'Web Application', 'Python'];

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((p) => p.categories.includes(selectedCategory));

  return (
    <div className="flex-1 py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header Banner */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-[#20232F] text-[#D8B879] border border-[#D8B879]/40 mb-3">
            <FolderGit2 className="w-3.5 h-3.5 text-[#D8B879]" />
            <span>Practical Implementations</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-[#F5F3EF] tracking-tight">
            Portfolio Gallery
          </h1>
          <p className="text-[#B8BAC4] text-sm sm:text-base mt-2.5 leading-relaxed">
            Practical software projects built with Python, Streamlit, Pandas, and Flask. Click any card to inspect the complete workflow.
          </p>
        </div>

        {/* Gallery Container */}
        <div className="luxury-container p-6 sm:p-10 space-y-8">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 pb-5 border-b border-[#41414B]">
            <div className="flex items-center gap-2 text-xs font-bold text-[#858796] mr-2">
              <Filter className="w-3.5 h-3.5 text-[#D8B879]" />
              <span>Filter:</span>
            </div>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-150 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-[#D8B879] to-[#C49F58] text-[#171923] shadow-gold-sm font-bold'
                    : 'bg-[#292C38] text-[#B8BAC4] hover:text-[#F5F3EF] border border-[#41414B]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
                className="rounded-2xl bg-[#292C38] border border-[#41414B] hover:border-[#D8B879]/60 p-6 flex flex-col justify-between group shadow-card-dark transition-colors"
              >
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between">
                    <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold bg-[#20232F] text-[#D8B879] border border-[#D8B879]/30">
                      {project.category}
                    </span>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#858796] hover:text-[#D8B879] transition-colors p-1"
                        aria-label="GitHub Repository"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>

                  <h3 className="text-lg font-display font-bold text-[#F5F3EF] group-hover:text-[#D8B879] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-[#B8BAC4] leading-relaxed line-clamp-3">
                    {project.shortDescription}
                  </p>
                </div>

                <div className="pt-6 space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 3).map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 text-[10px] font-medium bg-[#20232F] text-[#B8BAC4] rounded border border-[#41414B]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-2.5 pt-2 border-t border-[#41414B]/60">
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="py-2.5 px-3 rounded-xl bg-[#20232F] hover:bg-[#171923] text-[#F5F3EF] text-xs font-semibold transition-colors border border-[#41414B]"
                    >
                      Quick Preview
                    </button>
                    <Link
                      to={`/projects/${project.id}`}
                      className="py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#D8B879] to-[#C49F58] hover:from-[#E2C895] hover:to-[#D8B879] text-[#171923] text-xs font-bold transition-all text-center flex items-center justify-center gap-1"
                    >
                      <span>Full Spec</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Modal */}
        {activeModalProject && (
          <ProjectModal
            project={activeModalProject}
            onClose={() => setActiveModalProject(null)}
          />
        )}
      </div>
    </div>
  );
}
