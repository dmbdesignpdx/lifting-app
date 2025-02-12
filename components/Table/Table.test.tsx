import { test, expect } from "bun:test";
import { screen, render } from "@testing-library/react";

import { Table } from "./Table";
import {
  INITIAL_DATA,
  Label,
  Name,
} from "@/constants";



test("Table renders correctly", () => {
  render(<Table state={INITIAL_DATA} />);

  const root = screen.getByText(Label.BREAKDOWN);
  const title = screen.getByText(Name.SNATCH);
  const labelTwo = screen.getByText(Label.GOAL);

  expect(root).toBeInTheDocument();
  expect(title).toBeInTheDocument();
  expect(labelTwo).toBeInTheDocument();
});
