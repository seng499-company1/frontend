import React from "react";
import styled from "styled-components";
import { DefaultShadow } from "../../GlobalStyles.tsx";
import "../../index.css";

export interface AlertProps {
  new_entries: number;
}

const RedBox = styled.div`
  font-size: 0;
  width: 500px;
  border-radius: 4px;
  border: 1px solid var(--danger-400);
  ${DefaultShadow}
  display: grid;
  align-items: center;
  background-color: var(--danger-50);
  padding: var(--space-small) var(--space-large);
  grid-template-columns: repeat(3, 1fr);
`;

const AlertText = styled.p`
  grid-column: 1;
  color: black;
  font-size: 16px;
  grid-row: 1;
  font-weight: bold;
  margin: 0;
`;

const Message = styled.p`
  color: black;
  grid-column: 2 / -1;
  font-size: var(--font-size-normal);
  grid-row: 1;
  margin: 0;
`;

export function Alert(props: AlertProps) {
  return (
    <RedBox>
      <AlertText>Alert:</AlertText>
      <Message>
        You have {props.new_entries} new professor data entr
        {props.new_entries === 1 ? "y" : "ies"}
      </Message>
    </RedBox>
  );
}

export default Alert;
