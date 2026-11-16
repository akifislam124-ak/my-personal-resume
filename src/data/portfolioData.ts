/**
 * Central Portfolio Data for Md Akiful Islam
 * All text, projects, contact info, and links are kept here for quick and easy editing.
 */

export interface Project {
  id: string;
  title: string;
  category: 'Websites' | 'AI Content' | 'Writing';
  description: string;
  detailedDescription: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  completionDate: string;
  keyOutcomes: string[];
}

export interface Service {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: 'Sparkles' | 'Layout' | 'Code2' | 'Feather';
  deliverables: string[];
  badge: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    level: number;
    experience: string;
    icon?: string;
  }[];
}

export interface TimelineItem {
  id: string;
  type: 'education' | 'experience';
  title: string;
  institutionOrRole: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatarText: string;
  quote: string;
  rating: number;
  projectWorkedOn: string;
}

export const PORTFOLIO_DATA = {
  profile: {
    fullName: "Md Akiful Islam",
    shortName: "Akiful",
    tagline: "AI Content Creator & Web Developer",
    age: 21,
    location: "Bangladesh",
    timezone: "GMT+6 (Dhaka)",
    email: "akifislam124@gmail.com",
    phone: "01947757944",
    phoneInternational: "+880 1947 757944",
    educationBrief: "Department of English, National University, Bangladesh",
    degree: "B.A. (Honors) in English",
    yearsOfExperience: "2+",
    experienceYearsNumeric: 2,
    avatarImage: "/akiful.jpg",
    bioIntro: "Hello, I'm Md Akiful Islam. I am a 21-year-old English Department student at National University, Bangladesh, with 2 years of hands-on experience in AI content creation, UI/UX website design, and modern front-end web development.",
    bioDetailed: "I uniquely bridge the gap between human language, creative AI intelligence, and clean web engineering. My academic background in English literature and linguistics empowers me to craft persuasive storytelling and precision prompt engineering, while my technical skills in React and Tailwind CSS allow me to transform creative concepts into high-speed, responsive digital reality.",
    availability: "Available for Freelance & Remote Collaborations",
  },

  socialLinks: {
    github: "https://github.com/akifislam124-ak",
    facebook: "https://facebook.com/akifislam",
    linkedin: "https://linkedin.com/in/akifislam",
    twitter: "https://x.com/akifislam",
    instagram: "https://instagram.com/akifislam",
  },

  stats: [
    { label: "Years of Experience", value: "2+", numeric: 2, suffix: "+" },
    { label: "Projects Completed", value: "20+", numeric: 20, suffix: "+" },
    { label: "Technologies & AI Tools", value: "15+", numeric: 15, suffix: "+" },
    { label: "Satisfied Clients", value: "10+", numeric: 10, suffix: "+" },
  ],

  services: [
    {
      id: "ai-content",
      title: "AI Content Creation",
      shortDesc: "Strategic prompt engineering, AI imagery, and multi-modal content pipelines that captivate audiences.",
      fullDesc: "Harnessing top-tier generative AI models (ChatGPT, Midjourney, Claude, Gemini) with rigorous linguistic precision to produce high-converting copy, marketing assets, and brand imagery tailored to your niche.",
      iconName: "Sparkles",
      badge: "High Demand",
      deliverables: [
        "Advanced Prompt Architecture & Custom Workflows",
        "Creative AI Visual Generation & Upscaling",
        "Targeted Social Media & Digital Ad Copywriting",
        "AI-Assisted SEO Content Strategy & Formatting"
      ]
    },
    {
      id: "website-design",
      title: "Website Design (UI/UX)",
      shortDesc: "Clean, modern, and minimal user interfaces crafted with meticulous attention to typography and spacing.",
      fullDesc: "Creating responsive, user-centered web layouts that combine visual elegance with intuitive navigation. Emphasizing typography hierarchy, accessibility, and modern aesthetics.",
      iconName: "Layout",
      badge: "Creative Focus",
      deliverables: [
        "Modern Mobile-First Responsive UI Layouts",
        "Design System & Color Palette Direction",
        "Interactive Prototypes & Wireframing",
        "Light & Dark Theme Visual Harmony"
      ]
    },
    {
      id: "website-development",
      title: "Website Development",
      shortDesc: "High-performance, reactive web apps built with modern React, Tailwind CSS, and clean TypeScript.",
      fullDesc: "Turning design concepts into lightning-fast, production-ready code with responsive grid structures, accessible DOM semantics, smooth micro-interactions, and cross-browser resilience.",
      iconName: "Code2",
      badge: "Production Ready",
      deliverables: [
        "React & TypeScript Single Page Applications",
        "Tailwind CSS Utility-First Clean Architecture",
        "Mobile-First Responsive Testing Across Devices",
        "Speed Optimization & Clean Semantic Structure"
      ]
    },
    {
      id: "english-content",
      title: "English Content & Proofreading",
      shortDesc: "Fluent, grammatically flawless articles, copy, and editorial refinement by an English Honors scholar.",
      fullDesc: "Leveraging academic rigor from the National University Department of English to refine tone, coherence, vocabulary, and syntax for websites, publications, and professional communications.",
      iconName: "Feather",
      badge: "Linguistic Rigor",
      deliverables: [
        "Website Copywriting & Value Propositions",
        "Academic & Professional Proofreading & Editing",
        "Tone-of-Voice Calibration & Stylistic Polish",
        "Structural Cohesion & Readability Enhancement"
      ]
    }
  ] as Service[],

  projects: [
    {
      id: "proj-1",
      title: "Quantum Analytics Dashboard",
      category: "Websites",
      description: "A dark-themed high-performance analytics interface featuring responsive metric cards and real-time visualization.",
      detailedDescription: "Designed and developed an intuitive dashboard application tailored for digital marketing metrics. Implemented a deep navy color scheme with glowing violet-indigo telemetry cards, responsive sidebar navigation, and fluid chart representations.",
      image: "/src/assets/images/project_modern_web_1792342774667.jpg",
      tags: ["React", "Tailwind CSS", "TypeScript", "Dashboard UI"],
      liveUrl: "https://github.com/akifislam124-ak",
      githubUrl: "https://github.com/akifislam124-ak",
      featured: true,
      completionDate: "February 2026",
      keyOutcomes: [
        "100% Mobile-responsive layout across all breakpoints",
        "Zero-latency interaction with optimized state architecture",
        "Subtle dark mode aesthetic with WCAG AA compliance"
      ]
    },
    {
      id: "proj-2",
      title: "Synthesis AI Studio Suite",
      category: "AI Content",
      description: "An AI-powered content orchestration platform interface connecting prompt generation to audio waveform synthesis.",
      detailedDescription: "Engineered user experience and copy generation workflows for creative teams using generative models. Features interactive prompt parameter tuning, visual asset previews, and copywriting suggestions.",
      image: "/src/assets/images/project_ai_content_1792342775586.jpg",
      tags: ["AI Tools", "Prompt Engineering", "UI Design", "Content Strategy"],
      liveUrl: "https://github.com/akifislam124-ak",
      githubUrl: "https://github.com/akifislam124-ak",
      featured: true,
      completionDate: "January 2026",
      keyOutcomes: [
        "Standardized multi-step prompt templates for client campaigns",
        "Reduced copywriting turnaround time by 60%",
        "Designed clean neon-accented dark interface layout"
      ]
    },
    {
      id: "proj-3",
      title: "Atelier Luna Minimal Store",
      category: "Websites",
      description: "An architectural e-commerce storefront for contemporary fashion with minimalist product grids and cart drawer.",
      detailedDescription: "A minimalist digital boutique focusing on high-contrast editorial photography, balanced typography, seamless category filtering, and an unobstructed shopping experience.",
      image: "/src/assets/images/project_ecommerce_1792342776327.jpg",
      tags: ["React", "Tailwind CSS", "E-Commerce", "UX Design"],
      liveUrl: "https://github.com/akifislam124-ak",
      githubUrl: "https://github.com/akifislam124-ak",
      featured: true,
      completionDate: "November 2025",
      keyOutcomes: [
        "Clean 4-column product grid with instant responsive reflow",
        "Accessible modal bag inspection and smooth checkout entry",
        "Sub-second page transitions and lightweight assets"
      ]
    },
    {
      id: "proj-4",
      title: "The Inkwell English Literary Journal",
      category: "Writing",
      description: "An editorial reading platform showcasing academic literary analysis, essays, and critical commentary.",
      detailedDescription: "Authored in-depth English literature critiques while designing an elegant, distraction-free reading experience inspired by classical broadsheets, serif typography, and balanced white space.",
      image: "/src/assets/images/project_editorial_blog_1792342774967.jpg",
      tags: ["English Writing", "Editorial Design", "Literary Review", "Typography"],
      liveUrl: "https://github.com/akifislam124-ak",
      githubUrl: "https://github.com/akifislam124-ak",
      featured: false,
      completionDate: "October 2025",
      keyOutcomes: [
        "Published 12 critical reviews and English academic essays",
        "Tailored reading experience with balanced measure (65ch)",
        "Integrated dynamic reading-time estimator and clean footnotes"
      ]
    },
    {
      id: "proj-5",
      title: "Synapse AI Copywriting Assistant",
      category: "AI Content",
      description: "A comprehensive AI editing suite supporting tone calibration, grammar analysis, and creative ideation.",
      detailedDescription: "Developed specialized prompt presets for marketing professionals and writers. Blends linguistic accuracy with prompt engineering rules to provide contextual grammar suggestions and style enhancements.",
      image: "/src/assets/images/project_ai_copywriting_1792342792582.jpg",
      tags: ["ChatGPT", "Claude", "Grammar AI", "Content Workflows"],
      liveUrl: "https://github.com/akifislam124-ak",
      githubUrl: "https://github.com/akifislam124-ak",
      featured: false,
      completionDate: "December 2025",
      keyOutcomes: [
        "Curated 50+ domain-specific prompt blueprints",
        "Achieved 98% accuracy in style guide compliance checks",
        "Integrated live split preview for instantaneous editorial comparison"
      ]
    },
    {
      id: "proj-6",
      title: "CyanViolet Creative Agency Landing",
      category: "Websites",
      description: "A bold, modern agency landing page with hero typography, interactive showcases, and smooth scroll anchors.",
      detailedDescription: "A high-conversion marketing presence designed for a design-led development studio. Built with custom CSS animations, sleek dark surface elevations, and accessible form validations.",
      image: "/src/assets/images/project_landing_agency_1792342792093.jpg",
      tags: ["Web Design", "Tailwind CSS", "Responsive UI", "Animation"],
      liveUrl: "https://github.com/akifislam124-ak",
      githubUrl: "https://github.com/akifislam124-ak",
      featured: false,
      completionDate: "September 2025",
      keyOutcomes: [
        "Fluid 60fps animations using Tailwind and CSS transforms",
        "Conversion-focused call to action sections",
        "Zero layout shifts across desktop and mobile screens"
      ]
    }
  ] as Project[],

  skills: [
    {
      category: "Frontend Development",
      description: "Modern web foundations and reactive component frameworks.",
      skills: [
        { name: "HTML5 & Semantic Markup", level: 92, experience: "2 Years" },
        { name: "CSS3 & Modern Layouts (Grid/Flex)", level: 90, experience: "2 Years" },
        { name: "Tailwind CSS", level: 94, experience: "2 Years" },
        { name: "JavaScript (ES6+)", level: 86, experience: "2 Years" },
        { name: "React.js", level: 88, experience: "1.5 Years" },
        { name: "TypeScript Basics", level: 78, experience: "1 Year" },
        { name: "Responsive & Mobile-First Design", level: 95, experience: "2 Years" },
      ]
    },
    {
      category: "AI & Generative Tools",
      description: "Prompt architecture, visual asset creation, and content acceleration.",
      skills: [
        { name: "ChatGPT & Prompt Engineering", level: 95, experience: "2 Years" },
        { name: "Midjourney & AI Image Generation", level: 90, experience: "2 Years" },
        { name: "Claude & Long-form Ideation", level: 92, experience: "1.5 Years" },
        { name: "Gemini AI & Google AI Studio", level: 88, experience: "1 Year" },
        { name: "AI Workflow Automation", level: 82, experience: "1 Year" },
      ]
    },
    {
      category: "English Communication & Writing",
      description: "Academic rigor, storytelling, proofreading, and editorial clarity.",
      skills: [
        { name: "English Language & Grammar", level: 96, experience: "National University Student" },
        { name: "Website Copywriting & Messaging", level: 90, experience: "2 Years" },
        { name: "Editorial Proofreading & Editing", level: 94, experience: "2 Years" },
        { name: "Technical & Literary Writing", level: 88, experience: "2 Years" },
        { name: "Client Communication & Reporting", level: 92, experience: "2 Years" },
      ]
    }
  ] as SkillCategory[],

  timeline: [
    {
      id: "time-1",
      type: "education",
      title: "B.A. (Honors) in English",
      institutionOrRole: "Department of English, National University, Bangladesh",
      period: "2023 - Present",
      location: "Bangladesh",
      description: "Pursuing Bachelor of Arts in English Literature and Linguistics. Deepening analytical thinking, textual criticism, phonetics, and advanced rhetorical communication.",
      highlights: [
        "Focus on British & American Literature, Linguistics, and Critical Theory",
        "Excels in written academic analysis and stylistic prose composition",
        "Directly integrates linguistic understanding into prompt engineering principles"
      ]
    },
    {
      id: "time-2",
      type: "experience",
      title: "Independent Web Designer & Front-End Developer",
      institutionOrRole: "Freelance & Collaborative Projects",
      period: "2024 - Present",
      location: "Remote / Bangladesh",
      description: "Delivering modern, mobile-first websites and interactive single-page applications for small businesses, creators, and personal brands.",
      highlights: [
        "Built and launched 20+ responsive web interfaces using React, Tailwind CSS, and JavaScript",
        "Specializes in dark/light mode architectures, accessible layouts, and clean typographic grids",
        "Maintains 100% on-time project delivery with transparent client communication"
      ]
    },
    {
      id: "time-3",
      type: "experience",
      title: "AI Content Creator & Prompt Specialist",
      institutionOrRole: "Digital Creator & Client Services",
      period: "2023 - Present",
      location: "Remote / Bangladesh",
      description: "Spearheading creative AI content generation, marketing copy development, and automated prompt workflows for international clients.",
      highlights: [
        "Designed over 500+ commercial AI image assets using Midjourney and Stable Diffusion",
        "Formulated high-yield copywriting workflows for social campaigns and landing pages",
        "Synthesized AI tools with professional English editorial standards for flawless output"
      ]
    }
  ] as TimelineItem[],

  testimonials: [
    {
      id: "test-1",
      name: "Tanvir Ahmed",
      role: "Managing Director",
      company: "Apex Tech Ventures",
      avatarText: "TA",
      quote: "Akiful delivered our company landing page ahead of schedule. His eye for modern layout and clean typography made an immediate impression on our stakeholders. Highly recommended for web design and development!",
      rating: 5,
      projectWorkedOn: "Corporate Brand Website"
    },
    {
      id: "test-2",
      name: "Sharmin Akter",
      role: "Digital Marketing Lead",
      company: "Echo Content Agency",
      avatarText: "SA",
      quote: "What sets Akiful apart is his unique combination of English linguistic mastery and AI prompt design. The copy and visual assets he generated for our launch campaign were exceptionally articulate and engaging.",
      rating: 5,
      projectWorkedOn: "AI Content Campaign"
    },
    {
      id: "test-3",
      name: "Rafiqul Hasan",
      role: "Founder",
      company: "Craft & Code Labs",
      avatarText: "RH",
      quote: "Working with Akiful was effortless. He has great communication, clear dedication, and his React code with Tailwind CSS was cleanly structured and responsive right out of the box.",
      rating: 5,
      projectWorkedOn: "SaaS Dashboard Prototype"
    }
  ] as Testimonial[],
};
