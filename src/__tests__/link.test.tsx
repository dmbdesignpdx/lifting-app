import { describe, expect, test } from "bun:test";
import { render, screen } from "@testing-library/react";

import { Link } from "@/components/link";

describe("Link", () => {
  test("renders its default content and state", () => {
    render(
      <Link
        href="https://example.com"
        label="Example"
      />,
    );

    const link = screen.getByRole("link", { name: "Example" });

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "https://example.com");
  });

  test("opens in a new tab without leaking the opener", () => {
    render(
      <Link
        href="https://example.com"
        label="Example"
        newTab
      />,
    );

    const link = screen.getByRole("link", { name: "Example" });

    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer nofollow");
  });
});
