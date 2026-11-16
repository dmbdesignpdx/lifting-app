import type { MetadataRoute } from "next";

import { PATH } from "@/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: PATH.site.href,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
