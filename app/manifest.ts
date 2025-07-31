import type { MetadataRoute } from "next";
import { Meta } from "@/constants";


export default function manifest(): MetadataRoute.Manifest {
  return {
    name: Meta.NAME,
    short_name: Meta.SHORT_NAME,
    description: Meta.DESCRIPTION,
    start_url: Meta.BASE,
    display: "standalone",
    background_color: Meta.BKG_COLOR,
    theme_color: Meta.THEME_COLOR,
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
