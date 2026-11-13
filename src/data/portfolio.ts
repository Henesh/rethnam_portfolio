// All portfolio content lives here so it can be updated without touching UI code.
// Every fact below is taken from Kanaga's resume. Items marked `placeholder`
// are intentionally left for Kanaga to fill in — do not invent figures.

export const profile = {
  firstName: 'Kanaga',
  lastName: 'Rethnam',
  fullName: 'Kanaga Rethnam A/L Paramanath Kumar',
  title: 'Financial Technology Graduate',
  positioning: ['Financial Technology', 'Financial Data Analysis', 'Banking Operations', 'Digital Transformation'],
  email: 'kanagarethnam@gmail.com',
  phone: '011-2061-1225',
  phoneHref: 'tel:+60112061225',
  location: 'Cheras, Selangor, Malaysia',
  linkedin: 'https://linkedin.com/in/kanaga-rethnam-72878a360',
  resume: '/resume/Kanaga_Rethnam_Resume.pdf',
  resumeFileName: 'Kanaga_Rethnam_Resume.pdf',
  portrait: { webp: '/images/kanaga-portrait.webp', jpg: '/images/kanaga-portrait.jpg' },
  aboutPhoto: { webp: '/images/kanaga-about.webp', jpg: '/images/kanaga-about.jpg' },
  heroIntro: [
    "I'm a Financial Technology graduate from Universiti Tunku Abdul Rahman with an interest in digital banking, financial data analysis, cybersecurity, and financial transformation.",
    'I enjoy exploring how technology and data can improve financial services, strengthen operational processes, and enhance customer trust in digital banking.',
  ],
};

export const navLinks = [
  // Ordered to match the page flow (reference layout: skills right after the hero)
  { id: 'home', label: 'Home' },
  { id: 'skills', label: 'Skills' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'contact', label: 'Contact' },
] as const;

export type SkillIcon = 'chart' | 'ledger' | 'bank' | 'shield';

export const skillGroups: { icon: SkillIcon; title: string; description: string; items: string[] }[] = [
  {
    icon: 'chart',
    title: 'Financial & Data Analytics',
    description: 'Turning raw survey and financial data into structured, evidence-based insight.',
    items: ['IBM SPSS Statistics', 'Financial Data Visualization', 'Data Cleaning', 'Quantitative Research', 'Statistical Assessment'],
  },
  {
    icon: 'ledger',
    title: 'Accounting & Digital Systems',
    description: 'Hands-on exposure to accounting software and accurate record management.',
    items: ['AutoCount Accounting Software', 'Digital Accounting Workflows', 'Financial Records Digitization', 'Data Entry Operations'],
  },
  {
    icon: 'bank',
    title: 'Business & Financial Technology',
    description: 'Understanding how digital tools reshape banking and business models.',
    items: ['Digital Transformation Strategies', 'Digital Entrepreneurship', 'E-Financial Services', 'Modern Banking Operations'],
  },
  {
    icon: 'shield',
    title: 'Risk & Professional Skills',
    description: 'Risk awareness paired with dependable, people-facing working habits.',
    items: ['Risk Assessment & Compliance', 'Cybersecurity Awareness', 'Cash Handling & Reconciliation', 'Team Coordination', 'Customer Service', 'Communication'],
  },
];

export const about = {
  paragraphs: [
    "I'm Kanaga Rethnam, a Financial Technology graduate from Universiti Tunku Abdul Rahman (UTAR).",
    'My academic journey has developed my understanding of digital banking systems, financial operations, digital accounting workflows, and the growing importance of cybersecurity in financial services.',
    'Through academic research, business-oriented projects, and practical working experiences, I have developed analytical thinking, data-handling capabilities, communication skills, and an understanding of customer-focused financial operations.',
    'I am particularly interested in how financial institutions can use technology, data, and effective risk management strategies to improve banking experiences and strengthen consumer confidence.',
    'I am currently seeking opportunities where I can apply my academic knowledge, continue developing professionally, and contribute to meaningful work in the financial services industry.',
  ],
  interests: ['Digital Banking', 'Financial Analytics', 'Cybersecurity & Risk', 'Digital Transformation'],
  facts: [
    { label: 'Degree', value: 'B.Fin (FinTech) Hons' },
    { label: 'University', value: 'UTAR' },
    { label: 'Based in', value: 'Cheras, Selangor' },
  ],
};

