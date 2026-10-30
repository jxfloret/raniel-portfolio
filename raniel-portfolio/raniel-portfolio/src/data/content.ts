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
  { id: "moments", label: "Moments" },
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
  moments: "moments",
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
  cardText: "Open to internships, opportunities & collaborations. Connect with me on LinkedIn",
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
  slug?: string; // links the card to its photos in "Selected Moments"
  role?: string;
  date: string;
  description: string;
  stats?: string;
  image?: Img; // leave undefined to show a clean placeholder you can replace later
};

const M = "/images/moments/";

export const projects: Project[] = [
  {
    title: "Collaboratech 2026",
    slug: "collaboratech-2026",
    role: "Event Head",
    date: "April 6, 7, 8 & 10, 2026 · MH Lobby",
    description: "\u201cThe Rise of Futuristic Minds: Tomorrow Starts Here\u201d, a technology-focused student event organized end to end.",
    stats: "≈ 7,000 foot traffic · 1,500 participants",
    image: { src: M + "collaboratech-2026-poster.webp", width: 1080, height: 1168, alt: "Collaboratech 2026 official poster" },
  },
  {
    title: "Peso Smart — Money Matters 2.0",
    slug: "peso-smart",
    role: "Organizer",
    date: "March 26, 2026",
    description: "Financial literacy initiative by JME and the ABM Society, built with speakers, student organizations, and eight local sponsors.",
    image: { src: M + "peso-smart-poster.webp", width: 1080, height: 1080, alt: "Peso Smart official poster" },
  },
  {
    title: "Blockchain Fundamentals — Bitskwela 2026",
    slug: "blockchain-fundamentals",
    role: "Coordinator",
    date: "September 18, 2026", // poster date; update if the session moved
    description: "\u201cLevel Up Your Digital Life\u201d: blockchain and fintech learning session with Bitskwela and Coins.ph.",
    image: { src: M + "bitskwela-2026-poster.webp", width: 1440, height: 1440, alt: "Bitskwela 2026 official poster" },
  },
  {
    title: "Daluyon — Lead Camp 2026",
    slug: "daluyon-lead-camp-2026",
    role: "Organizer · GCCL",
    date: "October 1–3, 2026",
    description: "Global City Council of Leaders leadership camp on unity, action, resilience, and organizational leadership.",
    image: { src: M + "daluyon-lead-camp-2026-poster.webp", width: 1280, height: 1600, alt: "Daluyon Lead Camp 2026 official poster" },
  },
  {
    title: "National Career Fest 2026",
    slug: "national-career-fest-2026",
    role: "Event Host",
    date: "2026",
    description: "Hosted a professional development and career-oriented event for a full gymnasium of students.",
    image: { src: M + "national-career-fest-2026-program.webp", width: 1600, height: 1200, alt: "National Career Fest 2026 program in the STI Global City gymnasium" },
  },
  {
    title: "Ideathon & Business Pitching 2026",
    slug: "ideathon-2026",
    role: "Ideathon Champion · LeadLab 2026",
    date: "2026",
    description: "Won the Ideathon at LeadLab 2026 with a team representing STI College Global City.",
    image: { src: M + "ideathon-champion-leadlab-2026.webp", width: 1080, height: 1350, alt: "Ideathon Champion, LeadLab 2026: the STI College Global City team holding certificates" },
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

/* ── SELECTED MOMENTS (event photography, grouped by event) ─────────
 *  Add photos to an event's `photos` list. Put files in public/images/moments/.
 *  kind: "photo" for real photographs, "poster" for the official pubmat.
 *  Photos are listed first, so real moments always lead.
 */
export type Moment = Img & { kind: "photo" | "poster"; caption: string };
export type MomentEvent = {
  slug: string;
  title: string;
  role?: string;
  date: string;
  org?: string;
  story: string;
  photos: Moment[];
};

export const momentEvents: MomentEvent[] = [
  {
    slug: "ideathon-2026",
    title: "Ideathon & Business Pitching 2026",
    role: "Ideathon Champion",
    date: "LeadLab 2026",
    org: "STI College Global City",
    story: "Pitched as a team and took home the Ideathon championship.",
    photos: [
      { src: M + "ideathon-champion-leadlab-2026.webp", width: 1080, height: 1350, kind: "photo", alt: "Raniel with his teammates holding their Ideathon certificates", caption: "With the team after winning the Ideathon, LeadLab 2026" },
    ],
  },
  {
    slug: "national-career-fest-2026",
    title: "National Career Fest 2026",
    role: "Event Host",
    date: "2026",
    org: "STI College Global City",
    story: "Hosted the program in front of a packed gymnasium of students preparing for their careers.",
    photos: [
      { src: M + "national-career-fest-2026-program.webp", width: 1600, height: 1200, kind: "photo", alt: "Hosts on stage at the National Career Fest with a full audience", caption: "Program in session, a full house at the STI Global City gymnasium" },
    ],
  },
  {
    slug: "collaboratech-2026",
    title: "Collaboratech 2026",
    role: "Event Head",
    date: "April 6, 7, 8 & 10, 2026",
    org: "MH Lobby · STI College Global City",
    story: "Led a four-day technology event: ≈ 7,000 foot traffic and 1,500 participants.",
    photos: [
      { src: M + "collaboratech-2026-poster.webp", width: 1080, height: 1168, kind: "poster", alt: "Collaboratech 2026 official poster", caption: "Official poster: \u201cThe Rise of Futuristic Minds\u201d" },
    ],
  },
  {
    slug: "daluyon-lead-camp-2026",
    title: "Daluyon — Lead Camp 2026",
    role: "Organizer",
    date: "October 1–3, 2026",
    org: "Global City Council of Leaders",
    story: "A three-day leadership camp for the council's student leaders.",
    photos: [
      { src: M + "daluyon-lead-camp-2026-poster.webp", width: 1280, height: 1600, kind: "poster", alt: "Daluyon Lead Camp 2026 official poster", caption: "Official poster: Daluyon Lead Camp 2026" },
    ],
  },
  {
    slug: "peso-smart",
    title: "Peso Smart — Money Matters 2.0",
    role: "Organizer",
    date: "March 26, 2026",
    org: "Junior Management Executives × ABM Society",
    story: "Financial literacy for students, backed by eight local sponsors.",
    photos: [
      { src: M + "peso-smart-poster.webp", width: 1080, height: 1080, kind: "poster", alt: "Peso Smart official poster", caption: "Official poster: \u201cWhere knowledge turns into wealth\u201d" },
    ],
  },
  {
    slug: "blockchain-fundamentals",
    title: "Blockchain Fundamentals — Bitskwela 2026",
    role: "Coordinator",
    date: "September 18, 2026",
    org: "with Bitskwela & Coins.ph",
    story: "Blockchain and fintech education for students.",
    photos: [
      { src: M + "bitskwela-2026-poster.webp", width: 1440, height: 1440, kind: "poster", alt: "Bitskwela 2026 official poster", caption: "Official poster: \u201cLevel Up Your Digital Life\u201d" },
    ],
  },
  // Add more events here when photos are ready, e.g. Leadership Training & Seminars, other GCCL / JME activities:
  // { slug: "leadership-training", title: "Leadership Training & Seminars", role: "...", date: "...", story: "...", photos: [ ... ] },
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
    { title: "Event Head, Collaboratech 2026", role: "≈ 7,000 foot traffic · 1,500 participants", meta: "April 6–10, 2026" },
    { title: "Ideathon Champion", role: "LeadLab 2026 · Ideathon & Business Pitching", meta: "2026" },
    { title: "Event Host, National Career Fest 2026", role: "Professional development event", meta: "2026" },
  ],
  fan: [
    { src: "/images/moments/ideathon-champion-leadlab-2026.webp", width: 1080, height: 1350, alt: "Ideathon Champion, LeadLab 2026" },
    { src: "/images/gallery/academic-achiever.webp", width: 1000, height: 1000, alt: "Academic Achiever pubmat" },
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

/* ── SOCIAL & CONTACT ─────────────────────────────────── */
export const socials = {
  linkedin: "https://www.linkedin.com/in/raniel-christian-capon-852888412",
  instagram: "https://www.instagram.com/raniel__capon/",
  facebook: "https://www.facebook.com/nielcheiss",
};

export const contact = {
  lines: [
    { text: "Let's", weight: "light" },
    { text: "Work", weight: "bold" },
    { text: "Together", weight: "light" },
  ] as const,
  email: "ranielchristianmendoza@gmail.com",
  phone: "", // add a number to show it, e.g. "+63 9XX XXX XXXX"; empty = hidden
  openTo: [
    "Professional opportunities",
    "Internship opportunities",
    "Leadership & organizational collaborations",
    "Event partnerships",
    "Business & project collaborations",
  ],
};
