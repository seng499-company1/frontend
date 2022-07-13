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

function Radio(props: RadioProps) {
  return (
    <label>
      <input type="radio" checked={props.isChecked} onChange={props.handleChange} />
        {props.value}
    </label>
  );
}

export default Radio;