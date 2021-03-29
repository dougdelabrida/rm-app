import { useEffect, useState } from "react";
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
  render,
}: DataViewProps<T>) {
  const [page, setPage] = useState(0);
  const [pages, setPages] = useState<T[][]>([[]]);
  const [items, setItems] = useState<T[]>(pages[page]);

  const hasMore = total > data.length || pages.length - 1 > page;

  useEffect(() => {
    setPages(getPagesFrom(data, limit));
  }, [data, limit]);

  useEffect(() => {
    setItems((items) => [...items, ...pages[page]]);
  }, [page, pages]);

  const loadNextPage = () => {
    setPage((page) => page + 1);
  };

  return (
    <div>
      {items.map((item) => (
        <div key={item.id}>{render(item)}</div>
      ))}
      {hasMore && <button onClick={loadNextPage}>Load more</button>}
    </div>
  );
}
