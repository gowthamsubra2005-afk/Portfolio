export const portfolioData = {
  personal: {
    fullName: "Gowtham S",
    title: "Computer Applications Graduate (BCA) & MCA Scholar | Software Developer",
    headline: "Building Practical Web Applications, Data Systems & Machine Learning Solutions",
    shortBio:
      "Computer Applications graduate (BCA, CGPA: 8.78) from SRM University, currently pursuing Master of Computer Applications (MCA). Hands-on experience in full-stack Python development, machine learning detection systems, and database engineering.",
    careerObjective:
      "Motivated Computer Applications scholar (BCA, currently pursuing MCA) with a strong foundation in software engineering, data science, and web development. Experienced in building practical solutions—from machine learning-based phishing detection tools with LLM explanations to secure database-driven web applications using Flask and SQLite. Passionate about exploring new technologies, solving real-world challenges, and contributing effectively to innovative development teams.",
    email: "gowthamsubra31@gmail.com",
    phone: "+91 8838441796",
    location: "Chennai, Tamil Nadu, India",
    linkedin: "https://www.linkedin.com/in/gowtham-subraa96aa1374",
    github: "https://github.com/gowthamsubra",
    avatar: "/gowtham.jpg",
    academicStatus: "BCA Graduate (SRM University, CGPA: 8.78) • Currently Pursuing MCA",
  },

  skillsCategories: [
    {
      id: "languages",
      title: "Programming Languages",
      badge: "Core Foundations",
      description: "Languages used for application development, system tasks, and data engineering.",
      skills: [
        { name: "Python", highlight: "Primary language for ML prototypes, data manipulation, and web backend" },
        { name: "Java", highlight: "Object-oriented program design and core data structures" },
        { name: "C / C++", highlight: "Algorithmic thinking, memory concepts, and foundational programming" },
        { name: "JavaScript", highlight: "Client-side interactivity, DOM handling, and modern ES6+ syntax" },
        { name: "HTML & CSS", highlight: "Semantic webpage layout and responsive interface structuring" },
      ],
    },
    {
      id: "technologies-data",
      title: "Data Science & Technologies",
      badge: "Analytics & ML",
      description: "Python data ecosystem and libraries applied for numerical analysis and visualizations.",
      skills: [
        { name: "NumPy", highlight: "Multidimensional array computation and numerical operations" },
        { name: "Pandas", highlight: "Data cleaning, aggregation, tabular processing, and automation" },
        { name: "Matplotlib", highlight: "Statistical data visualization and distribution charting" },
        { name: "Streamlit", highlight: "Interactive dashboard development for web data tools" },
      ],
    },
    {
      id: "databases",
      title: "Databases & Storage",
      badge: "Data Management",
      description: "Relational and document databases utilized across academic and industry projects.",
      skills: [
        { name: "MongoDB", highlight: "NoSQL document collections and flexible JSON-like schemas" },
        { name: "MySQL", highlight: "Relational database querying, structured schemas, and SQL logic" },
        { name: "SQLite", highlight: "Lightweight transactional persistence deployed in Flask web apps" },
      ],
    },
    {
      id: "operating-systems-tools",
      title: "Platforms & Development Tools",
      badge: "Environments & Workflow",
      description: "Operating systems, version control, and system utilities.",
      skills: [
        { name: "Ubuntu (Linux)", highlight: "Linux environment commands, package management, and terminal tools" },
        { name: "Python OS Module", highlight: "Automating directory traversal, backups, and file operations" },
        { name: "Git & GitHub", highlight: "Distributed version control and code repository management" },
        { name: "VS Code", highlight: "Primary code editor and development environment" },
      ],
    },
    {
      id: "certifications-domains",
      title: "Domain Knowledge & Certifications",
      badge: "Verified Knowledge",
      description: "Specialized knowledge backed by national and industry certifications.",
      skills: [
        { name: "Cyber Security", highlight: "TATA STRIVE certified: security hygiene, threat vectors, defense concepts" },
        { name: "Python Programming", highlight: "UDEMY certified: comprehensive programming principles and libraries" },
        { name: "Cloud Computing", highlight: "NPTEL-SWAYAM certified: cloud service models and distributed infrastructure" },
      ],
    },
    {
      id: "soft-skills",
      title: "Soft Skills & Professional Attributes",
      badge: "Workplace Strengths",
      description: "Core collaborative and analytical competencies documented in resume.",
      skills: [
        { name: "Problem Solving", highlight: "Systematic troubleshooting and logical solution decomposition" },
        { name: "Critical Thinking", highlight: "Objective evaluation of architectural and technical requirements" },
        { name: "Learning Agility", highlight: "Fast assimilation of modern frameworks, tools, and paradigms" },
        { name: "Cross-Functional Collaboration", highlight: "Positive teamwork and effective technical communication" },
      ],
    },
  ],

  experience: [
    {
      id: "approtech",
      company: "Approtech R&D Solutions Pvt Ltd",
      role: "Web Development Intern",
      period: "Nov 2025 – Dec 2025",
      type: "Internship",
      location: "Chennai, India",
      summary:
        "Built a Contact Form Web Application using Flask and SQLite to collect and store user inquiries with secure backend processing. Implemented form validation, database integration, and efficient data handling.",
      technologies: ["Python", "Flask", "SQLite", "HTML", "JavaScript", "Input Validation"],
      responsibilities: [
        "Constructed a full-stack Contact Form Web Application using Python (Flask) and SQLite.",
        "Implemented robust server-side form validation to verify input formats and ensure data hygiene.",
        "Created relational SQLite tables to reliably collect, organize, and store user inquiries.",
        "Streamlined database queries and request handling for efficient, secure backend processing.",
      ],
      learningOutcomes: [
        "Hands-on industry experience building full-stack request-response workflows with Python Flask.",
        "Practical understanding of relational database operations and transactional integrity.",
        "Applied secure backend practices for user input handling and error prevention.",
      ],
    },
  ],

  projects: [
    {
      id: "phishing-detection",
      title: "Phishing URL & Message Detection Website",
      shortDescription:
        "A functional web application developed using Python and Streamlit to detect whether a given URL or message is phishing, enhanced with an LLM-based explanation module.",
      category: "Machine Learning & Security",
      categories: ["Machine Learning & Security", "Web Application", "Python"],
      technologies: ["Python", "Streamlit", "Natural Language Processing", "LLM Explanation", "Heuristic Analysis"],
      featured: true,
      github: "https://github.com/gowthamsubra/phishing-detection-website",
      demo: null,
      problemStatement:
        "Users frequently encounter deceptive URLs and phishing messages without understanding what makes them suspicious or dangerous.",
      proposedSolution:
        "Created a user-friendly Streamlit web application that scans submitted URLs and messages for phishing indicators and provides a clear, natural LLM-based explanation breaking down the suspicious markers.",
      architecture:
        "Streamlit Frontend Interface -> Python Inspection Engine (Syntactic URL analysis & message keyword checking) -> LLM Explanation Module -> User Feedback with Risk Breakdown.",
      keyFeatures: [
        "Interactive web dashboard powered by Streamlit for instant URL and text scanning.",
        "Real-time evaluation of suspicious links and deception patterns in messages.",
        "LLM-powered reasoning that clearly explains why a communication was flagged.",
        "User-friendly explanations to educate users on recognizing cyber threats.",
      ],
      myContribution:
        "Developed the Python application, designed the Streamlit web interface, implemented inspection heuristics, and integrated the LLM explanation workflow.",
    },
    {
      id: "attendance-management",
      title: "Student Attendance Management System",
      shortDescription:
        "A practical student attendance management system built using Python, Pandas, CSV data storage, and the OS module for automated records tracking.",
      category: "Data Processing & Automation",
      categories: ["Data Processing & Automation", "Python"],
      technologies: ["Python", "Pandas", "CSV Storage", "Python OS Module"],
      featured: true,
      github: "https://github.com/gowthamsubra/attendance-management-system",
      demo: null,
      problemStatement:
        "Tracking student attendance manually or with static spreadsheets can be slow, cumbersome, and prone to formatting inconsistencies.",
      proposedSolution:
        "Built a Python automation system that leverages Pandas for fast tabular data manipulation, maintains structured CSV records, and utilizes the OS module for managing attendance files and directories.",
      architecture:
        "User Session / Input -> Python OS Automation (Directory & file organization) -> Pandas Processing Engine (Data cleansing, updates, and aggregations) -> Structured CSV Storage -> Summary Logs.",
      keyFeatures: [
        "Automated attendance logging and record updates without manual spreadsheet formulas.",
        "Fast tabular computations and summary generation utilizing Pandas.",
        "File-system automation via Python's OS module for consistent storage and backup.",
        "Clean CSV-based data structure ensuring lightweight, portable records.",
      ],
      myContribution:
        "Authored the Python codebase, integrated Pandas for data manipulation, and utilized the OS module to automate file creation and data logging.",
    },
    {
      id: "contact-form-webapp",
      title: "Contact Form Web Application",
      shortDescription:
        "A full-stack web application developed during internship at Approtech R&D Solutions, built with Flask and SQLite to securely collect and store user inquiries.",
      category: "Web Application",
      categories: ["Web Application", "Python & Flask", "Database"],
      technologies: ["Python", "Flask", "SQLite", "HTML", "JavaScript"],
      featured: true,
      github: "https://github.com/gowthamsubra/contact-form-webapp",
      demo: null,
      problemStatement:
        "Online inquiries require secure server-side validation and structured database persistence to prevent loss of customer inquiries and invalid submissions.",
      proposedSolution:
        "Developed a responsive Flask web application that validates user input on the server and stores submissions in a structured SQLite database.",
      architecture:
        "HTML/JS Client Form -> Flask REST Route -> Server-Side Validation Logic -> SQLite Database Storage -> Status Response.",
      keyFeatures: [
        "Client and server-side form validation for clean data entry.",
        "SQLite relational database integration for reliable data persistence.",
        "Secure backend processing preventing malformed or invalid inputs.",
        "Clean, responsive interface for smooth visitor inquiry submission.",
      ],
      myContribution:
        "Built during internship at Approtech R&D Solutions Pvt Ltd, implementing the Flask routes, database integration, and input validation.",
    },
  ],

  education: [
    {
      id: "pg-mca",
      institution: "Master of Computer Applications (MCA)",
      degree: "Postgraduate Program (MCA)",
      specialization: "Advanced Computer Applications & Software Systems",
      period: "Currently Pursuing",
      score: "Active Postgraduate Scholar",
      highlights: [
        "Pursuing advanced coursework in modern software architectures, database systems, and application design.",
        "Building upon foundational BCA expertise with higher-level software engineering paradigms.",
      ],
    },
    {
      id: "bca",
      institution: "SRM University of Science and Technology, Kattankulathur",
      degree: "BCA - Computer Application",
      specialization: "Computer Applications",
      period: "2023 – 2026",
      score: "CGPA: 8.78",
      highlights: [
        "Graduated with distinction with a cumulative CGPA of 8.78.",
        "Core coursework in Programming in Python & Java, Database Systems (MySQL, MongoDB), Data Structures, and Web Technologies.",
        "Active involvement in technical projects, practical coding labs, and software development.",
      ],
    },
    {
      id: "hsc",
      institution: "St. Pauls Mahajana Higher Secondary School, Kaladipet, Chennai-19",
      degree: "Higher Secondary (HSC)",
      specialization: "School Curriculum",
      period: "Completed 2023",
      score: "Percentage: 71%",
      highlights: [
        "Completed Higher Secondary education with 71% aggregate.",
        "Strong academic grounding in computer science and mathematics fundamentals.",
      ],
    },
    {
      id: "sslc",
      institution: "SMT Mohini Sarogi Vivekananda Vidyalaya, Jothi Nagar, Chennai-19",
      degree: "Secondary School (SSLC)",
      specialization: "School Curriculum",
      period: "Completed 2021",
      score: "Percentage: 76%",
      highlights: [
        "Completed Secondary School Certificate with 76% aggregate.",
        "Active participation in academic and co-curricular activities.",
      ],
    },
  ],

  certifications: [
    {
      title: "Cyber security",
      issuer: "TATA STRIVE",
      type: "Professional Certification",
      description:
        "Comprehensive training covering essential cybersecurity principles, digital safety practices, and threat awareness.",
    },
    {
      title: "Python programming",
      issuer: "UDEMY",
      type: "Technical Certification",
      description:
        "Structured course covering Python syntax, data structures, object-oriented concepts, and programming fundamentals.",
    },
    {
      title: "Cloud computing",
      issuer: "NPTEL-SWAYAM",
      type: "National Academic Certification",
      description:
        "Academic certification on cloud computing fundamentals, virtualization, cloud delivery models, and infrastructure.",
    },
  ],

  languages: [
    { name: "English", level: "Professional Working Proficiency" },
    { name: "Tamil", level: "Native / Fluent Proficiency" },
  ],
};
