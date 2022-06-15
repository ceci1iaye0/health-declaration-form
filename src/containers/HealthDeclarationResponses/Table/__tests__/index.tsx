import { render, screen } from "@testing-library/react";
import React from "react";

import { EFormState } from "../../../../constants";
import Table from "..";

describe("Table", () => {
  const props = {
    data: [
      {
        _id: 1,
        [EFormState.Name]: "test",
        [EFormState.Temperature]: "36.2",
        [EFormState.Symptoms]: false,
        [EFormState.CloseContact]: true,
      },
    ],
  };

  test("Can render", () => {
    render(<Table {...props} />);
    expect(screen.getByTestId("responses-table")).toBeInTheDocument();
  });
});
