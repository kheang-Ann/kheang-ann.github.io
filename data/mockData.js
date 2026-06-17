// Mock Data - Replace with your real data later
export const profileData = {
  name: "Kheang Ann",
  title: "Software Engineering Student",
  tagline: "Building the Future, One Line of Code at a Time",
  about: `I'm a passionate Software Engineering student with a deep love for creating innovative solutions. 
  I specialize in full-stack development, algorithms, and system design. My goal is to become a 
  professional software engineer who makes a positive impact through technology.`,
  email: "kheangann@gmail.com",
  github: "https://github.com/kheang-Ann",
  linkedin: "https://www.linkedin.com/in/kheang-ann-a7242b281?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
  location: "Phnom Penh, Cambodia",
  skills: [
    { name: "JavaScript", level: 80 },
    { name: "Vue.js", level: 85 },
    { name: "Nest.js", level: 80 },
    { name: "Python", level: 85 },
    { name: "Java", level: 70 },
    { name: "C++", level: 65 },
    { name: "SQL", level: 80 },
    { name: "MongoDB", level: 70 },
    { name: "Git", level: 85 },
    { name: "Docker", level: 60 }
  ],
  education: [
    {
      degree: "Bachelor of Software engineering",
      school: "Institute of Technology of Cambodia",
      year: "2023 - 2028 (Expected)"
    },
    {
      degree: "High School Diploma",
      school: "Prek Leap High School(New Generation School)",
      year: "2020 - 2023"
    }
  ],
  experience: [
    {
      position: "Software Engineering Intern",
      company: "Tech Innovations Inc.",
      duration: "Summer 2024",
      description: "Developed web applications using Vue.js and Node.js. Collaborated with cross-functional teams."
    },
    {
      position: "Teaching Assistant",
      company: "University of Technology",
      duration: "Fall 2023 - Present",
      description: "Assist students in Data Structures and Algorithms courses. Conduct lab sessions and office hours."
    }
  ]
};

export const projectsData = [
  {
    id: 1,
    name: "E-Commerce Platform",
    description: "A full-stack e-commerce application with user authentication, product management, shopping cart, and payment integration.",
    technologies: ["Vue.js", "Node.js", "Express", "MongoDB", "Stripe API"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
    github: "https://github.com/kheang-Ann",
    live: "https://ecommerce-demo.example.com",
    featured: true
  },
  {
    id: 2,
    name: "Task Management App",
    description: "A collaborative task management tool with real-time updates, team collaboration features, and progress tracking.",
    technologies: ["Vue.js", "Firebase", "TailwindCSS", "Vuex"],
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
    github: "https://github.com/kheang-Ann",
    live: "https://taskmanager-demo.example.com",
    featured: true
  },
  {
    id: 3,
    name: "Weather Dashboard",
    description: "A beautiful weather dashboard that displays current weather, forecasts, and historical data for multiple cities.",
    technologies: ["Vue.js", "OpenWeatherMap API", "Chart.js", "CSS3"],
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=500&h=300&fit=crop",
    github: "https://github.com/kheang-Ann",
    live: "https://weather-demo.example.com",
    featured: false
  },
  {
    id: 4,
    name: "Code Snippet Manager",
    description: "A developer tool for organizing, searching, and sharing code snippets with syntax highlighting and tagging.",
    technologies: ["Vue.js", "Electron", "SQLite", "Prism.js"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=300&fit=crop",
    github: "https://github.com/kheang-Ann",
    live: null,
    featured: false
  },
  {
    id: 5,
    name: "AI Chat Bot",
    description: "An intelligent chatbot powered by machine learning that can answer questions and provide recommendations.",
    technologies: ["Python", "TensorFlow", "Flask", "Vue.js", "WebSocket"],
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=500&h=300&fit=crop",
    github: "https://github.com/kheang-Ann",
    live: "https://chatbot-demo.example.com",
    featured: true
  },
  {
    id: 6,
    name: "Portfolio Website",
    description: "A modern, responsive portfolio website showcasing projects, skills, and professional experience.",
    technologies: ["Vue.js", "Vite", "CSS3", "JavaScript"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
    github: "https://github.com/kheang-Ann",
    live: "https://johndoe.example.com",
    featured: false
  }
];

export const socialLinks = [
  { name: "GitHub", icon: "github", url: "https://github.com/kheang-Ann" },
  { name: "LinkedIn", icon: "linkedin", url: "https://www.linkedin.com/in/kheang-ann-a7242b281?utm_source=share_via&utm_content=profile&utm_medium=member_ios" },
  { name: "Email", icon: "email", url: "mailto:kheangann@gmail.com" }
];
