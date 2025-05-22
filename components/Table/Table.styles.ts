import { css } from "@/styled-system/css";


export const root = css({
  contain: "content",
  inlineSize: "100%",
  textAlign: "left",
  tableLayout: "fixed",
  marginBlockStart: 12,

  "& caption": {
    textAlign: "left",
  },

  "& tr": {
    borderBottom: "1px solid {colors.border}",
  },

  "& th": {
    fontSize: "0.75rem",
    paddingBlock: 4,
  },

  "& th:not(:first-of-type)": {
    paddingInlineStart: 2,
  },

  "& th:not(:last-of-type)": {
    paddingInlineEnd: 2,
  },
});

export const cell = css({
  "& td": {
    paddingBlock: 4,
  },

  "& td:not(:first-of-type)": {
    paddingInlineStart: 2,
  },

  "& td:not(:last-of-type)": {
    paddingInlineEnd: 2,
  },

  "&:first-of-type": {
    fontWeight: "bold",
    color: "secondary",
  },
});
