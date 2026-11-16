import { describe, expect, test } from "bun:test";
import { render, screen } from "@testing-library/react";

import { Footer } from "@/components/footer";
import { footer, footerLink } from "@/content";

describe("Footer", () => {
  test("renders a contentinfo landmark with the author blurb", () => {
    render(<Footer />);

    const landmark = screen.getByRole("contentinfo");

    expect(landmark).toBeInTheDocument();
    expect(landmark).toHaveTextContent(footer.author);
  });

  test.each(Object.values(footerLink))("links to $label", ({ label, url }) => {
    render(<Footer />);

    const link = screen.getByRole("link", { name: label });

    expect(link).toHaveAttribute("href", url);
  });

  test("renders the copyright and disclaimer", () => {
    render(<Footer />);

    expect(
      screen.getByText(new RegExp(`${footer.copyright} 2026 ${footer.disclaimer}`)),
    ).toBeInTheDocument();
  });
});
