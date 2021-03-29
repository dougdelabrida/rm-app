import { render } from "@testing-library/react";
import Button from "../Button";

describe("<Button />", () => {
  test("should render without errors", () => {
    const { getByText } = render(<Button>Button text</Button>);
    expect(getByText(/Button text/i)).toBeInTheDocument();
  });
});
