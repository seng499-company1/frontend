import { number } from "prop-types";
import React, { useState } from "react";
import styled from "styled-components";
import { Body, Header } from "./Row";
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

export interface TableProps {
  data: TableData;
  num_rows: number;
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
      {props.data.body.map((item, idx) => (
        <Body body={item}></Body>
      ))}
    </TableDiv>
  );
}
