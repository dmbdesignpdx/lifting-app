import { cva } from "@/styled-system/css";


export const ButtonStyles = cva({
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
