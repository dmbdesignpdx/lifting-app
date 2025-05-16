import { cva } from "@/styled-system/css";


export const root = cva({
  base: {
    contain: "content",
    minBlockSize: "ui",
    fontWeight: "bold",
    borderRadius: 5,
    paddingBlock: 2,
    marginBlockStart: 6,
  },
  variants: {
    variant: {
      solid: {
        paddingInline: 4,
        bgColor: "primary",
        color: "white",
        _pointer: {
          bgColor: "primary.action",
        },
        _touch: {
          transform: "scale(0.95)",
        },
      },
      gradient: {
        "--start": "colors.primary",
        "--end": "colors.primary.accent",
        paddingInline: 4,
        bg: "linear-gradient(90deg, var(--start) 10%, var(--end) 100%)",
        color: "white",
        _pointer: {
          "--end": "var(--start)",
          transition: "--end 0.4s ease-out",
        },
        _touch: {
          transform: "scale(0.95)",
        },
      },
      text: {
        color: "primary",
        _pointer: {
          color: "primary.action",
        },
        _touch: {
          transform: "scale(0.95)",
        },
      },
    },
  },
  defaultVariants: {
    variant: "solid",
  },
});
