import { test, expect } from "bun:test";
import { screen, render } from "@testing-library/react";

import { Header } from "./Header";
import { Label } from "@/constants";


test("Header renders correctly", () => {
  render(<Header heading={Label.HEADING} />);

  const root = screen.getByText(Label.HEADING);

  expect(root).toBeInTheDocument();
});
