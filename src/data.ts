import { Project, Experience, Testimonial, StatItem, ExpertiseItem, SkillCategory } from './types';

export const STATS: StatItem[] = [
  { value: 3, suffix: '+', label: 'Years Experience' },
  { value: 100, suffix: '+', label: 'WordPress Websites' }
];

export const PROJECTS: Project[] = [
  {
    id: 'vidpres-nl',
    title: 'Vidpres — Video Presentation Solutions Portal',
    description: 'A modern, high-performance website crafted for video presentation services. Built with responsive layout frameworks, optimized asset loading, elegant typography, and high-quality video content mapping.',
    image: '/src/assets/images/Modern WordPress Website Design Using Elementor.webp',
    tags: ['WordPress', 'Elementor Pro', 'Web Dev', 'Responsive Design', 'Custom Visuals'],
    liveUrl: 'https://www.vidpres.nl/',
    githubUrl: '#',
    featured: true,
    category: 'WordPress Works'
  },
  {
    id: 'b2b-growth-systems',
    title: 'B2B Growth Systems — Automated Lead Funnel',
    description: 'Constructed the foundational GoHighLevel marketing pipeline, including automated email/SMS triggers, contact flows, custom landing pages, and snapshot templates. (Subsequently handed over and maintained by client).',
    image: '/src/assets/images/centauri_project_1779531736672.png',
    tags: ['GoHighLevel', 'Marketing Automation', 'Funnels', 'CRM Systems', 'DNS Setup'],
    liveUrl: 'https://b2bgrowth.systems/',
    githubUrl: '#',
    featured: true,
    category: 'WordPress Works'
  },
  {
    id: 'nordic-homes',
    title: 'Nordic Living — Premium E-Commerce & Editorial Portal',
    description: 'A custom WordPress website designed inside Elementor Pro with bespoke style guides, advanced product customizers, optimized image pipelines, and heavy WooCommerce catalog caching.',
    image: '/src/assets/images/wp_mockup_2_1779533587692.png',
    tags: ['WordPress', 'Elementor Pro', 'WooCommerce', 'Canva', 'CPanel Hosting'],
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
    category: 'WordPress Works'
  },
  {
    id: 'apex-coaching',
    title: 'Apex Growth — High-Converting Funnel Suite',
    description: 'A high-converting multipage landing architecture and customer onboarding pipeline designed in ClickFunnels, offering smooth navigation, customer records tracking, and active CRM automation.',
    image: '/src/assets/images/wp_mockup_1_1779533566683.png',
    tags: ['GoHighLevel', 'ClickFunnels', 'Mailchimp', 'Figma'],
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
    category: 'WordPress Works'
  },
  {
    id: 'urban-nest-identity',
    title: 'Urban Nest — Minimalist Aesthetic Brand Identity',
    description: 'A comprehensive branding guidelines system including responsive corporate logo families, digital asset layouts, editorial typography pairings, and modern asset maps designed in Figma.',
    image: '/src/assets/images/design_mockup_1779533607797.png',
    tags: ['Brand Strategy', 'Figma', 'Photoshop', 'Canva Layouts'],
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
    category: 'Design'
  }
];

