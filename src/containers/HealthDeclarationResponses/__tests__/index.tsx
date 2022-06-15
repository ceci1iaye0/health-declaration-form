import { render, screen } from "@testing-library/react";
import React from "react";
import * as reactRedux from "react-redux";

import { TFormState } from "../../../constants/types";
import { containerId } from "../../../store/HealthDeclaration/reducer";
import HealthDeclarationResponses from "..";

afterEach(() => jest.clearAllMocks());

jest.mock("../../../components/Error", () => () => <div data-testid="error" />);
jest.mock("../Table", () => () => <div data-testid="responses-table" />);
jest.mock("../useCustomEffects", () => () => jest.fn());

describe("HealthDeclarationResponses", () => {
  let selector;

  beforeEach(() => {
    selector =
      (values: {
        healthDeclarationsData: TFormState[];
        isGetHealthDeclarationsLoading: boolean;
        getHealthDeclarationsLoadingError: string;
      }) =>
      (
        state: (arg0: {
          HealthDeclaration: {
            healthDeclarationsData: TFormState[];
            isGetHealthDeclarationsLoading: boolean;
            getHealthDeclarationsLoadingError: string;
          };
        }) => any
      ) =>
        state({ [containerId]: values });

    jest.spyOn(reactRedux, "useSelector").mockImplementation(
      selector({
        healthDeclarationsData: [],
        isGetHealthDeclarationsLoading: false,
        getHealthDeclarationsLoadingError: "",
      })
    );
  });

  afterEach(() => jest.clearAllMocks());

  test("Can render", () => {
    render(<HealthDeclarationResponses />);
    expect(screen.getByTestId("responses-table")).toBeInTheDocument();
  });

  test("Can render loader", () => {
    jest.spyOn(reactRedux, "useSelector").mockImplementation(
      selector({
        healthDeclarationsData: [],
        isGetHealthDeclarationsLoading: true,
        getHealthDeclarationsLoadingError: "",
      })
    );

    render(<HealthDeclarationResponses />);
    expect(screen.getByTestId("loader")).toBeInTheDocument();
    expect(screen.queryByTestId("responses-table")).not.toBeInTheDocument();
  });

  test("Can render error", () => {
    jest.spyOn(reactRedux, "useSelector").mockImplementation(
      selector({
        healthDeclarationsData: [],
        isGetHealthDeclarationsLoading: false,
        getHealthDeclarationsLoadingError: "error msg",
      })
    );

    render(<HealthDeclarationResponses />);
    expect(screen.getByTestId("error")).toBeInTheDocument();
    expect(screen.queryByTestId("responses-table")).not.toBeInTheDocument();
  });
});
