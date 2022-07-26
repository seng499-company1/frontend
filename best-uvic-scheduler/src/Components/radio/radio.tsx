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

type radioItem = {
  value: string;
  label: string;
};

export interface RadioProps {
  label: radioItem[];
  handleChange: any;
  isChecked: boolean;
  value: string;
}

export const preferenceLabel = {
  WILLING: "Willing",
  UNWILLING: "Not Willing",
  VERY_WILLING: "Very Willing",
  WITH_EFFORT: "With Effort",
  ABLE: "Able",
  NO: "N/A",
};

function Radio(props: RadioProps) {
  return (
    <label>
      <input
        type="radio"
        checked={props.isChecked}
        onChange={props.handleChange}
      />
      {preferenceLabel[props.value]}
    </label>
  );
}

export default Radio;
