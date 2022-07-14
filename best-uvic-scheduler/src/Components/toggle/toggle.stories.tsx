import { useState } from "react";
import { ToggleView } from "./toggle.tsx";

export default {
  title: "Components/Toggle",
  component: ToggleView,
};

export const Inactive = () => {
  return (
    <ToggleView
      {...{ active: false, onClick: () => console.log("clicked"), id: "1" }}
    >
      Day
    </ToggleView>
  );
};

export const Active = () => {
  return (
    <ToggleView
      {...{ active: true, onClick: () => console.log("clicked"), id: "1" }}
    >
      Day
    </ToggleView>
  );
};

export const Functional = () => {
  const [active, setActive] = useState(false);
  return (
    <div style={{ display: "flex" }}>
      <ToggleView {...{ active, onClick: () => setActive(!active), id: "1" }}>
        Day
      </ToggleView>
      <ToggleView {...{ active, onClick: () => setActive(!active), id: "1" }}>
        Day
      </ToggleView>
      <ToggleView {...{ active, onClick: () => setActive(!active), id: "1" }}>
        Day
      </ToggleView>
    </div>
  );
};
