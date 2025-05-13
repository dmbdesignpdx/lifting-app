import type { CurrentStateProps as Props } from "./types.d";
import * as style from "./CurrentState.styles";
import { Name } from "@/constants";


export function CurrentState({ state }: Props) {

  return (
    <article
      className={style.root}
      aria-labelledby="article"
    >
      <h3 id="article">Current PRs</h3>
      <ul>
        <li>{Name.SNATCH}: <span>{state.Snatch}kg</span></li>
        <li>{Name.CLEAN_JERK}: <span>{state[Name.CLEAN_JERK]}kg</span></li>
        <li>{Name.BACK_SQUAT}: <span>{state[Name.BACK_SQUAT]}kg</span></li>
      </ul>
    </article>
  );
}
