import { css } from "@/styled-system/css";


export const table = css({
  contain: "content",
  inlineSize: "100%",
  textAlign: "left",
  tableLayout: "fixed",

  "& tr": {
    borderBottom: "1px solid {colors.border}",
  },

  "& th": {
    fontSize: ".75rem",
    paddingBlock: 4,
  },
});

export const containerStyles = css({
  marginBlockStart: 12,
});

export const cellStyles = css({
  "& td": {
    paddingBlock: 4,
  },
  "&:first-of-type": {
    fontWeight: "bold",
    color: "teal.500",
  },
});
