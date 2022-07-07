import React from "react";
import styled from "styled-components";
import { DefaultShadow } from "../../GlobalStyles.tsx";
import "../../index.css";

const ButtonTheme = {
  Primary: {
    default: "var(--primary)",
    hover: "var(--primary-700)",
    textcolor: "var(--grey-50)",
  },
  Secondary: {
    default: "var(--grey-50)",
    hover: "var(--grey-50)",
    textcolor: "var(--primary)",
  },
  Cancel: {
    default: "var(--danger-700)",
    hover: "var(--danger-900)",
    textcolor: "var(--grey-50)",
  },
};

export interface CustomButtonProps {
  customClickEvent: any;
  Theme: ButtonTheme;
  Disabled?: boolean;
  children: React.ReactNode;
}

//
const CustomButton = styled.button`
  background-color: ${(props) =>
    props.Theme == "Secondary" ? "#fff" : ButtonTheme[props.Theme].default};
  color: ${(props) => ButtonTheme[props.Theme].textcolor};
  cursor: pointer;
  ${DefaultShadow}
  border: 2px solid ${(props) => ButtonTheme[props.Theme].default};
  border-radius: 4px;
  padding: var(--space-x-small) var(--space-large);
  &:hover {
    background-color: ${(props) =>
      props.Disabled
        ? ButtonTheme[props.Theme].default
        : ButtonTheme[props.Theme].hover};
    border: 2px solid
      ${(props) =>
        props.Disabled
          ? ButtonTheme[props.Theme].default
          : ButtonTheme[props.Theme].hover};
  }
  ${({ Disabled }) =>
    Disabled &&
    `
    cursor: default;
    opacity: 0.5;
  `}
`;

CustomButton.defaultProps = {
  Theme: "Primary",
  Disabled: false,
};

export function CustomButtonView(props: CustomButtonProps) {
  return (
    <CustomButton
      Theme={props.Theme}
      Disabled={props.Disabled}
      onClick={props.customClickEvent}
    >
      {props.children}
    </CustomButton>
  );
}

export default CustomButtonView;
