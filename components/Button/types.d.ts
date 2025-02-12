export type ButtonProps = {
  label: string;
  type?: HTMLButtonElement["type"];
  children?: never;
  variant?: "solid" | "text";
  onClick?: () => void;
};
