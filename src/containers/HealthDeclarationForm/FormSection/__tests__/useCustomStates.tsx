import { act, renderHook } from "@testing-library/react-hooks";

import { EFormState } from "../../../../constants";
import useCustomStates from "../useCustomStates";

describe("useCustomStates", () => {
  let result;

  beforeEach(() => {
    result = renderHook(() => useCustomStates()).result;
  });

  it("Should handle formState", () => {
    const value = {
      [EFormState.Name]: "",
      [EFormState.Temperature]: "",
      [EFormState.Symptoms]: undefined as any,
      [EFormState.CloseContact]: undefined as any,
    };
    const newValue = { ...value, name: "test" };

    expect(result.current.formState).toEqual(value);

    act(() => {
      result.current.setFormState(newValue);
    });

    expect(result.current.formState).toEqual(newValue);
  });
});
