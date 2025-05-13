import type { LinkProps as Props } from "./types.d";
import * as style from "./Link.styles";

export function Link({
  href,
  label,
  newTab = false,
}: Props) {

  return (
    <a
      className={style.root}
      href={href}
      target={newTab ? "_blank" : undefined}
      rel={newTab ? "noopener noreferrer" : undefined}
    >
      {label}
    </a>
  );
}
