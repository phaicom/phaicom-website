const domain = import.meta.env.PROD ? "https://phaicom.space" : "http://localhost:3000";

export const siteConfig = {
  name: "Reawpai Chunsoi",
  domain,
  title: "Reawpai Chunsoi | Senior Full Stack Engineer | React, Vue & Golang",
  description: `Senior Full Stack Engineer specializing in React, Vue, Golang, and scalable distributed systems. I build high-performance web applications and architect backend services for modern businesses.`,
  ogImage: `${domain}/apple-touch-icon.png`,
};
