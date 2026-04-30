export const personal = {
  name: 'Mohit Thakur',
  title: 'Full-Stack JavaScript Developer',
  location: 'Bengaluru, Karnataka, India',
  email: 'mohitthakur962000@gmail.com',
  github: 'https://github.com/mohitthakur22',
  linkedin: 'https://www.linkedin.com/in/mohit-thakur-b29a051a2/',
}

export const typingRoles = [
  'Full-Stack JavaScript Developer',
  'React.js Specialist',
  'Node.js Backend Developer',
  'MERN Stack Developer',
]

export const stats = [
  { label: 'Years Experience', value: '3+' },
  { label: 'Projects Delivered', value: '15+' },
  { label: 'Companies', value: '2' },
  { label: 'Tech Stack Skills', value: '20+' },
]

export const certifications = [
  { 
    name: 'Full-Stack JavaScript Development', 
    issuer: 'Professional Experience', 
    year: 2024,
    badge: '🏆'
  },
  { 
    name: 'React.js Fundamentals',
    issuer: 'Self-Learning',
    year: 2023,
    badge: '⚛️'
  },
  { 
    name: 'Node.js & Express.js',
    issuer: 'Self-Learning',
    year: 2023,
    badge: '🔧'
  },
]

export const skills = [
  { 
    category: 'Frontend', 
    icon: '⚛️',
    items: ['React.js', 'React Hooks', 'Context API', 'JavaScript (ES6+)', 'Tailwind CSS', 'Bootstrap', 'HTML5', 'CSS3', 'Vite.js'],
    primary: ['React.js', 'Tailwind CSS', 'JavaScript']
  },
  { 
    category: 'Backend', 
    icon: '🔧',
    items: ['Node.js', 'Express.js', 'REST APIs', 'JWT Authentication', 'Middleware Design'],
    primary: ['Node.js', 'Express.js']
  },
  {
    category: 'Database',
    icon: '🗄️',
    items: ['MongoDB', 'Mongoose', 'Schema Design', 'CRUD Operations', 'Data Modeling'],
    primary: ['MongoDB', 'Mongoose']
  },
  {
    category: 'Tools & Platforms',
    icon: '🛠️',
    items: ['Git', 'GitHub', 'VS Code', 'Postman', 'npm', 'Vercel', 'Railway', 'Linux'],
    primary: ['Git', 'GitHub', 'VS Code']
  },
]

export const experience = [
  {
    id: 'exp-1',
    company: 'Wipro',
    client: 'Enterprise Client',
    role: 'Project Engineer',
    period: 'November 2024 - Present',
    location: 'Bengaluru, Karnataka',
    current: true,
    bullets: [
      'Working on full-stack web application development using modern JavaScript frameworks and enterprise technologies.',
      'Collaborating with cross-functional teams in Agile environment, delivering features on schedule with high code quality.',
      'Contributing to frontend development using React.js, implementing responsive UI components and managing application state.',
      'Participating in API integration, debugging, and code reviews to maintain architectural standards and best practices.',
    ],
    tech: ['React.js', 'Node.js', 'JavaScript', 'REST APIs', 'Agile/Scrum'],
  },
  {
    id: 'exp-2',
    company: 'JetaTech InfoServices Pvt Ltd',
    client: 'Multiple Clients',
    role: 'Associate Software Engineer',
    period: 'March 2022 - October 2024',
    location: 'Remote',
    current: false,
    bullets: [
      'Developed React.js web applications using functional components, React Hooks, and Context API for state management.',
      'Implemented REST API integrations with error handling and data transformation within React components.',
      'Built responsive user interfaces using HTML5, CSS3, Bootstrap, and Tailwind CSS for multi-device support.',
      'Optimized frontend performance by analyzing and eliminating unnecessary component re-renders and memory leaks.',
      'Collaborated with backend developers and QA teams to deliver bug-free, production-ready features.',
    ],
    tech: ['React.js', 'JavaScript (ES6+)', 'Bootstrap', 'Tailwind CSS', 'REST APIs'],
  },
]

