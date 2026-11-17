export type ProjectCategory =
  | 'all'
  | 'web'
  | 'mobile'
  | 'automation'
  | 'games-security';

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  category: Exclude<ProjectCategory, 'all'>;
  categoryLabel: string;
  stack: string[];
  role: string;
  featured?: boolean;
  image?: string;
  imageAlt?: string;
  imageFit?: 'cover' | 'contain';
  imageBg?: string;
  externalUrl?: string;
  externalLabel?: string;
  summary: string;
  commercialInsight: string;
  highlights: string[];
  accentTint: string;
}

export interface TimelineEntry {
  index: string;
  period: string;
  title: string;
  organization: string;
  track: 'engineering' | 'commercial' | 'hybrid';
  trackLabel: string;
  summary: string;
  deliverables: string[];
}

export interface AutomationStage {
  id: string;
  step: string;
  title: string;
  summary: string;
  inputs: string;
  output: string;
}

export interface AutomationPipeline {
  id: 'video' | 'research';
  name: string;
  year: string;
  summary: string;
  platforms: string;
  stages: AutomationStage[];
}

export const PORTFOLIO_PROFILE = {
  name: 'Dawit Solomon',
  role: 'Computer Engineer & Sales Specialist',
  email: 'dawitsolomon1823@gmail.com',
  telegram: '@yabedebingo',
  headline: 'I build web apps, mobile platforms, and AI automations grounded in real business.',
  lead: 'I am a computer engineer and sales specialist who understands both the code and the customer. Combining full-stack and AI engineering with hands-on sales experience, I build practical software shaped around real client workflows, commercial goals, and customer needs.',
  heroImage: '/assets/aistudio/photo_2022-12-18_00-16-32_c5eb02ac.jpg',
  heroImageAlt: 'Portrait of Dawit Solomon, Computer Engineer and Sales Specialist',
  metrics: [
    { label: 'Active Track', value: '2022 — 2026', detail: '4+ years building web, mobile & AI' },
    { label: 'Sold to Clients', value: '~2 Software · ~5 Sites', detail: 'Direct software & website sales' },
    { label: 'Paint Sales Role', value: 'JOTUN Paints', detail: 'Paint sales & color consultation' },
    { label: 'Accounting Parity', value: 'Sage 50 / Peachtree', detail: 'Jstock retail & factory ERP' },
  ],
};

