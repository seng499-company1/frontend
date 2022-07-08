import React, { useContext, useState } from "react";
import styled from "styled-components";

export interface TabGroupViewProps {
  children: React.ReactNode;
}

type SizeType = "small" | "medium" | "large";
export interface TabProps {
  tabId: string;
  children: React.ReactNode;
  size: SizeType;
  onClick?: (arg?: any) => void;
}

export interface TabViewProps {
  children: React.ReactNode;
  setCurrentTab: () => void;
  onClick?: (arg?: any) => void;
  active: boolean;
  size: SizeType;
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

  // const offset =
  //   React.Children.toArray(props.children).findIndex((child: any) => {
  //     return child?.props?.tabId == activeTab;
  //   }) || 0;

  return { activeTab, setActiveTab };
}

function useTab(props: TabProps): Omit<TabViewProps, "children"> {
  const { activeTab, setActiveTab } = useContext(TabContext);

  const setCurrentTab = () => setActiveTab(props.tabId);

  const active = props.tabId === activeTab;

  return { active, setCurrentTab, onClick: props.onClick, size: props.size };
}

const paddingSize = {
  small: "var(--space-small) var(--space-small)",
  medium: "var(--space-med) var(--space-med)",
  large: "var(--space-large) var(--space-3x-large)",
};

const TabDiv = styled.div<{ active: boolean; size: SizeType }>`
  padding: ${(props) => paddingSize[props.size]};
  min-width: min-content;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: border-color 0.5s linear;
  flex: 1 1 0px;

  ${(props) =>
    props.active
      ? "border-bottom: 2px solid var(--primary);"
      : "margin-bottom: 2px;"}

  &:hover {
    background-color: var(--primary-50);
  }
`;

const fontSize = {
  small: "var(--font-size-normal)",
  medium: "var(--font-size-h3)",
  large: "var(--font-size-h2)",
};

const TabLabelP = styled.p<{ size: SizeType }>`
  font-size: ${(props) => fontSize[props.size]};
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

// const IndicatorContainerDiv = styled.div``;

// const IndicatorDiv = styled.div<{ offset: number }>`
//   width: ${tabWidth}px;
//   border-bottom: 2px solid var(--primary-500);
//   transition: 0.2s ease-in-out;
//   margin-left: ${(props) => props.offset * tabWidth}px;
// `;

export function TabGroupView(props: TabGroupViewProps) {
  return (
    // <IndicatorContainerDiv>
    <GroupContainerDiv>{props.children}</GroupContainerDiv>
    //<IndicatorDiv offset={props.offset} />
    //</IndicatorContainerDiv>
  );
}

export function TabView(props: TabViewProps) {
  return (
    <TabDiv
      active={props.active}
      size={props.size}
      onClick={() => {
        props.setCurrentTab();
        props.onClick && props.onClick();
      }}
    >
      <TabLabelP size={props.size}>{props.children}</TabLabelP>
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
