import { css } from "@/styled-system/css";


export const root = css({
  contain: "content",
  minBlockSize: "ui",
  border: "2px solid {colors.background}",
  borderRadius: 5,
  paddingInline: 2,
  paddingBlock: 2,
});

export const label = css({
  contain: "content",
  display: "flex",
  flexFlow: "column wrap",
  marginBlockStart: 3,
});
