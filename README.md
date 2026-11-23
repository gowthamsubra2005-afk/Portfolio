# Gowtham S — Professional Personal Portfolio

A modern, elegant, and recruiter-friendly personal portfolio website representing **Gowtham S**, a Computer Science Engineering student specializing in **Cybersecurity and IoT** at **SRM University of Science and Technology**.

Built with a fast, modern frontend architecture using **React.js**, **Vite**, **Tailwind CSS**, and **React Router DOM**.

---

## 🚀 Quick Start (Local Development)

The application runs entirely locally on your laptop without requiring external credentials, databases, or cloud services.

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) (v18 or higher) installed on your machine.

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```

Open your browser and navigate to the local URL (typically `http://localhost:5173`).

### 4. Build for Production
To create an optimized production build:
```bash
npm run build
```

To preview the production build locally:
```bash
npm run preview
```

---

## 🧭 Multi-Page Navigation Structure

Every page has its own dedicated React Router route, with a sticky navigation bar, active link indicators, responsive mobile drawer, and professional footer:

1. **Home (`/`)**
   - High-impact hero section with Gowtham's photograph, verified headline, and professional introduction.
   - Call-to-action buttons: *Explore Projects*, *Contact Me*, and *Resume PDF*.
   - Technology pillar highlights (Cybersecurity, Data Science, Full-Stack Backend).
   - Featured projects grid preview.
   - Direct verified LinkedIn and GitHub links.

2. **About Me (`/about`)**
   - Professional identity and refined career objective based on academic specialization.
   - Academic background: B.Tech CSE (Cybersecurity & IoT) at SRM University (CGPA: 8.78).
   - Core engineering mindset: 4-step problem-solving philosophy.
   - Long-term professional aspirations in secure distributed systems and defensive AI.

3. **Technical Skills (`/skills`)**
   - Structured skill cards without artificial percentages:
     - **Programming Languages**: Python, Java, C/C++, JavaScript, HTML5 & CSS3.
     - **Cybersecurity**: Phishing heuristic detection, LLM explainability, secure backend processing, TATA STRIVE certified fundamentals.
     - **Machine Learning & Data Science**: NumPy, Pandas, Matplotlib, Streamlit.
     - **Backend & Databases**: Python (Flask), SQLite, MySQL, MongoDB.
     - **Cloud & DevOps**: Cloud Computing (NPTEL-SWAYAM certified), Ubuntu Linux.
     - **IoT Technologies**: Edge architectures, device telemetry, IoT security.
     - **Development Tools**: Git, GitHub, VS Code, Python OS file automation.
     - **Professional Soft Skills**: Problem Solving, Critical Thinking, Learning Agility, Collaboration.

4. **Experience (`/experience`)**
   - Documented internship timeline for **Approtech R&D Solutions Pvt Ltd** (Nov – Dec 2025).
   - Role: Web Development Intern.
   - Key responsibilities: Building a validated contact form application in Flask and SQLite, input sanitization, and relational data persistence.
   - Documented learning outcomes and practical industry contributions.

5. **Projects & Architecture (`/projects` & `/projects/:id`)**
   - Interactive category filters: *All*, *Cybersecurity*, *Machine Learning*, *Web Development*.
   - Quick preview modal AND dedicated specification pages (`/projects/:id`) containing:
     1. Project Overview
     2. Problem Statement
     3. Proposed Solution
     4. Technologies Used
     5. Architecture & Data Workflow
     6. Key Technical Features
     7. Personal Contribution
     8. GitHub repository links

6. **Education & Certifications (`/education`)**
   - **SRM University of Science and Technology, Kattankulathur**: B.Tech CSE (Cybersecurity & IoT), 2023–2026, **CGPA: 8.78**.
   - **St. Pauls Mahajana Higher Secondary School, Chennai**: HSC (2023) — **71%**.
   - **SMT Mohini Sarogi Vivekananda Vidyalaya, Chennai**: SSLC (2021) — **76%**.
   - **Certifications**:
     - *Cyber Security* — TATA STRIVE
     - *Python Programming* — UDEMY
     - *Cloud Computing* — NPTEL-SWAYAM
   - **Languages**: English, Tamil.

7. **Contact Me (`/contact`)**
   - Direct contact links: Email (`gowthamsubra31@gmail.com`), Phone (`+91 8838441796`), Location (Chennai), LinkedIn, and GitHub.
   - Fully styled interactive contact form prototype with client-side field validation.
   - Per local prototype requirements, clicking *Send Message* displays a clear prototype notice with a direct 1-click email client trigger.

8. **Custom 404 Page (`*`)**
   - Clean, branded error page with return-to-home navigation.

---

## 🎨 Color Palette & Typography

- **Deep Navy**: `#101828`
- **Slate Grey**: `#667085`
- **Off White**: `#F8FAFC`
- **Muted Blue**: `#3B82F6`
- **White**: `#FFFFFF`
- **Typography**: Plus Jakarta Sans, Inter, Manrope

---

## 📁 Project Folder Structure

```
gowtham-portfolio/
├── public/
│   ├── gowtham.jpg         # Profile photograph
│   ├── resume.pdf          # Professional Resume PDF
│   └── vite.svg            # Favicon
├── src/
│   ├── assets/
│   │   └── gowtham.jpg     # Profile image asset
│   ├── components/
│   │   ├── Footer.jsx      # Global footer with social links & sitemap
│   │   ├── Navbar.jsx      # Sticky navbar with mobile menu & active indicator
│   │   ├── NotificationToast.jsx # Prototype notification
│   │   └── ProjectModal.jsx # Detailed project workflow modal
│   ├── data/
│   │   └── portfolioData.js # Verified data extracted from resume
│   ├── pages/
│   │   ├── About.jsx       # About Me & Career Objective
│   │   ├── Contact.jsx     # Contact info & form prototype
│   │   ├── Education.jsx   # Degrees, Certifications, Languages
│   │   ├── Experience.jsx  # Approtech R&D internship timeline
│   │   ├── Home.jsx        # Landing hero & featured showcase
│   │   ├── NotFound.jsx    # Custom 404 page
│   │   ├── ProjectDetail.jsx # Deep-dive project specification
│   │   ├── Projects.jsx    # Filterable project gallery
│   │   └── Skills.jsx      # Categorized skill cards
│   ├── App.jsx             # React Router route registry
│   ├── index.css           # Tailwind base styles & custom classes
│   └── main.jsx            # React root entry point
├── index.html              # HTML shell with Google Fonts
├── package.json            # Scripts & dependencies
├── postcss.config.js       # PostCSS plugins
├── tailwind.config.js      # Custom theme colors & fonts
├── vite.config.js          # Vite build config
└── README.md               # Documentation
```

---

## 🛡️ Authenticity Guarantee

All qualifications, grades (8.78 CGPA), internship experiences (Approtech R&D Solutions), certifications (TATA STRIVE, UDEMY, NPTEL-SWAYAM), and projects (Phishing Detection with LLM explainability, Attendance System) directly reflect Gowtham's resume and specified academic focus. No unverified qualifications or skills were invented.
