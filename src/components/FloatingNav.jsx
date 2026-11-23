import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, User, Briefcase, FolderGit2, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export default function FloatingNav() {
  const items = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'About', path: '/about', icon: User },
    { name: 'Projects', path: '/projects', icon: FolderGit2 },
    { name: 'Experience', path: '/experience', icon: Briefcase },
    { name: 'Contact', path: '/contact', icon: Mail },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="fixed right-4 sm:right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center gap-2.5 p-2 rounded-full bg-[#20232F]/90 border border-[#41414B] shadow-2xl backdrop-blur-md"
    >
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 group relative ${
                isActive
                  ? 'bg-gradient-to-tr from-[#D8B879] to-[#C49F58] text-[#171923] shadow-gold-sm'
                  : 'text-[#B8BAC4] hover:text-[#D8B879] hover:bg-[#292C38]'
              }`
            }
            title={item.name}
          >
            {({ isActive }) => (
              <>
                <Icon className={`w-4 h-4 transition-transform group-hover:scale-110 ${isActive ? 'stroke-[2.5]' : ''}`} />
                {/* Tooltip on left */}
                <span className="absolute right-12 px-2.5 py-1 rounded-lg bg-[#292C38] text-[#F5F3EF] border border-[#41414B] text-[11px] font-medium opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
                  {item.name}
                </span>
              </>
            )}
          </NavLink>
        );
      })}
    </motion.div>
  );
}
