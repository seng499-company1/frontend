import { TableView } from "./Table";

export default {
  title: "Components/Table Group",
  component: TableView,
};

export const ActiveTable = () => {
  return <TableView {...{ theme: "Header", num_rows: 3 }}></TableView>;
};
