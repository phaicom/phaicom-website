const domain = import.meta.env.PROD ? "https://phaicom.space" : "http://localhost:3000";

export const siteConfig = {
  name: "Reawpai Chunsoi",
  domain,
  title: "Reawpai Chunsoi | Senior Full-Stack Developer",
  description:
    "Senior full-stack developer with 9+ years building production web platforms across frontend architecture, backend services, APIs, data, and automated delivery.",
  ogImage: `${domain}/apple-touch-icon.png`,
};
