import React, { useState } from "react";
import Select from "react-select";

//styling
const colourStyles = {
  control: (styles) => ({ ...styles, backgroundColor: "white" }),
  option: (styles, { isDisabled }) => {
    return {
      ...styles,
      backgroundColor: isDisabled ? "white" : "white",
      color: "#000",
      cursor: isDisabled ? "not-allowed" : "default",
    };
  },
};

type dropdownItem = {
  value: string;
  label: string;
};

export interface DropdownProps {
  dropdownItems: dropdownItem[];
  handleChange: any;
  startingValue: string;
  placeholder?: string;
}

function Dropdown(props: DropdownProps) {
  return (
    <Select
      defaultValue={props.startingValue}
      options={props.dropdownItems}
      placeholder={props?.placeholder}
      onChange={props.handleChange}
      styles={colourStyles}
    />
  );
}

export default Dropdown;
