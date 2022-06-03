import React from "react";
import styled from "styled-components";

export interface CheckboxGroupProps {
  checked: string;
  children: React.ReactNode;
}

export interface CheckboxGroupViewProps {
  children: React.ReactNode;
}

export interface CheckboxProps {
  value: string;
  children: React.ReactNode;
}

export interface CheckboxViewProps {
  checked: boolean;
  children: React.ReactNode;
}

function useCheckboxGroup(
  props: CheckboxGroupProps
): Omit<CheckboxGroupViewProps, "children"> {
  return {};
}

function useCheckbox(
  props: CheckboxProps
): Omit<CheckboxViewProps, "children"> {
  const checked = props.value == "test" ? true : false;
  return { checked };
}

export function CheckboxGroupView(props: CheckboxGroupViewProps) {
  return <div></div>;
}

const CheckboxDiv = styled.p<{ checked: boolean }>`
  border: 2px solid #000;
  padding: 10px 10px 10px;
  width: 10px;
  legth: 10px;
  ${(props) =>
    props.checked ? "background-color: grey" : "background-color: white"};
`;

export function CheckboxView(props: CheckboxViewProps) {
  return <CheckboxDiv checked={props.checked}></CheckboxDiv>;
}

const CheckboxGroup = (props: CheckboxGroupProps) => {
  const viewProps = useCheckboxGroup(props);
  return <CheckboxGroupView {...viewProps}>{props.children}</CheckboxGroupView>;
};

const Checkbox = (props: CheckboxProps) => {
  const viewProps = useCheckbox(props);
  return <CheckboxView {...viewProps}>{props.children}</CheckboxView>;
};

CheckboxGroup.Checkbox = Checkbox;
export default CheckboxGroup;
