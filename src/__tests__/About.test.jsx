import { render, screen } from "@testing-library/react";
import About from "../components/About";

test("uses the default logo image and accessible alt text when no image prop is passed", () => {
  render(<About about="A blog about learning React" />);

  const logo = screen.getByAltText("blog logo");

  expect(logo).toBeInTheDocument();
  expect(logo).toHaveAttribute("src", "https://via.placeholder.com/215");
  expect(screen.getByText("A blog about learning React")).toBeInTheDocument();
  expect(logo.closest("aside")).toBeInTheDocument();
});

test("uses the passed image prop instead of the fallback", () => {
  render(<About image="https://example.com/logo.png" about="A blog about learning React" />);

  expect(screen.getByAltText("blog logo")).toHaveAttribute("src", "https://example.com/logo.png");
});
