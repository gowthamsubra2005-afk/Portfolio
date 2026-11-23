import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex-1 py-20 flex items-center justify-center px-4">
      <div className="max-w-md w-full luxury-container p-8 text-center space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-[#292C38] border border-[#D8B879]/50 text-[#D8B879] flex items-center justify-center mx-auto shadow-gold-sm">
          <span className="font-display font-extrabold text-2xl">404</span>
        </div>

        <div>
          <h1 className="text-xl font-display font-bold text-[#F5F3EF]">
            Page Not Found
          </h1>
          <p className="text-[#B8BAC4] text-xs sm:text-sm mt-2 leading-relaxed">
            The page you are looking for doesn't exist or has been moved.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row gap-3">
          <Link
            to="/"
            className="btn-gold flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full text-xs font-bold"
          >
            <Home className="w-4 h-4" />
            <span>Return Home</span>
          </Link>
          <Link
            to="/projects"
            className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-[#292C38] hover:bg-[#323644] text-[#F5F3EF] text-xs font-semibold transition-colors border border-[#41414B]"
          >
            <ArrowLeft className="w-4 h-4 text-[#D8B879]" />
            <span>Explore Portfolio</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
