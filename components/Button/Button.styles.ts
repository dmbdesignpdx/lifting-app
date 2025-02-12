import { cva } from "@/styled-system/css";


export const ButtonStyles = cva({
  base: {
    contain: "content",
    minBlockSize: "ui",
    fontWeight: "bold",
    borderRadius: 5,
    paddingInline: 4,
    paddingBlock: 2,
    marginBlockStart: 6,
  },
  variants: {
    variant: {
      solid: {
        bgColor: "primary",
        color: "white",
        _hover: {
          bgColor: "primary.action",
        },
      },
      text: {
        bgColor: "transparent",
        color: "primary",
        _hover: {
          color: "primary.action",
        },
      },
    },
  },
  defaultVariants: {
    variant: "solid",
  },
});
