import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Experience', path: '/experience' },
    { name: 'Projects', path: '/projects' },
    { name: 'Education', path: '/education' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#171923]/95 backdrop-blur-md shadow-2xl border-b border-[#41414B]/80 py-3.5'
          : 'bg-[#171923] border-b border-[#41414B]/40 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo / Monogram */}
          <NavLink
            to="/"
            className="flex items-center space-x-3.5 group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-[#20232F] border border-[#D8B879]/50 text-[#D8B879] flex items-center justify-center font-display font-bold text-base shadow-gold-sm group-hover:border-[#D8B879] group-hover:scale-105 transition-all duration-200">
              GS
            </div>
            <div>
              <span className="text-base font-display font-bold tracking-tight text-[#F5F3EF] block group-hover:text-[#D8B879] transition-colors">
                {portfolioData.personal.fullName}
              </span>
              <span className="text-[11px] text-[#B8BAC4] font-medium tracking-wide flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D8B879] inline-block animate-pulse"></span>
                BCA Graduate • MCA Scholar
              </span>
            </div>
          </NavLink>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-1.5 bg-[#20232F]/80 px-3 py-1.5 rounded-2xl border border-[#41414B]/70 backdrop-blur-sm shadow-inner">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-3.5 py-1.5 rounded-xl text-xs font-medium tracking-wide transition-all duration-200 relative ${
                    isActive
                      ? 'text-[#171923] bg-gradient-to-r from-[#D8B879] to-[#C49F58] font-semibold shadow-gold-sm'
                      : 'text-[#B8BAC4] hover:text-[#F5F3EF] hover:bg-[#292C38]'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center space-x-3">
            <NavLink
              to="/contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-full text-[#171923] bg-gradient-to-r from-[#D8B879] to-[#C49F58] hover:from-[#E2C895] hover:to-[#D8B879] shadow-gold-sm hover:shadow-gold-md transition-all duration-200 hover:-translate-y-0.5"
            >
              <span>Contact Me</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-[#F5F3EF] p-2 rounded-xl bg-[#20232F] border border-[#41414B] focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-5 h-5 text-[#D8B879]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#20232F] border-b border-[#41414B] px-4 pt-3 pb-6 space-y-1.5 shadow-2xl mt-3 overflow-hidden"
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `block px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-[#171923] bg-[#D8B879] font-semibold'
                      : 'text-[#B8BAC4] hover:text-[#F5F3EF] hover:bg-[#292C38]'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <div className="pt-2">
              <NavLink
                to="/contact"
                className="w-full flex items-center justify-center gap-1.5 px-4 py-3 rounded-full text-sm font-semibold text-[#171923] bg-gradient-to-r from-[#D8B879] to-[#C49F58]"
              >
                <span>Contact Me</span>
                <ArrowUpRight className="w-4 h-4" />
              </NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
