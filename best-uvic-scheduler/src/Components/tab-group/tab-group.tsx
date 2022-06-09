import React, { useContext, useState } from "react";
import styled from "styled-components";

export interface TabGroupViewProps {
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
  children: React.ReactNode;
}

export interface TabProps {
  tabId: string;
  children: React.ReactNode;
}

export interface TabViewProps {
  active: boolean;
  children: React.ReactNode;
  setCurrentTab: () => void;
}

export interface TabGroupProps {
  initialTabId?: string;
  children: React.ReactNode;
}

const TabContext = React.createContext({
  activeTab: "",
  setActiveTab: (_tabId: string) => {},
});

function useTabGroup(
  props: TabGroupProps
): Omit<TabGroupViewProps, "children"> {
  const [activeTab, setActiveTab] = useState(props.initialTabId);
  return { activeTab, setActiveTab };
}

function useTab(props: TabProps): Omit<TabViewProps, "children"> {
  const { activeTab, setActiveTab } = useContext(TabContext);
  const active = props.tabId == activeTab ? true : false;

  const setCurrentTab = () => setActiveTab(props.tabId);

  return { active, setCurrentTab };
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

const GroupContainerDiv = styled.div`
  display: flex;
`;

export function TabGroupView(props: TabGroupProps) {
  return <div>{props.children}</div>;
}

export function TabView(props: TabViewProps) {
  return (
    <TabDiv onClick={() => props.setCurrentTab()}>
      <TabLabelP active={props.active}>{props.children}</TabLabelP>
    </TabDiv>
  );
}

const TabGroup = (props: TabGroupProps) => {
  const viewProps = useTabGroup(props);
  return (
    <TabContext.Provider
      value={{
        activeTab: viewProps.activeTab,
        setActiveTab: viewProps.setActiveTab,
      }}
    >
      <TabGroupView>{props.children}</TabGroupView>
    </TabContext.Provider>
  );
};

const Tab = (props: TabProps) => {
  const viewProps = useTab(props);
  return <TabView {...viewProps}>{props.children}</TabView>;
};

TabGroup.Tab = Tab;
export default TabGroup;
