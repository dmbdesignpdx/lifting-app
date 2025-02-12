import { test, expect, mock } from "bun:test";
import { screen, render } from "@testing-library/react";

import { Form } from "./Form";


const fn = mock(() => undefined);

test("Form renders correctly", () => {
  render(<Form action={fn} />);

  const root = screen.getByTestId("form");

  expect(root).toBeInTheDocument();
});
