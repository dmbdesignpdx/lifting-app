import type { MetadataRoute } from "next";

import { Url } from "@/constants";


export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "",
    },
    sitemap: `${Url.BASE.href}sitemap.xml`,
  };
}
