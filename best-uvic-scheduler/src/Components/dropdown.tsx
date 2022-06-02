import React, { useState } from "react";
import Select from "react-select";

//handles selected value of dropdown
const handleChange = (e) => {
  console.log(e.label);
};

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

function Dropdown(props) {
  return (
    <Select
      options={props.items}
      onChange={handleChange}
      styles={colourStyles}
    />
  );
}

export default Dropdown;
