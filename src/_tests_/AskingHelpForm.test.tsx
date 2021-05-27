import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import AskingHelpForm from "../routes/askinghelpform/AskingHelpForm";

it("renders a submit button", () => {
  render(<AskingHelpForm onSubmit={() => {}} />);
  expect(screen.getByTestId("submitButton")).toBeInstanceOf(HTMLButtonElement);
});

describe("Test if submit is called", () => {
  it("Submit the form if every fields are empty", async () => {
    const mockSubmit = jest.fn();
    render(<AskingHelpForm onSubmit={mockSubmit} />);
    fireEvent.click(screen.getByTestId("submitButton"));
    await waitFor(() => screen.getByTestId("submitButton"));
    expect(mockSubmit).not.toHaveBeenCalled();
  });

  it("Submit the form if every fields are filled", async () => {
    const mockSubmit = jest.fn();
    render(<AskingHelpForm onSubmit={mockSubmit} />);
    fireEvent.change(screen.getByTestId("title-form"), {
      target: { value: "Loulou" },
    });
    fireEvent.click(screen.getByTestId("submitButton"));
    await waitFor(() => screen.getByTestId("submitButton"));
    expect(mockSubmit).toHaveBeenCalledTimes(1);
  });
});
