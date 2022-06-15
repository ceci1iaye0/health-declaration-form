import { render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";

import Router from "..";

afterEach(() => jest.clearAllMocks());

jest.mock("../../../containers/HealthDeclarationForm", () => () => (
  <div data-testid="form" />
));

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({ pathname: "/" }),
}));

describe("Router", () => {
  test("Should redirect to health declaration form", () => {
    render(
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    );
    expect(screen.getByTestId("form")).toBeInTheDocument();
  });
});
