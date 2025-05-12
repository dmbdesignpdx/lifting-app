import type { FooterProps as Props } from "./types.d";
import * as Style from "./Footer.styles";


export function Footer({}: Props) {

  return (
    <footer className={Style.ROOT}>
      <p>
        Made with 🦄🌈 by
        {" "}
        <a href="https://danielblake.dev">Daniel Blake</a> using
        {" "}
        <a href="https://nextjs.org">Next.js</a> and
        {" "}
        <a href="https://panda-css.com">Panda CSS</a>.
      </p>
      <p><small>Copyright 2025 Daniel Blake.</small></p>
    </footer>
  );
}
