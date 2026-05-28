import { render, screen } from "@testing-library/react";
import Header from "../components/Header";

test("renders the blog name inside a header", () => {
  render(<Header name="Underreacted" />);

  const heading = screen.getByRole("heading", { level: 1, name: "Underreacted" });

  expect(heading).toBeInTheDocument();
  expect(heading.closest("header")).toBeInTheDocument();
});
