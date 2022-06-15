import healthDeclarationReducer, {
  containerId,
  getHealthDeclarations,
  initialState,
  selector,
  submitHealthDeclaration,
} from "../reducer";

describe("HealthDeclaration reducer", () => {
  it("Should return initial state by default", () => {
    expect(healthDeclarationReducer(undefined, {})).toEqual(initialState);
  });

  it("Should set values for isGetHealthDeclarationsLoading and getHealthDeclarationsLoadingError on getHealthDeclarations.REQUEST", () => {
    const resultState = healthDeclarationReducer(
      {
        isGetHealthDeclarationsLoading: false,
        getHealthDeclarationsLoadingError: "Error",
      } as any,
      getHealthDeclarations.request()
    );

    expect(resultState).toEqual({
      isGetHealthDeclarationsLoading: true,
      getHealthDeclarationsLoadingError: "",
    });
  });

  it("Should set values for healthDeclarationsData and isGetHealthDeclarationsLoading on getHealthDeclarations.SUCCESS", () => {
    const payload = {};
    const resultState = healthDeclarationReducer(
      {
        healthDeclarationsData: [],
        isGetHealthDeclarationsLoading: true,
      } as any,
      getHealthDeclarations.success(payload)
    );

    expect(resultState).toEqual({
      healthDeclarationsData: payload,
      isGetHealthDeclarationsLoading: false,
    });
  });

  it("Should set values for isGetHealthDeclarationsLoading and getHealthDeclarationsLoadingError on getHealthDeclarations.FAILURE", () => {
    const payload = "Error";
    const resultState = healthDeclarationReducer(
      {
        isGetHealthDeclarationsLoading: true,
        getHealthDeclarationsLoadingError: "",
      } as any,
      getHealthDeclarations.failure(payload)
    );

    expect(resultState).toEqual({
      isGetHealthDeclarationsLoading: false,
      getHealthDeclarationsLoadingError: payload,
    });
  });

  it("Should set values for isSumbitHealthDeclarationLoading and submitHealthDeclarationError on submitHealthDeclaration.REQUEST", () => {
    const resultState = healthDeclarationReducer(
      {
        isSumbitHealthDeclarationLoading: false,
        submitHealthDeclarationError: "Error",
      } as any,
      submitHealthDeclaration.request()
    );

    expect(resultState).toEqual({
      isSumbitHealthDeclarationLoading: true,
      submitHealthDeclarationError: "",
    });
  });

  it("Should set values for isSumbitHealthDeclarationLoading on submitHealthDeclaration.SUCCESS", () => {
    const payload = {};
    const resultState = healthDeclarationReducer(
      {
        isSumbitHealthDeclarationLoading: true,
      } as any,
      submitHealthDeclaration.success(payload)
    );

    expect(resultState).toEqual({
      isSumbitHealthDeclarationLoading: false,
    });
  });

  it("Should set values for isSumbitHealthDeclarationLoading and submitHealthDeclarationError on submitHealthDeclaration.FAILURE", () => {
    const payload = "Error";
    const resultState = healthDeclarationReducer(
      {
        isSumbitHealthDeclarationLoading: true,
        submitHealthDeclarationError: "",
      } as any,
      submitHealthDeclaration.failure(payload)
    );

    expect(resultState).toEqual({
      isSumbitHealthDeclarationLoading: false,
      submitHealthDeclarationError: payload,
    });
  });

  it("Selector should return correct result", () => {
    const text = "test";
    const selectedData = selector({ [containerId]: text });

    expect(selectedData).toEqual(text);
  });
});