export const education = [
  {
    period: 'June 2023 – June 2026',
    institution: 'Universiti Tunku Abdul Rahman (UTAR)',
    qualification: 'Bachelor of Finance (Financial Technology) with Honours',
    location: 'Sungai Long, Kajang',
    result: 'CGPA: 2.90',
    areas: ['Digital Transformation Strategies', 'E-Financial Services', 'Modern Banking Operations', 'Financial Technology', 'Digital Accounting'],
    featured: true,
  },
  {
    period: 'July 2020 – June 2022',
    institution: 'SMK Bandar Tun Hussein Onn 2',
    qualification: 'Sijil Tinggi Persekolahan Malaysia (STPM)',
    result: 'CGPA: 3.08',
    areas: [] as string[],
    featured: false,
  },
  {
    period: '2015 – 2019',
    institution: 'SMK Cheras Perdana',
    qualification: 'Sijil Pelajaran Malaysia (SPM)',
    result: 'Results: 1A, 1A-, 2B+, 4B, 1C',
    areas: [] as string[],
    featured: false,
  },
];

export const experience = [
  {
    role: 'Internship Trainee',
    company: 'MSM Metal Industries Sdn Bhd',
    period: 'June 2025 – September 2025',
    location: 'Balakong, Selangor',
    summary: 'Gained practical exposure to business accounting operations and administrative workflows.',
    points: [
      'Learned the fundamentals of AutoCount Accounting Software.',
      'Assisted with manual data entry and financial record documentation.',
      'Worked with paper-based files and learned the importance of accurate record management.',
      'Developed an understanding of administrative accounting processes.',
    ],
    tags: ['AutoCount', 'Data Entry', 'Record Management'],
  },
  {
    role: 'Event Crew',
    company: 'Trailblazers Malaysia',
    period: '2025',
    location: 'Petaling Jaya, Selangor',
    summary:
      'Supported team-building events by engaging with participants and assisting in event activities. Developed interpersonal communication, teamwork, and coordination skills through direct interaction with participating employees.',
    points: [] as string[],
    tags: ['Communication', 'Teamwork', 'Coordination'],
  },
  {
    role: 'Cashier',
    company: 'AEON BIG',
    period: 'September 2022 – February 2023',
    location: 'Bandar Tun Hussein Onn, Selangor',
    summary: 'Handled customer-facing retail operations while maintaining accuracy in cash transactions and payment processes.',
    points: [
      'Managed cash handling and money counting.',
      'Assisted customers and provided service support.',
      'Ensured items were carefully packaged.',
      'Developed customer service and transaction-handling skills.',
    ],
    tags: ['Cash Handling', 'Customer Service', 'Accuracy'],
  },
];

export type ProjectArt = 'cyber' | 'ecommerce' | 'booth' | 'beach';

export interface ProjectSection {
  heading: string;
  body?: string;
  list?: string[];
  numbered?: { title: string; body: string; list?: string[] }[];
  placeholder?: boolean;
}

