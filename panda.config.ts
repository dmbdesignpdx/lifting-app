import { defineConfig } from "@pandacss/dev";


export default defineConfig({
  preflight: true,
  include: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{ts,tsx}"],
  exclude: [],
  globalVars: {
    "--start": {
      syntax: "<color>",
      inherits: false,
      initialValue: "#a855f7",
    },
    "--end": {
      syntax: "<color>",
      inherits: false,
      initialValue: "#ec4899",
    },
  },
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
    body: {
      backgroundColor: "background",
      color: "background.text",
    },
  },
  conditions: {
    extend: {
      pointer: ["@media (min-width:769px)", "&:hover, &:focus-visible"],
      touch: ["@media (max-width:768)", "&:active"],
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
              value: "{colors.purple.500}",
              description: "The primary color for UI elements.",
            },
            action: {
              value: "{colors.purple.400}",
              description: "The primary color on hover or focus.",
            },
            accent: {
              value: "{colors.pink.500}",
            },
          },
          secondary: {
            DEFAULT: {
              value: "{colors.teal.500}",
              description: "The secondary color for UI elements.",
            },
            accent: {
              value: "{colors.blue.500}",
            },
          },
          surface: {
            DEFAULT: {
              value: {
                base: "{colors.zinc.50}",
                _osDark: "{colors.zinc.900}",
              },
              description: "A level above background, like a card or a modal.",
            },
            text: {
              value: {
                base: "{colors.neutral.900}",
                _osDark: "{colors.neutral.50}",
              },
              description: "The text color on a surface.",
            },
          },
          background: {
            DEFAULT: {
              value: {
                base: "{colors.zinc.100}",
                _osDark: "{colors.zinc.950}",
              },
              description: "A lowest level, like the body or a container.",
            },
            text: {
              value: {
                base: "{colors.neutral.950}",
                _osDark: "{colors.neutral.100}",
              },
              description: "The text color on a background.",
            },
          },
          border: {
            value: {
              base: "{colors.zinc.200}",
              _osDark: "{colors.zinc.700}",
            },
          },
        },
      },
    },
  },
  jsxFramework: "react",
  outdir: "styled-system",
});
