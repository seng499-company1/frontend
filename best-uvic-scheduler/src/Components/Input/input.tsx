import React from "react";
import styled from "styled-components";
import "../../index.css";

export interface TextInputProps {
  children: React.ReactNode;
  placeholder?: String;
  DefaultValue?: String;
  onchange?: any;
}

const TextInput = styled.input`
  margin: 0;
  border-radius: 4px;
  padding: var(--space-x-small) var(--space-small);
  border: 1px solid var(--border);
  font-size: var(--font-size-normal);
`;

export function TextInputView(props: TextInputProps) {
  return (
    <TextInput
      placeholder={props.placeholder}
      value={props.DefaultValue}
      onChange={props.onChange}
      type="text"
    >
      {props.children}
    </TextInput>
  );
}

export default TextInputView;
