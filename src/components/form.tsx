import type { LiftState } from "@/constants";

export interface Props {
  action: (payload: FormData) => void;
  state: LiftState;
}

import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { label } from "@/content";

export function Form({ action, state }: Props) {
  const inputs = Object.entries(state);

  return (
    <form
      className="mbs-2"
      action={action}
      aria-labelledby="form-heading"
    >
      <h3
        id="form-heading"
        className="mbs-2"
      >
        {label.formHeader}
      </h3>
      {inputs.map(([key, value]) => (
        <Input
          key={key}
          label={key}
          defaultValue={value}
        />
      ))}
      <Button
        label={label.calculate}
        variant="gradient"
        type="submit"
      />
    </form>
  );
}
