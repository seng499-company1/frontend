import React from "react";
import styled from "styled-components";
import '../../index.css';


export interface SearchBarProps {
  children: React.ReactNode;
}

export interface SearchBarDivProps {
  children: React.ReactNode;
}

export interface SearchBarInputProps {

}

const SearchBarDiv = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  justifyContent: start;
  background-color: #D9D9D9;
  border: 2px solid #000000;
  border-radius: 8px;
`;

const SearchBarInput = styled.input`
  padding: 0.5em;
  margin: 0 0.5em 0 0.5em;
  width: 50%;
  background-color: #D9D9D9;
  color: #000000;
  font-weight: bold;
  border: 2px solid #C9C9C9;
  border-radius: 4px;
`;

export function SearchBarInputView(props: SearchBarInputProps) {
  return (
      <SearchBarInput placeholder="Search" ></SearchBarInput>
  );
}

export function SearchBarDivView(props: SearchBarDivProps) {
  return (
    <SearchBarDiv >{props.children}</SearchBarDiv>
  );
}

export function SearchBarView(props: SearchBarProps) {
  return (
    <SearchBarDivView>
      <SearchBarInputView/>
    </SearchBarDivView>
  );
}
