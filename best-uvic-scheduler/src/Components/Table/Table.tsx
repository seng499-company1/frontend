import { number } from "prop-types";
import React, { useState } from "react";
import { Row } from "./Row";
import styled from "styled-components";

import "../../index.css";
// The table subcomponent is responsible for:

// Overall table sizing
// Border of the table styling
// Row layout

// //NOTE: THIS MAY NOT BE THE BEST WAY TO PASS IN THE DATA?
// type TableData = {
//   header: Array<string>;
//   availible: Array<{
//     time: string
//     monday: boolean
//     tuesday: boolean
//     wednesday: boolean
//     thursday: boolean
//     friday: boolean
//   }>;
// };

export interface TableProps {
  header: Array<string>;
  availible: [
    {
      time: string;
      monday: boolean;
      tuesday: boolean;
      wednesday: boolean;
      thursday: boolean;
      friday: boolean;
    }
  ];
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

          <th scope="col">{props.header[0]}</th>
          <th scope="col">{props.header[1]}</th>
          <th scope="col">{props.header[2]}</th>
          <th scope="col">{props.header[3]}</th>
        </tr>

        <tr>
          {props.availible.map((item, idx) => (
            <Row availible={props.availible[idx]}></Row>
          ))}
        </tr>
      </thead>
    </TableDiv>
  );
}
