import type { NextConfig } from "next";


export default {
  compiler: {
    reactRemoveProperties: {
      properties: ["^data-testid$"],
    },
  },
  experimental: {
    inlineCss: true,
  },
} as NextConfig;
