import { number } from "prop-types";
import React from "react";
import styled from "styled-components";
import { rowView } from "./row";
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

export interface tableStyleProps {
  theme: typeof TableThemes;
  num_rows: number;
  children: React.ReactNode;
}

const tableStyleDiv = styled.div`
  border: 2px solid #000;
  padding: 10px 10px 10px;
  width: 10px;
  legth: 10px;
`;

tableStyleDiv.defaultProps = {
  theme: "Header",
  num_rows: 3,
};

export function tableStyleView(props: tableStyleProps) {
  return (
    <tableStyleDiv
      theme={props.theme}
      num_rows={props.num_rows}
    ></tableStyleDiv>
  );
}
