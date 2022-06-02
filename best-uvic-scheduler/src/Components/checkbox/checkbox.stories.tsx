import { CheckboxView } from "./checkbox";

export default {
  title: "Components/Checkbox Group",
  component: CheckboxView,
};

export const ActiveCheckbox = () => {
  return <CheckboxView {...{ checked: true }}>X</CheckboxView>;
};

export const InactiveCheckbox = () => {
  return <CheckboxView {...{ checked: false }}>X</CheckboxView>;
};
