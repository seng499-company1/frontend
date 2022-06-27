import React from "react";
import styled from "styled-components";
import '../../index.css';

export interface TextInputProps {
  children: React.ReactNode;
  placeholder: String;
}

const TextInput = styled.input`
  margin: 0;
  padding: 5px;
  border-radius: 16px;
  border: 1px solid #000000;
`;

export function TextInputView(props: TextInputProps) {
  return (
    <TextInput placeholder={props.placeholder} type="text">
    {props.children}
    </TextInput>
  );
}

export default TextInputView;
