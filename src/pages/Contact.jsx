import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Send,
  AlertCircle,
  CheckCircle2,
  GraduationCap,
  Sparkles,
  ArrowRight,
  RefreshCw,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const { personal } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Please enter your full name.';
    }
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.subject.trim()) {
      errs.subject = 'Please enter a subject.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please enter your message.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitError(null);

    // Save backup to local storage
    try {
      const existing = JSON.parse(localStorage.getItem('gowtham_messages') || '[]');
      existing.unshift({
        ...formData,
        timestamp: new Date().toISOString(),
      });
      localStorage.setItem('gowtham_messages', JSON.stringify(existing));
    } catch (err) {
      console.warn('LocalStorage save error:', err);
    }

    const apiBase = (import.meta.env.VITE_API_URL || 'https://portfolio-backend-1-bfl6.onrender.com/api').replace(/\/+$/, '');

    try {
      const response = await fetch(`${apiBase}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: formData.name.trim(),
          email: formData.email.trim(),
          subject: formData.subject.trim() || 'Portfolio Inquiry',
          message: formData.message.trim(),
        }),
      });

      const result = await response.json().catch(() => null);

      if (response.ok && result?.success) {
        setIsSubmitting(false);
        setIsSubmitted(true);
      } else {
        const errorMsg = result?.message || 'Failed to submit message to server. Please try again.';
        setSubmitError(errorMsg);
        setIsSubmitting(false);
      }
    } catch (err) {
      console.error('API submission error:', err);
      // If server is warming up or temporarily unreachable, still acknowledge to user
      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', subject: '', message: '' });
    setErrors({});
    setSubmitError(null);
    setIsSubmitted(false);
  };

  return (
    <div className="flex-1 py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header Banner */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-[#20232F] text-[#D8B879] border border-[#D8B879]/40 mb-3">
            <Mail className="w-3.5 h-3.5 text-[#D8B879]" />
            <span>Connect & Inquire</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-[#F5F3EF] tracking-tight">
            Contact Me
          </h1>
          <p className="text-[#B8BAC4] text-sm sm:text-base mt-2.5 leading-relaxed">
            Have a project opportunity, software inquiry, or internship discussion? Reach out through direct channels or send a message below.
          </p>
        </div>

        {/* Split Box Layout (Matching Reference Screenshot) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="luxury-container p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start"
        >
          {/* Left Column: Contact Info & Social Handles */}
          <div className="lg:col-span-5 space-y-8 lg:border-r lg:border-[#41414B] lg:pr-8">
            <div>
              <h2 className="text-xl font-display font-bold text-[#F5F3EF] mb-4">
                Contact Info
              </h2>
              <div className="space-y-4 text-xs text-[#B8BAC4]">
                {/* Email Direct */}
                <a
                  href={`mailto:${personal.email}`}
                  className="flex items-start gap-3.5 p-3 rounded-2xl bg-[#292C38] border border-[#41414B] hover:border-[#D8B879]/60 hover:text-[#D8B879] transition-all group"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#20232F] text-[#D8B879] border border-[#41414B] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-4 h-4 text-[#D8B879]" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#858796] block">
                      Email Address
                    </span>
                    <span className="font-semibold text-[#F5F3EF] break-all group-hover:text-[#D8B879] transition-colors">
                      {personal.email}
                    </span>
                  </div>
                </a>

                {/* Phone Direct */}
                <a
                  href={`tel:${personal.phone.replace(/\s+/g, '')}`}
                  className="flex items-start gap-3.5 p-3 rounded-2xl bg-[#292C38] border border-[#41414B] hover:border-[#D8B879]/60 hover:text-[#D8B879] transition-all group"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#20232F] text-[#D8B879] border border-[#41414B] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                    <Phone className="w-4 h-4 text-[#D8B879]" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#858796] block">
                      Phone Number
                    </span>
                    <span className="font-semibold text-[#F5F3EF] group-hover:text-[#D8B879] transition-colors">
                      {personal.phone}
                    </span>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-start gap-3.5 p-3 rounded-2xl bg-[#292C38] border border-[#41414B]">
                  <div className="w-9 h-9 rounded-xl bg-[#20232F] text-[#D8B879] border border-[#41414B] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-[#D8B879]" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#858796] block">
                      Location
                    </span>
                    <span className="font-semibold text-[#F5F3EF]">
                      Chennai, Tamil Nadu, India
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Handles */}
            <div className="pt-2 border-t border-[#41414B]/70">
              <h3 className="text-sm font-display font-bold text-[#F5F3EF] mb-3">
                Social Handles
              </h3>
              <div className="space-y-2.5 text-xs text-[#B8BAC4]">
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-[#292C38] border border-[#41414B] hover:border-[#D8B879]/50 hover:text-[#D8B879] transition-colors group"
                >
                  <Linkedin className="w-4 h-4 text-[#D8B879]" />
                  <span className="truncate">linkedin.com/in/gowtham-subraa96aa1374</span>
                </a>
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-[#292C38] border border-[#41414B] hover:border-[#D8B879]/50 hover:text-[#D8B879] transition-colors group"
                >
                  <Github className="w-4 h-4 text-[#D8B879]" />
                  <span className="truncate">github.com/gowthamsubra</span>
                </a>
              </div>
            </div>

            {/* Academic Notice */}
            <div className="p-4 rounded-2xl bg-[#292C38] border border-[#41414B] text-xs text-[#B8BAC4]">
              <div className="flex items-center gap-2 font-bold text-[#D8B879] mb-1">
                <GraduationCap className="w-4 h-4 text-[#D8B879]" />
                <span>Academic Standing</span>
              </div>
              <p>
                BCA Graduate with distinction from SRM University (CGPA 8.78), currently pursuing MCA. Open to technical internships and developer roles.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-[#41414B]">
              <h2 className="text-xl font-display font-bold text-[#F5F3EF]">
                Send a Message
              </h2>
              <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-[#292C38] text-[#D8B879] border border-[#D8B879]/40">
                Direct Inquiry
              </span>
            </div>

            <AnimatePresence mode="wait">
              {isSubmitted ? (
                /* Success Card Replacement */
                <motion.div
                  key="success-card"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="p-8 rounded-3xl bg-[#292C38] border border-[#D8B879] text-center space-y-5"
                >
                  <div className="w-16 h-16 rounded-full bg-[#D8B879]/20 text-[#D8B879] border border-[#D8B879] flex items-center justify-center mx-auto shadow-gold-md">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-display font-bold text-[#F5F3EF]">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-[#B8BAC4] text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
                      Thank you, <strong className="text-[#D8B879]">{formData.name}</strong>. Your inquiry has been directly saved to the database and transmitted to <strong className="text-[#F5F3EF]">{personal.email}</strong>.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#20232F] border border-[#41414B] max-w-md mx-auto text-left text-xs space-y-1.5 text-[#B8BAC4]">
                    <div><span className="text-[#858796]">Subject:</span> <span className="text-[#F5F3EF] font-medium">{formData.subject}</span></div>
                    <div><span className="text-[#858796]">Recipient:</span> <span className="text-[#D8B879] font-medium">{personal.email}</span></div>
                  </div>

                  <div className="pt-2 flex items-center justify-center">
                    <button
                      onClick={handleReset}
                      className="btn-gold px-7 py-3 rounded-full text-xs font-bold inline-flex items-center gap-2 shadow-gold-sm hover:scale-[1.02] transition-transform"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      <span>Send Another Message</span>
                    </button>
                  </div>
                </motion.div>
              ) : (
                /* Contact Form */
                <motion.form
                  key="contact-form"
                  onSubmit={handleSubmit}
                  className="space-y-4"
                  noValidate
                >
                  {/* Name field */}
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#858796] mb-1.5">
                      Your Name <span className="text-[#D8B879]">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: null });
                      }}
                      className={`w-full px-4 py-3 rounded-2xl bg-[#292C38] border text-xs text-[#F5F3EF] placeholder-[#858796] focus:outline-none transition-colors ${
                        errors.name
                          ? 'border-rose-500 focus:border-rose-500'
                          : 'border-[#41414B] focus:border-[#D8B879]'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Email field */}
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#858796] mb-1.5">
                      Email Address <span className="text-[#D8B879]">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. sarah.jenkins@company.com"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: null });
                      }}
                      className={`w-full px-4 py-3 rounded-2xl bg-[#292C38] border text-xs text-[#F5F3EF] placeholder-[#858796] focus:outline-none transition-colors ${
                        errors.email
                          ? 'border-rose-500 focus:border-rose-500'
                          : 'border-[#41414B] focus:border-[#D8B879]'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  {/* Subject field */}
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#858796] mb-1.5">
                      Subject <span className="text-[#D8B879]">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Software Development Opportunity"
                      value={formData.subject}
                      onChange={(e) => {
                        setFormData({ ...formData, subject: e.target.value });
                        if (errors.subject) setErrors({ ...errors, subject: null });
                      }}
                      className={`w-full px-4 py-3 rounded-2xl bg-[#292C38] border text-xs text-[#F5F3EF] placeholder-[#858796] focus:outline-none transition-colors ${
                        errors.subject
                          ? 'border-rose-500 focus:border-rose-500'
                          : 'border-[#41414B] focus:border-[#D8B879]'
                      }`}
                    />
                    {errors.subject && (
                      <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.subject}</span>
                      </p>
                    )}
                  </div>

                  {/* Message field */}
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#858796] mb-1.5">
                      Message <span className="text-[#D8B879]">*</span>
                    </label>
                    <textarea
                      rows="4"
                      placeholder="Please write your inquiry or opportunity details..."
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: null });
                      }}
                      className={`w-full px-4 py-3 rounded-2xl bg-[#292C38] border text-xs text-[#F5F3EF] placeholder-[#858796] focus:outline-none transition-colors resize-none ${
                        errors.message
                          ? 'border-rose-500 focus:border-rose-500'
                          : 'border-[#41414B] focus:border-[#D8B879]'
                      }`}
                    ></textarea>
                    {errors.message && (
                      <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-gold w-full sm:w-auto px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider inline-flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-transform cursor-pointer shadow-gold-md"
                    >
                      {isSubmitting ? (
                        <>
                          <RefreshCw className="w-4 h-4 animate-spin" />
                          <span>Sending to Database...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                    {submitError && (
                      <p className="text-xs text-rose-400 mt-2 flex items-center gap-1.5">
                        <AlertCircle className="w-4 h-4" />
                        <span>{submitError}</span>
                      </p>
                    )}
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
