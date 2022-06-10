import { CellProps, TableView } from "./Table";
import React from "react";

export default {
  title: "Components/Table Group",
  component: TableView,
};

type TableData = {
  header: Array<string>;
  body: Array<object>;
};

export interface CellProps {
  firstName: string;
  lastName: string;
  faculty: string;
  availible: Array<string>;
}

const data: TableData = {
  header: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
  body: [
    {
      time: "8:30",
      day: {
        monday: false,
        tuesday: false,
        wednesday: true,
        thursday: false,
        friday: false,
      },
    },
    {
      time: "9:00",
      day: {
        monday: false,
        tuesday: false,
        wednesday: true,
        thursday: false,
        friday: false,
      },
    },
  ],
};

export const ActiveTable = () => {
  return (
    <TableView
      {...{
        availible: data.body,
        header: data.header,
      }}
    ></TableView>
  );
};