export interface Project {
  slug: string;
  number: string;
  art: ProjectArt;
  title: string;
  shortTitle: string;
  category: string[];
  period: string;
  organisation?: string;
  type: string;
  description: string;
  highlights: string[];
  skills: string[];
  sections: ProjectSection[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: 'cybersecurity-banking-research',
    number: '01',
    art: 'cyber',
    featured: true,
    type: 'Final Year Research',
    title: 'The Impact of Cybersecurity Incidents on Customer Perception of Safety in Traditional and Digital Banks',
    shortTitle: 'Cybersecurity & Customer Trust in Banking',
    category: ['Financial Technology', 'Cybersecurity Research', 'Risk Assessment'],
    period: 'November 2025 – May 2026',
    organisation: 'Universiti Tunku Abdul Rahman',
    description:
      'An academic research project examining how cybersecurity incidents influence consumer perceptions of safety, trust, and risk in traditional and digital banking environments.',
    highlights: [
      'Evaluated effects of phishing, malware and unauthorised transactions on institutional trust',
      'Explored links between threat exposure and perceived financial, privacy and performance risk',
      'Outlined mitigation frameworks: security disclosures, cryptographic awareness, MFA',
    ],
    skills: ['Quantitative Research', 'Financial Risk Assessment', 'Cybersecurity Awareness', 'Analytical Thinking', 'Consumer Behaviour Analysis', 'Research Documentation'],
    sections: [
      {
        heading: 'Research Overview',
        body:
          'The research explores how cybersecurity incidents such as phishing attacks, malware, and unauthorized financial transactions can influence consumer confidence in financial institutions. It examines how customer exposure to digital threats relates to perceptions of financial risk, privacy risk, and operational performance risk.',
      },
      {
        heading: 'Research Objectives',
        list: [
          'Understand how cybersecurity incidents affect customer perception of safety in traditional and digital banks.',
          'Examine the relationship between threat exposure and perceived financial, privacy and performance risks.',
          'Identify practical ways financial institutions can reduce consumer-perceived risk.',
        ],
      },
      {
        heading: 'Key Focus Areas',
        numbered: [
          { title: 'Cybersecurity Incident Awareness', body: 'Investigates the effects of phishing, malware, and unauthorized transactions on consumer confidence.' },
          { title: 'Consumer Trust & Risk Perception', body: 'Explores relationships between cybersecurity threat exposure and perceived financial, privacy, and operational risks.' },
          {
            title: 'Risk Mitigation Strategies',
            body: 'Examines ways financial institutions can strengthen consumer confidence through:',
            list: ['Clear security disclosures', 'Cryptographic tool awareness', 'Multi-factor authentication programmes'],
          },
        ],
      },
      {
        heading: 'Methodology',
        body:
          'The study followed a quantitative research approach. Collected data was cleaned and prepared before statistical assessment in IBM SPSS Statistics, where the relationships between customer exposure to cybersecurity threats and perceived financial, privacy and performance risks were examined.',
        list: ['Quantitative research design', 'Data cleaning & preparation', 'Statistical analysis in IBM SPSS', 'Correlation analysis of risk perceptions'],
      },
      {
        heading: 'Implications',
        body:
          'The study points financial institutions toward practical trust-building measures — transparent security disclosures, raising customer awareness of cryptographic protections, and multi-factor authentication programmes — as ways to lower consumer-perceived risk in both traditional and digital banking.',
      },
    ],
  },
  {
    slug: 'alibaba-gdt-certification',
    number: '02',
    art: 'ecommerce',
    type: 'Certification',
    title: 'Alibaba Global Digital Talent (GDT) Digital Entrepreneurship Certification',
    shortTitle: 'Alibaba GDT Digital Entrepreneurship',
    category: ['Digital Entrepreneurship', 'E-Commerce', 'Digital Transformation'],
    period: 'December 2025',
    organisation: 'Alibaba Network',
    description:
      'Completed the Alibaba Global Digital Talent Digital Entrepreneurship certification, demonstrating an understanding of digital entrepreneurship, global business concepts, digital transformation frameworks, and e-commerce methodologies.',
    highlights: [
      'Open-book comprehensive assessment under timed conditions',
      'Covered digital transformation frameworks and e-commerce case studies',
      'Achieved the required passing score (minimum 24 / 30)',
    ],
    skills: ['Digital Business Understanding', 'E-Commerce Awareness', 'Entrepreneurial Thinking', 'Digital Transformation Knowledge'],
    sections: [
      {
        heading: 'Programme Overview',
        body: 'An open-book comprehensive assessment covering digital entrepreneurship concepts and the application of digital technologies in modern business environments.',
      },
      {
        heading: 'Key Areas Covered',
        list: ['Global Digital Entrepreneurship', 'Digital Transformation Frameworks', 'E-Commerce Methodologies', 'Digital Business Case Studies'],
      },
      {
        heading: 'Achievement',
        body: 'Successfully achieved the required passing score under timed assessment conditions. The assessment required a minimum score of 24 out of 30.',
      },
    ],
  },
  {
    slug: 'high-on-health-booth-campaign',
    number: '03',
    art: 'booth',
    type: 'Business Campaign',
    title: 'High on Health – A Four-Day Strategic Open Booth Campaign',
    shortTitle: 'High on Health Booth Campaign',
    category: ['Business Development', 'Marketing', 'Entrepreneurship'],
    period: 'December 2025',
    description:
      'A four-day SucaLess open booth campaign focused on maximising customer engagement and promoting products through a combination of hard-sell and soft-sell approaches.',
    highlights: [
      'Operated an open booth across four days',
      'Combined hard-sell and soft-sell approaches',
      'Focused on customer engagement and revenue',
    ],
    skills: ['Marketing Communication', 'Customer Engagement', 'Sales Strategies', 'Business Operations', 'Teamwork', 'Entrepreneurship'],
    sections: [
      {
        heading: 'Campaign Overview',
        body: 'The campaign involved operating an open booth over four days, using customer engagement and promotional approaches to encourage interest and generate revenue.',
      },
      {
        heading: 'Key Activities',
        list: ['Customer engagement and interaction', 'Product promotion', 'Hard-sell and soft-sell approaches', 'Booth operations and coordination', 'Revenue-oriented campaign activities'],
      },
    ],
  },
  {
    slug: 'morib-beach-cleanup',
    number: '04',
    art: 'beach',
    type: 'Community Initiative',
    title: 'Morib Beach Community Cleanup – Empowering Local Action for Marine and Environmental Sustainability',
    shortTitle: 'Morib Beach Community Cleanup',
    category: ['Community Engagement', 'Environmental Sustainability', 'Team Coordination'],
    period: 'April 2025',
    description:
      'A community-driven environmental initiative focused on reducing marine debris and promoting environmental responsibility through a coordinated coastal cleanup at Morib Beach.',
    highlights: [
      'Coordinated a targeted coastal cleanup',
      'Managed waste collection workflows with volunteers',
      'Promoted community environmental responsibility',
    ],
    skills: ['Team Coordination', 'Community Engagement', 'Project Organisation', 'Communication', 'Environmental Awareness'],
    sections: [
      {
        heading: 'Initiative Overview',
        body: 'The project involved coordinating a targeted cleanup activity at Morib Beach to reduce plastic pollution and support local environmental sustainability.',
      },
      {
        heading: 'Key Contributions',
        list: [
          'Coordinated a targeted coastal cleanup',
          'Managed waste collection workflows',
          'Worked alongside a volunteer team',
          'Supported plastic pollution reduction',
          'Promoted environmental awareness and community responsibility',
        ],
      },
    ],
  },
];

