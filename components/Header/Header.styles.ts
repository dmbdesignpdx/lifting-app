import { css } from "@/styled-system/css";


export const root = css({
  contain: "content",
  paddingBlock: "{spacing.12} {spacing.6}",
});


export const heading = css({
  fontSize: "2xl",
  fontWeight: "bold",
  lineHeight: "1.1",
  textWrap: "balance",
  textBoxTrim: "trim-both",
  textBoxEdge: "ex alphabetic",
});
