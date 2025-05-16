import { css } from "@/styled-system/css";


export const root = css({
  contain: "content",
  paddingBlock: "{spacing.14} {spacing.6}",
});


export const heading = css({
  fontSize: "3xl",
  fontWeight: "bold",
  lineHeight: "1.1",
  textWrap: "balance",
  bg: "linear-gradient(90deg, {colors.secondary} 10%, {colors.secondary.accent} 90%)",
  bgClip: "text",
  color: "transparent",
});
