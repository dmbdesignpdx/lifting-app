import type { MetadataRoute } from "next";

import { Url } from "@/constants";


export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: Url.BASE.origin,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
  ];
}
