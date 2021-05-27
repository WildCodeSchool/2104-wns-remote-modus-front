import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const welcomeMessage = screen.getByText(/Welcome/i);
  expect(welcomeMessage).toBeInTheDocument();
});
