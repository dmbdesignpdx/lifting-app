import type { CurrentStateProps as Props } from "./types.d";
import * as style from "./CurrentState.styles";
import { Lift } from "@/constants";

const lifts = Object.values(Lift);


export function CurrentState({ state }: Props) {

  return (
    <article
      className={style.root}
      aria-labelledby="article"
    >
      <h3 id="article">Current PRs</h3>
      <ul>

        {lifts.map(lift => (
          <li key={lift.NAME}>
            {lift.NAME} ({lift.ICON}):
            {" "}
            <span>{state[lift.NAME]}kg</span>
          </li>
        ))}

      </ul>
    </article>
  );
}
