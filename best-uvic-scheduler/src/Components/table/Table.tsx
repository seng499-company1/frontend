import { number } from "prop-types";
import React, { useState } from "react";
import styled from "styled-components";
import { Body, Header } from "./Row";
import "../../index.css";
// The table subcomponent is responsible for:

// Overall table sizing
// Border of the table styling
// Row layout

//NOTE: THIS MAY NOT BE THE BEST WAY TO PASS IN THE DATA?
type TableData = {
  header: Array<string>;
  body: Array<Array<string>>;
};

// const [rowsData, setRowsData] = useState([]);

// const addTableRows = () => {
//   const rowsInput = {
//     fullName: "",
//     emailAddress: "",
//     salary: "",
//   };
//   setRowsData([...rowsData, rowsInput]);
// };

// const deleteTableRows = (index) => {
//   const rows = [...rowsData];
//   rows.splice(index, 1);
//   setRowsData(rows);
// };

// const handleChange = (index, evnt) => {
//   const { name, value } = evnt.target;
//   const rowsInput = [...rowsData];
//   rowsInput[index][name] = value;
//   setRowsData(rowsInput);
// };

export interface TableProps {
  data: TableData;
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
    <TableDiv>
      <Header label={props.data.header}></Header>
      <Body body={props.data.body}></Body>
    </TableDiv>
  );
}
