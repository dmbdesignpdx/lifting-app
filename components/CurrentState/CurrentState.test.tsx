import { test, expect } from "bun:test";
import { screen, render } from "@testing-library/react";

import { CurrentState } from "./CurrentState";
import { INITIAL_DATA, Label, LIFTS } from "@/constants";


test("CurrentState renders correctly", () => {
  render(<CurrentState state={INITIAL_DATA} />);

  const root = screen.getByRole("article");
  const heading = screen.getByRole("heading");
  const bullets = screen.getAllByRole("listitem");

  expect(root).toBeInTheDocument();
  expect(root).toHaveAccessibleName(Label.CURRENT_HEADER);
  expect(heading).toBeInTheDocument();
  expect(heading).toHaveTextContent(Label.CURRENT_HEADER);
  expect(bullets).toHaveLength(LIFTS.length);

  bullets.forEach((bullet, index) => {
    const lift = LIFTS[index];
    const text = `${lift}: ${INITIAL_DATA[lift]}kg`;

    expect(bullet).toHaveTextContent(text);
  });
});
