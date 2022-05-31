import { TabView } from "./tab-group";

export default {
  title: "Components/Tab Group",
  component: TabView,
};

export const ActiveTab = () => {
  return <TabView {...{ active: true }}>My Tab</TabView>;
};

export const InactiveTab = () => {
  return <TabView {...{ active: false }}>My Tab</TabView>;
};
