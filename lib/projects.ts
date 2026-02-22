export interface Project {
  id: string;
  title: string;
  description: string;
  liveUrl: string;
  technologies: string[];
  category: 'web-app' | 'ecommerce' | 'ai-ml' | 'animation' | 'other';
  image?: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'DGMarket CRM',
    description:
      'Advanced CRM platform for managing customer relationships and business operations. Built with scalable architecture.',
    liveUrl: 'https://dgmarket-crm.onrender.com/',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    category: 'web-app',
  },
  {
    id: '2',
    title: 'My First CRM',
    description:
      'Full-featured CRM application for business management and customer tracking with intuitive UI.',
    liveUrl: 'https://my-first-crm.vercel.app/',
    technologies: ['React', 'Next.js', 'Vercel', 'Tailwind'],
    category: 'web-app',
  },
  {
    id: '3',
    title: 'SmartGadgetShop',
    description:
      'E-commerce platform specializing in gadgets with advanced search and filtering capabilities.',
    liveUrl: 'https://smartgadgetshop.netlify.app/',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    category: 'ecommerce',
  },
  {
    id: '4',
    title: 'Headphones Only',
    description:
      'Premium e-commerce store for high-quality headphones with detailed product pages.',
    liveUrl: 'https://headphonesonly.netlify.app/',
    technologies: ['React', 'Commerce API', 'Tailwind CSS'],
    category: 'ecommerce',
  },
  {
    id: '5',
    title: 'Shopping App',
    description: 'Full-stack shopping application with cart management and checkout flow.',
    liveUrl: 'https://shoppingappa.netlify.app/',
    technologies: ['React', 'Redux', 'Stripe', 'Node.js'],
    category: 'ecommerce',
  },
  {
    id: '6',
    title: 'E-Commerce Marketplace',
    description:
      'Multi-vendor marketplace platform with advanced vendor management system.',
    liveUrl: 'https://v0-e-commerce-marketplace-snowy-nine.vercel.app/',
    technologies: ['React', 'Next.js', 'PostgreSQL', 'Tailwind'],
    category: 'ecommerce',
  },
  {
    id: '7',
    title: 'E-Commerce Frontend',
    description:
      'Modern e-commerce frontend build with focus on user experience and performance.',
    liveUrl: 'https://v0-e-commerce-frontend-build-plum.vercel.app/',
    technologies: ['React', 'Next.js', 'TypeScript', 'CSS'],
    category: 'ecommerce',
  },
  {
    id: '8',
    title: 'Villa Options',
    description:
      'Luxury property listing platform with advanced search and filtering for real estate.',
    liveUrl: 'https://villaoptions.netlify.app/',
    technologies: ['React', 'Property API', 'Maps', 'Tailwind'],
    category: 'other',
  },
  {
    id: '9',
    title: 'School Website',
    description:
      'Educational institution website with student portals and course management.',
    liveUrl: 'https://school-website-8hti.vercel.app/',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'PostgreSQL'],
    category: 'web-app',
  },
  {
    id: '10',
    title: 'School Report Generator',
    description:
      'AI-powered tool for generating academic reports with automated analysis.',
    liveUrl: 'https://school-report-generator-eight.vercel.app/',
    technologies: ['Python', 'React', 'AI/ML', 'FastAPI'],
    category: 'ai-ml',
  },
  {
    id: '11',
    title: 'Live Animation Login',
    description:
      'Interactive login page with cutting-edge animations and smooth interactions.',
    liveUrl: 'https://live-animation-login-page.netlify.app/',
    technologies: ['React', 'Framer Motion', 'GSAP', 'CSS'],
    category: 'animation',
  },
  {
    id: '12',
    title: 'Lava FlameFlow Animation',
    description:
      'Experimental animation showcasing fluid dynamics and advanced motion graphics.',
    liveUrl: 'https://lava-flameflow-animation.netlify.app/',
    technologies: ['Canvas', 'WebGL', 'JavaScript', 'Particl'],
    category: 'animation',
  },
  {
    id: '13',
    title: 'Digital Mark',
    description: 'Digital marketing agency showcase with portfolio and services.',
    liveUrl: 'https://digital-mark-seven.vercel.app/',
    technologies: ['Next.js', 'React', 'Tailwind', 'Animation'],
    category: 'web-app',
  },
  {
    id: '14',
    title: 'Range Rover 3D',
    description: '3D interactive visualization of Range Rover vehicles using WebGL.',
    liveUrl: 'https://rangerover3d.vercel.app/',
    technologies: ['Three.js', 'React', 'WebGL', '3D Modeling'],
    category: 'animation',
  },
  {
    id: '15',
    title: 'AdMark - v2',
    description: 'Advanced advertising platform with campaign management and analytics.',
    liveUrl: 'https://admark-2.vercel.app/',
    technologies: ['React', 'Node.js', 'MongoDB', 'Chart.js'],
    category: 'web-app',
  },
  {
    id: '16',
    title: 'AdMark - v3',
    description:
      'Latest version of advertising platform with enhanced features and UI improvements.',
    liveUrl: 'https://admark-3.vercel.app/',
    technologies: ['React', 'TypeScript', 'Firebase', 'Tailwind'],
    category: 'web-app',
  },
  {
    id: '17',
    title: 'Perfect Match UI',
    description:
      'Dating app UI showcase with smooth interactions and modern design patterns.',
    liveUrl: 'https://perfect-match-ui.vercel.app/',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
    category: 'web-app',
  },
  {
    id: '18',
    title: 'GharKaMarket',
    description: 'Online marketplace for home and household products with seller integration.',
    liveUrl: 'https://gharkamarket.in/',
    technologies: ['React', 'Node.js', 'MongoDB', 'Payment Gateway'],
    category: 'ecommerce',
  },
  {
    id: '19',
    title: 'Rubik Game',
    description:
      'Interactive Rubik\'s cube solver game with puzzle mechanics and leaderboard.',
    liveUrl: 'https://rubik-game-sp.netlify.app/',
    technologies: ['React', 'Canvas', 'Game Logic', 'TypeScript'],
    category: 'web-app',
  },
  {
    id: '20',
    title: 'Portfolio v1',
    description: 'Original developer portfolio showcasing early projects and skills.',
    liveUrl: 'https://shivampandey.dev',
    technologies: ['Next.js', 'React', 'Tailwind', 'Animation'],
    category: 'web-app',
  },
];

export const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'web-app', label: 'Web Apps' },
  { id: 'ecommerce', label: 'E-Commerce' },
  { id: 'ai-ml', label: 'AI/ML' },
  { id: 'animation', label: 'Animation' },
  { id: 'other', label: 'Other' },
];
