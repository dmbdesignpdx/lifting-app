import { defineConfig } from "@pandacss/dev";


export default defineConfig({
  preflight: true,
  include: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{ts,tsx}"],
  exclude: [],
  globalCss: {
    "[data-wrap]": {
      marginInline: "auto",
      paddingInline: 4,
      inlineSize: "100%",
      maxInlineSize: "42rem",
    },
    "[data-sr]": {
      position: "absolute",
      width: 0,
      height: 0,
      overflow: "hidden",
    },
  },
  theme: {
    extend: {
      tokens: {
        fonts: {
          mono: { value: "'Geist Mono', monospace" },
        },
        sizes: {
          ui: {
            value: "2.75rem",
            description: "The minimum size of a UI element.",
          },
        },
        fontSizes: {
          heading: { value: "4rem" },
          body: { value: "1rem" },
        },
      },
      semanticTokens: {
        colors: {
          primary: {
            DEFAULT: {
              value: {
                base: "{colors.purple.500}",
                _dark: "{colors.purple.50}",
              },
              description: "The primary color for UI elements.",
            },
            action: {
              value: {
                base: "{colors.purple.400}",
                _dark: "{colors.purple.100}",
              },
              description: "The primary color on hover or focus.",
            },
          },
          surface: {
            DEFAULT: {
              value: {
                base: "{colors.slate.50}",
                _dark: "{colors.slate.800}",
              },
              description: "A level above background, like a card or a modal.",
            },
            text: {
              value: {
                base: "{colors.neutral.800}",
                _dark: "{colors.neutral.50}",
              },
              description: "The text color on a surface.",
            },
          },
          background: {
            DEFAULT: {
              value: {
                base: "{colors.zinc.100}",
                _dark: "{colors.zinc.800}",
              },
              description: "A lowest level, like the body or a container.",
            },
            text: {
              value: { base: "{colors.neutral.900}", _dark: "" },
              description: "The text color on a background.",
            },
          },
        },
      },
    },
  },
  jsxFramework: "react",
  outdir: "styled-system",
});
