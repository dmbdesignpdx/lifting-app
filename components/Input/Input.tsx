import type { InputProps as Props } from "./types.d";
import * as style from "./Input.styles";


export function Input({ label }: Props) {
  if (!label) return null;

  return (
    <label className={style.label}>
      <span>{label}</span>
      <input
        className={style.root}
        id={label}
        type="number"
        name={label}
        placeholder="0"
        max={300}
        min={0}
        maxLength={3}
      />
    </label>
  );
}
