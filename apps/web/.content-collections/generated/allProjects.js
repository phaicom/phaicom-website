export default [
  {
    title: "BackOffice Clone - Enterprise Admin Dashboard",
    category: "Full Stack",
    techStack: ["React", "TypeScript", "Node.js", "PostgreSQL", "Docker"],
    featured: true,
    _meta: {
      filePath: "backoffice-clone.md",
      fileName: "backoffice-clone.md",
      directory: ".",
      extension: "md",
      path: "backoffice-clone",
    },
    slug: "backoffice-clone",
    excerpt: "",
    description: undefined,
    headerImage: "/images/projects/backoffice-1.jpg",
    content:
      "# BackOffice Clone - Enterprise Admin Dashboard\n\nA comprehensive admin dashboard solution built with modern web technologies, designed for enterprise-scale applications with complex data management needs.\n\n## Project Overview\n\nThis project demonstrates a production-ready admin interface that handles complex business operations including user management, analytics dashboards, and real-time data visualization.\n\n![BackOffice Dashboard Overview](/images/projects/backoffice-1.jpg)\n\n## Key Features\n\n### 1. Dashboard Analytics\n\nThe main dashboard provides real-time analytics with interactive charts and metrics. Users can monitor key performance indicators at a glance.\n\n![Analytics Dashboard](/images/projects/backoffice-2.jpg)\n\n### 2. User Management System\n\nA complete user management module with role-based access control (RBAC), allowing administrators to:\n\n- Create, edit, and delete user accounts\n- Assign roles and permissions\n- Track user activity and audit logs\n- Manage team hierarchies\n\n![User Management Interface](/images/projects/backoffice-3.jpg)\n\n### 3. Data Tables & Filtering\n\nAdvanced data tables with:\n\n- Server-side pagination\n- Multi-column sorting\n- Complex filtering capabilities\n- Export functionality (CSV, Excel)\n- Bulk actions support\n\n![Data Tables](/images/projects/backoffice-4.jpg)\n\n## Technical Architecture\n\n### Frontend Stack\n\n- **React 18** with TypeScript for type safety\n- **TanStack Query** for server state management\n- **Tailwind CSS** for styling\n- **Recharts** for data visualization\n\n### Backend Stack\n\n- **Node.js** with Express/Fastify\n- **PostgreSQL** for relational data\n- **Redis** for caching and sessions\n- **Docker** for containerization\n\n## Performance Optimizations\n\n1. **Code Splitting**: Route-based lazy loading reduces initial bundle size\n2. **Virtual Scrolling**: Handles large datasets efficiently\n3. **Query Optimization**: Debounced search and cached responses\n4. **Image Optimization**: Responsive images with lazy loading\n\n## Lessons Learned\n\nBuilding this admin dashboard taught me valuable lessons about:\n\n- Designing scalable component architectures\n- Implementing efficient data fetching strategies\n- Creating accessible and responsive interfaces\n- Managing complex application state\n\n## Conclusion\n\nThis project showcases modern frontend development practices and demonstrates the ability to build enterprise-grade applications with attention to performance, accessibility, and user experience.",
  },
];
