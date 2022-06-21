import TabGroup, { TabView } from "../tab-group/tab-group.tsx";
import { useNavigate } from "react-router-dom";
import { navigate } from "@storybook/addon-links";

export function NavBar() {
  const navigate = useNavigate();
  return (
    <TabGroup initialTabId="1">
      <TabGroup.Tab size="medium" tabId="1" onClick={() => navigate(`../../`)}>
        Landing Page
      </TabGroup.Tab>

      <TabGroup.Tab size="medium" tabId="2">
        Edit System
      </TabGroup.Tab>
      <TabGroup.Tab size="medium" tabId="3">
        Edit Professor Data
      </TabGroup.Tab>

      <TabGroup.Tab size="medium" tabId="4">
        Generate Schedule
      </TabGroup.Tab>
    </TabGroup>
  );
}
export default NavBar;
