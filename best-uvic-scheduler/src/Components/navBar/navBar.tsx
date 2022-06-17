import TabGroup, { TabView } from "../tab-group/tab-group";

export function NavBar() {
  return (
    <TabView {...{ setCurrentTab: () => console.log("curren tab") }}>
      My Tab
    </TabView>
  );
}
export default NavBar;
