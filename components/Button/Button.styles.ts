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
