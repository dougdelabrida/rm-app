import { render } from "@testing-library/react";
import { DataView, ItemView } from "../DataView";

const data: ({ name: string } & ItemView)[] = [
  { id: "test", name: "justa test" },
  { id: "test1", name: "justa test1" },
  { id: "test2", name: "justa test2" },
  { id: "test3", name: "justa test3" },
  { id: "test4", name: "justa test4" },
  { id: "test5", name: "justa test5" },
];

describe("<DataView />", () => {
  test("should render without errors", () => {
    const data: ({ name: string } & ItemView)[] = [
      { id: "test", name: "justa test" },
    ];
    const { getByText } = render(
      <DataView
        data={data}
        limit={1}
        total={1}
        onLoadMore={() => null}
        render={(value) => <div>{value.name}</div>}
      />
    );

    const element = getByText(/justa test/i);

    expect(element).toBeInTheDocument();
  });
  test("should have a load more at bottom when total is higher than the displayed data", () => {
    const { getByText } = render(
      <DataView
        data={data}
        limit={1}
        total={data.length}
        onLoadMore={() => null}
        render={(value) => <div>{value.name}</div>}
      />
    );

    const loadMoreEl = getByText(/load more/i);
    expect(loadMoreEl).toBeInTheDocument();
  });
});
