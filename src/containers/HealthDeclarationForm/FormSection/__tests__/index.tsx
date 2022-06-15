import { render, screen } from "@testing-library/react";
import React from "react";

import FormSection from "..";

afterEach(() => jest.clearAllMocks());

jest.mock("../useCustomMethods", () => () => ({
  handleText: jest.fn(),
  handleToggle: jest.fn(),
  handleSubmit: jest.fn(),
  isFormInvalid: jest.fn(),
}));

describe("FormSection", () => {
  test("Can render FormSection", () => {
    render(<FormSection />);
    expect(screen.getByTestId("submit-btn")).toBeInTheDocument();
  });
});