export const PROJECTS: ProjectItem[] = [
  {
    id: 'qelemat',
    title: 'Qelemat Color Suite',
    subtitle: 'Professional paint visualization and architectural color tools',
    date: '2025',
    category: 'web',
    categoryLabel: 'Web & SaaS',
    stack: ['Next.js', 'React', 'Color Science UI', 'Cloudflare Pages'],
    role: 'Founder & Full-Stack Engineer',
    featured: true,
    image: '/assets/aistudio/qelemat_4bbf1114.png',
    imageAlt: 'Qelemat — The Ultimate Color Toolkit web application screenshot',
    externalUrl: 'https://qelemat.pages.dev',
    externalLabel: 'Visit qelemat.pages.dev',
    summary:
      'Originally launched at Qelemat.com and updated at qelemat.pages.dev, Qelemat is a suite of professional-grade color tools built to choose, match, and visualize home paints for painters, homeowners, architects, and interior designers.',
    commercialInsight:
      'Inspired by my time selling paints directly to homeowners, painters, and contractors at JOTUN Paints—eliminating guesswork when selecting undertones, finishes, and multi-room palettes before purchasing paint.',
    highlights: [
      'Interactive home paint preview and multi-swatch palette builder',
      'Curated workflows tailored for painters, homeowners, architects, and designers',
      'Fast responsive Next.js and React interface deployed on edge infrastructure',
    ],
    accentTint: '#EEF2FF',
  },
  {
    id: 'jstock',
    title: 'Jstock ERP',
    subtitle: 'End-to-end inventory, HR, and Sage 50-grade accounting for paint & construction',
    date: '2025',
    category: 'mobile',
    categoryLabel: 'Mobile ERP',
    stack: ['Flutter', 'Financial Ledger', 'Inventory Control'],
    role: 'Product Architect & Mobile Engineer',
    featured: true,
    image: '/assets/aistudio/js_7ad47191.PNG',
    imageAlt: 'Jstock ERP mobile application JS logo',
    summary:
      'A comprehensive Flutter mobile application engineered for paint and construction material store owners as well as paint manufacturing companies, monitoring every purchase, sale, employee record, and full financial workflow.',
    commercialInsight:
      'Designed with complete functional parity to Peachtree (Sage 50) accounting workflows so manufacturing and retail operators can manage ledgers without desktop lock-in.',
    highlights: [
      'Full purchase, sales, and raw-material batch tracking for paint manufacturers',
      'Complete Peachtree (Sage 50) financial accounting, receivables, payables, and reporting',
      'Employee attendance, payroll, and branch-level permission controls',
    ],
    accentTint: '#F4F4F5',
  },
  {
    id: 'company-monitor',
    title: 'Company Monitor',
    subtitle: 'Building operations, rent tracking, employee oversight, and payment ledger',
    date: 'June 2024',
    category: 'mobile',
    categoryLabel: 'Mobile App',
    stack: ['Flutter', 'Firebase', 'Cloud Firestore'],
    role: 'Lead Mobile Developer',
    image: '/assets/aistudio/r_e_61f4a8d1.png',
    imageAlt: 'Company Monitor Flutter mobile app Admin Dashboard showing Overdue Rents, Companies, Tenants, Properties, Rent, Employees, GL Accounts, and Payments',
    imageFit: 'contain',
    imageBg: '#0F172A',
    summary:
      'Cross-platform mobile application built with Flutter and Firebase enabling building owners and property managers to centralize rent collection, employee management, recurring payments, and operational tasks.',
    commercialInsight:
      'Replaced fragmented paper receipts and spreadsheets for multi-tenant property owners with real-time payment visibility.',
    highlights: [
      'Automated tenant rent tracking and overdue payment alerts',
      'Real-time Firebase synchronization across owner and staff devices',
      'Integrated employee work logs and building maintenance expense tracking',
    ],
    accentTint: '#F1F5F9',
  },
  {
    id: 'benaber',
    title: 'Benaber.com',
    subtitle: 'Digital export showcase for Ethiopian specialty coffee exporters',
    date: 'March 2024',
    category: 'web',
    categoryLabel: 'Client Web',
    stack: ['Web Engineering', 'Responsive UI', 'B2B Export Portal'],
    role: 'Web Engineer & Consultant',
    image: '/assets/aistudio/benaber_6c055f36.PNG',
    imageAlt: 'Benaber Blue Family Trading PLC coffee and export website screenshot',
    externalUrl: 'https://benaber.com',
    externalLabel: 'Open Benaber.com',
    summary:
      'One of several custom client websites engineered in March 2024, Benaber.com positions coffee exporters for international buyers with structured origin profiles, export grade storytelling, and direct trade inquiry flows.',
    commercialInsight:
      'Applied B2B sales positioning principles so international roasters immediately verify traceability, crop grades, and contact logistics.',
    highlights: [
      'Origin and processing showcase built for international green-coffee buyers',
      'Streamlined export inquiry capture and fast global page loads',
      'Delivered alongside a broader suite of custom commercial client sites',
    ],
    accentTint: '#F5F5F4',
  },
  {
    id: 'local-ai-automation',
    title: 'Local AI Automation Systems',
    subtitle: 'On-premise Video Editing & Distribution + Iterative Research Writer',
    date: '2026',
    category: 'automation',
    categoryLabel: 'AI Automation',
    stack: ['Local AI Models', 'Video Pipeline', 'Multi-Platform APIs'],
    role: 'AI Systems Engineer',
    image: '/assets/aistudio/n8n_video_edit_template_ec27c6e7.PNG',
    imageAlt: 'n8n local video editing and multi-platform distribution automation workflow',
    imageFit: 'contain',
    imageBg: '#18181B',
    summary:
      'Built locally in 2026 to meet surging demand for automated media and knowledge workflows—combining a zero-touch short-form video pipeline with a prompt-driven research authoring engine.',
    commercialInsight:
      'Running automation pipelines locally eliminates recurring per-minute cloud rendering fees while giving businesses private control over media and proprietary research.',
    highlights: [
      'Video Automation: auto-edits clips, burns in styled captions, mixes background music, and publishes to TikTok, Instagram, and YouTube',
      'Research Automation: accepts a title and guiding prompts to draft, structure, and iteratively update full research documents',
      'Local-first execution designed for predictable cost and continuous throughput',
    ],
    accentTint: '#EFF6FF',
  },
  {
    id: 'yabedebingo',
    title: '@yabedebingo',
    subtitle: 'Interactive Bingo Game Web App & Telegram Mini App',
    date: '2026',
    category: 'games-security',
    categoryLabel: 'Web & Telegram Mini App',
    stack: ['Web App', 'Telegram Mini Apps', 'Real-Time Game Logic'],
    role: 'Full-Stack Game Developer',
    image: '/assets/aistudio/bingo_6a209c7a.PNG',
    imageAlt: 'Yabede Bingo Telegram Mini App and web game interface showing 75-Ball Bingo rooms',
    imageFit: 'contain',
    imageBg: '#0B1120',
    externalUrl: 'https://t.me/yabedebingo',
    externalLabel: 'Open @yabedebingo',
    summary:
      'A responsive Bingo game engineered simultaneously as a standalone web application and a native-feeling Telegram Mini App (@yabedebingo), bringing instant multiplayer rounds directly into Telegram chats.',
    commercialInsight:
      'Meeting players inside Telegram removes app-store friction and maximizes organic community retention.',
    highlights: [
      'Unified codebase powering both browser sessions and Telegram Mini App viewports',
      'Instant card generation, live number calling, and automated win verification',
      'Touch-first layout tuned for mobile portrait play',
    ],
    accentTint: '#F4F4F5',
  },
  {
    id: 'dan-energy-ekub',
    title: 'Cyber Security & Digital Ekub App',
    subtitle: 'Security engineering projects and digitized community savings at DAN Energy',
    date: 'November 2022',
    category: 'games-security',
    categoryLabel: 'Security & FinTech',
    stack: ['Cyber Security', 'Application Engineering', 'Digital Ekub'],
    role: 'Computer Engineer at DAN Energy',
    summary:
      'During tenure at DAN Energy in November 2022, contributed to core cyber security initiatives while participating in the engineering of a Digital Ekub application modernizing traditional rotating savings circles.',
    commercialInsight:
      'Combined security-first engineering discipline with culturally grounded financial software for high-trust group savings.',
    highlights: [
      'Participated in defensive cyber security assessments and hardening projects',
      'Contributed to Digital Ekub workflows for member contributions and payout rounds',
      'Bridged trust, auditability, and accessible mobile-friendly flows',
    ],
    accentTint: '#F8FAFC',
  },
  {
    id: 'college-management',
    title: 'College Management System',
    subtitle: 'University graduation project built with PHP',
    date: 'July 2022',
    category: 'web',
    categoryLabel: 'Graduation System',
    stack: ['PHP', 'Relational Database', 'HTML/CSS'],
    role: 'Computer Engineering Graduate',
    summary:
      'Developed as a Computer Engineering graduation project in July 2022 using PHP to unify student registration, course scheduling, grading, and institutional administration.',
    commercialInsight:
      'Established foundational backend architecture, relational schema design, and role-based institutional workflows.',
    highlights: [
      'Student enrollment, department records, and academic transcript generation',
      'Role-separated portals for administrators, instructors, and students',
      'Built cleanly in PHP as the launching pad for subsequent full-stack work',
    ],
    accentTint: '#F4F4F5',
  },
];

