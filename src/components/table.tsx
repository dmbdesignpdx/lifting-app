import { LIFTS, type LiftState, PERCENTAGES } from "@/constants";
import { label, tableHeaders } from "@/content";
import { getNewMax, getPercentage } from "@/lib";
import type { LiftData } from "@/types/main";

export interface Props {
  state: LiftState;
}

export function Table({ state }: Props) {
  function getValues(): LiftData {
    const maxes = Object.fromEntries(
      LIFTS.map(name => [name, getNewMax(state[name])]),
    ) as LiftState;

    return PERCENTAGES.map(item => ({
      label: item === 100 ? label.goal : `${item}%`,
      lift: Object.fromEntries(
        LIFTS.map(name => [name, getPercentage(maxes[name], item)]),
      ) as LiftState,
    }));
  }

  return (
    <table
      className="inline-full text-left table-fixed mbs-12 border-separate border-spacing-0"
      aria-live="assertive"
      aria-label="Table"
    >
      <caption className="text-left mbe-2">{label.amounts}</caption>
      <thead
        aria-label={label.tableHeader}
        className="sticky inset-bs-0 inset-s-0 bg-background"
      >
        <tr>
          {tableHeaders.map(item => (
            <th
              key={item}
              scope="col"
              className="text-xs py-4 border-b-border border-b-2"
            >
              {item}
            </th>
          ))}
        </tr>
      </thead>
      <tbody aria-label={label.tableBody}>
        {getValues().map(i => (
          <tr
            key={i.label}
            className="first-of-type:font-bold first-of-type:text-secondary"
          >
            <td className="py-4 border-border border-b not-first-of-type:ps-2 ">{i.label}</td>
            {LIFTS.map(name => (
              <td
                key={name}
                className="border-border border-b not-last-of-type:pe-2"
              >
                {i.lift[name]}kg
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
