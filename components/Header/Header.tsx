import type { HeaderProps as Props } from "./types.d";
import { HeaderStyles, headingStyles } from "./Header.styles";


export function Header({ heading }: Props) {
  const className = HeaderStyles();

  return (
    <header className={className}>
      <h1 className={headingStyles}>{heading}</h1>
    </header>
  );
}
