import { render } from "@testing-library/react";
import React from "react";

import App from "..";

describe("App", () => {
  test("Can render", () => {
    render(<App />);
  });
});
