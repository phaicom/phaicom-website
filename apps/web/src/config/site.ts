const domain = import.meta.env.PROD ? "https://phaicom.space" : "http://localhost:3000";

export const siteConfig = {
  name: "Reawpai Chunsoi",
  domain,
  title: "Reawpai Chunsoi | Senior Full-Stack Web Developer | React, Vue, Node.js, Golang",
  description:
    "Senior Full-Stack Web Developer focused on scalable product delivery across React, Vue, Node.js, and Golang. Building high-performance web platforms, APIs, and maintainable systems for real business impact.",
  ogImage: `${domain}/apple-touch-icon.png`,
};
