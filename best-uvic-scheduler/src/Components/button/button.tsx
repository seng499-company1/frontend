import React from "react";
import styled from "styled-components";
import '../../index.css';

const ButtonTheme = {
  Primary: {
    default: "var(--primary)",
    hover: "var(--primary-700)",
    textcolor: "#FEFEFE"
  },
  Secondary: {
    default: "var(--grey-100)",
    hover: "var(--grey-200)",
    textcolor: "#005791"
  },
  Cancel: {
    default: "var(--danger-700)",
    hover: "var(--danger-900)",
    textcolor: "#FEFEFE"
  }
};

export interface CustomButtonProps {
  customClickEvent: any;
  Theme: ButtonTheme;
  Disabled? : boolean;
  children: React.ReactNode;
}

//
const CustomButton = styled.button`
  background-color: ${(props) => ButtonTheme[props.Theme].default};
  color: ${(props) => ButtonTheme[props.Theme].textcolor};
  cursor: pointer;
  box-shadow: 0px 2px 2px lightgray;
  border: 2px solid ${(props) => ButtonTheme[props.Theme].default};
  border-radius: 7px;
  padding: 5px 15px;
  &:hover {
    background-color: ${(props) => props.Disabled ? ButtonTheme[props.Theme].default : ButtonTheme[props.Theme].hover};
    border: 2px solid ${(props) => props.Disabled ? ButtonTheme[props.Theme].default : ButtonTheme[props.Theme].hover};
  }
  ${({ Disabled }) => Disabled && `
    cursor: default;
    opacity: 0.5;
  `}
`;


CustomButton.defaultProps = {
  Theme: "Primary",
  Disabled: false
};

export function CustomButtonView(props: CustomButtonProps) {
  return (
      <CustomButton Theme={props.Theme} Disabled={props.Disabled} onClick={props.customClickEvent}>{props.children}</CustomButton>
  );
}

export default CustomButtonView;
