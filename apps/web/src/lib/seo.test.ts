import { seo } from "./seo";

describe("seo", () => {
  it("returns the expected meta tags for social previews", () => {
    expect(
      seo({
        title: "Portfolio",
        description: "Senior frontend engineer",
        keywords: "react,typescript",
        image: "https://example.com/og.png",
      }),
    ).toEqual(
      expect.arrayContaining([
        { title: "Portfolio" },
        { name: "description", content: "Senior frontend engineer" },
        { name: "keywords", content: "react,typescript" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "og:image", content: "https://example.com/og.png" },
      ]),
    );
  });

  it("omits optional tags that have no value", () => {
    expect(seo({ title: "Portfolio" })).toEqual(
      expect.arrayContaining([
        { title: "Portfolio" },
        { name: "twitter:card", content: "summary" },
      ]),
    );
    expect(seo({ title: "Portfolio" })).not.toEqual(
      expect.arrayContaining([{ name: "description", content: undefined }]),
    );
  });
});
