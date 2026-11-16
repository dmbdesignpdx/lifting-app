import { PATH } from "@/constants";
import { getHexColor } from "@/utils/colors";

export const metaData = {
  title: "Olympic Lifting Calculator",
  shortName: "Lifting Calculator",
  description: "A simple PR and exertion percentage calculator for Olympic lifting.",
  themeColor: getHexColor("purple", 500),
  bkgColor: getHexColor("zinc", 50),
  canonical: PATH.site.origin,
  base: PATH.author.pathname,
  author: {
    name: "Daniel Blake",
    email: "daniel@danielblake.dev",
    website: PATH.author.href,
  },
};
