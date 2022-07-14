import React from "react";
import styled from "styled-components";
import "../../index.css";
import { BiSearchAlt2 } from "react-icons/bi";

export interface SearchBarProps {
  InList: boolean;
  children: React.ReactNode;
}

export interface SearchBarDivProps {
  InList: boolean;
  children: React.ReactNode;
}

export interface SearchBarInputProps {}

const SearchBarDiv = styled.div`
  margin: 0;
  padding: 0;
  height: 30px;
  width: 100%;
  display: flex;
  align-items: center;
  justifycontent: start;
  background-color: var(--primary-100);
  border: 2px solid #000000;
  border-top-width: ${(props) => (props.InList ? "0" : "2px")};
  border-left-width: ${(props) => (props.InList ? "0" : "2px")};
  border-right-width: ${(props) => (props.InList ? "0" : "2px")};
  border-radius: ${(props) => (props.InList ? "6px" : "8px")};
`;

const SearchBarInput = styled.input`
  padding: 0.5em;
  margin: 0 0.2em 0 0.2em;
  width: 100%;
  background-color: var(--primary-50);
  color: #000000;
  font-weight: bold;
  border: 2px solid var(--primary-400);
  border-top-width: 0;
  border-bottom-width: 0;
  border-radius: 4px;
`;

SearchBarDiv.defaultProps = {
  InList: false,
};

export function SearchBarInputView(props: SearchBarInputProps) {
  return <SearchBarInput placeholder="Search"></SearchBarInput>;
}

export function SearchBarDivView(props: SearchBarDivProps) {
  return <SearchBarDiv InList={props.InList}>{props.children}</SearchBarDiv>;
}

export function SearchBarView(props: SearchBarProps) {
  return (
    <SearchBarDivView InList={props.InList}>
      <SearchBarInputView>
        <BiSearchAlt2 style={{ height: 30, width: 30 }} />
      </SearchBarInputView>
    </SearchBarDivView>
  );
}

export default SearchBarView;
