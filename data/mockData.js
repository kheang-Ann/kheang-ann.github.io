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
  linkedin: "https://linkedin.com/in/johndoe",
  location: "San Francisco, CA",
  skills: [
    { name: "JavaScript", level: 90 },
    { name: "Vue.js", level: 85 },
    { name: "React", level: 80 },
    { name: "Node.js", level: 75 },
    { name: "Python", level: 85 },
    { name: "Java", level: 70 },
    { name: "C++", level: 65 },
    { name: "SQL", level: 80 },
    { name: "MongoDB", level: 70 },
    { name: "Git", level: 85 },
    { name: "Docker", level: 60 },
    { name: "AWS", level: 55 }
  ],
  education: [
    {
      degree: "Bachelor of Science in Software Engineering",
      school: "University of Technology",
      year: "2022 - 2026 (Expected)",
      gpa: "3.8/4.0"
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
    github: "https://github.com/johndoe/ecommerce-platform",
    live: "https://ecommerce-demo.example.com",
    featured: true
  },
  {
    id: 2,
    name: "Task Management App",
    description: "A collaborative task management tool with real-time updates, team collaboration features, and progress tracking.",
    technologies: ["Vue.js", "Firebase", "TailwindCSS", "Vuex"],
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
    github: "https://github.com/johndoe/task-manager",
    live: "https://taskmanager-demo.example.com",
    featured: true
  },
  {
    id: 3,
    name: "Weather Dashboard",
    description: "A beautiful weather dashboard that displays current weather, forecasts, and historical data for multiple cities.",
    technologies: ["Vue.js", "OpenWeatherMap API", "Chart.js", "CSS3"],
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=500&h=300&fit=crop",
    github: "https://github.com/johndoe/weather-dashboard",
    live: "https://weather-demo.example.com",
    featured: false
  },
  {
    id: 4,
    name: "Code Snippet Manager",
    description: "A developer tool for organizing, searching, and sharing code snippets with syntax highlighting and tagging.",
    technologies: ["Vue.js", "Electron", "SQLite", "Prism.js"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=300&fit=crop",
    github: "https://github.com/johndoe/snippet-manager",
    live: null,
    featured: false
  },
  {
    id: 5,
    name: "AI Chat Bot",
    description: "An intelligent chatbot powered by machine learning that can answer questions and provide recommendations.",
    technologies: ["Python", "TensorFlow", "Flask", "Vue.js", "WebSocket"],
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=500&h=300&fit=crop",
    github: "https://github.com/johndoe/ai-chatbot",
    live: "https://chatbot-demo.example.com",
    featured: true
  },
  {
    id: 6,
    name: "Portfolio Website",
    description: "A modern, responsive portfolio website showcasing projects, skills, and professional experience.",
    technologies: ["Vue.js", "Vite", "CSS3", "JavaScript"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
    github: "https://github.com/johndoe/portfolio",
    live: "https://johndoe.example.com",
    featured: false
  }
];

export const socialLinks = [
  { name: "GitHub", icon: "github", url: "https://github.com/johndoe" },
  { name: "LinkedIn", icon: "linkedin", url: "https://linkedin.com/in/johndoe" },
  { name: "Twitter", icon: "twitter", url: "https://twitter.com/johndoe" },
  { name: "Email", icon: "email", url: "mailto:john.doe@example.com" }
];
