import React from "react";
import styled from "styled-components";
import "../../index.css";

export interface AlertProps {
  new_entries: number;
}

const RedBox = styled.div`
  display: grid;
  height: 48px;
  background-color: var(--danger-700);
  border-style: solid;
  opacity: 0.75;
  grid-template-columns: repeat(3, 1fr);
  box-shadow: 0.5px 1px;
`;

const AlertText = styled.p`
  text-shadow: 0.25px 0.5px black;
  display: flex;
  opacity: 1;
  font-weight: bold;
  grid-column: 1 / 3;
  color: black;
  font-size: 24px;
  grid-row: 1;
  font-style: bold;
  padding: 0px 0px 0px 48px;
`;

const Message = styled.p`
  color: black;
  grid-column: 2 / 3;
  text-align: center;
  font-size: 16px;
  font-style: italic;
  grid-row: 1;
  padding: 14px 0px 0px 0px;
`;

export function Alert(props: AlertProps) {
  return (
    <RedBox>
      <AlertText>Alert:</AlertText>
      <Message>
        *You have {props.new_entries} new professor data entries*
      </Message>
    </RedBox>
  );
}

export default Alert;
