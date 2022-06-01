import React from "react";
import styled from "styled-components";

export interface TabGroupProps {
  active: string;
  children: React.ReactNode;
}

export interface TabGroupViewProps {
  children: React.ReactNode;
}

export interface TabProps {
  value: string;
  children: React.ReactNode;
}

export interface TabViewProps {
  active: boolean;
  children: React.ReactNode;
}

function useTabGroup(
  props: TabGroupProps
): Omit<TabGroupViewProps, "children"> {
  return {};
}

function useTab(props: TabProps): Omit<TabViewProps, "children"> {
  const active = props.value == "test" ? true : false; // TODO grab active tab from context
  return { active };
}

export function TabGroupView(props: TabGroupViewProps) {
  return <div></div>;
}

const TabDiv = styled.div`
  border: 2px solid #000;
  padding: 8px 16px 0px;
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TabLabelP = styled.p<{ active: boolean }>`
  font-size: 20px;
  font-family: sans-serif;
  margin-bottom: 2px;
  padding: 0px 32px 6px;
  width: max-content;
  ${(props) =>
    props.active ? "border-bottom: 2px solid black" : "margin-bottom: 4px"};
`;

export function TabView(props: TabViewProps) {
  return (
    <TabDiv>
      <TabLabelP active={props.active}>{props.children}</TabLabelP>
    </TabDiv>
  );
}

const TabGroup = (props: TabGroupProps) => {
  const viewProps = useTabGroup(props);
  return <TabGroupView {...viewProps}>{props.children}</TabGroupView>;
};

const Tab = (props: TabProps) => {
  const viewProps = useTab(props);
  return <TabView {...viewProps}>{props.children}</TabView>;
};

TabGroup.Tab = Tab;
export default TabGroup;
