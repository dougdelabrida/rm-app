import { useEffect, useRef, useState } from "react";
import { getPagesFrom } from "../utils";

export type ItemView = {
  id: string;
};

export type DataViewProps<T extends ItemView> = {
  data: T[];
  limit: number;
  total: number;
  onLoadMore: () => void;
  render: (value: T) => JSX.Element;
};

export function DataView<T extends ItemView>({
  data,
  limit,
  total,
  onLoadMore,
  render,
}: DataViewProps<T>) {
  const waitingForMore = useRef(false);
  const page = useRef(0);
  const pages = useRef<T[][]>(getPagesFrom(data, limit));
  const [items, setItems] = useState<T[]>(pages.current[page.current]);

  const shouldLoadOutside = total > items.length;
  const shouldLoadInside = pages.current.length - 1 > page.current;
  const hasMoreItems = shouldLoadOutside || shouldLoadInside;

  useEffect(() => {
    if (waitingForMore.current) {
      pages.current = getPagesFrom(data, limit);
      setItems((items) => [...items, ...pages.current[page.current]]);
    }
  }, [data, limit]);

  const loadNextPage = () => {
    page.current = page.current + 1;
    if (!shouldLoadInside && shouldLoadOutside) {
      onLoadMore();
      waitingForMore.current = true;
    } else {
      setItems((items) => [...items, ...pages.current[page.current]]);
    }
  };

  return (
    <div>
      {items.map((item) => (
        <div key={item.id}>{render(item)}</div>
      ))}
      {hasMoreItems && <button onClick={loadNextPage}>Load more</button>}
    </div>
  );
}
