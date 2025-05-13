import { test, expect } from "bun:test";
import { screen, render } from "@testing-library/react";

import { Link } from "./Link";


test("Link renders correctly", async () => {
  render(
    <Link
      label="Link Component"
      href="/"
    />,
  );

  const root = await screen.findByRole("link");

  expect(root).toHaveTextContent("Link Component");
});
