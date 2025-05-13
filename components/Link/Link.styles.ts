import { css } from "@/styled-system/css";


export const root = css({
  contain: "content",
  color: "primary",
  fontWeight: "bold",
  _pointer: {
    textDecoration: "underline",
  },
  _touch: {
    transform: "scale(0.95)",
  },
});
