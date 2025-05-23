import type { TableProps as Props } from "./types";
import type { LiftData } from "@/types/main";
import * as style from "./Table.styles";
import {
  Label,
  PERCENTAGES,
  Lift,
  TABLE_HEADERS,
} from "@/constants";
import { getNewMax, getPercentage } from "@/lib";


const {
  SNATCH,
  CLEAN,
  BACK,
  FRONT,
} = Lift;


export function Table({ state }: Props) {
  function getValues(): LiftData {
    const snatchMax = getNewMax(state[SNATCH]);
    const cleanJerkMax = getNewMax(state[CLEAN]);
    const backSquatMax = getNewMax(state[BACK]);
    const frontSquatMax = getNewMax(state[FRONT]);

    return PERCENTAGES.map(item => {
      return {
        label: item === 100 ? Label.GOAL :`${item}%`,
        lift: {
          [SNATCH]: getPercentage(snatchMax, item),
          [CLEAN]: getPercentage(cleanJerkMax, item),
          [BACK]: getPercentage(backSquatMax, item),
          [FRONT]: getPercentage(frontSquatMax, item),
        },
      };
    });
  }

  return (
    <table
      className={style.root}
      aria-live="assertive"
      aria-label="Table"
    >
      <caption>{Label.AMOUNTS}</caption>
      <thead
        aria-label={Label.TABLE_HEADER}
        className={style.header}
      >
        <tr>

          {TABLE_HEADERS.map(item => (
            <th
              key={item}
              scope="col"
            >
              {item}
            </th>
          ))}

        </tr>
      </thead>
      <tbody aria-label={Label.TABLE_BODY}>

        {getValues().map(i => (
          <tr
            key={i.label}
            className={style.cell}
          >
            <td>{i.label}</td>
            <td>{i.lift[SNATCH]}kg</td>
            <td>{i.lift[CLEAN]}kg</td>
            <td>{i.lift[BACK]}kg</td>
            <td>{i.lift[FRONT]}kg</td>
          </tr>
        ))}

      </tbody>
    </table>
  );
}
