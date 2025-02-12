import type { ButtonProps as Props } from "./types.d";
import { ButtonStyles } from "./Button.styles";


export function Button({
  label,
  type,
  variant,
  onClick,
}: Props) {
  if (!label) return null;

  const className = ButtonStyles({ variant });

  return (
    <button
      className={className}
      type={type}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
