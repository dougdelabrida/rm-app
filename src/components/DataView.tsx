import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { getPagesFrom } from "../utils";
import Button from "./Button";

export type ItemView = {
  id: string;
};

export type DataViewProps<T extends ItemView> = {
  data: T[];
  limit: number;
  total: number;
  wrapper?: React.FunctionComponent;
  onLoadMore: () => void;
  render: (value: T) => JSX.Element;
};

const Footer = styled.div`
  display: flex;
  justify-content: center;
  padding: 16px;
`;

export function DataView<T extends ItemView>({
  data,
  limit,
  total,
  wrapper: Wrapper,
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

  const content = (
    <>
      {items.map((item) => (
        <div key={item.id}>{render(item)}</div>
      ))}
    </>
  );

  return (
    <>
      {Wrapper && <Wrapper>{content}</Wrapper>}
      {!Wrapper && content}
      <Footer>
        {hasMoreItems && <Button onClick={loadNextPage}>Load more</Button>}
      </Footer>
    </>
  );
}
