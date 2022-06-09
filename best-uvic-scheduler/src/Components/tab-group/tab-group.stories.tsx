import TabGroup, { TabView } from "./tab-group";

export default {
  title: "Components/Tab Group",
  component: TabView,
};

export const ActiveTab = () => {
  return (
    <TabView
      {...{ active: true, setCurrentTab: () => console.log("curren tab") }}
    >
      My Tab
    </TabView>
  );
};

export const InactiveTab = () => {
  return (
    <TabView
      {...{ active: false, setCurrentTab: () => console.log("curren tab") }}
    >
      My Tab
    </TabView>
  );
};

export const Functional = () => {
  return (
    <TabGroup>
      <TabGroup.Tab tabId="1">Tab1</TabGroup.Tab>
      <TabGroup.Tab tabId="2">Tab2</TabGroup.Tab>
    </TabGroup>
  );
};

export const FunctionalWithInitialId = () => {
  return (
    <TabGroup initialTabId="1">
      <TabGroup.Tab tabId="1">Tab1</TabGroup.Tab>
      <TabGroup.Tab tabId="2">Tab2</TabGroup.Tab>
    </TabGroup>
  );
};
