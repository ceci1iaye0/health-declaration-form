import Action from "../ActionHelper";

describe("Action Helpers", () => {
  const action = new Action("GET_DATA");
  const payload = 10;

  it("should create action with payload", () => {
    expect(action.ACTION).toEqual("GET_DATA");
    expect(action.action(10)).toEqual({ type: "GET_DATA", payload });
  });

  it("should throw an error if action initialized without type", () => {
    expect(() => new Action()).toThrow(
      new Error("Type parameter is mandatory")
    );
  });
});
