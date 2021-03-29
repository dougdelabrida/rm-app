export type ItemView = {
  id: string;
};

export type DataViewProps<T extends ItemView> = {
  data: T[];
  render: (value: T) => JSX.Element;
};

export function DataView<T extends ItemView>({
  data,
  render,
}: DataViewProps<T>) {
  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>{render(item)}</div>
      ))}
    </div>
  );
}
