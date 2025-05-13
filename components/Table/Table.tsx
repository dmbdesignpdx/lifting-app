import type { TableProps as Props } from "./types.d";
import * as style from "./Table.styles";
import { Label, Name, PERCENTAGES } from "@/constants";
import type { LiftData } from "@/types/main";
import { getNewMax, getPercentage } from "@/lib";


export function Table({ state }: Props) {
  function getValues(): LiftData {
    const snatchMax = getNewMax(state[Name.SNATCH]);
    const cleanJerkMax = getNewMax(state[Name.CLEAN_JERK]);
    const backSquatMax = getNewMax(state[Name.BACK_SQUAT]);

    return PERCENTAGES.map(item => {
      return {
        label: item === 100 ? Label.GOAL :`${item}%`,
        lift: {
          [Name.SNATCH]: getPercentage(snatchMax, item),
          [Name.CLEAN_JERK]: getPercentage(cleanJerkMax, item),
          [Name.BACK_SQUAT]: getPercentage(backSquatMax, item),
        },
      };
    });
  }

  return (
    <article className={style.container}>
      <h3>Amounts</h3>
      <table
        className={style.root}
        aria-live="assertive"
      >
        <thead>
          <tr>
            <th>{Label.BREAKDOWN}</th>
            <th>{Name.SNATCH}</th>
            <th>{Name.CLEAN_JERK}</th>
            <th>{Name.BACK_SQUAT}</th>
          </tr>
        </thead>
        <tbody>
          {getValues().map(i => (
            <tr
              key={i.label}
              className={style.cell}
            >
              <td>{i.label}</td>
              <td>{i.lift[Name.SNATCH]}kg</td>
              <td>{i.lift[Name.CLEAN_JERK]}kg</td>
              <td>{i.lift[Name.BACK_SQUAT]}kg</td>
            </tr>
          ))}
        </tbody>
      </table>
    </article>
  );
}
