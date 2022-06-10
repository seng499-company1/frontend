import { number } from "prop-types";
import React, { useState } from "react";
import styled from "styled-components";

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



export interface TableProps {
  data: TableData;
  
}

const TableDiv = styled.table`
  border: 2px solid #000;
  border-collapse: collapse;
  width: 100%;
`;

export function TableView(props: TableProps) {
  return (
    <TableDiv>
      <thead>
        <tr>
        <th scope="col"> </th>

        <th scope="col">{props.data.header[0]}</th>
        <th scope="col">{props.data.header[1]}</th>
        <th scope="col">{props.data.header[2]}</th>
        <th scope="col">{props.data.header[3]}</th>
        </tr>
        <tr></tr>
      </thead>

    </TableDiv>
  );
}
