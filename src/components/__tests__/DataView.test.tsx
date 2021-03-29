import { render } from "@testing-library/react";
import { DataView, ItemView } from "../DataView";

describe("<DataView />", () => {
  test("should render without errors", () => {
    const data: ({ name: string } & ItemView)[] = [
      { id: "test", name: "justa test" },
    ];
    const { getByText } = render(
      <DataView data={data} render={(value) => <div>{value.name}</div>} />
    );

    const t = getByText(/justa test/i);

    expect(t).toBeInTheDocument();
  });
});
