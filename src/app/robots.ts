import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    // Production domain will be populated once domain is live
    sitemap: "https://webnexadev.com/sitemap.xml",
  };
}
