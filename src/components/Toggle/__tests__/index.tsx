import { render, screen } from "@testing-library/react";
import React from "react";

import Toggle from "..";

describe("Toggle", () => {
  const props = {
    value: "test",
    options: [{ name: "test", label: "test" }],
  };

  test("Can render", () => {
    render(<Toggle {...props} />);
    expect(screen.getByTestId("toggle-field")).toBeInTheDocument();
  });
});
