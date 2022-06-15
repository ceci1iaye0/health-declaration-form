import { render, screen } from "@testing-library/react";
import React from "react";
import * as reactRedux from "react-redux";

import { containerId } from "../../../store/HealthDeclaration/reducer";
import HealthDeclarationForm from "..";

afterEach(() => jest.clearAllMocks());

jest.mock("../FormSection", () => () => <div />);
jest.mock("../../../components/Error", () => () => <div data-testid="error" />);

describe("HealthDeclarationForm", () => {
  let selector;

  beforeEach(() => {
    selector =
      (values: {
        isSumbitHealthDeclarationLoading: boolean;
        submitHealthDeclarationError: string;
      }) =>
      (
        state: (arg0: {
          HealthDeclaration: {
            isSumbitHealthDeclarationLoading: boolean;
            submitHealthDeclarationError: string;
          };
        }) => any
      ) =>
        state({ [containerId]: values });

    jest.spyOn(reactRedux, "useSelector").mockImplementation(
      selector({
        isSumbitHealthDeclarationLoading: false,
        submitHealthDeclarationError: "",
      })
    );
  });

  afterEach(() => jest.clearAllMocks());

  test("Can render", () => {
    render(<HealthDeclarationForm />);
    expect(screen.getByTestId("health-declaration-form")).toBeInTheDocument();
  });

  test("Can render error", () => {
    jest.spyOn(reactRedux, "useSelector").mockImplementation(
      selector({
        isSumbitHealthDeclarationLoading: false,
        submitHealthDeclarationError: "error msg",
      })
    );

    render(<HealthDeclarationForm />);
    expect(screen.getByTestId("error")).toBeInTheDocument();
    expect(
      screen.queryByTestId("health-declaration-form")
    ).not.toBeInTheDocument();
  });
});
