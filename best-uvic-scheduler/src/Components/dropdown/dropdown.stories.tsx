import Dropdown from "./dropdown";

const items = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const handleChange = (event) => {};

export default {
  title: "Components/Checkbox Group",
  component: Dropdown,
};

export const DropdownActive = () => {
  return (
    <Dropdown {...{ dropdownItems: items, handleChange: handleChange }}>
      X
    </Dropdown>
  );
};
