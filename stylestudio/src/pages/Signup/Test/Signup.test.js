import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useState } from "react";
import "@testing-library/jest-dom/extend-expect";
import Signup from "../Signup";
import { BrowserRouter, Router } from "react-router-dom";
import "./matchMedia.mock";
import { act } from "react-dom/test-utils";
import { waitFor } from "@testing-library/react";
import { createMemoryHistory } from "@remix-run/router";

afterEach(() => {
  cleanup();
});

describe("test to check components for sign up page when loaded", () => {
  test("render 2 input boxes and a button for sign up", () => {
    render(
      <BrowserRouter>
        <Signup />
      </BrowserRouter>
    );

    const sign_up_component = screen.getByTestId("sign_up_tag");
    const submit_button = screen.getByRole("button");
    const email_textbox = screen.getByRole("textbox", { name: "Email" });
    const password_textbox = screen.getByTitle("password_input");
    const email_label = screen.getByLabelText("Email");
    const password_label = screen.getByLabelText("Password");

    expect(sign_up_component).toBeInTheDocument();
    expect(sign_up_component).toHaveTextContent("StyleStudio");
    expect(submit_button).toBeInTheDocument();
    expect(email_label).toBeInTheDocument();
    expect(password_label).toBeInTheDocument();
    expect(email_textbox).toBeInTheDocument();
    expect(password_textbox).toBeInTheDocument();
  });
});

describe("test to check user input on sign up page", () => {
  test("check user is shown an error message when the user is already in the database", async () => {
    const handleSignInChange = jest.fn();
    const signInCredentials = {
      name: "hey123",
      password: "hey",
    };
    render(
      <BrowserRouter>
        <Signup
          handleSignInChange={handleSignInChange}
          signInCredentials={signInCredentials}
        />
      </BrowserRouter>
    );

    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve([{ status: 404 }]),
      })
    );

    const button = screen.getByRole("button");

    userEvent.click(button);

    await waitFor(() => {
      const alertBox = screen.getByTestId("alertbox");
      expect(alertBox).toBeInTheDocument();
    });

    expect(
      await screen.findByText("That username is already taken")
    ).toBeInTheDocument();
  });

  test("user is navigated to log in page on success or button click", async () => {
    const handleSignInChange = jest.fn();
    const signInCredentials = {
      name: "hey",
      password: "hey",
    };
    render(
      <BrowserRouter>
        <Signup
          handleSignInChange={handleSignInChange}
          signInCredentials={signInCredentials}
        />
      </BrowserRouter>
    );

    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve([{ status: 200 }]),
      })
    );

    const button2 = screen.getByRole("button");

    userEvent.click(button2);

    const history = createMemoryHistory({ initialEntries: ["/sign-up"] });

    expect(history.location.pathname).toBe("/sign-up");
    global.window = { location: { pathname: "/sign-up" } };
    userEvent.click(button2);
    await waitFor(() => {
      expect(global.window.location.pathname).toBe("/login");
    });
  });
});
