import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    inlineCss: true,
    agentFeedback: false,
    useTypeScriptCli: true,
    globalNotFound: true,
    turbopackRustReactCompiler: true,
  },
  cacheComponents: true,
  partialPrefetching: false,
  reactCompiler: true,
  trailingSlash: false,
  turbopack: {
    root: process.cwd(),
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
