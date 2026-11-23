import React from 'react';
import { Info, X, Mail } from 'lucide-react';

export default function NotificationToast({ isOpen, message, onClose, directEmail }) {
  if (!isOpen) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-md w-full mx-4 sm:mx-0 bg-navy-800 text-white rounded-xl shadow-elevated border border-brand-blue/30 p-4 animate-in slide-in-from-bottom-5 duration-300">
      <div className="flex items-start gap-3">
        <div className="p-2 rounded-lg bg-brand-blue/20 text-brand-blue flex-shrink-0 mt-0.5">
          <Info className="w-5 h-5 text-brand-lightBlue" />
        </div>
        <div className="flex-1 text-sm">
          <div className="font-semibold text-white mb-1">
            Frontend Prototype Notification
          </div>
          <p className="text-slate-300 text-xs leading-relaxed mb-3">
            {message ||
              "Contact form submissions are currently disabled in this local frontend prototype. No data has been saved or sent."}
          </p>
          {directEmail && (
            <a
              href={`mailto:${directEmail}`}
              className="inline-flex items-center gap-1.5 text-xs text-brand-lightBlue hover:text-white font-medium underline underline-offset-2"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email directly at {directEmail}</span>
            </a>
          )}
        </div>
        <button
          onClick={onClose}
          className="text-slate-400 hover:text-white p-1 rounded-md transition-colors"
          aria-label="Dismiss notification"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
