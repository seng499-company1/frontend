import TabGroup, { TabView } from "./tab-group";

export default {
  title: "Components/Tab Group",
  component: TabView,
};

export const SingleTab = () => {
  return (
    <TabView
      {...{setCurrentTab: () => console.log("curren tab") }}
    >
      My Tab
    </TabView>
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
