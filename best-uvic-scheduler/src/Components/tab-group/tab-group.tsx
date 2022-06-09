import React, { useContext, useState } from "react";
import styled from "styled-components";

export interface TabGroupViewProps {
  offset: number;
  children: React.ReactNode;
}

export interface TabProps {
  tabId: string;
  children: React.ReactNode;
}

export interface TabViewProps {
  children: React.ReactNode;
  setCurrentTab: () => void;
}

export interface TabGroupProps {
  initialTabId: string;
  children: React.ReactNode;
}

export interface ContextProps {
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

const TabContext = React.createContext({
  activeTab: "",
  setActiveTab: (_tabId: string) => {},
});

function useTabGroup(
  props: TabGroupProps
): Omit<TabGroupViewProps, "children"> & ContextProps {
  const [activeTab, setActiveTab] = useState(props.initialTabId);

  const offset =
    React.Children.toArray(props.children).findIndex((child: any) => {
      return child?.props?.tabId == activeTab;
    }) || 0;

  return { offset, activeTab, setActiveTab };
}

function useTab(props: TabProps): Omit<TabViewProps, "children"> {
  const { setActiveTab } = useContext(TabContext);

  const setCurrentTab = () => setActiveTab(props.tabId);

  return { setCurrentTab };
}

const tabWidth = 300;

const TabDiv = styled.div`
  padding: 16px 32px;
  min-width: ${tabWidth}px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: border-color 0.5s linear;

  &:hover {
    background-color: var(--primary-50);
  }
`;

const TabLabelP = styled.p`
  font-size: 20px;
  font-family: sans-serif;
  margin-bottom: 2px;
  width: 100%;
  text-align: center;
  color: var(--text);
  margin: 0;
`;

const GroupContainerDiv = styled.div`
  display: flex;
`;

const IndicatorContainerDiv = styled.div``;

const IndicatorDiv = styled.div<{ offset: number }>`
  width: ${tabWidth}px;
  border-bottom: 2px solid var(--primary-500);
  transition: 0.2s ease-in-out;
  margin-left: ${(props) => props.offset * tabWidth}px;
`;

export function TabGroupView(props: TabGroupViewProps) {
  return (
    <IndicatorContainerDiv>
      <GroupContainerDiv>{props.children}</GroupContainerDiv>
      <IndicatorDiv offset={props.offset} />
    </IndicatorContainerDiv>
  );
}

export function TabView(props: TabViewProps) {
  return (
    <TabDiv onClick={() => props.setCurrentTab()}>
      <TabLabelP>{props.children}</TabLabelP>
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
      <TabGroupView offset={viewProps.offset}>{props.children}</TabGroupView>
    </TabContext.Provider>
  );
};

const Tab = (props: TabProps) => {
  const viewProps = useTab(props);
  return <TabView {...viewProps}>{props.children}</TabView>;
};

TabGroup.Tab = Tab;
export default TabGroup;
