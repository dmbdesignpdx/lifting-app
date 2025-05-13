import { css } from "@/styled-system/css";


export const root = css({
  contain: "content",
  marginBlockStart: 12,

  "& h3": {
    fontSize: "1.2rem",
  },

  "& ul": {
    marginBlockStart: 4,
  },

  "& span": {
    fontWeight: "bold",
  },
});
