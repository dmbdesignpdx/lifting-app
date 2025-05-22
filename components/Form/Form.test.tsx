import { test, expect, mock } from "bun:test";
import { screen, render } from "@testing-library/react";

import { Form } from "./Form";
import { Label, Lift } from "@/constants";


const fn = mock(() => undefined);

test("Form renders correctly", () => {
  render(<Form action={fn} />);

  const root = screen.getByRole("form");

  expect(root).toBeInTheDocument();
  expect(root).toHaveAccessibleName(Label.FORM_HEADER);
});
