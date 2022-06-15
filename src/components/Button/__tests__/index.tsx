import { render, screen } from "@testing-library/react";
import React from "react";

import Button from "..";

describe("Button", () => {
  const props = {
    label: "test",
    disabled: jest.fn(),
  };

  afterAll(() => jest.clearAllMocks());

  test("Can render", () => {
    render(<Button {...props} />);
    expect(screen.getByTestId("btn-field")).toBeInTheDocument();
    expect(props.disabled).toHaveBeenCalled();
  });
});
