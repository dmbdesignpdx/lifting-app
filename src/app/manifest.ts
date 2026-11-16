import type { MetadataRoute } from "next";

import { metaData } from "@/content";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: metaData.title,
    short_name: metaData.shortName,
    description: metaData.description,
    start_url: metaData.base,
    display: "standalone",
    background_color: metaData.bkgColor,
    theme_color: metaData.themeColor,
    icons: [
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