export const TIMELINE_ENTRIES: TimelineEntry[] = [
  {
    index: '01.',
    period: 'July 2022',
    title: 'College Management System (Graduation Project)',
    organization: 'Computer Engineering Degree',
    track: 'engineering',
    trackLabel: 'Engineering',
    summary:
      'Completed Computer Engineering graduation by architecting and building a full-featured College Management System in PHP covering academic records, scheduling, and administration.',
    deliverables: ['PHP Backend', 'Student & Faculty Portals', 'Academic Data Model'],
  },
  {
    index: '02.',
    period: 'November 2022',
    title: 'Cyber Security Projects & Digital Ekub App',
    organization: 'DAN Energy',
    track: 'engineering',
    trackLabel: 'Security & FinTech',
    summary:
      'Worked at DAN Energy participating in cyber security engineering projects while contributing to the development of a Digital Ekub application for structured community savings.',
    deliverables: ['Cyber Security Initiatives', 'Digital Ekub Application', 'Team Engineering'],
  },
  {
    index: '03.',
    period: 'Commercial Tenure',
    title: 'Paint Sales Specialist',
    organization: 'JOTUN Paints',
    track: 'commercial',
    trackLabel: 'Paint Sales',
    summary:
      'Worked as a Sales Specialist selling JOTUN Paints directly to homeowners, painters, contractors, and builders—gaining first-hand knowledge of how customers choose colors and how paint retail operations run.',
    deliverables: ['Direct Paint Sales', 'Customer Color Consultation', 'Paint Retail Insight'],
  },
  {
    index: '04.',
    period: 'March 2024',
    title: 'Client Web Platforms & Benaber.com',
    organization: 'Independent Client Engineering',
    track: 'hybrid',
    trackLabel: 'Web & Export Trade',
    summary:
      'Engineered multiple commercial websites for business clients, headlined by Benaber.com—a digital export platform crafted for Ethiopian coffee exporters.',
    deliverables: ['Benaber.com Coffee Exporters', 'Multi-Client Web Delivery', 'Conversion UI'],
  },
  {
    index: '05.',
    period: 'June 2024',
    title: 'Company Monitor Mobile App',
    organization: 'Property & Workforce Operations',
    track: 'engineering',
    trackLabel: 'Mobile Engineering',
    summary:
      'Built Company Monitor using Flutter and Firebase to give building owners unified mobile control over rent tracking, employee oversight, and payment records.',
    deliverables: ['Flutter Cross-Platform App', 'Firebase Backend', 'Rent & Payroll Workflows'],
  },
  {
    index: '06.',
    period: '2025',
    title: 'Qelemat Color Suite & Jstock Paint ERP',
    organization: 'Qelemat (qelemat.pages.dev) & Jstock',
    track: 'hybrid',
    trackLabel: 'Sales-Informed Products',
    summary:
      'Applied real-world lessons from selling paints at JOTUN to independently build two software products: Qelemat (Next.js & React color tools for painters, homeowners, and architects) and Jstock (Flutter ERP for paint stores & manufacturers with full Sage 50 / Peachtree financial parity).',
    deliverables: ['Next.js / React Color Tools', 'Flutter Manufacturing & Retail ERP', 'Peachtree / Sage 50 Parity'],
  },
  {
    index: '07.',
    period: '2026',
    title: 'Local AI Automation & @yabedebingo Mini App',
    organization: 'AI Systems & Interactive Gaming',
    track: 'engineering',
    trackLabel: 'AI & Real-Time Apps',
    summary:
      'Engineered local Video and Research AI automation pipelines alongside @yabedebingo, a cross-surface Bingo game running on the web and inside Telegram Mini Apps.',
    deliverables: ['TikTok/IG/YT Video Pipeline', 'Prompt-Driven Research Engine', '@yabedebingo Telegram Mini App'],
  },
];

