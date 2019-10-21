import React from "react";
import "./CheckBox.scss";

const ColorCheckbox = props => {
  return (
    <label className="color-checkbox">
      <input type="checkbox" value={props.color.name}></input>
      <span
        className="color-label"
        style={{ backgroundColor: props.color.value }}
      ></span>
    </label>
  );
};

export { ColorCheckbox };
