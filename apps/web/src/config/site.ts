const domain = import.meta.env.PROD ? "https://phaicom.space" : "http://localhost:3000";

export const siteConfig = {
  name: "Reawpai Chunsoi",
  domain,
  title: "Reawpai Chunsoi | Senior Full Stack Developer | React, Next.js, Vue, Node.js",
  description:
    "Senior Full Stack Developer with 9+ years of experience building production web platforms with React, Next.js, Vue, Nuxt, and Node.js.",
  ogImage: `${domain}/apple-touch-icon.png`,
};
