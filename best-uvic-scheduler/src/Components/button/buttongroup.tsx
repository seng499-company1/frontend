import React from "react";
import styled from "styled-components";
import '../../index.css';

const AmountOfButton = {
  Single: {
    justifyContent: "center"
  },
  Progession: {
    justifyContent: "end"
  },
  Double: {
    justifyContent: "space-between"
  }
};

export interface CustomButtonGroupProps {
  Amount: AmountOfButton;
  children: React.ReactNode;
}

const CustomButtonGroup = styled.div`
  margin: 0;
  padding: 10px;
  display: flex;
  justify-content: ${(props) => AmountOfButton[props.Amount].justifyContent};
`;

export const ButtonDiv = styled.div`
  margin: 0;
  padding: 5px;
`;

CustomButtonGroup.defaultProps = {
  Amount: "Single"
};


export function CustomButtonGroupView(props: CustomButtonGroupProps) {
  return (
    <CustomButtonGroup Amount={props.Amount} >{props.children}</CustomButtonGroup>
  );
}

export default CustomButtonGroupView;
