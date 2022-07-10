import { checkPropTypes } from "prop-types";
import React from "react";
import styled from "styled-components";
import "../../index.css";

const ButtonTheme = {
  Primary: {
    default: "var(--primary)",
    hover: "var(--primary-700)",
    borderColor: "var(--primary)",
    borderHover: "var(--primary-700)",
    textcolor: "var(--grey-50)",
  },
  Secondary: {
    default: "var(--surface)",
    hover: "var(--primary-50)",
    borderColor: "var(--primary)",
    borderHover: "var(--primary-700)",
    textcolor: "var(--primary)",
  },
  Cancel: {
    default: "var(--danger-700)",
    hover: "var(--danger-900)",
    borderColor: "var(--danger-700)",
    borderHover: "var(--danger-900)",
    textcolor: "var(--surface)",
  },
};

type ButtonThemeType = "Primary" | "Secondary" | "Cancel";
export interface CustomButtonProps {
  customClickEvent: any;
  Theme: ButtonThemeType;
  Disabled?: boolean;
  Borderless?: boolean;
  LeftText?: boolean;
  children: React.ReactNode;
}

const CustomButton = styled.button<{
  Theme: ButtonThemeType;
  Disabled?: boolean;
  Borderless?: boolean;
  LeftText?: boolean;
}>`
  background-color: ${(props) =>
    props.Theme == "Secondary" ? "#fff" : ButtonTheme[props.Theme].default};
  color: ${(props) => ButtonTheme[props.Theme].textcolor};
  cursor: pointer;
  ${(props) =>
    props.Borderless
      ? "border: none;"
      : `border: 1px solid ${ButtonTheme[props.Theme].borderColor};`}
  border-radius: 4px;
  padding: var(--space-x-small) var(--space-large);
  height: fit-content;

  ${(props) => props.LeftText && "text-align: left;"}

  &:hover {
    background-color: ${(props) =>
      props.Disabled
        ? ButtonTheme[props.Theme].default
        : ButtonTheme[props.Theme].hover};
    ${(props) =>
      props.Borderless
        ? "border: none;"
        : `border: 1px solid
      ${(props) =>
        props.Disabled
          ? ButtonTheme[props.Theme].borderColor
          : ButtonTheme[props.Theme].borderHover};`}
  }
  ${(props) => props.Disabled && "cursor: default; opacity: 0.5;"}
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
      LeftText={props.LeftText}
      Borderless={props.Borderless}
      onClick={props.customClickEvent}
    >
      {props.children}
    </CustomButton>
  );
}

export default CustomButtonView;
