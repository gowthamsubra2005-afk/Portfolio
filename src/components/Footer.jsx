import React from 'react';
import { Link } from 'react-router-dom';
import {
  Mail,
  Linkedin,
  Github,
  ArrowUp,
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#171923] text-[#F5F3EF] border-t border-[#41414B]/70 mt-auto py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-[#41414B]/50">
          {/* Logo & Identity */}
          <div className="flex items-center space-x-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#20232F] border border-[#D8B879]/50 text-[#D8B879] flex items-center justify-center font-display font-bold text-base shadow-gold-sm">
              GS
            </div>
            <div>
              <span className="text-base font-display font-bold tracking-tight text-[#F5F3EF] block">
                {portfolioData.personal.fullName}
              </span>
              <span className="text-xs text-[#858796]">
                BCA Graduate • MCA Scholar
              </span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <nav className="flex flex-wrap items-center justify-center gap-5 text-xs text-[#B8BAC4]">
            <Link to="/" className="hover:text-[#D8B879] transition-colors">Home</Link>
            <Link to="/about" className="hover:text-[#D8B879] transition-colors">About</Link>
            <Link to="/skills" className="hover:text-[#D8B879] transition-colors">Skills</Link>
            <Link to="/experience" className="hover:text-[#D8B879] transition-colors">Experience</Link>
            <Link to="/projects" className="hover:text-[#D8B879] transition-colors">Portfolio</Link>
            <Link to="/education" className="hover:text-[#D8B879] transition-colors">Education</Link>
            <Link to="/contact" className="hover:text-[#D8B879] transition-colors">Contact</Link>
          </nav>

          {/* Socials & Email */}
          <div className="flex items-center space-x-3">
            <a
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl bg-[#20232F] border border-[#41414B] hover:border-[#D8B879] text-[#B8BAC4] hover:text-[#D8B879] flex items-center justify-center transition-all duration-200"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl bg-[#20232F] border border-[#41414B] hover:border-[#D8B879] text-[#B8BAC4] hover:text-[#D8B879] flex items-center justify-center transition-all duration-200"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${portfolioData.personal.email}`}
              className="w-9 h-9 rounded-xl bg-[#20232F] border border-[#41414B] hover:border-[#D8B879] text-[#B8BAC4] hover:text-[#D8B879] flex items-center justify-center transition-all duration-200"
              aria-label="Email Gowtham"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-[#858796] gap-4">
          <p>
            &copy; {currentYear} {portfolioData.personal.fullName}. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-[#D8B879] transition-colors text-xs font-medium bg-[#20232F] border border-[#41414B] px-3.5 py-1.5 rounded-full"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#D8B879]" />
          </button>
        </div>
      </div>
    </footer>
  );
}
