import { TableView } from "./Table";
import React from "react";

export default {
  title: "Components/Table Group",
  component: TableView,
};

export const ActiveTable = () => {
  return <TableView {...{ theme: "Header", num_rows: 3 }}>Test</TableView>;
};
