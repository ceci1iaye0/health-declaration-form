import { render, screen } from "@testing-library/react";
import React from "react";

import {
  CloseContactToggle,
  NameText,
  SymptomsToggle,
  TemperatureText,
} from "..";

describe("InputFields", () => {
  afterEach(() => jest.clearAllMocks());

  test("Can render NameText", () => {
    const props = { value: "test", handleText: jest.fn() };
    render(<NameText {...props} />);
    expect(screen.getByTestId("name-input")).toBeInTheDocument();
  });

  test("Can render TemperatureText", () => {
    const props = { value: "test", handleText: jest.fn() };
    render(<TemperatureText {...props} />);
    expect(screen.getByTestId("temperature-input")).toBeInTheDocument();
  });

  test("Can render SymptomsToggle", () => {
    const props = { value: false, handleToggle: jest.fn() };
    render(<SymptomsToggle {...props} />);
    expect(screen.getByTestId("symptoms-input")).toBeInTheDocument();
  });

  test("Can render CloseContactToggle", () => {
    const props = { value: false, handleToggle: jest.fn() };
    render(<CloseContactToggle {...props} />);
    expect(screen.getByTestId("close-contact-input")).toBeInTheDocument();
  });
});
