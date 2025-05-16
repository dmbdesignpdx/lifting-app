import type { FormProps as Props } from "./types.d";
import * as style from "./Form.styles";
import { Input } from "@/components/Input";
import { Label, Lift } from "@/constants";
import { Button } from "@/components/Button";


export function Form({ action }: Props) {

  return (
    <section>
      <h3 className={style.heading}>Enter your current PRs</h3>
      <form
        className={style.root}
        action={action}
        data-testid="form"
      >
        <Input label={Lift.Snatch.NAME} />
        <Input label={Lift.Clean.NAME} />
        <Input label={Lift.Back.NAME} />
        <Input label={Lift.Front.NAME} />
        <Button
          label={Label.CALCULATE}
          variant="gradient"
        />
      </form>
    </section>
  );
}
