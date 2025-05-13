import type { FooterProps as Props } from "./types.d";
import * as style from "./Footer.styles";
import { Link } from "@/components/Link";

export function Footer({}: Props) {

  return (
    <footer className={style.root}>
      <p>
        Made with 🦄🌈 by
        {" "}
        <Link
          href="https://danielblake.dev"
          label="Daniel Blake"
          newTab
        />
        {" "}
        using
        {" "}
        <Link
          href="https://nextjs.org"
          label="Next.js"
          newTab
        />
        {" "}
        and
        {" "}
        <Link
          href="https://panda-css.com"
          label="Panda CSS"
          newTab
        />
        .
      </p>
      <p><small>Copyright 2025 Daniel Blake.</small></p>
    </footer>
  );
}
