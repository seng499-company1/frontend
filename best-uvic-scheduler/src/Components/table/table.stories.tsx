import { TableView } from "./Table";
import React from "react";

export default {
  title: "Components/Table Group",
  component: TableView,
};

type TableData = {
  header: Array<string>;
  body: Array<Array<string>>;
};

const data: TableData = {
  header: ["title", "title2", "title3", "title4"],
  body: [
    ["bill", "bird", "data", "hello"],
    ["one", "two", "three", "four"],
  ],
};

export const ActiveTable = () => {
  return (
    <TableView
      {...{
        data: data,
        num_rows: 3,
      }}
    >
      Test
    </TableView>
  );
};
