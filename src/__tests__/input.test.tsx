import { describe, expect, test } from "bun:test";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Input } from "@/components/input";

describe("Input", () => {
  test("renders a number input labelled by its label", () => {
    render(
      <Input
        label="Snatch"
        defaultValue={0}
      />,
    );

    const input = screen.getByLabelText("Snatch");

    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("type", "number");
  });

  test("uses the label as the name and id", () => {
    render(
      <Input
        label="Back Squat"
        defaultValue={0}
      />,
    );

    const input = screen.getByLabelText("Back Squat");

    expect(input).toHaveAttribute("name", "Back Squat");
    expect(input).toHaveAttribute("id", "Back Squat");
  });

  test("shows the default value", () => {
    render(
      <Input
        label="Snatch"
        defaultValue={80}
      />,
    );

    expect(screen.getByLabelText("Snatch")).toHaveValue(80);
  });

  test("constrains values between 0 and 300", () => {
    render(
      <Input
        label="Snatch"
        defaultValue={0}
      />,
    );

    const input = screen.getByLabelText("Snatch");

    expect(input).toHaveAttribute("min", "0");
    expect(input).toHaveAttribute("max", "300");
  });

  test("accepts typed input", async () => {
    render(
      <Input
        label="Snatch"
        defaultValue={0}
      />,
    );

    const input = screen.getByLabelText("Snatch");

    await userEvent.clear(input);
    await userEvent.type(input, "120");

    expect(input).toHaveValue(120);
  });

  test("renders nothing without a label", () => {
    const { container } = render(
      <Input
        label=""
        defaultValue={0}
      />,
    );

    expect(container).toBeEmptyDOMElement();
  });
});
