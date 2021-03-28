import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the app", () => {
  render(<App />);
  const linkElement = screen.getByText(/Get Schwifty/i);
  expect(linkElement).toBeInTheDocument();
});
