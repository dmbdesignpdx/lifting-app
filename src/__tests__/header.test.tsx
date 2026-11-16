import { describe, expect, test } from "bun:test";
import { render, screen } from "@testing-library/react";

import { Header } from "@/components/header";

describe("Header", () => {
  test("renders a banner landmark", () => {
    render(<Header heading="Lifting" />);

    expect(screen.getByRole("banner")).toBeInTheDocument();
  });

  test("renders the heading as a level 1 heading", () => {
    render(<Header heading="Olympic Lifting Calculator" />);

    const heading = screen.getByRole("heading", { level: 1, name: "Olympic Lifting Calculator" });

    expect(heading).toBeInTheDocument();
  });

  test("updates when the heading prop changes", () => {
    const { rerender } = render(<Header heading="First" />);

    rerender(<Header heading="Second" />);

    expect(screen.getByRole("heading", { level: 1, name: "Second" })).toBeInTheDocument();
    expect(screen.queryByText("First")).not.toBeInTheDocument();
  });
});
