import {
  describe,
  test,
  expect,
} from "bun:test";
import { screen, render } from "@testing-library/react";

import { Footer } from "./Footer";


describe("Footer Component", () => {
  test("renders its content correctly", async () => {
    render(<Footer />);

    const root = await screen.findByRole("contentinfo");

    expect(root).toBeInTheDocument();
  });
});
