import type { FooterProps as Props } from "./types.d";
import * as style from "./Footer.styles";
import { Link } from "@/components/Link";
import { Url } from "@/constants";


export function Footer({}: Props) {

  return (
    <footer className={style.root}>
      <div data-wrap>
        <p>
          Made with 🦄🌈 by
          {" "}
          <Link
            href={Url.AUTHOR.origin}
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
      </div>
    </footer>
  );
}
