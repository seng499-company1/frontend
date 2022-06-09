import { number } from "prop-types";
import React, { useState } from "react";
import styled from "styled-components";
import { Body, Header } from "./Row";
import { Cell } from "./Cell";
import "../../index.css";
import { scryRenderedComponentsWithType } from "react-dom/test-utils";
// The table subcomponent is responsible for:

// Overall table sizing
// Border of the table styling
// Row layout

//NOTE: THIS MAY NOT BE THE BEST WAY TO PASS IN THE DATA?
type TableData = {
  header: Array<string>;
  body: Array<Array<string>>;
};

export interface CellProps {
  firstName: string;
  lastName: string;
  faculty: string;
  availible: Array<string>;
}

export interface TableProps {
  data: TableData;
  num_rows: number;
  cell_props: CellProps;
  children: React.ReactNode;
}

const TableDiv = styled.table`
  border: 2px solid #000;
  border-collapse: collapse;
  width: 100%;
`;

export function TableView(props: TableProps) {
  return (
    <TableDiv>
      <Header label={props.data.header}></Header>
      <Cell
        firstName={props.cell_props.firstName}
        lastName={props.cell_props.lastName}
        faculty={props.cell_props.faculty}
        availible={props.cell_props.availible}
      ></Cell>
      {props.data.body.map((item, idx) => (
        <Body body={item}></Body>
      ))}
    </TableDiv>
  );
}
