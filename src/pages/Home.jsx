import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Code2,
  Cpu,
  Database,
  ArrowRight,
  Download,
  Mail,
  Linkedin,
  Github,
  MapPin,
  Sparkles,
  ExternalLink,
  Layers,
  Send,
  AlertCircle,
  Info,
  CheckCircle2,
  Phone,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import ProjectModal from '../components/ProjectModal';

export default function Home() {
  const { personal, projects, skillsCategories } = portfolioData;

  // Projects filter state
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const categories = ['All', 'Machine Learning & Security', 'Web Application', 'Python'];

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((p) => p.categories.includes(selectedCategory));

  // Contact form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name.';
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) errs.message = 'Please enter your message.';

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setIsSubmitting(true);

    try {
      const existing = JSON.parse(localStorage.getItem('gowtham_messages') || '[]');
      existing.unshift({
        ...formData,
        subject: 'Portfolio Inquiry via Home Page',
        timestamp: new Date().toISOString(),
      });
      localStorage.setItem('gowtham_messages', JSON.stringify(existing));
    } catch (err) {
      console.warn('LocalStorage error:', err);
    }

    const mailtoSubject = encodeURIComponent('Portfolio Inquiry from ' + formData.name);
    const mailtoBody = encodeURIComponent(
      `Hello Gowtham,\n\n${formData.message}\n\n---\nFrom: ${formData.name}\nEmail: ${formData.email}`
    );
    const mailtoUrl = `mailto:${personal.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      window.location.href = mailtoUrl;
    }, 400);
  };

  const handleResetHomeContact = () => {
    setFormData({ name: '', email: '', message: '' });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <div className="flex-1 space-y-16 sm:space-y-24 py-8 sm:py-12">
      {/* 1. HERO SECTION (Follows Reference Screenshot Hero Composition) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="luxury-container p-8 sm:p-14 relative overflow-hidden">
          {/* Subtle Champagne Ambient Glow */}
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#D8B879]/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#D8B879]/5 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center relative z-10">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-5 text-center lg:text-left"
            >
              {/* Introduction Greeting */}
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <span className="text-xs uppercase tracking-widest text-[#B8BAC4] font-medium">
                  Hi, My Name Is
                </span>
              </div>

              {/* Primary Name Display */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-[#F5F3EF] tracking-tight">
                {personal.fullName}
              </h1>

              {/* Tagline Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#292C38] border border-[#D8B879]/40 text-xs font-semibold text-[#D8B879] shadow-sm">
                <span>BCA Graduate • MCA Scholar • Software Developer</span>
              </div>

              {/* Short Description */}
              <p className="text-[#B8BAC4] text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
                {personal.shortBio}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
                <Link
                  to="/projects"
                  className="btn-gold inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold rounded-full"
                >
                  <span>Explore Projects</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#292C38] hover:bg-[#323644] text-[#F5F3EF] text-xs sm:text-sm font-semibold border border-[#41414B] hover:border-[#D8B879]/50 transition-all duration-200"
                >
                  <span>Contact Me</span>
                  <Mail className="w-4 h-4 text-[#D8B879]" />
                </Link>

                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-transparent hover:bg-[#292C38] text-[#B8BAC4] hover:text-[#F5F3EF] text-xs sm:text-sm font-medium border border-[#41414B] transition-colors"
                >
                  <Download className="w-4 h-4 text-[#D8B879]" />
                  <span>Resume PDF</span>
                </a>
              </div>

              {/* Verified Links */}
              <div className="pt-3 flex items-center justify-center lg:justify-start gap-6 text-xs text-[#B8BAC4]">
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#D8B879] transition-colors group"
                >
                  <Linkedin className="w-4 h-4 text-[#D8B879] group-hover:scale-110 transition-transform" />
                  <span>LinkedIn Profile</span>
                </a>
                <span className="text-[#41414B]">•</span>
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#D8B879] transition-colors group"
                >
                  <Github className="w-4 h-4 text-[#D8B879] group-hover:scale-110 transition-transform" />
                  <span>GitHub Profile</span>
                </a>
              </div>
            </motion.div>

            {/* Right: Circular Profile Image with Glowing Halo (Reference Match) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-5 flex flex-col items-center justify-center"
            >
              <div className="relative">
                {/* Champagne Gold Halo Glow */}
                <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-[#D8B879]/30 via-[#E2C895]/20 to-transparent blur-xl"></div>

                {/* Circular Profile Avatar */}
                <div className="relative w-48 h-48 sm:w-60 sm:h-60 rounded-full p-1.5 bg-gradient-to-tr from-[#D8B879] via-[#C49F58] to-[#E9DCC2] shadow-gold-lg">
                  <div className="w-full h-full rounded-full overflow-hidden bg-[#171923]">
                    <img
                      src={personal.avatar}
                      alt={personal.fullName}
                      className="w-full h-full object-cover object-top scale-105 hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Location Tag underneath photo (Reference layout signature) */}
                <div className="mt-5 flex items-center justify-center gap-2 text-xs font-medium text-[#B8BAC4]">
                  <MapPin className="w-4 h-4 text-[#D8B879]" />
                  <span>Chennai, Tamil Nadu, India</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT ME SECTION (Follows Reference Rounded Dark Container) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="luxury-container p-8 sm:p-14 text-center space-y-6"
        >
          {/* Centered Heading */}
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-[#D8B879] font-semibold">
              Background & Overview
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#F5F3EF] tracking-tight">
              About Me
            </h2>
          </div>

          {/* Subheading in Champagne Gold & White */}
          <p className="text-lg sm:text-xl font-medium text-[#E9DCC2] max-w-2xl mx-auto">
            I'm <span className="text-[#D8B879] font-bold">{personal.fullName}</span>, BCA Graduate & MCA Scholar | Software Developer
          </p>

          {/* Description Paragraph */}
          <p className="text-[#B8BAC4] text-sm sm:text-base leading-relaxed max-w-3xl mx-auto font-normal">
            {personal.careerObjective}
          </p>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 max-w-3xl mx-auto text-left">
            <div className="p-4 rounded-2xl bg-[#292C38] border border-[#41414B] text-xs">
              <span className="text-[#D8B879] font-semibold block mb-1">Undergraduate Degree</span>
              BCA from SRM University (2023–2026) with distinction: <strong className="text-[#F5F3EF]">CGPA 8.78</strong>.
            </div>
            <div className="p-4 rounded-2xl bg-[#292C38] border border-[#41414B] text-xs">
              <span className="text-[#D8B879] font-semibold block mb-1">Postgraduate Program</span>
              Master of Computer Applications (MCA) scholar focusing on advanced software architectures.
            </div>
            <div className="p-4 rounded-2xl bg-[#292C38] border border-[#41414B] text-xs">
              <span className="text-[#D8B879] font-semibold block mb-1">Practical Experience</span>
              Web Development Intern at Approtech R&D Solutions (Python, Flask, SQLite).
            </div>
          </div>

          <div className="pt-2">
            <Link
              to="/about"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D8B879] hover:text-[#E2C895] transition-colors group"
            >
              <span>Read Full Biography & Methodology</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* 3. SKILLS SECTION (Structured Reference Grid with Champagne Icons) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="luxury-container p-8 sm:p-14 space-y-8"
        >
          {/* Header */}
          <div className="text-center space-y-2">
            <span className="text-xs uppercase tracking-widest text-[#D8B879] font-semibold">
              Technical Stack
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#F5F3EF] tracking-tight">
              Skills
            </h2>
            <p className="text-xs sm:text-sm text-[#B8BAC4] max-w-xl mx-auto">
              Organized technical proficiencies verified from my academic background, projects, and certifications.
            </p>
          </div>

          {/* Skill Grid Matching Reference Layout */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { name: 'Python', category: 'Programming', icon: Code2 },
              { name: 'Java', category: 'Programming', icon: Code2 },
              { name: 'C / C++', category: 'Foundations', icon: Code2 },
              { name: 'JavaScript', category: 'Frontend', icon: Code2 },
              { name: 'HTML & CSS', category: 'Web Markup', icon: Code2 },
              { name: 'Pandas', category: 'Data Science', icon: Cpu },
              { name: 'NumPy', category: 'Data Science', icon: Cpu },
              { name: 'Matplotlib', category: 'Data Analytics', icon: Cpu },
              { name: 'Streamlit', category: 'ML Web Apps', icon: Cpu },
              { name: 'Flask', category: 'Backend Web', icon: Layers },
              { name: 'SQLite', category: 'Databases', icon: Database },
              { name: 'MySQL', category: 'Databases', icon: Database },
              { name: 'MongoDB', category: 'NoSQL Storage', icon: Database },
              { name: 'Ubuntu (Linux)', category: 'Environment', icon: TerminalIcon },
              { name: 'Git & GitHub', category: 'Version Control', icon: GitIcon },
              { name: 'Cloud Computing', category: 'NPTEL-SWAYAM', icon: CloudIcon },
            ].map((skill, idx) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={idx}
                  whileHover={{ y: -3, borderColor: '#D8B879' }}
                  transition={{ duration: 0.2 }}
                  className="p-4 rounded-2xl bg-[#292C38] border border-[#41414B] flex items-center gap-3 transition-colors group cursor-default"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#20232F] border border-[#41414B] group-hover:border-[#D8B879]/50 flex items-center justify-center text-[#D8B879] flex-shrink-0 transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-xs font-semibold text-[#F5F3EF] group-hover:text-[#D8B879] transition-colors block truncate">
                      {skill.name}
                    </span>
                    <span className="text-[10px] text-[#B8BAC4] block truncate">
                      {skill.category}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="text-center pt-2">
            <Link
              to="/skills"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D8B879] hover:text-[#E2C895] transition-colors group"
            >
              <span>Explore Detailed Skills & Context</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* 4. PORTFOLIO / PROJECTS SECTION (Split Layout with Category Tabs on Left, Cards on Right) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="luxury-container p-8 sm:p-14 space-y-8"
        >
          {/* Header */}
          <div className="text-center space-y-2">
            <span className="text-xs uppercase tracking-widest text-[#D8B879] font-semibold">
              Practical Work
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#F5F3EF] tracking-tight">
              Portfolio
            </h2>
          </div>

          {/* Split Layout: Categories on Left / Grid on Right (Reference Match) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Category Navigation List */}
            <div className="lg:col-span-3 space-y-2 lg:border-r lg:border-[#41414B] lg:pr-6">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#B8BAC4] block mb-3">
                Categories
              </span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-xs font-medium transition-all duration-200 flex items-center justify-between ${
                    selectedCategory === cat
                      ? 'bg-[#292C38] text-[#D8B879] font-bold border-l-4 border-[#D8B879] shadow-sm'
                      : 'text-[#B8BAC4] hover:text-[#F5F3EF] hover:bg-[#292C38]/60'
                  }`}
                >
                  <span>{cat}</span>
                  {selectedCategory === cat && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D8B879]"></span>
                  )}
                </button>
              ))}

              <div className="pt-6 hidden lg:block">
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-1.5 text-xs text-[#D8B879] hover:underline underline-offset-4"
                >
                  <span>All Projects & Specs</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Right: Project Cards Grid */}
            <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="rounded-2xl bg-[#292C38] border border-[#41414B] hover:border-[#D8B879]/60 p-5 flex flex-col justify-between group shadow-card-dark transition-colors"
                >
                  <div className="space-y-3">
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-[#20232F] text-[#D8B879] border border-[#D8B879]/30">
                      {project.category}
                    </span>
                    <h3 className="text-base font-bold text-[#F5F3EF] group-hover:text-[#D8B879] transition-colors leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-xs text-[#B8BAC4] leading-relaxed line-clamp-3">
                      {project.shortDescription}
                    </p>
                  </div>

                  <div className="pt-5 space-y-4">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 3).map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 text-[10px] font-medium bg-[#20232F] text-[#B8BAC4] rounded border border-[#41414B]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="grid grid-cols-2 gap-2 pt-1 border-t border-[#41414B]/60">
                      <button
                        onClick={() => setActiveModalProject(project)}
                        className="py-2 px-2.5 rounded-lg bg-[#20232F] hover:bg-[#171923] text-[#F5F3EF] text-[11px] font-medium transition-colors border border-[#41414B]"
                      >
                        Preview
                      </button>
                      <Link
                        to={`/projects/${project.id}`}
                        className="py-2 px-2.5 rounded-lg bg-gradient-to-r from-[#D8B879] to-[#C49F58] hover:from-[#E2C895] hover:to-[#D8B879] text-[#171923] text-[11px] font-bold transition-all text-center"
                      >
                        Details
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Quick Preview Modal */}
          {activeModalProject && (
            <ProjectModal
              project={activeModalProject}
              onClose={() => setActiveModalProject(null)}
            />
          )}
        </motion.div>
      </section>

      {/* 5. CONTACT ME SECTION (Split Layout Matching Reference Screenshot) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="luxury-container p-8 sm:p-14 space-y-8"
        >
          {/* Header */}
          <div className="text-center space-y-2">
            <span className="text-xs uppercase tracking-widest text-[#D8B879] font-semibold">
              Get in Touch
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#F5F3EF] tracking-tight">
              Contact Me
            </h2>
          </div>

          {/* Split Box (Left: Contact Info & Handles | Right: Input Fields) */}
          <div className="rounded-2xl bg-[#292C38] border border-[#41414B] p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left: Contact Info & Social Handles */}
            <div className="lg:col-span-5 space-y-6 lg:border-r lg:border-[#41414B] lg:pr-8">
              <div>
                <h3 className="text-lg font-bold text-[#F5F3EF] mb-4">
                  Contact Info
                </h3>
                <div className="space-y-3.5 text-xs text-[#B8BAC4]">
                  <a
                    href={`mailto:${personal.email}`}
                    className="flex items-center gap-3 hover:text-[#D8B879] transition-colors"
                  >
                    <Mail className="w-4 h-4 text-[#D8B879] flex-shrink-0" />
                    <span className="break-all">{personal.email}</span>
                  </a>
                  <a
                    href={`tel:${personal.phone.replace(/\s+/g, '')}`}
                    className="flex items-center gap-3 hover:text-[#D8B879] transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[#D8B879] flex-shrink-0" />
                    <span>{personal.phone}</span>
                  </a>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-[#D8B879] flex-shrink-0" />
                    <span>Chennai, Tamil Nadu, India</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#41414B]/70">
                <h3 className="text-sm font-bold text-[#F5F3EF] mb-3">
                  Social Handles
                </h3>
                <div className="space-y-3 text-xs text-[#B8BAC4]">
                  <a
                    href={personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 hover:text-[#D8B879] transition-colors group"
                  >
                    <Linkedin className="w-4 h-4 text-[#D8B879]" />
                    <span>linkedin.com/in/gowtham-subraa96aa1374</span>
                  </a>
                  <a
                    href={personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 hover:text-[#D8B879] transition-colors group"
                  >
                    <Github className="w-4 h-4 text-[#D8B879]" />
                    <span>github.com/gowthamsubra</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Message Form with Gold Send Button */}
            <div className="lg:col-span-7">
              {isSubmitted ? (
                <div className="p-8 rounded-2xl bg-[#20232F] border border-[#D8B879] text-center space-y-4 animate-in fade-in">
                  <div className="w-14 h-14 rounded-full bg-[#D8B879]/20 text-[#D8B879] border border-[#D8B879] flex items-center justify-center mx-auto shadow-gold-sm">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-[#F5F3EF]">
                      Message Prepared!
                    </h3>
                    <p className="text-xs text-[#B8BAC4] mt-1 max-w-sm mx-auto leading-relaxed">
                      Thank you, <strong className="text-[#D8B879]">{formData.name}</strong>. Your message was recorded and your default email app was launched to send it to <strong className="text-[#F5F3EF]">{personal.email}</strong>.
                    </p>
                  </div>
                  <div className="pt-2 flex items-center justify-center">
                    <button
                      onClick={handleResetHomeContact}
                      className="btn-gold px-7 py-2.5 rounded-full text-xs font-bold shadow-gold-sm hover:scale-[1.02] transition-transform"
                    >
                      <span>Send Another Message</span>
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Name"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: null });
                      }}
                      className={`w-full px-4 py-3 rounded-xl bg-[#20232F] border text-xs text-[#F5F3EF] placeholder-[#858796] focus:outline-none transition-colors ${
                        errors.name ? 'border-rose-500' : 'border-[#41414B] focus:border-[#D8B879]'
                      }`}
                    />
                    {errors.name && <p className="text-[11px] text-rose-400 mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <input
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: null });
                      }}
                      className={`w-full px-4 py-3 rounded-xl bg-[#20232F] border text-xs text-[#F5F3EF] placeholder-[#858796] focus:outline-none transition-colors ${
                        errors.email ? 'border-rose-500' : 'border-[#41414B] focus:border-[#D8B879]'
                      }`}
                    />
                    {errors.email && <p className="text-[11px] text-rose-400 mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <textarea
                      rows="4"
                      placeholder="Message"
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: null });
                      }}
                      className={`w-full px-4 py-3 rounded-xl bg-[#20232F] border text-xs text-[#F5F3EF] placeholder-[#858796] focus:outline-none transition-colors resize-none ${
                        errors.message ? 'border-rose-500' : 'border-[#41414B] focus:border-[#D8B879]'
                      }`}
                    ></textarea>
                    {errors.message && <p className="text-[11px] text-rose-400 mt-1">{errors.message}</p>}
                  </div>

                  <div className="pt-1">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-gold px-8 py-3 rounded-full text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-transform cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span>Sending...</span>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

// Icon helper components
function TerminalIcon(props) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="4 17 10 11 4 5" />
      <line x1="12" y1="19" x2="20" y2="19" />
    </svg>
  );
}

function GitIcon(props) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18" cy="18" r="3" />
      <circle cx="6" cy="6" r="3" />
      <path d="M13 6h3a2 2 0 0 1 2 2v7" />
      <line x1="6" y1="9" x2="6" y2="21" />
    </svg>
  );
}

function CloudIcon(props) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </svg>
  );
}