export const achievements = [
  {
    icon: 'trophy',
    title: 'First Place – Digital Entrepreneurship Competition',
    org: 'Universiti Tunku Abdul Rahman',
    body: 'Awarded first place in a five-member collaborative competition and received a RM500 team cash prize.',
    highlight: true,
  },
  {
    icon: 'star',
    title: 'Most Active Student – Attendance Award',
    org: 'SMK Bandar Tun Hussein Onn 2',
    body: 'Recognised for outstanding engagement during online PDPR sessions.',
  },
  {
    icon: 'graduation',
    title: 'STPM Award',
    org: 'SMK Bandar Tun Hussein Onn 2',
    body: 'Received the Full STPM Pass Certificate for academic achievement, with a CGPA within the 3.00–3.32 range.',
  },
  {
    icon: 'medal',
    title: 'Silver Recognition – Online Health Education Quiz',
    org: 'SMK Bandar Tun Hussein Onn 2',
    body: 'Recognised for performance in a competitive online Health Education Quiz.',
  },
] as const;

export const certification = {
  title: 'Alibaba Global Digital Talent (GDT) Digital Entrepreneurship Certification',
  issuer: 'Alibaba Network',
  date: 'December 2025',
  description: 'Certification covering global digital entrepreneurship, digital transformation frameworks, business case studies, and e-commerce methodologies.',
  projectSlug: 'alibaba-gdt-certification',
};

export const languages = ['English', 'Bahasa Melayu', 'Tamil'];
