import type { InputProps as Props } from "./types.d";
import { InputStyles, LabelStyles } from "./Input.styles";

export function Input({
  label,
  max,
  value,
  onChange,
}: Props) {
  if (!label) return null;
  // const className = InputRecipe;

  return (
    <label className={LabelStyles}>
      <span>{label}</span>
      <input
        className={InputStyles}
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
