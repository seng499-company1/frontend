import React from "react";
import styled from "styled-components";
import { DefaultShadow } from "../../GlobalStyles.tsx";
import "../../index.css";

export interface SelectableTableDivProps {
  children: React.ReactNode;
  columns: number;
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
}

const SelectableTableDiv = styled.div<{ columns: number }>`
  height: 100%;
  display: grid;
  grid-template-columns: repeat(${(props) => props.columns}, auto);
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

const SelectableTableIconElementDiv = styled.p`
  padding: 0;
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  cursor: pointer;
`;

const SelectableTableElementClosedDiv = styled.div`
  height: 50px;
  width: 100%;
  display: contents;
`;

const SelectableTableElementOpenedDiv = styled.div`
  height: 250px;
  width: 100%;
  display: contents;
  & p {
    padding: var(--space-small) 0 !important;
  }
`;

export const SelectableTableInputDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-content: center;
  gap: var(--space-2x-large);
  padding: var(--space-small) var(--space-med);
`;

export const SelectableTableCheckboxDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
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
    <SelectableTableElementOpenedDiv {...{ InList: true }}>
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
  return (
    <SelectableTableDiv columns={props.columns}>
      {props.children}
    </SelectableTableDiv>
  );
}

export default SelectableTableDivView;
