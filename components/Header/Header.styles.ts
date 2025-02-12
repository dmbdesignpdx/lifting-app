import { cva, css } from "@/styled-system/css";


export const HeaderStyles = cva({
  base: {
    contain: "content",
    marginInline: 6,
    paddingBlock: "{spacing.12} {spacing.6}",
  },
  variants: {},
  defaultVariants: {},
});


export const headingStyles = css({
  fontSize: "2xl",
  fontWeight: "bold",
  lineHeight: "1.1",
  textWrap: "balance",
  textBoxTrim: "trim-both",
  textBoxEdge: "ex alphabetic",
});
