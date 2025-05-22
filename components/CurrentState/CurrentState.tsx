import type { CurrentStateProps as Props } from "./types.d";
import * as style from "./CurrentState.styles";
import { LIFTS, Label } from "@/constants";


export function CurrentState({ state }: Props) {

  return (
    <article
      className={style.root}
      aria-labelledby="article-heading"
    >
      <h3 id="article-heading">{Label.CURRENT_HEADER}</h3>
      <ul>

        {LIFTS.map(lift => (
          <li key={lift}>
            {lift}
            {": "}
            <span>{state[lift]}kg</span>
          </li>
        ))}

      </ul>
    </article>
  );
}
