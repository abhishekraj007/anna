import React from "react";
import "./Radio.scss";

const RadioButton = props => {
  return (
    <label className="custom-radio">
      <input
        type="radio"
        name={props.name}
        value={props.size.name}
        disabled={props.size.disabled}
        checked={props.size.checked}
      ></input>
      <span className="radio-value">{props.size.value}</span>
    </label>
  );
};

export { RadioButton };
