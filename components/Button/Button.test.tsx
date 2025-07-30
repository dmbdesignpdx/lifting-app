import {
  test,
  expect,
  mock,
} from "bun:test";
import { screen, render } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";

import { type ButtonProps, Button } from "./index";
import { describe } from "node:test";


const props: ButtonProps = {
  label: "Learn More",
};


describe("Button Component", () => {
  test("renders as expected", () => {
    const { rerender } = render(<Button {...props} />);

    const root = screen.queryByRole("button");

    expect(root).toBeInTheDocument();
    expect(root).toHaveTextContent(props.label);
    expect(root).not.toHaveAttribute("type");

    rerender(
      <Button
        {...props}
        type="button"
      />,
    );

    expect(root).toHaveAttribute("type", "button");
    expect(root).not.toHaveAttribute("type", "submit");

    rerender(<Button label="" />);

    expect(root).not.toBeInTheDocument();
  });


  test("is interactable", async () => {
    const handleClick = mock(() => undefined);
    const user = userEvent.setup();

    render(
      <Button
        {...props}
        onClick={handleClick}
      />,
    );

    const root = screen.getByText(props.label);

    expect(root).not.toBeDisabled();

    await user.click(root);

    expect(handleClick).toHaveBeenCalled();
  });

  test("is not interactable while disabled", async () => {
    const handleClick = mock(() => undefined);
    const user = userEvent.setup();

    render(
      <Button
        {...props}
        onClick={handleClick}
        disabled={true}
      />,
    );

    const root = screen.getByText(props.label);

    expect(root).toBeDisabled();

    await user.click(root);

    expect(handleClick).not.toHaveBeenCalled();
  });
});
