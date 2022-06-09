import React from "react";
import styled from "styled-components";

// Generating valid table cells from passed in children including their styling.
// We will need to map through the children passed to the row subcomponent to accomplish this.
// Organizing the cells within a row

export interface RowPropsHeader {
  label: Array<string>;
}

export interface RowPropsBody {
  body: Array<string>;
}

const HeaderDiv = styled.thead`
  border: 2px solid #000;
  width: 100%;
`;

const BodyDiv = styled.tbody`
  border: 2px solid #000;
  text-align: center;
  width: 100%;
`;

export function Header(props: RowPropsHeader) {
  return (
    <HeaderDiv>
      <tr>
        <th scope="col">{props.label[0]}</th>
        <th scope="col">{props.label[1]}</th>
        <th scope="col">{props.label[2]}</th>
        <th scope="col">{props.label[3]}</th>
      </tr>
    </HeaderDiv>
  );
}

export function Body(props: RowPropsBody) {
  return (
    <BodyDiv>
      <tr>
        <td scope="col">{props.body[0]}</td>
        <td scope="col">{props.body[1]}</td>
        <td scope="col">{props.body[2]}</td>
        <td scope="col">{props.body[3]}</td>
      </tr>
    </BodyDiv>
  );
}
