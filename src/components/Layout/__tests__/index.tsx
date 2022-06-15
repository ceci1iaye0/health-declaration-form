import { render, screen } from "@testing-library/react";
import React from "react";

import Layout from "..";

describe("Layout", () => {
  test("Can render", () => {
    render(
      <Layout>
        <div data-testid="child" />
      </Layout>
    );
    expect(screen.getByTestId("layout")).toBeInTheDocument();
    expect(screen.getByTestId("child")).toBeInTheDocument();
  });
});
