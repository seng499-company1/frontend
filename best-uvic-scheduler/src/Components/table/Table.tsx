import { number } from "prop-types";
import React from "react";
import styled from "styled-components";
import { Body, Header } from "./Row";
import "../../index.css";
// The table subcomponent is responsible for:

// Overall table sizing
// Border of the table styling
// Row layout

const TableThemes = {
  Header: {
    fontSize: 16,
  },
  Body: {
    fontSize: 10,
  },
};

export interface TableProps {
  theme: TableThemes;
  num_rows: number;
  label: Array<string>;
  children: React.ReactNode;
}

const TableDiv = styled.table`
  border: 2px solid #000;
  border-collapse: collapse;
  width: 100%;
`;

export function TableView(props: TableProps) {
  return (
    <TableDiv theme={props.theme}>
      <Header label={props.label}></Header>
      <Body label={props.label}></Body>
    </TableDiv>
  );
}
