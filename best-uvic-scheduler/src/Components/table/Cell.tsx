import React from "react";
import styled from "styled-components";
import { CheckboxView } from "../Checkbox/checkbox";

export interface CellProps {
  firstName: string;
  lastName: string;
  faculty: string;
  availible: Array<string>;
  children: React.ReactNode;
}

const EditDiv = styled.td`
  text-align: "left";
  font-size: 12px;
`;

export function Cell(props: CellProps) {
  return (
    <tr>
      <td colspan="4">
        <div>^</div>
        <table>
          <tr>
            <EditDiv>First Name</EditDiv>
            <EditDiv>Last Name</EditDiv>
            <EditDiv>Faculty</EditDiv>
          </tr>
          <tr>
            <EditDiv>
              <input></input>
            </EditDiv>
            <EditDiv>
              <input></input>
            </EditDiv>
            <EditDiv>
              <input></input>
            </EditDiv>
          </tr>
        </table>
        <p></p>
      </td>
    </tr>
  );
}
