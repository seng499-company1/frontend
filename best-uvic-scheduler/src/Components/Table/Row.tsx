import { number } from "prop-types";
import React, { useState } from "react";
import styled from "styled-components";

export interface RowProps {
  availible: {
    time: string;
    monday: boolean;
    tuesday: boolean;
    wednesday: boolean;
    thursday: boolean;
    friday: boolean;
  };
}

const RowDiv = styled.td`
  width: 100%;
`;

export function Row(props: RowProps) {
  return (
    <tr>
      <RowDiv>{props.availible.time}</RowDiv>
      <RowDiv>{props.availible.monday}</RowDiv>
      <RowDiv>{props.availible.tuesday}</RowDiv>
      <RowDiv>{props.availible.wednesday}</RowDiv>
      <RowDiv>{props.availible.thursday}</RowDiv>
      <RowDiv>{props.availible.friday}</RowDiv>
    </tr>
  );
}
