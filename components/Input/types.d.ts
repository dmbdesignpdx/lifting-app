import type { ChangeEventHandler } from "react";


export interface InputProps {
  children?: never;
  label: string;
  max?: number;
  value?: number;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  name?: string;
}
