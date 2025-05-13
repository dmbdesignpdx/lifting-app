import { test, expect } from "bun:test";
import { screen, render } from "@testing-library/react";

import { CurrentState } from "./CurrentState";
import { INITIAL_DATA } from "@/constants";


test("CurrentState renders correctly", async () => {
  render(<CurrentState state={INITIAL_DATA} />);

  const root = await screen.findByRole("article");
  const heading = await screen.findByRole("heading");

  expect(root).toHaveAccessibleName("Current PRs");
  expect(heading).toHaveTextContent("Current PRs");
});
