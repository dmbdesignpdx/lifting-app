import { css } from "@/styled-system/css";


export const InputStyles = css({
  contain: "content",
  minBlockSize: "ui",
  border: "2px solid {colors.background}",
  borderRadius: 5,
  paddingInline: 2,
  paddingBlock: 2,
});

export const LabelStyles = css({
  contain: "content",
  display: "flex",
  flexFlow: "column wrap",
  marginBlockStart: 3,
});
