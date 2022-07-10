import React from "react";
import styled from "styled-components";
import { DefaultShadow } from "../../GlobalStyles.tsx";
import "../../index.css";

export interface SelectableTableDivProps {
  children: React.ReactNode;
}

export interface SelectableTableHeaderDivProps {
  children: React.ReactNode;
}

export interface SelectableTableLabelDivProps {
  children: React.ReactNode;
}

export interface SelectableTableLabelsProps {
  children: React.ReactNode;
}

export interface SelectableTableIconElementDivProps {
  children: React.ReactNode;
}

export interface SelectableTableElementClosedDivProps {
  children: React.ReactNode;
}

export interface SelectableTableElementOpenedDivProps {
  children: React.ReactNode;

  Type: boolean;
  //zero is for the professor table, 1 is for the course table
}

const SelectableTableDiv = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: repeat(5, auto);
  border: 1px solid var(--primary);
  border-radius: 4px;
  ${DefaultShadow};
  box-sizing: border-box;

  & p {
    padding: var(--space-small) var(--space-med);
    margin: 0;
    text-align: left;
    max-width: max-content;
    min-width: 100%;
  }

  & * {
    box-sizing: border-box;
  }

  & > *:nth-child(2n + 1) p {
    background: var(--primary-50);
  }

  & > *:nth-child(1) p {
    background: var(--primary-400);
    font-weight: 600;
    color: #fff;
    position: sticky;
    top: 0;
  }
`;

const SelectableTableHeaderDiv = styled.div`
  top: 0;
  position: sticky;
  display: contents;
  border: 1px solid #000000;
  border-top-width: ${(props) => (props.InList ? "0" : "1px")};
  border-left-width: ${(props) => (props.InList ? "0" : "1px")};
  border-right-width: ${(props) => (props.InList ? "0" : "1px")};
  border-radius: 8px 8px 0px 0px;
`;

const SelectableTableLabelDiv = styled.div`
  display: contents;
`;

const SelectableTableLabelElementDiv = styled.div`
  margin: 0;
  padding: 0;
  height: 50px;
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const SelectableTableIconElementDiv = styled.div`
  margin-top: 10px;
  padding: 0;
  height: 30px;
  width: 10%;
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: space-around;
  cursor: pointer;
`;

const SelectableTableElementClosedDiv = styled.div`
  height: 50px;
  width: 100%;
  display: contents;
  border: 1px solid #000000;
  border-top-width: ${(props) => (props.InList ? "0" : "1px")};
  border-left-width: ${(props) => (props.InList ? "0" : "1px")};
  border-right-width: ${(props) => (props.InList ? "0" : "1px")};
`;

const SelectableTableElementOpenedDiv = styled.div`
  height: ${(props) => (props.Type ? "250px" : "200px")};
  width: 100%;
  display: contents;
  border: 1px solid #000000;
  border-top-width: ${(props) => (props.InList ? "0" : "1px")};
  border-left-width: ${(props) => (props.InList ? "0" : "1px")};
  border-right-width: ${(props) => (props.InList ? "0" : "1px")};
`;

export const SelectableTableInputDiv = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: space-around;
`;

export const SelectableTableCheckboxDiv = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: space-around;
`;

export const SelectableTableSingleInputDiv = styled.div`
  margin: 0;
  padding: 0;
  width: 15%;
  height: 100px;
  display: flex;
  flex-direction: column;
`;

const SelectableTableLabels = styled.p``;

export function SelectableTableHeaderDivView(
  props: SelectableTableHeaderDivProps
) {
  return (
    <SelectableTableHeaderDiv {...{ InList: true }}>
      {props.children}
    </SelectableTableHeaderDiv>
  );
}

export function SelectableTableElementClosedDivView(
  props: SelectableTableElementClosedDivProps
) {
  return (
    <SelectableTableElementClosedDiv {...{ InList: true }}>
      {props.children}
    </SelectableTableElementClosedDiv>
  );
}

export function SelectableTableElementOpenedDivView(
  props: SelectableTableElementOpenedDivProps
) {
  return (
    <SelectableTableElementOpenedDiv Type={props.Type} {...{ InList: true }}>
      {props.children}
    </SelectableTableElementOpenedDiv>
  );
}

export function SelectableTableLabelDivView(
  props: SelectableTableLabelDivProps
) {
  return <SelectableTableLabelDiv>{props.children}</SelectableTableLabelDiv>;
}

export function SelectableTableIconElementDivView(
  props: SelectableTableIconElementDivProps
) {
  return (
    <SelectableTableIconElementDiv>
      {props.children}
    </SelectableTableIconElementDiv>
  );
}

export function SelectableTableLabelsView(props: SelectableTableLabelsProps) {
  return <SelectableTableLabels>{props.children}</SelectableTableLabels>;
}

export function SelectableTableDivView(props: SelectableTableDivProps) {
  return <SelectableTableDiv>{props.children}</SelectableTableDiv>;
}

export default SelectableTableDivView;
