import TabGroup, { TabView } from "../tab-group/tab-group.tsx";
import { useNavigate } from "react-router-dom";
import { navigate } from "@storybook/addon-links";
import React from "react";

export interface NavBarProps {
  initialTabId: string;
  children: React.ReactNode;
}

export function NavBar(props: NavBarProps) {
  const navigate = useNavigate();
  return (
    <TabGroup initialTabId={props.initialTabId}>
      <TabGroup.Tab size="medium" tabId="1" onClick={() => navigate(`/Admin`)}>
        Home
      </TabGroup.Tab>

      <TabGroup.Tab
        size="medium"
        tabId="2"
        onClick={() => navigate(`/Admin/Courses`)}
      >
        Courses
      </TabGroup.Tab>
      <TabGroup.Tab
        size="medium"
        tabId="3"
        onClick={() => navigate(`/Admin/Professors`)}>
        Professors
      </TabGroup.Tab>

      <TabGroup.Tab
        size="medium"
        tabId="4"
        onClick={() => navigate(`/Admin/Schedule`)}
      >
        Generate Schedule
      </TabGroup.Tab>
    </TabGroup>
  );
}
export default NavBar;
