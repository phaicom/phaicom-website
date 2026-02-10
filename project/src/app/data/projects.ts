export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  technologies: string[];
  features: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
    description: "A full-featured e-commerce platform built with modern web technologies. Features include product catalog, shopping cart, checkout process, payment integration, and order management.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
    features: [
      "Product catalog with search and filters",
      "Shopping cart and wishlist functionality",
      "Secure payment processing with Stripe",
      "User authentication and profiles",
      "Order tracking and history",
      "Admin dashboard for inventory management"
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example/ecommerce"
  },
  {
    id: "task-management-app",
    title: "Task Management App",
    category: "Mobile App",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    description: "A cross-platform mobile application for managing tasks and projects. Built with React Native, featuring real-time synchronization and collaborative features.",
    technologies: ["React Native", "Firebase", "Redux", "TypeScript"],
    features: [
      "Create and organize tasks with priorities",
      "Project-based task organization",
      "Real-time collaboration with team members",
      "Push notifications for deadlines",
      "Offline mode with sync",
      "Calendar integration"
    ],
    liveUrl: "https://example.com/app"
  },
  {
    id: "weather-dashboard",
    title: "Weather Dashboard",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80",
    description: "An interactive weather dashboard providing real-time weather data, forecasts, and visualizations. Features location-based weather updates and historical data analysis.",
    technologies: ["React", "Weather API", "D3.js", "Tailwind CSS"],
    features: [
      "Real-time weather updates",
      "7-day forecast with hourly breakdown",
      "Interactive weather maps",
      "Historical weather data charts",
      "Location search and favorites",
      "Weather alerts and notifications"
    ],
    liveUrl: "https://example.com/weather",
    githubUrl: "https://github.com/example/weather"
  },
  {
    id: "portfolio-cms",
    title: "Portfolio CMS",
    category: "Backend",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&q=80",
    description: "A headless CMS specifically designed for portfolio websites. Provides an API-first approach for managing projects, blog posts, and media assets.",
    technologies: ["Node.js", "Express", "PostgreSQL", "GraphQL", "AWS S3"],
    features: [
      "RESTful and GraphQL APIs",
      "Media management with cloud storage",
      "Content versioning and drafts",
      "Role-based access control",
      "API documentation with Swagger",
      "Webhook support for integrations"
    ],
    githubUrl: "https://github.com/example/cms"
  },
  {
    id: "fitness-tracker",
    title: "Fitness Tracker",
    category: "Mobile App",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80",
    description: "A comprehensive fitness tracking mobile app with workout logging, progress tracking, and personalized workout plans. Integrates with wearable devices.",
    technologies: ["Flutter", "Firebase", "HealthKit", "Google Fit"],
    features: [
      "Workout logging and history",
      "Custom workout plan creator",
      "Progress photos and measurements",
      "Integration with fitness wearables",
      "Nutrition tracking",
      "Social features and challenges"
    ],
    liveUrl: "https://example.com/fitness"
  },
  {
    id: "music-player",
    title: "Music Player",
    category: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80",
    description: "A modern music player interface design with focus on user experience and visual appeal. Features innovative controls and visualization.",
    technologies: ["Figma", "React", "Web Audio API", "Tailwind CSS"],
    features: [
      "Intuitive playback controls",
      "Audio visualization",
      "Playlist management",
      "Search and filter functionality",
      "Dark/light mode support",
      "Responsive design for all devices"
    ],
    liveUrl: "https://example.com/music",
    githubUrl: "https://github.com/example/music-player"
  }
];
