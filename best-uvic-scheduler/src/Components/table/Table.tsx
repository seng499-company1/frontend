import { number } from "prop-types";
import React from "react";
import styled from "styled-components";
import { RowView } from "./Row";
import "../../index.css";
// The table subcomponent is responsible for:

// Overall table sizing
// Border of the table styling
// Row layout

const TableThemes = {
  Header: {
    fontSize: 10,
  },
  Body: {
    fontSize: 10,
  },
};

export interface TableProps {
  theme: TableThemes;
  num_rows: number;
  // children: React.ReactNode;
}

const TableDiv = styled.table`
  border: 2px solid #000;
  border-collapse: collapse;
  width: 100%;
`;

// TableDiv.defaultProps = {
//   theme: "Header",
//   num_rows: 3,
// };

export function TableView(props: TableProps) {
  return (
    <TableDiv theme={props.theme} num_rows={props.num_rows}>
      {props.children}
    </TableDiv>
  );
}
