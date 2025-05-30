export interface ButtonProps {
  label: string;
  type?: HTMLButtonElement["type"];
  children?: never;
  variant?: "solid" | "text" | "gradient";
  onClick?: () => void;
  formAction?: (payload: FormData) => void;
  disabled?: boolean;
}
