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
  header: ["First Name", "Last Name", "Faculty", "Terms Availible"],
  body: [
    ["bill", "bird", "data", "hello"],
    ["Rich", "Little", "Seng", "Fall"],
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
