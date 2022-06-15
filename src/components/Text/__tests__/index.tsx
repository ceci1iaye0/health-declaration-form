import { render, screen } from "@testing-library/react";
import React from "react";

import Text from "..";

describe("Text", () => {
  const props = { label: "test", endAdornment: "test" } as any;

  test("Can render", () => {
    render(<Text {...props} />);
    expect(screen.getByTestId("text-field")).toBeInTheDocument();
  });
});
