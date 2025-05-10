import { css } from "@/styled-system/css";


export const table = css({
  contain: "content",
  inlineSize: "100%",
  textAlign: "left",
  tableLayout: "fixed",

  "& th": {
    fontSize: ".75rem",
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
    color: "primary",
    fontWeight: "bold",
  },
});