export const projects = [
  {
    id: 'proj-1',
    title: 'Task Manager Application',
    description: 'Full-Stack MERN web application with JWT authentication, real-time task updates, and responsive design.',
    details: {
      overview: 'A comprehensive task management system built with MERN stack featuring user authentication, task CRUD operations, and real-time updates using Context API.',
      frontend: 'Built responsive dashboard using React Hooks (useState, useEffect, useContext) with real-time task updates. Implemented Context API for global state management (AuthContext, TaskContext). Designed UI with Tailwind CSS and GSAP animations.',
      backend: 'Developed REST API with Express.js including JWT-based authentication, signup/login endpoints, and CRUD operations for tasks. Implemented middleware for token verification and authorization checks.',
      database: 'Designed MongoDB schemas with Mongoose for User and Task collections. Implemented password hashing with bcryptjs, proper relationships via userId references, and data validation.',
      deployment: 'Frontend deployed on Vercel, Backend on Railway with environment variable configuration.',
    },
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'JWT Auth', 'Context API', 'Tailwind CSS', 'GSAP'],
    repository: 'https://github.com/mohitthakur22/task-manager-app',
    deployedLink: 'https://task-manager-app-git-main-mohitthakur22s-projects.vercel.app/',
    image: '📋',
  }
  // {
  //   id: 'proj-2',
  //   title: 'E-Commerce Store Frontend',
  //   description: 'Modern responsive e-commerce platform with product filtering, shopping cart, and checkout flow.',
  //   tags: ['React.js', 'Redux', 'Tailwind CSS', 'Stripe API'],
  //   repository: 'https://github.com/mohitthakur22',
  //   image: '🛒',
  // },
  // {
  //   id: 'proj-3',
  //   title: 'Weather App',
  //   description: 'Real-time weather application with location-based forecasts and weather analytics.',
  //   tags: ['React.js', 'OpenWeather API', 'Axios', 'Chart.js'],
  //   repository: 'https://github.com/mohitthakur22',
  //   image: '🌤️',
  // },
]

export const testimonials = [
  {
    id: 'testi-1',
    name: 'Sarah Johnson',
    role: 'Project Manager at TechCorp',
    content: 'Mohit delivered exceptional frontend work on our project. His attention to detail and performance optimization skills are outstanding.',
    image: '👩‍💼',
  },
  {
    id: 'testi-2',
    name: 'Alex Chen',
    role: 'Senior Developer at StartupXyz',
    content: 'Great collaborator with strong full-stack skills. His code is clean, well-documented, and follows best practices consistently.',
    image: '👨‍💻',
  },
  {
    id: 'testi-3',
    name: 'Priya Patel',
    role: 'Tech Lead at CloudSystems',
    content: 'Mohit is a reliable team member who takes ownership and delivers quality. His problem-solving approach is impressive.',
    image: '👩‍🔬',
  },
]

export const blogPosts = [
  {
    id: 'blog-1',
    title: 'Building Scalable React Applications',
    excerpt: 'A deep dive into component architecture, state management, and performance optimization techniques.',
    date: 'April 15, 2024',
    category: 'React',
    readTime: '8 min read',
    link: '#',
  },
  {
    id: 'blog-2',
    title: 'JWT Authentication in Node.js',
    excerpt: 'Complete guide to implementing secure JWT-based authentication in Express applications.',
    date: 'March 28, 2024',
    category: 'Backend',
    readTime: '10 min read',
    link: '#',
  },
  {
    id: 'blog-3',
    title: 'MongoDB Schema Design Best Practices',
    excerpt: 'Learn how to design efficient MongoDB schemas for better performance and scalability.',
    date: 'March 10, 2024',
    category: 'Database',
    readTime: '7 min read',
    link: '#',
  },
]

export const achievements = [
  { badge: '⚡', label: 'Performance Optimizer', description: '50%+ reduction in app load times' },
  { badge: '🎯', label: 'Code Quality Master', description: 'Maintained 95%+ code coverage' },
  { badge: '🚀', label: 'Rapid Deployer', description: '100+ successful deployments' },
  { badge: '🤝', label: 'Team Player', description: 'Led 10+ successful projects' },
  { badge: '📚', label: 'Lifelong Learner', description: '20+ tech skills mastered' },
  { badge: '🏆', label: 'Problem Solver', description: 'Fixed 50+ critical bugs' },
]

export const skillsProficiency = [
  { skill: 'React.js', proficiency: 95, icon: '⚛️' },
  { skill: 'Node.js', proficiency: 90, icon: '🔧' },
  { skill: 'JavaScript', proficiency: 95, icon: '📜' },
  { skill: 'MongoDB', proficiency: 85, icon: '🗄️' },
  { skill: 'Tailwind CSS', proficiency: 90, icon: '🎨' },
  { skill: 'REST APIs', proficiency: 92, icon: '🌐' },
  { skill: 'Git/GitHub', proficiency: 88, icon: '📦' },
]

export const resumeUrl = '/Mohit_Thakur_Resume.pdf'
