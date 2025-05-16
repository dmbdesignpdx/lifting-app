import type { TableProps as Props } from "./types.d";
import * as style from "./Table.styles";
import { Label, PERCENTAGES, Lift } from "@/constants";
import type { LiftData } from "@/types/main";
import { getNewMax, getPercentage } from "@/lib";


const SnatchName = Lift.Snatch.NAME;
const CleanName = Lift.Clean.NAME;
const BackName = Lift.Back.NAME;
const FrontName = Lift.Front.NAME;


export function Table({ state }: Props) {
  function getValues(): LiftData {
    const snatchMax = getNewMax(state[SnatchName]);
    const cleanJerkMax = getNewMax(state[CleanName]);
    const backSquatMax = getNewMax(state[BackName]);
    const frontSquatMax = getNewMax(state[FrontName]);

    return PERCENTAGES.map(item => {
      return {
        label: item === 100 ? Label.GOAL :`${item}%`,
        lift: {
          [SnatchName]: getPercentage(snatchMax, item),
          [CleanName]: getPercentage(cleanJerkMax, item),
          [BackName]: getPercentage(backSquatMax, item),
          [FrontName]: getPercentage(frontSquatMax, item),
        },
      };
    });
  }

  return (
    <article
      className={style.container}
      aria-labelledby="table-heading"
    >
      <h3 id="table-heading">{Label.AMOUNTS}</h3>
      <table
        className={style.root}
        aria-live="assertive"
        aria-label="Table"
      >
        <thead aria-label={Label.TABLE_HEADER}>
          <tr>
            <th>{Label.BREAKDOWN}</th>
            <th>{Lift.Snatch.ICON}</th>
            <th>{Lift.Clean.ICON}</th>
            <th>{Lift.Back.ICON}</th>
            <th>{Lift.Front.ICON}</th>
          </tr>
        </thead>
        <tbody aria-label={Label.TABLE_BODY}>
          {getValues().map(i => (
            <tr
              key={i.label}
              className={style.cell}
            >
              <td>{i.label}</td>
              <td>{i.lift[SnatchName]}kg</td>
              <td>{i.lift[CleanName]}kg</td>
              <td>{i.lift[BackName]}kg</td>
              <td>{i.lift[FrontName]}kg</td>
            </tr>
          ))}
        </tbody>
      </table>
    </article>
  );
}
