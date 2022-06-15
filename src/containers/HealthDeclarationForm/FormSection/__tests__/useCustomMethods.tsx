import { act, renderHook } from "@testing-library/react-hooks";
import * as reactRedux from "react-redux";

import { EFormState } from "../../../../constants";
import { submitHealthDeclaration } from "../../../../store/HealthDeclaration/reducer";
import useCustomMethods from "../useCustomMethods";

afterEach(() => jest.clearAllMocks());

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("useCustomMethods", () => {
  let dispatch;

  const props = {
    formState: {
      [EFormState.Name]: "",
      [EFormState.Temperature]: "",
      [EFormState.Symptoms]: false,
      [EFormState.CloseContact]: false,
    },
    setFormState: jest.fn(),
  };

  beforeEach(() => {
    dispatch = jest.fn();
    jest.spyOn(reactRedux, "useDispatch").mockReturnValue(dispatch);
  });

  afterEach(() => jest.clearAllMocks());

  test("Should handle text input onChange", () => {
    const event = { target: { value: "test" } } as any;
    const { result } = renderHook(() => useCustomMethods({ ...props }));

    act(() => {
      result.current.handleText(EFormState.Name)(event);
    });

    expect(props.setFormState).toHaveBeenCalledWith({
      ...props.formState,
      [EFormState.Name]: event.target.value,
    });
  });

  test("Should handle toggle input onChange", () => {
    const event = {} as any;
    const value = [true];
    const { result } = renderHook(() => useCustomMethods({ ...props }));

    act(() => {
      result.current.handleToggle(EFormState.Symptoms)(event, value);
    });

    expect(props.setFormState).toHaveBeenCalledWith({
      ...props.formState,
      [EFormState.Symptoms]: value[0],
    });
  });

  test("Should handle form submit", () => {
    const { result } = renderHook(() => useCustomMethods({ ...props }));

    act(() => {
      result.current.handleSubmit();
    });

    expect(dispatch).toHaveBeenCalledWith(
      submitHealthDeclaration.request({
        formState: props.formState,
        navigate: mockNavigate,
      })
    );
  });

  test("Should return true if form is invalid", () => {
    let returnedResult;
    const { result } = renderHook(() => useCustomMethods({ ...props }));

    act(() => {
      returnedResult = result.current.isFormInvalid();
    });

    expect(returnedResult).toEqual(true);
  });

  test("Should return false if form is valid", () => {
    let returnedResult;
    const customProps = {
      ...props,
      formState: {
        [EFormState.Name]: "test",
        [EFormState.Temperature]: "36.5",
        [EFormState.Symptoms]: false,
        [EFormState.CloseContact]: false,
      },
    };
    const { result } = renderHook(() => useCustomMethods({ ...customProps }));

    act(() => {
      returnedResult = result.current.isFormInvalid();
    });
    expect(returnedResult).toEqual(false);
  });
});
