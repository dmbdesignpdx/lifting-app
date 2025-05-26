import { expect, test, describe } from "bun:test";
import { render, screen } from "@testing-library/react";
import { Input } from "@/components/Input/Input";


const label = "Learn More";
const role = "spinbutton";


describe("Input Component", () => {
  test("does not render without a label", () => {
    render(<Input label="" />);

    expect(screen.queryByRole(role)).not.toBeInTheDocument();
  });

  test("renders its default content correctly", () => {
    render(<Input label={label} />);

    const root = screen.getByRole(role);

    expect(root).toBeInTheDocument();
    expect(root).toHaveAccessibleName(label);
    expect(root).toHaveAttribute("type", "number");
    expect(root).toHaveAttribute("name", label);
    expect(root).toHaveAttribute("id", label);
    expect(root).toHaveAttribute("placeholder", "0");
    expect(root).toHaveAttribute("max", "300");
    expect(root).toHaveAttribute("min", "0");
    expect(root).toHaveAttribute("maxLength", "3");
  });
});
