// ============================================================
// Everything on the site comes from this file.
// Edit values here; no component changes needed.
// ============================================================

export const profile = {
  name: "Renelyn Cuesta",
  initials: "RC",
  title: "IT Student",
  tagline: "Aiming to become a successful web developer.",
  // DRAFT: rewrite this in your own words.
  intro:
    "I am a fourth-year Information Technology student from Davao del Norte. I build websites and programs, and I want to grow into a professional web developer.",
  objective:
    "To become a successful web developer by building real projects, learning continuously, and working with teams that value quality.",
  location: "Davao del Norte, Philippines",
  email: "renelyncuesta5@gmail.com",
  phone: "09203925031",
  showPhone: false, // set to true to publish your number
  photo: "/images/profile/studio-portrait.png",
  cvFile: "", // e.g. "/resume.pdf" after adding the file to /public. Empty hides the button.
  interests: ["Web development", "Programming", "Animation", "Databases"],
};

export const social = {
  github: "https://github.com/cuesta1212",
  linkedin: "https://www.linkedin.com/in/renelyn-cuesta-852297447/",
  facebook: "https://www.facebook.com/yandare.hikaru/",
  instagram: "",
};

export const education = [
  {
    school: "Davao Del Norte State College",
    program: "Bachelor of Science in Information Technology (BSIT)",
    level: "Fourth Year",
    dates: "", // add e.g. "2022 - Present"
    note: "Currently enrolled.",
  },
  {
    school: "Northlink Technological College",
    program: "Senior High School: ICT (Animation / Programming)",
    level: "Senior High School",
    dates: "", // add years when you remember them
    note: "Studied both animation and programming.",
  },
];

// Add level: "Beginner" | "Intermediate" | "Advanced" to a skill to show a level.
export const skills = [
  { category: "Web Development", items: [{ name: "HTML" }, { name: "JavaScript" }] },
  { category: "Programming", items: [{ name: "Java" }] },
  { category: "Database and Backend", items: [{ name: "SQL" }, { name: "Supabase" }] },
];

export const projects = [
  {
    name: "Fitness App",
    description: "My fitness app interface design and interactive prototype, created in Figma.",
    tech: ["Figma", "UI/UX Design"],
    status: "Prototype",
    figma: "https://www.figma.com/proto/VEeGMd8IUFsl0ZGctLkPe4/Fitness-App?node-id=14-67&p=f&t=yYyi82bLpsUjnCyX-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=14%3A50&show-proto-sidebar=1",
  },
  {
    name: "Philihealth",
    description: "My Philihealth interface design and interactive prototype, created in Figma.",
    tech: ["Figma", "UI/UX Design"],
    status: "Prototype",
    figma: "https://www.figma.com/proto/RQghonmfFYKyMukbaQH9Vt/Philihealth?t=8TuiijwK4WgJ0qHH-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&node-id=1-2&starting-point-node-id=1%3A2",
  },
  {
    name: "Google API Diary",
    description: "A diary application our team developed as a first-semester final project. Users can create, edit, and delete entries, with Google API integration for authentication and data storage so their diary is accessible across devices.",
    tech: ["Google API"],
    status: "Completed",
    image: "/images/projects/google-api-diary.png",
  },
  {
    name: "Library Management System",
    description: "A second-semester final project combining three major subjects. Our team built a system for managing library collections, circulation, and user information, with real-time updates, reporting tools, and a user-friendly staff interface.",
    tech: [],
    status: "Completed",
    image: "/images/projects/library-management-system.png",
  },
  {
    name: "QuickFix",
    description: "A startup app project from our third-year, second-semester finals that connects users with local household repair services. Features include repair requests, appointment scheduling, communication with service providers, and ratings and reviews.",
    tech: [],
    status: "Completed",
    image: "/images/projects/quickfix.png",
  },
  {
    name: "Library Management System (CRUD)",
    description: "A Java application for managing library resources. Librarians can add, view, update, and delete book records, manage user accounts, and track borrowed items through a simple, intuitive interface.",
    tech: ["Java"],
    status: "Completed",
    image: "/images/projects/library-management-crud.png",
  },
  {
    name: "RVN Inventory System",
    description: "An inventory management system that helps businesses track stock levels, orders, and suppliers. Real-time updates, reporting tools, and a user-friendly dashboard help streamline day-to-day inventory operations.",
    tech: [],
    status: "Completed",
    image: "/images/projects/rvn-inventory-system.png",
  },
];

export const achievements = [
  {
    title: "CCNA: Introduction to Networks",
    org: "Cisco Networking Academy · Davao Del Norte State College",
    date: "June 11, 2025",
    description: "Successfully completed the Introduction to Networks course through the Cisco Networking Academy program.",
    image: "/images/certificates/ccna-introduction-to-networks.png",
  },
  {
    title: "QuickFix — Level App 3.0 Participation",
    org: "Davao del Norte State College · Institute of Computing",
    date: "May 21, 2026",
    description: "Our QuickFix team received a certificate of participation for showcasing our startup at Level App 3.0, held on May 20–21, 2026, through a pitching competition and booth exhibit.",
    image: "/images/certificates/quickfix-level-app.png",
  },
];

export const experience = [
  {
    role: "Capstone Group Project — Gamified Study Environment",
    org: "Academic team project",
    duration: "Ongoing",
    points: [
      "We are building a gamified study environment together as our capstone project.",
      "Team members: Evon Granaderos, Josie Lizette Coso, and Renelyn Cuesta.",
    ],
    images: [
      { src: "/images/experience/capstone-study-buddy.png", caption: "English learning module and Study Buddy" },
      { src: "/images/experience/capstone-library.png", caption: "Gamified study library interface" },
    ],
  },
];

export const navLinks = [
  ["home", "Home"], ["about", "About"], ["education", "Education"], ["skills", "Skills"],
  ["projects", "Projects"], ["achievements", "Achievements"], ["experience", "Experience"], ["contact", "Contact"],
];
