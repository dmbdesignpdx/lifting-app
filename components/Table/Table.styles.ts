import { css } from "@/styled-system/css";


export const root = css({
  contain: "content",
  inlineSize: "100%",
  textAlign: "left",
  tableLayout: "fixed",
  marginBlockStart: 12,
  borderCollapse: "separate",
  borderSpacing: 0,

  "& caption": {
    textAlign: "left",
    marginBottom: 2,
  },

  "& th": {
    fontSize: "0.75rem",
    paddingBlock: 4,
    borderBottom: "2px solid {colors.border}",
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
    borderBottom: "1px solid {colors.border}",
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

export const header = css({
  position: "sticky",
  insetBlockStart: 0,
  insetInlineStart: 0,
  backgroundColor: "background",
});