export const AUTOMATION_PIPELINES: AutomationPipeline[] = [
  {
    id: 'video',
    name: 'Local Video Automation',
    year: '2026',
    summary:
      'End-to-end local production pipeline that transforms raw footage into captioned, music-scored vertical videos and publishes them across short-form channels automatically.',
    platforms: 'TikTok · Instagram Reels · YouTube Shorts',
    stages: [
      {
        id: 'v-ingest',
        step: '01',
        title: 'Source Clip & Script Ingest',
        summary: 'Loads raw video assets locally and extracts timing cues for pacing and cuts.',
        inputs: 'Raw video footage, topic hook, target aspect ratio (9:16)',
        output: 'Trimmed base timeline with silence removal and scene markers',
      },
      {
        id: 'v-edit',
        step: '02',
        title: 'Automated Text & Music Layering',
        summary: 'Generates synchronized on-screen text overlays and mixes background audio levels.',
        inputs: 'Timed transcript cues, style rules, background music track',
        output: 'Rendered MP4 with kinetic captions and balanced audio mix',
      },
      {
        id: 'v-publish',
        step: '03',
        title: 'Multi-Platform Publishing',
        summary: 'Dispatches finished exports with tailored titles and descriptions across social endpoints.',
        inputs: 'Final rendered video, platform metadata, posting schedule',
        output: 'Published posts live on TikTok, Instagram, and YouTube',
      },
    ],
  },
  {
    id: 'research',
    name: 'Local Research Automation',
    year: '2026',
    summary:
      'Structured local research authoring system that accepts a title, follows user prompts, and performs iterative section updates to produce organized papers.',
    platforms: 'Local LLM Execution · Structured Markdown / Docs',
    stages: [
      {
        id: 'r-title',
        step: '01',
        title: 'Title & Scope Initialization',
        summary: 'Accepts the target research title and decomposes it into a coherent multi-section outline.',
        inputs: 'Research title, domain focus, target depth',
        output: 'Hierarchical section blueprint and key research questions',
      },
      {
        id: 'r-draft',
        step: '02',
        title: 'Prompt-Guided Section Authoring',
        summary: 'Accepts custom user prompts to synthesize well-organized prose, comparisons, and findings.',
        inputs: 'Section blueprint, steering prompt instructions',
        output: 'Structured multi-chapter research manuscript',
      },
      {
        id: 'r-update',
        step: '03',
        title: 'Iterative Update & Refinement',
        summary: 'Accepts follow-up prompts to expand, revise, or update existing sections without losing structure.',
        inputs: 'Existing manuscript + targeted update prompt',
        output: 'Updated, cohesive research document ready for review',
      },
    ],
  },
];

