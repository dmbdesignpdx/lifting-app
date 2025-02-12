import type { ChangeEventHandler } from "react";


export type InputProps = {
  children?: never;
  label: string;
  max?: number;
  value?: number;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  name?: string;
};
