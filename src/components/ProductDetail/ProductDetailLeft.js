import React, { Component } from "react";
import { ColorCheckbox } from "../UI/Checkbox";
import { RadioButton } from "../UI/Radio";
import { Tabs, Tab } from "../UI/Tabs";

export default class ProductDetailLeft extends Component {
  state = {
    colors: [
      {
        name: "white-gray",
        value: "#f7f7f7"
      },
      {
        name: "blue",
        value: "#072348"
      },
      {
        name: "black",
        value: "#000000"
      },
      {
        name: "red",
        value: "#b5222e"
      },
      {
        name: "yellow",
        value: "#ffcf60"
      },
      {
        name: "grey",
        value: "#4e4e4e"
      },
      {
        name: "green",
        value: "#129f7d"
      },
      {
        name: "grey-light",
        value: "#c69f97"
      },
      {
        name: "black-light",
        value: "#333333"
      },
      {
        name: "blue-light",
        value: "#215297"
      },
      {
        name: "black-dark",
        value: "#555555"
      }
    ],
    sizes: [
      {
        name: "5",
        value: "5"
      },
      {
        name: "5.5",
        value: "5.5"
      },
      {
        name: "6",
        value: "6",
        disabled: true
      },
      {
        name: "6.5",
        value: "6.5"
      },
      {
        name: "7",
        value: "7"
      },
      {
        name: "7.5",
        value: "7.5",
        disabled: true
      },
      {
        name: "8",
        value: "8",
        checked: true
      },
      {
        name: "8.5",
        value: "8.5"
      },
      {
        name: "9",
        value: "9.5"
      },
      {
        name: "10",
        value: "10"
      },
      {
        name: "10.5",
        value: "10.5"
      },
      {
        name: "11",
        value: "11"
      },
      {
        name: "11.5",
        value: "11.5"
      },
      {
        name: "12",
        value: "12"
      },
      {
        name: "12.5",
        value: "12.5"
      },
      {
        name: "13",
        value: "13"
      }
    ]
  };

  render() {
    const { colors, sizes } = this.state;
    // console.log(colors);

    return (
      <div>
        <div className="left-info">
          <Tabs defaultIndex={0}>
            <Tab label="Men">
              <p className="text-uppercase text-xs">Select Color</p>
              {colors.map(color => {
                return <ColorCheckbox key={color.value} color={color} />;
              })}

              <p className="text-uppercase text-xs">Select Size</p>
              {sizes.map(size => {
                return <RadioButton key={size.value} name="size" size={size} />;
              })}
            </Tab>
            <Tab label="Women">
              <p className="text-uppercase text-xs">Select Color</p>
              {colors.map(color => {
                return <ColorCheckbox key={color.value} color={color} />;
              })}

              <p className="text-uppercase text-xs">Select Size</p>
              {sizes.map(size => {
                return <RadioButton key={size.value} name="size" size={size} />;
              })}
            </Tab>
          </Tabs>
        </div>
      </div>
    );
  }
}
