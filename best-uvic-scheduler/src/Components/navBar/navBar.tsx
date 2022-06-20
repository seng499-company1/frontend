import TabGroup, { TabView } from "../tab-group/tab-group";
import { useNavigate } from "react-router-dom";

export function NavBar() {
  return (
    <TabGroup initialTabId="1">
      <TabGroup.Tab tabId="1">Landing Page</TabGroup.Tab>
      <TabGroup.Tab tabId="2">Edit System</TabGroup.Tab>
      <TabGroup.Tab tabId="3">Edit Professor Data</TabGroup.Tab>
      <TabGroup.Tab tabId="4">Generate Schedule</TabGroup.Tab>
    </TabGroup>
  );
}
export default NavBar;
