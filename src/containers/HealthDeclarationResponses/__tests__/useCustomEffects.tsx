import { renderHook } from "@testing-library/react-hooks";
import * as reactRedux from "react-redux";
import { getHealthDeclarations } from "src/store/HealthDeclaration/reducer";

import useCustomEffects from "../useCustomEffects";

describe("useCustomEffects", () => {
  let dispatch;

  beforeEach(() => {
    dispatch = jest.fn();
    jest.spyOn(reactRedux, "useDispatch").mockReturnValue(dispatch);
  });

  afterEach(() => jest.clearAllMocks());

  test("Should dispatch request to get all health declarations", () => {
    renderHook(() => useCustomEffects());

    expect(dispatch).toHaveBeenCalledWith(getHealthDeclarations.request());
  });
});
