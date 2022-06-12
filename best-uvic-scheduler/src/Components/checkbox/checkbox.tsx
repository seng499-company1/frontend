import React, { useState } from "react";
import styled from "styled-components";

export interface CheckboxGroupProps {
  checked: boolean;
  children: React.ReactNode;
}

export interface CheckboxGroupViewProps {
  children: React.ReactNode;
}

export interface CheckboxProps {
  onClick?: () => void;
  checked: boolean;
}

export interface CheckboxViewProps {
  onClick?: () => void;
  checked: boolean;
  setChecked: React.Dispatch<React.SetStateAction<boolean>>;
}

function useCheckboxGroup(
  props: CheckboxGroupProps
): Omit<CheckboxGroupViewProps, "children"> {
  return {};
}

function useCheckbox(
  props: CheckboxProps
): Omit<CheckboxViewProps, "children"> {
  const [checked, setChecked] = useState(props.checked);
  return { onClick: props.onClick, setChecked, checked };
}

export function CheckboxGroupView(props: CheckboxGroupViewProps) {
  return <div></div>;
}

const CheckboxDiv = styled.p<{ checked: boolean }>`
  border: 2px solid #000;
  padding: 10px 10px 10px;
  width: 10px;
  length: 10px;
  ${(props) =>
    props.checked ? "background-color: grey" : "background-color: white"};
`;

export function CheckboxView(props: CheckboxViewProps) {
  return (
    <CheckboxDiv
      onClick={() => {
        props.setChecked(!props.checked);
        props?.onClick();
      }}
      checked={props.checked}
    ></CheckboxDiv>
  );
}

const CheckboxGroup = (props: CheckboxGroupProps) => {
  const viewProps = useCheckboxGroup(props);
  return <CheckboxGroupView {...viewProps}>{props.children}</CheckboxGroupView>;
};

const Checkbox = (props: CheckboxProps) => {
  const viewProps = useCheckbox(props);
  return <CheckboxView {...viewProps}></CheckboxView>;
};

CheckboxGroup.Checkbox = Checkbox;
export default CheckboxGroup;
