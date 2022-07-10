import React from "react";
import styled from "styled-components";
import { DefaultShadow } from "../../GlobalStyles.tsx";
import "../../index.css";

export interface AlertProps {
  new_entries: number;
}

const RedBox = styled.div`
  font-size: 0;
  width: 100%;
  border-radius: 4px;
  border: 1px solid var(--danger-400);
  ${DefaultShadow}
  display: flex;
  align-items: center;
  background-color: var(--danger-50);
  padding: var(--space-small) var(--space-large);
  box-sizing: border-box;
`;

const AlertText = styled.p`
  color: var(--font-color);
  font-size: 16px;
  font-weight: 600;
  margin: 0;
  padding-right: var(--space-med);
`;

const Message = styled.p`
  color: black;
  font-size: var(--font-size-normal);
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
