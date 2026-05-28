import { render, screen } from "@testing-library/react";
import ArticleList from "../components/ArticleList";

const posts = [
  {
    id: 1,
    title: "Components 101",
    date: "December 15, 2020",
    preview: "Setting up the building blocks of your site",
    minutes: 5,
  },
  {
    id: 2,
    title: "React Data Flow",
    date: "December 11, 2020",
    preview: "Passing props is never passé",
    minutes: 15,
  },
];

test("renders an article for each post in the list", () => {
  const { container } = render(<ArticleList posts={posts} />);

  expect(container.querySelector("main")).toBeInTheDocument();
  expect(screen.getAllByRole("article")).toHaveLength(posts.length);
  expect(screen.getByText("Components 101")).toBeInTheDocument();
  expect(screen.getByText("React Data Flow")).toBeInTheDocument();
});
