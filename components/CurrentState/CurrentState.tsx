import type { CurrentStateProps as Props } from "./types.d";
import { CurrentStateStyles } from "./CurrentState.styles";
import { Name } from "@/constants";


export function CurrentState({ state }: Props) {

  return (
    <article className={CurrentStateStyles}>
      <h3>Current PRs</h3>
      <ul>
        <li>{Name.SNATCH}: {state.Snatch}kg</li>
        <li>{Name.CLEAN_JERK}: {state[Name.CLEAN_JERK]}kg</li>
        <li>{Name.BACK_SQUAT}: {state[Name.BACK_SQUAT]}kg</li>
      </ul>
    </article>
  );
}
