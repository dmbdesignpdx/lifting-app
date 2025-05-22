import type { FormProps as Props } from "./types.d";
import * as style from "./Form.styles";
import { Input } from "@/components/Input";
import { Label, Lift } from "@/constants";
import { Button } from "@/components/Button";


export function Form({ action }: Props) {

  return (
    <form
      className={style.root}
      action=""
      aria-labelledby="form-heading"
    >
      <h3
        id="form-heading"
        className={style.heading}
      >
        {Label.FORM_HEADER}
      </h3>
      <Input label={Lift.SNATCH} />
      <Input label={Lift.CLEAN} />
      <Input label={Lift.BACK} />
      <Input label={Lift.FRONT} />
      <Button
        formAction={action}
        label={Label.CALCULATE}
        variant="gradient"
      />
    </form>
  );
}
