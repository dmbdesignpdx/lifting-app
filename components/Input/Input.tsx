import type { InputProps as Props } from "./types.d";
import * as style from "./Input.styles";

export function Input({
  label,
  max,
  value,
  onChange,
}: Props) {
  if (!label) return null;

  return (
    <label className={style.label}>
      <span>{label}</span>
      <input
        className={style.root}
        id={label}
        type="number"
        name={label}
        max={max}
        value={value}
        onChange={onChange}
      />
    </label>
  );
}
