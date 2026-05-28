import { render, screen } from "@testing-library/react";
import App from "../components/App";

test("renders the correct child components", () => {
  const { container } = render(<App />);

  expect(container.querySelector(".App")).toBeInTheDocument();
  expect(container.querySelector(".App header")).toBeInTheDocument();
  expect(container.querySelector(".App aside")).toBeInTheDocument();
  expect(container.querySelector(".App main")).toBeInTheDocument();

  expect(screen.getByRole("heading", { level: 1, name: "Underreacted" })).toBeInTheDocument();
  expect(screen.getByAltText("blog logo")).toBeInTheDocument();
  expect(screen.getAllByRole("article").length).toBeGreaterThan(0);
});
