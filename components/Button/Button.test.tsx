import { test, expect, mock } from "bun:test";
import { screen, render } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";

import { type ButtonProps, Button } from "./index";
import { describe } from "node:test";


const props: ButtonProps = {
  label: "Learn More",
};


describe("Button", () => {
  test("renders correctly", async () => {
    render(<Button {...props} />);

    const root = await screen.findByRole("button");

    expect(root).toHaveTextContent(props.label);
    expect(root).not.toHaveAttribute("type");
  });

  test("will not render without label", () => {
    render(<Button label="" />);

    const root = screen.queryByRole("button");

    expect(root).not.toBeInTheDocument();
  });

  test("renders its types", async () => {
    const { rerender }  = render(
      <Button
        {...props}
        type="submit"
      />,
    );

    const root = await screen.findByText(props.label);

    expect(root).toHaveAttribute("type", "submit");
    expect(root).not.toHaveAttribute("type", "button");

    rerender(
      <Button
        {...props}
        type="button"
      />,
    );

    expect(root).toHaveAttribute("type", "button");
    expect(root).not.toHaveAttribute("type", "submit");
  });

  test("is clickable", async () => {
    const handleClick = mock(() => undefined);
    const user = userEvent.setup();

    render(
      <Button
        {...props}
        onClick={handleClick}
      />,
    );

    const root = await screen.findByText(props.label);

    await user.click(root);

    expect(handleClick).toHaveBeenCalled();
  });
});
