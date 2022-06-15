import { render, screen } from "@testing-library/react";
import React from "react";

import Loader from "..";

describe("Loader", () => {
  const props = { visible: true };

  test("Can render", () => {
    render(<Loader {...props} />);
    expect(screen.getByTestId("loader")).toBeInTheDocument();
  });
});