export interface SkillEntry {
  name: string;
  context: string;
}

export interface SkillGroup {
  id: 'flutter-mobile' | 'web' | 'ai-security' | 'business';
  index: string;
  title: string;
  domain: 'technical' | 'business';
  domainLabel: string;
  summary: string;
  skills: SkillEntry[];
}

export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: 'flutter-mobile',
    index: '01.',
    title: 'Flutter & Mobile Systems',
    domain: 'technical',
    domainLabel: 'Technical Stack',
    summary:
      'Cross-platform mobile engineering for inventory, accounting, workforce, and property management workflows.',
    skills: [
      { name: 'Flutter & Dart', context: 'Jstock ERP & Company Monitor mobile apps' },
      { name: 'Firebase & Cloud Firestore', context: 'Real-time sync, auth, and rent ledgers' },
      { name: 'Financial & Inventory Logic', context: 'Peachtree (Sage 50) workflow parity' },
      { name: 'Telegram Mini Apps', context: 'Mobile-first interactive play (@yabedebingo)' },
    ],
  },
  {
    id: 'web',
    index: '02.',
    title: 'Web Engineering & Platforms',
    domain: 'technical',
    domainLabel: 'Technical Stack',
    summary:
      'Full-stack web applications, interactive color tools, and commercial client websites built for fast delivery.',
    skills: [
      { name: 'Next.js & React', context: 'Qelemat color toolkit (qelemat.pages.dev)' },
      { name: 'PHP & Relational Databases', context: 'College Management academic portal' },
      { name: 'Responsive UI & Tailwind CSS', context: 'Export & commercial sites (Benaber.com)' },
      { name: 'Edge Deployment', context: 'Cloudflare Pages hosting & web optimization' },
    ],
  },
  {
    id: 'ai-security',
    index: '03.',
    title: 'Local AI Automation & Security',
    domain: 'technical',
    domainLabel: 'Technical Stack',
    summary:
      'On-premise AI pipelines for media and research paired with foundational application security experience.',
    skills: [
      { name: 'Local Video Automation', context: 'Auto-captions, audio mixing & social posting' },
      { name: 'Multi-Platform Publishing', context: 'TikTok, Instagram Reels & YouTube workflows' },
      { name: 'Research Automation', context: 'Title-driven, prompt-updated structured drafting' },
      { name: 'Cyber Security Foundations', context: 'Security projects & Digital Ekub at DAN Energy' },
    ],
  },
  {
    id: 'business',
    index: '04.',
    title: 'Sales, Clients & Business Operations',
    domain: 'business',
    domainLabel: 'Business Skills',
    summary:
      'Hands-on commercial experience selling paints at JOTUN Paints and closing direct software and website deals.',
    skills: [
      { name: 'Direct Paint Sales (JOTUN Paints)', context: 'Serving homeowners, painters & contractors' },
      { name: 'Client Website & Software Sales', context: 'Sold ~2 software systems & ~5 client websites' },
      { name: 'Customer Color & Needs Discovery', context: 'Translating buyer pain points into product specs' },
      { name: 'Paint Retail & Factory Workflows', context: 'Purchases, sales, payroll & ledger operations' },
    ],
  },
];

