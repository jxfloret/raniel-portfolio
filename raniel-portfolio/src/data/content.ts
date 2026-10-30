/**
 * ─────────────────────────────────────────────────────────────
 *  ALL WEBSITE CONTENT LIVES HERE.
 *  Edit text, links, and image paths in this file only —
 *  the components read everything from here.
 *
 *  Items marked  // TODO  are placeholders waiting for real info.
 * ─────────────────────────────────────────────────────────────
 */

export type Img = { src: string; width: number; height: number; alt: string };

export const site = {
  name: "Raniel Christian M. Capon",
  shortName: "Raniel Capon",
  tagline: "Student Leader", // the small yellow tag under the brand name
  title: "Raniel Christian M. Capon — Student Leader & Operations Management Student",
  description:
    "Portfolio of Raniel Christian M. Capon — President of the STI College Global City Council of Leaders and Junior Management Executives, BSBA Operations Management student, event strategist, and Senior Medical Virtual Assistant.",
  url: "https://raniel-capon.vercel.app", // TODO: replace with your final Vercel / custom domain
};

export const portrait: Img = {
  src: "/images/raniel-portrait.webp",
  width: 1600,
  height: 1375,
  alt: "Raniel Christian M. Capon in a dark suit and red tie",
};

export const nav = [
  { id: "home", label: "Home" },
  { id: "about", label: "About Me" },
  { id: "projects", label: "Projects" },
  { id: "gallery", label: "Gallery" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Reach Me" },
] as const;

/** Which nav item lights up while each section is on screen */
export const sectionToNav: Record<string, string> = {
  home: "home",
  about: "about",
  leadership: "about",
  experience: "about",
  projects: "projects",
  gallery: "gallery",
  achievements: "gallery",
  skills: "skills",
  contact: "contact",
};

/* ── HERO ─────────────────────────────────────────────── */
export const hero = {
  lines: [
    { text: "Raniel", weight: "light" },
    { text: "Christian", weight: "bold" },
    { text: "Capon", weight: "light" },
  ] as const,
  cardText: "Student leader, event strategist & medical VA — more of my work is in the gallery",
  cta: { label: "Slide to see Projects", href: "#projects" },
  fan: [
    "/images/gallery/career-development-2025.webp",
    "/images/gallery/open-doors-general-assembly.webp",
    "/images/gallery/free-print.webp",
  ],
};

/* ── ABOUT ────────────────────────────────────────────── */
export const about = {
  intro:
    "I'm Raniel — a Business Administration student majoring in Operations Management at STI College Global City. I lead student organizations, build events from idea to execution, and bring six years of BPO and healthcare virtual-assistance experience into every team I work with.",
  entries: [
    { title: "STI College Global City", role: "BSBA — Operations Management", meta: "Education" },
    { title: "Global City Council of Leaders", role: "President", meta: "A.Y. 2025–2026" },
    { title: "Junior Management Executives", role: "President", meta: "Dept. of Business Administration & Accountancy" },
    { title: "Medical Virtual Assistance", role: "Senior Medical Virtual Assistant", meta: "≈ 6 years" },
    { title: "BPO Industry", role: "Customer Experience & Operations", meta: "≈ 6 years" },
    { title: "Events & Projects", role: "Event Head · Host · Project Lead", meta: "2025–2026" },
  ],
};

/* ── LEADERSHIP ───────────────────────────────────────── */
export const leadership = {
  entries: [
    {
      title: "Global City Council of Leaders (GCCL)",
      role: "President",
      meta: "A.Y. 2025–2026",
      points: [
        "Leads and coordinates the student organizations of STI College Global City.",
        "Manages council activities, projects, and institutional collaborations.",
        "Represents student leaders and works with school administrators.",
        "Develops leadership programs and student engagement initiatives.",
      ],
    },
    {
      title: "Junior Management Executives (JME)",
      role: "President",
      meta: "Dept. of Business Administration & Accountancy",
      points: [
        "Directs organizational operations and strategic initiatives.",
        "Leads committees and manages organizational responsibilities.",
        "Organizes student development activities, seminars, and events.",
        "Promotes collaboration, professional growth, and leadership development.",
      ],
    },
    { title: "Global City Council of Leaders", role: "Secretary", meta: "Previous term", points: [] },
    { title: "Junior Management Executives", role: "Secretary", meta: "Previous term", points: [] },
  ],
  image: {
    src: "/images/gallery/gccl-president.webp",
    width: 883,
    height: 1400,
    alt: "Student Council poster: Capon, Raniel Christian — President, Global City Council of Leaders, A.Y. 2025–2026",
  } satisfies Img,
};

/* ── PROFESSIONAL EXPERIENCE ──────────────────────────── */
export const experience = {
  entries: [
    { title: "Medical Virtual Assistance", role: "Senior Medical Virtual Assistant", meta: "≈ 6 years" },
    { title: "Business Process Outsourcing", role: "Customer Experience & Client Relations", meta: "≈ 6 years" },
    { title: "Team Development", role: "Trainer & Quality Assurance Support", meta: "Healthcare VA teams" },
    { title: "Freelance E-commerce", role: "Store & Order Operations", meta: "Freelance" },
  ],
  capabilities: [
    "Healthcare insurance verification",
    "Claims follow-ups & appeals",
    "Medical records review",
    "Patient & client coordination",
    "Team training & quality assurance",
    "Business operations",
    "Customer experience",
    "E-commerce operations",
  ],
  note: "Client and patient details are kept confidential.",
};

/* ── SELECTED PROJECTS ────────────────────────────────── */
export type Project = {
  title: string;
  role?: string;
  date: string;
  description: string;
  stats?: string;
  image?: Img; // leave undefined to show a clean placeholder you can replace later
};

export const projects: Project[] = [
  {
    title: "Collaboratech 2026",
    role: "Event Head",
    date: "April 6–10, 2026",
    description: "A technology-focused student event organized end to end.",
    stats: "≈ 7,000 foot traffic · 1,500 participants",
    // TODO: add a photo → image: { src: "/images/projects/collaboratech.webp", width: 1000, height: 1250, alt: "..." }
  },
  {
    title: "Peso Smart — Money Matters 2.0",
    role: "Organizer",
    date: "March 26, 2026",
    description: "Financial literacy initiative built with speakers, student organizations, and sponsors.",
  },
  {
    title: "Blockchain Fundamentals",
    role: "Coordinator",
    date: "September 16, 2026",
    description: "Blockchain and fintech learning session featuring Bitskwela and Coins.ph.",
  },
  {
    title: "Daluyon Leadership Training",
    role: "Organizer",
    date: "October 1–3, 2026",
    description: "Leadership development and team building around unity, action, and resilience.",
  },
  {
    title: "National Career Fest 2026",
    role: "Event Host",
    date: "2026",
    description: "Hosted a professional development and career-oriented event.",
  },
  {
    title: "Ideathon & Business Pitching 2026",
    role: "Participant — Recognized",
    date: "2026",
    description: "Recognized for innovation and business pitching. Certificates and photos to follow.",
  },
  {
    title: "Career Development: Climb Higher",
    role: "JME Initiative",
    date: "September 25, 2025",
    description: "Career Academy program at the STI College Global City Multi Purpose Hall.",
    image: {
      src: "/images/gallery/career-development-2025.webp",
      width: 1000,
      height: 1012,
      alt: "Career Development — Climb Higher: Career Academy pubmat",
    },
  },
  {
    title: "Money Matters: Understanding Financial Literacy",
    role: "JME Initiative",
    date: "April 11, 2025",
    description: "The first edition of the financial literacy seminar that led to Money Matters 2.0.",
    image: {
      src: "/images/gallery/money-matters-2025.webp",
      width: 414,
      height: 414,
      alt: "Money Matters: Understanding Financial Literacy pubmat",
    },
  },
];

export const otherInitiatives = [
  "Youth Action Summit",
  "Leadership Training & Seminar",
  "REcollection",
  "Career Development Programs",
  "Adrem",
  "Bitskwela & Coins.ph Collaborations",
];

/* ── GALLERY (organization publicity materials) ───────── */
export const gallery: (Img & { caption: string })[] = [
  { src: "/images/gallery/open-doors-general-assembly.webp", width: 1000, height: 1000, alt: "General Assembly pubmat", caption: "General Assembly — Open Doors to Tomorrow" },
  { src: "/images/gallery/career-development-2025.webp", width: 1000, height: 1012, alt: "Career Development pubmat", caption: "Career Development 2025" },
  { src: "/images/gallery/academic-achiever.webp", width: 1000, height: 1000, alt: "Academic Achiever recognition for Raniel Christian Capon", caption: "Academic Achiever — BSBA-OM" },
  { src: "/images/gallery/free-print.webp", width: 1000, height: 1250, alt: "Free Print for Academic Achievers pubmat", caption: "Free Print for Academic Achievers" },
  { src: "/images/gallery/money-matters-2025.webp", width: 414, height: 414, alt: "Money Matters pubmat", caption: "Money Matters 2025" },
  { src: "/images/gallery/goodluck-rolyn-lazarra.webp", width: 1000, height: 1333, alt: "Good luck pubmat for Rolyn Mae Lazarra", caption: "Ms. STI Cluster 1 Finalist Support" },
  { src: "/images/gallery/goodluck-dhenick-majadas.webp", width: 1000, height: 1333, alt: "Good luck pubmat for Dhenick Carlo Majadas", caption: "Mr. STI Cluster 1 Finalist Support" },
  { src: "/images/gallery/moment-to-remember.webp", width: 1000, height: 1000, alt: "A Moment to Remember pubmat", caption: "A Moment to Remember" },
  { src: "/images/gallery/talent-search-2025.webp", width: 1000, height: 1106, alt: "Talent Search 2025 pubmat", caption: "Talent Search 2025" },
  { src: "/images/gallery/academic-org-election.webp", width: 414, height: 414, alt: "Academic Organization Election pubmat", caption: "Academic Organization Election" },
  { src: "/images/gallery/all-saints-day.webp", width: 1000, height: 1000, alt: "All Saints' Day pubmat", caption: "All Saints' Day" },
  { src: "/images/gallery/tanglaw-miting-de-avance.webp", width: 414, height: 414, alt: "Tanglaw Miting de Avance slate poster", caption: "Tanglaw — Miting de Avance" },
];

/* ── ACHIEVEMENTS ─────────────────────────────────────── */
export const achievements = {
  entries: [
    { title: "Academic Achiever", role: "BSBA — Operations Management", meta: "Junior Management Executives" },
    { title: "President, GCCL", role: "Global City Council of Leaders", meta: "A.Y. 2025–2026" },
    { title: "President, JME", role: "Junior Management Executives", meta: "Business Administration & Accountancy" },
    { title: "Event Head, Collaboratech 2026", role: "≈ 7,000 foot traffic · 1,500 participants", meta: "April 2026" },
    { title: "Ideathon & Business Pitching 2026", role: "Recognized for innovation & pitching", meta: "2026" },
    { title: "Event Host, National Career Fest 2026", role: "Professional development event", meta: "2026" },
  ],
  fan: [
    { src: "/images/gallery/academic-achiever.webp", width: 1000, height: 1000, alt: "Academic Achiever pubmat" },
    { src: "/images/gallery/jme-president.webp", width: 414, height: 414, alt: "JME President poster of Raniel Capon" },
  ] satisfies Img[],
};

/* ── SKILLS ───────────────────────────────────────────── */
export const skills = [
  {
    category: "Leadership & Management",
    items: ["Organizational Leadership", "Project Management", "Event Management", "Team Coordination", "Strategic Planning"],
  },
  {
    category: "Professional & Administrative",
    items: ["Healthcare Administration", "Insurance Verification", "Claims Management", "Customer Relations", "Quality Assurance"],
  },
  {
    category: "Digital & Technical",
    items: ["Microsoft Office", "Adobe Creative Suite", "E-commerce Management", "Digital Content Creation", "Business Documentation"],
  },
];

/* ── CONTACT ──────────────────────────────────────────── */
export const contact = {
  lines: [
    { text: "Let's", weight: "light" },
    { text: "Work", weight: "bold" },
    { text: "Together", weight: "light" },
  ] as const,
  email: "your-email@example.com", // TODO
  phone: "", // TODO: e.g. "+63 9XX XXX XXXX" — leave empty to hide
  location: "", // TODO: e.g. "Taguig City, Metro Manila" — leave empty to hide
  facebook: "https://facebook.com/", // TODO: your Facebook profile URL
  linkedin: "https://linkedin.com/", // TODO: your LinkedIn profile URL
};
