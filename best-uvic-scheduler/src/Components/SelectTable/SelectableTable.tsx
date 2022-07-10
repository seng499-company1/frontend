import React from "react";
import styled from "styled-components";
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
  margin: 0;
  padding: 0;
  height: 350px;
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: start;
  background-color: var(--grey-100);
  border: 1px solid #000000;
  border-radius: 8px;
  box-shadow: 45px 45px 100px -80px;
`;

const SelectableTableHeaderDiv = styled.div`
  margin: 0;
  padding: 0;
  top: 0;
  position: sticky;
  height: 50px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: var(--grey-200);
  font-weight: 750;
  border: 1px solid #000000;
  border-top-width: ${(props) => (props.InList ? "0" : "1px")};
  border-left-width: ${(props) => (props.InList ? "0" : "1px")};
  border-right-width: ${(props) => (props.InList ? "0" : "1px")};
  border-radius: 8px 8px 0px 0px;
`;

const SelectableTableLabelDiv = styled.div`
  margin: 0;
  padding: 0;
  height: 50px;
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
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
  margin: 0;
  padding: 0;
  height: 50px;
  width: 100%;
  display: flex;
  flex-direction: row;
  background-color: var(--grey-50);
  border: 1px solid #000000;
  border-top-width: ${(props) => (props.InList ? "0" : "1px")};
  border-left-width: ${(props) => (props.InList ? "0" : "1px")};
  border-right-width: ${(props) => (props.InList ? "0" : "1px")};
`;

const SelectableTableElementOpenedDiv = styled.div`
  margin: 0;
  padding: 0;
  height: ${(props) => (props.Type ? "250px" : "200px")};
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: var(--grey-50);
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

const SelectableTableLabels = styled.p`
  width: 20%;
  text-align: center;
`;

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
