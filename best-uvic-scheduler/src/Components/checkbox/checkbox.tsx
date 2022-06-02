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

const CheckboxDiv = styled.div`
  border: 2px solid #000;
  padding: 2px 2px 2px;
  width: 60px;
  legth: 60px
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CheckboxLabelP = styled.p<{ checked: boolean }>`
  font-size: 36px;
  font-family: sans-serif;
  margin-bottom: 2px;
  margin-top: 2px;
  padding: 8px 8px 8px;
  text-align: center;
  align-items: center;
  justify-content: center;
  ${(props) => (props.checked ? "color: black" : "color: white")};
`;

export function CheckboxView(props: CheckboxViewProps) {
  return (
    <CheckboxDiv>
      <CheckboxLabelP checked={props.checked}>{props.children}</CheckboxLabelP>
    </CheckboxDiv>
  );
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
