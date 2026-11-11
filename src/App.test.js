import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

describe("library application", () => {
  test("renders the home page welcome message", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );

    expect(
      screen.getByRole("heading", { name: /hello learners/i })
    ).toBeInTheDocument();
  });

  test("renders the primary navigation links", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByRole("link", { name: "Home" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Books" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Orders" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "New Genre" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Publish" })).toBeInTheDocument();
  });
});
