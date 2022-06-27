import React from "react";
import styled from "styled-components";
import "../../index.css";

export interface AlertProps {
  new_entries: number;
}

const RedBox = styled.div`
  font-size: 0;
  width: 500px;
  border-radius: 10px;
  box-shadow: 1px 1px;
  display: grid;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  background-color: var(--danger-600);
  grid-template-columns: repeat(3, 1fr);
`;

const AlertText = styled.p`
  text-shadow: 0.25px 0.5px black;
  opacity: 1;
  grid-column: 1 / 3;
  color: black;
  font-size: 16px;
  grid-row: 1;
  font-style: bold;
`;

const Message = styled.p`
  color: black;
  grid-column: 2 / 3;
  font-size: 12px;
  font-style: italic;
  font-style: bold;
  grid-row: 1;
`;

export function Alert(props: AlertProps) {
  return (
    <RedBox>
      <AlertText>Alert:&emsp;&emsp;&emsp;</AlertText>
      <Message>
        *You have {props.new_entries} new professor data entries*
      </Message>
    </RedBox>
  );
}

export default Alert;
