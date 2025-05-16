import type { HeaderProps as Props } from "./types.d";
import * as style from "./Header.styles";


export function Header({ heading }: Props) {

  return (
    <header
      className={style.root}
      data-wrap
    >
      <h1 className={style.heading}>{heading}</h1>
    </header>
  );
}
