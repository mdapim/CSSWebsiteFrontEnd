import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useState } from "react";
import "@testing-library/jest-dom/extend-expect";
import { LoginPage } from "../LoginPage";
import {
  handleSignInChange,
  signInCredentials,
  setCurrentUserDetails,
} from "../../../App";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import { createMemoryHistory } from "@remix-run/router";
import App from "../../../App";
import { act } from "react-dom/test-utils";
import { waitFor } from "@testing-library/react";

afterEach(() => {
  cleanup();
});

// beforeEach(() => {
//   jest.spyOn(global, "fetch").mockResolvedValue({
//     json: jest
//       .fn()
//       .mockResolvedValue([{ id: 5, type_id: 1, username: "adam" }]),
//   });
// });

describe("test to check components for log in page when loaded", () => {
  test("render login header, input boxes, button and sign up link", () => {
    render(
      <BrowserRouter>
        <LoginPage
          handleSignInChange={handleSignInChange}
          signInCredentials={signInCredentials}
          setCurrentUserDetails={setCurrentUserDetails}
        />
      </BrowserRouter>
    );
    // screen.debug();
    const login_component = screen.getByTestId("login_tag");
    const login_button = screen.getByTestId("login-button");
    const login_header = screen.getByRole("heading", { name: "Login" });
    const email_textbox = screen.getByRole("textbox", {
      name: "Email address Password",
    });
    const password_textbox = screen.getByTitle("login-password-input");
    const email_label = screen.getByLabelText("Email address");
    const password_label = screen.getByLabelText("Password");
    const Sign_up_link = screen.getByRole("link", { name: "Sign up" });

    expect(login_component).toBeInTheDocument();
    expect(login_header).toBeInTheDocument();
    expect(login_component).toHaveTextContent(
      "Please enter your login and password!"
    );
    expect(login_button).toBeInTheDocument();
    expect(email_label).toBeInTheDocument();
    expect(password_label).toBeInTheDocument();
    expect(email_textbox).toBeInTheDocument();
    expect(password_textbox).toBeInTheDocument();
    expect(Sign_up_link).toBeInTheDocument();
  });
});

describe("test to check the user input", () => {
  test("The user is not logged in when a failed request is received", async () => {
    const handleSignInChange = jest.fn();
    const setCurrentUserDetails = jest.fn();
    const signInCredentials = {
      name: "hey123",
      password: "hey",
    };
    render(
      <BrowserRouter>
        <LoginPage
          handleSignInChange={handleSignInChange}
          signInCredentials={signInCredentials}
          setCurrentUserDetails={setCurrentUserDetails}
        />
      </BrowserRouter>
    );

    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve([{ status: 404 }]),
      })
    );

    // screen.debug();
    const login_button = screen.getByTestId("login-button");

    userEvent.click(login_button);

    await waitFor(() => {
      const alertBox = screen.getByTestId("login-alertbox");
      expect(alertBox).toBeInTheDocument();
    });

    expect(
      await screen.findByText(
        "Your login credentials did not work. Please try again"
      )
    ).toBeInTheDocument();
  });
  test("The user is logged in when a success request is received", async () => {
    const handleSignInChange = jest.fn();
    const setCurrentUserDetails = jest.fn();
    const signInCredentials = {
      name: "hey123",
      password: "hey",
    };
    render(
      <BrowserRouter>
        <LoginPage
          handleSignInChange={handleSignInChange}
          signInCredentials={signInCredentials}
          setCurrentUserDetails={setCurrentUserDetails}
        />
      </BrowserRouter>
    );

    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve([{ status: 200 }]),
      })
    );

    const login_button = screen.getByTestId("login-button");

    global.window = { location: { pathname: "/login" } };
    userEvent.click(login_button);
    await waitFor(() => {
      expect(global.window.location.pathname).toBe("/home");
    });
  });
});
afterEach(() => {
  jest.restoreAllMocks();
});
