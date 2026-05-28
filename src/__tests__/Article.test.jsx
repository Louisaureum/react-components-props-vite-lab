import { render, screen } from "@testing-library/react";
import Article from "../components/Article";

test("renders the article content and falls back to the default date", () => {
  render(<Article title="Components 101" preview="Setting up the building blocks of your site" minutes={7} />);

  expect(screen.getByRole("heading", { level: 3, name: "Components 101" })).toBeInTheDocument();
  expect(screen.getByText("Setting up the building blocks of your site")).toBeInTheDocument();

  const timestamp = screen.getByText((content, element) => element.tagName.toLowerCase() === "small");

  expect(timestamp).toHaveTextContent("☕️☕️ 7 min read");
  expect(timestamp).toHaveTextContent("January 1, 1970");
});

test("shows the correct emoji count for longer reading times", () => {
  render(<Article title="React Data Flow" preview="Passing props is never passé" date="December 11, 2020" minutes={47} />);

  const timestamp = screen.getByText((content, element) => element.tagName.toLowerCase() === "small");

  expect(timestamp).toHaveTextContent("🍱🍱🍱🍱🍱 47 min read");
  expect(timestamp).toHaveTextContent("December 11, 2020");
});
