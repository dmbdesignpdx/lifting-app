import type { ButtonProps as Props } from "./types.d";
import * as style from "./Button.styles";


export function Button({
  label,
  type,
  variant,
  onClick,
  formAction,
  disabled,
}: Props) {
  if (!label) return null;

  const className = style.root({ variant });

  return (
    <button
      className={className}
      type={type}
      onClick={onClick}
      formAction={formAction}
      disabled={disabled || undefined}
    >
      {label}
    </button>
  );
}
