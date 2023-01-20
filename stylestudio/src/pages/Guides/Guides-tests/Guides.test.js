import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { Guides } from "../Guides.js";

test("Guides title loads on screen", () => {
  render(<Guides />);

  const title = screen.getByRole("heading", {
    name: /guides/i,
  });

  const subheading = screen.getByText(
    /here you'll find a list of all the useful guides\. the left panel contains a list of some categories to browse through\./i
  );

  expect(title).toBeInTheDocument();
  expect(subheading).toBeInTheDocument();
});

test("Add new resource button loads on screen if admin logged in", () => {
  render(<Guides />);

  const button = screen.getByRole("button", {
    name: /upload a new resource!/i,
  });

  expect(button).toBeInTheDocument();
});
