import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";

import Error from "..";

afterEach(() => jest.clearAllMocks());

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Error", () => {
  const props = { msg: "test" };

  test("Can render", () => {
    render(<Error {...props} />);
    expect(screen.getByTestId("error")).toBeInTheDocument();
  });

  test("Can refresh page", () => {
    render(<Error {...props} />);
    fireEvent.click(screen.getByTestId("retry-btn"));
    expect(mockNavigate).toHaveBeenCalled();
  });
});
