import {
  isJsonContentType,
  modifyHeaders,
  updateBodyOrHeader,
} from "../apiClientHelper";

describe("isJsonContentType", () => {
  it("Should be true for json content types", () => {
    expect(isJsonContentType("application/hal+json")).toBeTruthy();
    expect(isJsonContentType("application/json")).toBeTruthy();
  });

  it("Should be false for not json content types", () => {
    expect(isJsonContentType("text")).toBeFalsy();
  });
});

describe("updateBodyOrHeader", () => {
  it("Should return json string body", () => {
    const body = { test: "test" };
    const headers = new Headers({
      "Content-Type": "application/json",
    });
    expect(updateBodyOrHeader(body, headers)).toEqual(JSON.stringify(body));
  });

  it("Should return string body when body is a string", () => {
    const body = JSON.stringify({ test: "test" });
    const headers = new Headers({
      "Content-Type": "application/json",
    });
    expect(updateBodyOrHeader(body, headers)).toEqual(body);
  });

  it("Should return body when body is a formData", () => {
    const body = new FormData();
    const headers = new Headers({
      "Content-Type": "application/json",
    });
    expect(updateBodyOrHeader(body, headers)).toEqual(body);
  });
});

describe("modifyHeaders", () => {
  it("Should return empty options", () => {
    const headers = new Headers({
      "Content-Type": "application/json",
    });
    const options = undefined;
    expect(modifyHeaders(options, headers)).toEqual({});
  });

  it("Should update headers", () => {
    const headers = new Headers({
      "Content-Type": "application/json",
    });
    const options = {
      headers: {
        Authorization: "test",
      },
    };
    const result = new Headers({
      "Content-Type": "application/json",
      Authorization: "test",
    });
    expect(modifyHeaders(options, headers)).toEqual({});
    expect(headers).toEqual(result);
  });
});
