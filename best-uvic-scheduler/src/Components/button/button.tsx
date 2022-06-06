import React from "react";
import styled from "styled-components";
import '../../index.css';

const ButtonTheme = {
  Primary: {
    default: "#5383F9",
    hover: "#3C72F7",
    textcolor: "#FEFEFE"
  },
  Secondary: {
    default: "#B8B5B4",
    hover: "#A09E9E",
    textcolor: "#000000"
  },
  Cancel: {
    default: "#F95353",
    hover: "#F73333",
    textcolor: "#FEFEFE"
  }
};

export interface CustomButtonProps {
  Theme: ButtonTheme;
  Disabled? : boolean;
  children: React.ReactNode;
}

const CustomButton = styled.button`
  background-color: ${(props) => ButtonTheme[props.Theme].default};
  color: ${(props) => ButtonTheme[props.Theme].textcolor};
  box-shadow: 0px 2px 2px lightgray;
  cursor: pointer;
  border-radius: 7px;
  padding: 5px 15px;
  &:hover {
    background-color: ${(props) => props.Disabled ? ButtonTheme[props.Theme].default : ButtonTheme[props.Theme].hover};
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
      <CustomButton Theme={props.Theme} Disabled={props.Disabled}>{props.children}</CustomButton>
  );
}
