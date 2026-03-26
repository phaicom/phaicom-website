type SeoTag =
  | { title: string }
  | {
      name: string;
      content: string;
    };

function isSeoTag(tag: SeoTag | null): tag is SeoTag {
  return tag !== null;
}

export const seo = ({
  title,
  description,
  keywords,
  image,
}: {
  title: string;
  description?: string;
  image?: string;
  keywords?: string;
}): SeoTag[] => {
  return [
    { title },
    description ? { name: "description", content: description } : null,
    keywords ? { name: "keywords", content: keywords } : null,
    { name: "twitter:card", content: image ? "summary_large_image" : "summary" },
    { name: "twitter:title", content: title },
    description ? { name: "twitter:description", content: description } : null,
    { name: "twitter:creator", content: "@PiePaiPhi1" },
    { name: "twitter:site", content: "@PiePaiPhi1" },
    { name: "og:type", content: "website" },
    { name: "og:title", content: title },
    description ? { name: "og:description", content: description } : null,
    image ? { name: "twitter:image", content: image } : null,
    image ? { name: "og:image", content: image } : null,
  ].filter(isSeoTag);
};
