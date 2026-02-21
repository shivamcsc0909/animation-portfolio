export interface SkillItem {
  name: string;
  level: number; // 0-100
}

export interface SkillCategory {
  category: string;
  skills: SkillItem[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: 'Languages',
    skills: [
      { name: 'JavaScript', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'Python', level: 85 },
      { name: 'HTML/CSS', level: 95 },
      { name: 'SQL', level: 85 },
    ],
  },
  {
    category: 'Frontend',
    skills: [
      { name: 'React', level: 95 },
      { name: 'Next.js', level: 90 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Framer Motion', level: 85 },
      { name: 'Three.js/WebGL', level: 80 },
      { name: 'Redux', level: 85 },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', level: 90 },
      { name: 'Express.js', level: 90 },
      { name: 'MongoDB', level: 85 },
      { name: 'PostgreSQL', level: 80 },
      { name: 'REST APIs', level: 90 },
      { name: 'Firebase', level: 85 },
    ],
  },
  {
    category: 'AI/ML',
    skills: [
      { name: 'Machine Learning', level: 80 },
      { name: 'Data Analysis', level: 75 },
      { name: 'TensorFlow', level: 75 },
      { name: 'Python Data Science', level: 80 },
      { name: 'LLM Integration', level: 85 },
    ],
  },
  {
    category: 'Tools & DevOps',
    skills: [
      { name: 'Git', level: 90 },
      { name: 'Docker', level: 80 },
      { name: 'AWS', level: 75 },
      { name: 'Vercel', level: 90 },
      { name: 'CI/CD', level: 80 },
    ],
  },
];

export const experiences: Experience[] = [
  {
    id: '1',
    role: 'Full Stack Developer',
    company: 'Self-Employed / Freelance',
    period: '2023 - Present',
    description:
      'Building cutting-edge web applications and AI-powered solutions for diverse clients. Specializing in MERN stack and modern web technologies.',
    highlights: [
      'Developed 20+ production-ready web applications',
      'Built AI-powered tools and automation systems',
      'Implemented complex 3D visualizations and animations',
      'Maintained 99%+ uptime for critical applications',
    ],
  },
  {
    id: '2',
    role: 'React Developer',
    company: 'Startup Incubator',
    period: '2022 - 2023',
    description:
      'Contributed to multiple startup projects, focusing on frontend development and UI/UX implementation.',
    highlights: [
      'Led frontend architecture for 3 successful products',
      'Implemented responsive designs across all devices',
      'Optimized application performance by 40%',
      'Mentored junior developers',
    ],
  },
  {
    id: '3',
    role: 'Junior Web Developer',
    company: 'Web Development Agency',
    period: '2021 - 2022',
    description:
      'Started career building websites and web applications. Gained foundational knowledge in web development best practices.',
    highlights: [
      'Developed 15+ client websites',
      'Learned MERN stack fundamentals',
      'Improved CSS and JavaScript skills',
      'Collaborated with design teams',
    ],
  },
];

export const education = [
  {
    id: '1',
    degree: 'B.Tech in Information Technology',
    institution: 'University/College Name',
    year: '2020-2024',
    description: 'Focused on computer science, data structures, and web development.',
  },
  {
    id: '2',
    degree: 'Full Stack Development Bootcamp',
    institution: 'Online Learning Platform',
    year: '2021',
    description: 'Intensive course covering MERN stack and modern web development practices.',
  },
];

export const certifications = [
  {
    id: '1',
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    year: '2023',
  },
  {
    id: '2',
    name: 'React Advanced Patterns',
    issuer: 'Frontend Masters',
    year: '2023',
  },
  {
    id: '3',
    name: 'Machine Learning Specialization',
    issuer: 'Coursera',
    year: '2022',
  },
];
