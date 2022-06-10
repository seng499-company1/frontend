import { number } from "prop-types";
import React, { useState } from "react";
import { Row } from "./Row";
import { CheckboxView } from "../checkbox/checkbox";
import styled from "styled-components";

import "../../index.css";
// The table subcomponent is responsible for:

// Overall table sizing
// Border of the table styling
// Row layout

export interface TableProps {
  header: Array<string>;
  availible: [
    {
      time: string;
      day: {
        monday: boolean;
        tuesday: boolean;
        wednesday: boolean;
        thursday: boolean;
        friday: boolean;
      };
    }
  ];
}

const TableDiv = styled.table`
  border: 2px solid #000;
  border-collapse: collapse;
  table-layout: fixed;
  width: 100%;
`;

const AvDiv = styled.td`
  border: 2px solid #000;
  width: 100%;
  margin: auto scope= "col";
`;

const AvText = styled.td`
  border: 2px solid #000;
  width: 100%;
  margin: auto scope= "col";
  text-align: center;
`;

export function TableView(props: TableProps) {
  return (
    <TableDiv>
      <tr>
        <th scope="col"> </th>

        <th scope="col">{props.header[0]}</th>
        <th scope="col">{props.header[1]}</th>
        <th scope="col">{props.header[2]}</th>
        <th scope="col">{props.header[3]}</th>
        <th scope="col">{props.header[4]}</th>
      </tr>

      <tr>
        <AvText>Availible</AvText>
        <AvDiv>
          <CheckboxView checked={false}></CheckboxView>
        </AvDiv>
        <AvDiv>
          <CheckboxView checked={false}></CheckboxView>
        </AvDiv>
        <AvDiv>
          <CheckboxView checked={false}></CheckboxView>
        </AvDiv>
        <AvDiv>
          <CheckboxView checked={false}></CheckboxView>
        </AvDiv>
        <AvDiv>
          <CheckboxView checked={false}></CheckboxView>
        </AvDiv>
      </tr>
      {props.availible.map((item, idx) => (
        <Row availible={props.availible[idx]}></Row>
      ))}
    </TableDiv>
  );
}
