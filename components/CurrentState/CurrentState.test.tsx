import { test, expect } from "bun:test";
import { screen, render } from "@testing-library/react";

import { CurrentState } from "./CurrentState";
import { INITIAL_DATA } from "@/constants";


test.skip("CurrentState renders correctly", () => {
  render(<CurrentState state={INITIAL_DATA} />);

  const root = screen.getByText("Current PRs:");

  expect(root).toBeInTheDocument();
});
