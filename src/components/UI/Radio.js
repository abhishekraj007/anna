import React from "react";
import "./Radio.scss";

class RadioButton extends React.Component {
  state = {
    size: "6"
  };

  onChange = e => {
    // console.log(e);

    this.setState({
      checked: e.target.value
    });

    // e.target.checked = true;
  };

  render() {
    const { name, size } = this.props;

    return (
      <label className="custom-radio">
        <input
          type="radio"
          name={name}
          value={size.name}
          disabled={size.disabled}
          checked={this.state.size === size.checked ? size.value : "6"}
          onChange={this.onChange.bind(this)}
        ></input>
        <span className="radio-value">{size.value}</span>
      </label>
    );
  }
}

export { RadioButton };
