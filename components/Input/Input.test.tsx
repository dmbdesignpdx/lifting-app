import { test, expect } from "bun:test";
import { screen, render } from "@testing-library/react";

import { Input } from "./Input";


test("Input renders correctly", () => {
  render(
    <Input
      label="hello"
      value={0}
      onChange={() => undefined}
    />,
  );

  const root = screen.getByText("hello");

  expect(root).toBeInTheDocument();
});
