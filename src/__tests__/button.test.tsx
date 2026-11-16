import { describe, expect, mock, test } from "bun:test";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Button, buttonVariants } from "@/components/button";

describe("Button", () => {
  test("renders its label inside a button", () => {
    render(<Button label="Calculate" />);

    expect(screen.getByRole("button", { name: "Calculate" })).toBeInTheDocument();
  });

  test("calls onClick when clicked", async () => {
    const onClick = mock();

    render(
      <Button
        label="Go"
        onClick={onClick}
      />,
    );
    await userEvent.click(screen.getByRole("button", { name: "Go" }));

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  test("does not call onClick when disabled", async () => {
    const onClick = mock();

    render(
      <Button
        label="Go"
        onClick={onClick}
        disabled
      />,
    );
    const button = screen.getByRole("button", { name: "Go" });
    await userEvent.click(button);

    expect(button).toBeDisabled();
    expect(onClick).not.toHaveBeenCalled();
  });

  test("passes through native attributes like type", () => {
    render(
      <Button
        label="Submit"
        type="submit"
      />,
    );

    expect(screen.getByRole("button", { name: "Submit" })).toHaveAttribute("type", "submit");
  });

  test("uses the solid variant by default", () => {
    render(<Button label="Default" />);

    const button = screen.getByRole("button", { name: "Default" });

    expect(button).toHaveClass("bg-primary");
    expect(button).not.toHaveClass("bg-linear-to-r");
  });

  test.each([
    ["solid", "bg-primary"],
    ["gradient", "bg-linear-to-r"],
    ["text", "underline-offset-4"],
  ] as const)("applies the %s variant classes", (variant, expected) => {
    render(
      <Button
        label={variant}
        variant={variant}
      />,
    );

    expect(screen.getByRole("button", { name: variant })).toHaveClass(expected);
  });

  test("merges a custom className", () => {
    render(
      <Button
        label="Custom"
        className="my-custom"
      />,
    );

    const button = screen.getByRole("button", { name: "Custom" });

    expect(button).toHaveClass("my-custom");
    expect(button).toHaveClass("font-bold");
  });
});

describe("buttonVariants", () => {
  test("returns the variant's classes", () => {
    expect(buttonVariants({ variant: "text" })).toContain("underline-offset-4");
  });
});
