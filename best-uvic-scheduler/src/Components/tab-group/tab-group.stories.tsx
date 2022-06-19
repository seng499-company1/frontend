import TabGroup, { TabView } from "./tab-group";

export default {
  title: "Components/Tab Group",
  component: TabView,
};

export const Active = () => {
  return (
    <TabView
      {...{
        setCurrentTab: () => console.log("curren tab"),
        active: true,
        size: "medium",
      }}
    >
      My Tab
    </TabView>
  );
};

export const Inactive = () => {
  return (
    <TabView
      {...{
        setCurrentTab: () => console.log("curren tab"),
        active: false,
        size: "medium",
      }}
    >
      My Tab
    </TabView>
  );
};

export const FunctionalWithInitialId = () => {
  return (
    <TabGroup initialTabId="1">
      <TabGroup.Tab size="medium" tabId="1">
        Tab1
      </TabGroup.Tab>
      <TabGroup.Tab size="medium" tabId="2">
        Tab2
      </TabGroup.Tab>
    </TabGroup>
  );
};