export const TECHNICAL_SKILLS: SkillCategory[] = [
  {
    id: 'web-dev-design',
    title: 'Web Dev & Design',
    icon: 'Laptop',
    skills: ['WordPress', 'HTML5', 'CSS3', 'JavaScript', 'Basic PHP', 'VSCode', 'Figma', 'Adobe Photoshop', 'Canva']
  },
  {
    id: 'marketing-crms',
    title: 'Marketing & CRMs',
    icon: 'Share2',
    skills: ['GoHighLevel', 'ClickFunnels', 'Mailchimp']
  },
  {
    id: 'email-deliverability',
    title: 'Email & Deliverability',
    icon: 'Sparkles',
    skills: ['WP Mail SMTP', 'WP Mailgun', 'Google Workspace', 'DKIM / SPF / DMARC']
  },
  {
    id: 'hosting-speed',
    title: 'Hosting & Performance',
    icon: 'Settings',
    skills: ['WHM / cPanel', 'GoDaddy', 'Namecheap', 'Domain.com', 'DNS Management', 'PageSpeed Insights', 'GTMetrix']
  },
  {
    id: 'utilities-productivity',
    title: 'Utilities & Productivity',
    icon: 'Award',
    skills: ['XAMPP', 'Basic SEO', 'AI Tools', 'Microsoft Office', 'Monday.com', 'Slack', 'Hive']
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'exp-1',
    role: 'Freelance WordPress Developer',
    company: 'Remote',
    period: 'April 2026 – Present',
    description: [
      'Rebuilt a dynamic WordPress website using Elementor, enabling content management without technical assistance.',
      'Implemented responsive layouts, design enhancements, and performance optimizations across multiple website pages.',
      'Diagnosed and resolved plugin, layout, integration, and functionality issues to maintain website stability and performance.'
    ],
    tags: ['WordPress', 'Elementor', 'Javascript', 'Basic PHP', 'Performance Optimization', 'Troubleshooting']
  },
  {
    id: 'exp-2',
    role: 'Web Designer',
    company: '411 Locals — Remote',
    period: 'June 2024 – February 2026',
    description: [
      'Managed and updated 1,000+ WordPress websites using Divi, consistently meeting production goals while maintaining high-quality standards across client projects.',
      'Performed on-page SEO updates, including metadata formatting, image optimization, content structuring, and troubleshooting SEO-related website issues to support search visibility and site performance.',
      'Improved website speed and mobile responsiveness using GTmetrix and Google PageSpeed Insights, ensuring optimized performance across desktop and mobile devices.',
      'Customized website layouts, visuals, and content while recreating client websites through mirror account processes to maintain branding consistency and responsive design quality.',
      'Earned multiple Top Performer recognitions for consistently exceeding productivity KPIs and maintaining a 99%+ QA quality rating.'
    ],
    tags: ['WordPress', 'Divi Theme', 'Photoshop', 'On-Page SEO', 'GTmetrix', 'QA Quality']
  },
  {
    id: 'exp-3',
    role: 'Web Developer',
    company: 'Nightbirds Solutions — Bacolod City, Philippines',
    period: 'March 2022 – April 2024',
    description: [
      'Built and launched 50+ WordPress websites using Elementor, Divi, Beaver Builder, Gutenberg, WPBakery, and Avia (Enfold) for clients across multiple industries.',
      'Managed and maintained 100+ websites, performing content updates, troubleshooting, security checks, and technical support to ensure reliable website performance.',
      'Developed WooCommerce stores, configured product catalogs and variations, and customized storefront layouts using HTML, CSS, and JavaScript.',
      'Built and optimized sales funnels and landing pages using GoHighLevel and ClickFunnels, including snapshot-ready templates and basic automations such as email/SMS triggers, contract setup, and CRM organization.',
      'Configured domains, DNS records, hosting environments, and email authentication protocols (SPF, DKIM, and DMARC) to support website and email deliverability.'
    ],
    tags: ['WP Builders', 'WooCommerce', 'GoHighLevel', 'ClickFunnels','Hosting', 'DNS & Email']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Evelyn Vora',
    role: 'Founder',
    company: 'Nordic Homes Studio',
    content: "They built our WordPress e-commerce shop with absolute perfection. From Divi interactive menus to full Mailchimp list syncing, everything is fluid. We received 100+ orders in week one without a single speed issue.",
    avatar: '/src/assets/images/wp_dev_avatar_1779533548014.png'
  },
  {
    id: 'test-2',
    name: 'Kaelen Vance',
    role: 'Marketing Manager',
    company: 'Apex Growth Labs',
    content: "Absolute elite funnel execution. They set up our entire lead automation pipeline on GoHighLevel within 5 days, adding beautiful Canva graphic headers. High conversions and beautiful professional designs.",
    avatar: '/src/assets/images/wp_dev_avatar_1779533548014.png'
  },
  {
    id: 'test-3',
    name: 'Sola Chang',
    role: 'Creative Director',
    company: 'Form & Nest Designs',
    content: "A web creator who combines outstanding UI aesthetics with flawless hosting expertise. They configured our intricate WHM server space and delivered pixel-accurate Elementor cards.",
    avatar: '/src/assets/images/wp_dev_avatar_1779533548014.png'
  }
];
