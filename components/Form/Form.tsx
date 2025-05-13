import type { FormProps as Props } from "./types.d";
import * as style from "./Form.styles";
import { Input } from "@/components/Input";
import { Label, Name } from "@/constants";
import { Button } from "@/components/Button";


export function Form({ action }: Props) {

  return (
    <section>
      <h3>Enter your current PRs</h3>
      <form
        className={style.root}
        action={action}
        data-testid="form"
      >
        <Input label={Name.SNATCH} />
        <Input label={Name.CLEAN_JERK} />
        <Input label={Name.BACK_SQUAT} />
        <Button label={Label.CALCULATE} />
      </form>
    </section>
  );
}
