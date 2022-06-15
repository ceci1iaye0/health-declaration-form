import { TypographyVariant } from "@mui/material";
import { render, screen } from "@testing-library/react";
import React from "react";

import Label from "..";

describe("Label", () => {
  const props = {
    label: "test",
    variant: "h1" as TypographyVariant,
  };

  test("Can render", () => {
    render(<Label {...props} />);
    expect(screen.getByTestId("label-field")).toBeInTheDocument();
  });

  test("Can render null", () => {
    const customProps = { ...props, label: undefined };
    render(<Label {...customProps} />);
    expect(screen.queryByTestId("label-field")).not.toBeInTheDocument();
  });
});
