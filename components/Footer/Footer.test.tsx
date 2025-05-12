import {
  describe,
  test,
  expect,
} from "bun:test";
import { screen, render } from "@testing-library/react";

import { Footer } from "./Footer";


describe("Footer Component", () => {
  test("renders its content correctly", () => {
    render(<Footer />);

    const root = screen.getByText("Footer Component");

    expect(root).toBeInTheDocument();
  });
});
