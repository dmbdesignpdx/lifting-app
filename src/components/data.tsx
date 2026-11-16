import { LIFTS, type LiftState } from "@/constants";
import { label } from "@/content";

export interface Props {
  state: LiftState;
}

export function Data({ state }: Props) {
  return (
    <article
      className="mbs-12"
      aria-labelledby="article-heading"
    >
      <h3
        id="article-heading"
        className="text-xl"
      >
        {label.currentHeader}
      </h3>
      <ul className="mbs-4">
        {LIFTS.map(lift => (
          <li
            key={lift}
            className="mbs-1"
          >
            {lift}
            {": "}
            <span className="font-black">{state[lift]}kg</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
