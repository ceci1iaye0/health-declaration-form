import { healthDeclaration } from "../api";
import ApiClient from "../ApiClient";

describe("healthDeclaration CRUD", () => {
  it("getAll", async () => {
    jest.spyOn(ApiClient, "get").mockResolvedValueOnce("test");
    const res = await healthDeclaration.getAll();
    expect(res).toEqual("test");
  });

  it("post", async () => {
    jest.spyOn(ApiClient, "post").mockResolvedValueOnce("test");
    const res = await healthDeclaration.post({ test: "test" });
    expect(res).toEqual("test");
  });
});
